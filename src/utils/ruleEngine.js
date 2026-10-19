// ruleEngine.js - Advanced Rule-Based AI Engine for Personalized Travel Planning
// Pure deterministic rule-based evaluation without external machine learning dependencies.

import { DESTINATIONS, ACCOMMODATION_TIERS, TRANSPORT_MODES } from "../data/travelKnowledgeBase.js";

/**
 * Normalizes string inputs for robust fuzzy matching.
 */
function normalize(str) {
  return (str || "").toLowerCase().trim();
}

/**
 * Extracts 3-letter month abbreviation from a date string (YYYY-MM-DD or standard date format).
 */
function getMonthAbbreviation(dateStr) {
  if (!dateStr) {
    // Default to current/next month
    const d = new Date();
    return d.toLocaleString("en-US", { month: "short" });
  }
  const parsed = new Date(dateStr);
  if (isNaN(parsed.getTime())) {
    return "Oct";
  }
  return parsed.toLocaleString("en-US", { month: "short" });
}

/**
 * Estimates realistic transportation cost considering origin, destination, and transport mode.
 */
function estimateTransportCost(userInput, dest) {
  const travelers = Number(userInput.travelers) || 1;
  const pref = userInput.transportPref || "train";
  const origin = normalize(userInput.originLocation);

  // International destinations ALWAYS require international flights
  if (!dest.isDomestic) {
    let intlFlightBase = 18000;
    const region = dest.regionType || "";
    if (region.includes("Europe") || region.includes("North America") || region.includes("South America")) {
      intlFlightBase = 45000;
    } else if (region.includes("Oceania") || region.includes("Africa")) {
      intlFlightBase = 38000;
    } else if (region.includes("Middle East") || region.includes("East Asia")) {
      intlFlightBase = 24000;
    } else {
      // Southeast Asia
      intlFlightBase = 15000;
    }
    return intlFlightBase * travelers;
  }

  // Island destinations (Andaman, Lakshadweep) require flights
  if (dest.id === "dest_andaman" || dest.id === "dest_lakshadweep") {
    return 9500 * travelers;
  }

  // Domestic Indian destinations
  const transMeta = TRANSPORT_MODES[pref] || TRANSPORT_MODES.train;
  let baseCost = transMeta.baseCost;

  // Origin proximity adjustments
  const destState = normalize(dest.stateOrRegion);
  const destName = normalize(dest.name);
  if (origin && (destState.includes(origin) || destName.includes(origin))) {
    // Very close / same state
    baseCost = Math.round(baseCost * 0.45);
  }

  return baseCost * travelers;
}

/**
 * Evaluates all destinations using transparent multi-parameter Rule-Based AI logic.
 * Applies scoring across Budget, Interests, Season, Duration, Traveler Type, Origin/Transport,
 * followed by a diversity-aware re-ranking pass.
 */
export function evaluateDestinations(userInput = {}) {
  const {
    budget = 35000,
    durationDays = 4,
    travelers = 2,
    interests = ["Nature", "Culture"],
    accommodationPref = "budget",
    transportPref = "train",
    tripStartDate = "",
    originLocation = "",
    travelerType = "couple",
    travelScope = "all" // "all" | "domestic" | "international"
  } = userInput;

  const totalBudget = Number(budget) || 35000;
  const days = Math.max(Number(durationDays) || 3, 1);
  const numTravelers = Math.max(Number(travelers) || 1, 1);
  const roomsNeeded = Math.ceil(numTravelers / 2);
  const travelMonth = getMonthAbbreviation(tripStartDate);

  // Inferred or explicit traveler category
  let resolvedTravelerType = travelerType;
  if (!resolvedTravelerType) {
    if (numTravelers === 1) resolvedTravelerType = "solo";
    else if (numTravelers === 2) resolvedTravelerType = "couple";
    else resolvedTravelerType = "family";
  }

  const accMeta = ACCOMMODATION_TIERS[accommodationPref] || ACCOMMODATION_TIERS.budget;

  // 1. Evaluate each candidate destination
  const scoredDestinations = DESTINATIONS.map((dest) => {
    let score = 50; // Starting baseline
    const ruleLogs = [];
    const matchedCriteria = [];

    // --- RULE 0: Scope Compatibility (Domestic vs International filter preference) ---
    if (travelScope === "domestic" && !dest.isDomestic) {
      score -= 80;
      ruleLogs.push({
        ruleId: "RULE_00_TRAVEL_SCOPE",
        type: "FAIL",
        message: `Scope Mismatch: Destination is International (${dest.country}), but user selected Domestic Only. -80 pts`
      });
    } else if (travelScope === "international" && dest.isDomestic) {
      score -= 80;
      ruleLogs.push({
        ruleId: "RULE_00_TRAVEL_SCOPE",
        type: "FAIL",
        message: `Scope Mismatch: Destination is Domestic (India), but user requested International. -80 pts`
      });
    }

    // --- RULE 1: Comprehensive Budget Feasibility ---
    const estTransport = estimateTransportCost(userInput, dest);
    const estStay = accMeta.avgPricePerNight * days * roomsNeeded;
    const estGround = (dest.baseDailyCostPerPerson || 2000) * days * numTravelers * accMeta.multiplier;
    const estFood = 750 * days * numTravelers;
    const totalEstMinCost = Math.round(estTransport + estStay + estGround + estFood);

    const budgetRatio = totalBudget / Math.max(totalEstMinCost, 1);

    if (budgetRatio >= 1.2) {
      score += 25;
      matchedCriteria.push("Comfortably Within Budget");
      ruleLogs.push({
        ruleId: "RULE_01_BUDGET_FEASIBILITY",
        type: "PASS",
        message: `Budget Feasibility: User budget (₹${totalBudget.toLocaleString()}) comfortably covers estimated minimum trip cost (₹${totalEstMinCost.toLocaleString()}). +25 pts`
      });
    } else if (budgetRatio >= 0.88) {
      score += 15;
      matchedCriteria.push("Fits Target Budget");
      ruleLogs.push({
        ruleId: "RULE_01_BUDGET_FEASIBILITY",
        type: "PASS",
        message: `Budget Feasibility: User budget (₹${totalBudget.toLocaleString()}) closely matches estimated requirement (₹${totalEstMinCost.toLocaleString()}). +15 pts`
      });
    } else if (budgetRatio >= 0.65) {
      // Don't arbitrarily reject! Mark as adjustable
      score -= 5;
      matchedCriteria.push("Adjustable Budget");
      ruleLogs.push({
        ruleId: "RULE_01_BUDGET_FEASIBILITY",
        type: "WARN",
        message: `Adjustable Budget: Estimated cost (₹${totalEstMinCost.toLocaleString()}) slightly exceeds budget (₹${totalBudget.toLocaleString()}). Attainable with hostel/off-peak adjustments. -5 pts`
      });
    } else {
      score -= 28;
      ruleLogs.push({
        ruleId: "RULE_01_BUDGET_FEASIBILITY",
        type: "FAIL",
        message: `Budget Gap: Destination estimated baseline (₹${totalEstMinCost.toLocaleString()}) significantly exceeds user budget (₹${totalBudget.toLocaleString()}). -28 pts`
      });
    }

    // --- RULE 2: Weighted Multi-Interest Category & Tag Match ---
    let categoryMatches = 0;
    const matchedCategoryNames = [];
    const destCategories = dest.category || [];
    const destTags = dest.tags || [];

    interests.forEach((userInt) => {
      if (destCategories.includes(userInt)) {
        categoryMatches++;
        matchedCategoryNames.push(userInt);
      }
    });

    // Check specific tag overlap (e.g. "Trekking", "Wildlife", "Temple", "Heritage", "Scuba")
    let tagMatches = 0;
    interests.forEach((userInt) => {
      const uLower = userInt.toLowerCase();
      destTags.forEach((tag) => {
        if (tag.toLowerCase().includes(uLower)) {
          tagMatches++;
        }
      });
    });

    if (categoryMatches > 0) {
      const categoryBonus = categoryMatches * 14;
      const tagBonus = Math.min(tagMatches * 3, 9);
      const totalInterestBonus = categoryBonus + tagBonus;
      score += totalInterestBonus;
      matchedCriteria.push(`Interests: ${matchedCategoryNames.join(", ")}`);
      ruleLogs.push({
        ruleId: "RULE_02_INTEREST_TAG_MATCH",
        type: "PASS",
        message: `Interest Match: Aligned with ${categoryMatches} category (${matchedCategoryNames.join(", ")}) and ${tagMatches} related tags. +${totalInterestBonus} pts`
      });
    } else {
      score -= 15;
      ruleLogs.push({
        ruleId: "RULE_02_INTEREST_TAG_MATCH",
        type: "WARN",
        message: `Low Interest Overlap: Destination focus (${destCategories.join(", ")}) does not directly match requested interests (${interests.join(", ")}). -15 pts`
      });
    }

    // --- RULE 3: Season & Climate Suitability ---
    const bestMonths = dest.bestMonths || [];
    if (bestMonths.includes(travelMonth)) {
      score += 18;
      matchedCriteria.push(`Prime Season (${travelMonth})`);
      ruleLogs.push({
        ruleId: "RULE_03_SEASON_CLIMATE_MATCH",
        type: "PASS",
        message: `Peak Season: ${travelMonth} is an ideal travel window for ${dest.name} (${dest.climate || 'pleasant'}). +18 pts`
      });
    } else {
      // Check shoulder season (within 1 month)
      const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const mIdx = allMonths.indexOf(travelMonth);
      const prevM = allMonths[(mIdx + 11) % 12];
      const nextM = allMonths[(mIdx + 1) % 12];
      if (bestMonths.includes(prevM) || bestMonths.includes(nextM)) {
        score += 6;
        matchedCriteria.push(`Shoulder Season (${travelMonth})`);
        ruleLogs.push({
          ruleId: "RULE_03_SEASON_CLIMATE_MATCH",
          type: "PASS",
          message: `Shoulder Season: ${travelMonth} is adjacent to peak months. Good weather with fewer tourist crowds. +6 pts`
        });
      } else {
        score -= 10;
        ruleLogs.push({
          ruleId: "RULE_03_SEASON_CLIMATE_MATCH",
          type: "WARN",
          message: `Off-Peak Month: ${travelMonth} is outside recommended months (${bestMonths.slice(0, 4).join(", ")}...). Weather: ${dest.climate || 'Variable'}. -10 pts`
        });
      }
    }

    // --- RULE 4: Trip Duration Suitability ---
    const minDays = dest.minDays || 2;
    const maxDays = dest.maxDays || 6;
    const idealDuration = dest.idealDuration || 3;

    if (days >= minDays && days <= maxDays) {
      if (days === idealDuration) {
        score += 15;
        matchedCriteria.push(`Ideal ${days}-Day Duration`);
        ruleLogs.push({
          ruleId: "RULE_04_DURATION_FIT",
          type: "PASS",
          message: `Ideal Duration: ${days} days matches the exact sweet-spot for exploring ${dest.name}. +15 pts`
        });
      } else {
        score += 10;
        ruleLogs.push({
          ruleId: "RULE_04_DURATION_FIT",
          type: "PASS",
          message: `Comfortable Duration: ${days} days fits within recommended range (${minDays}–${maxDays} days). +10 pts`
        });
      }
    } else if (days < minDays) {
      score -= 20;
      ruleLogs.push({
        ruleId: "RULE_04_DURATION_FIT",
        type: "FAIL",
        message: `Rushed Duration: ${days} days is insufficient to properly experience ${dest.name} (minimum ${minDays} days required). -20 pts`
      });
    } else {
      score += 4;
      ruleLogs.push({
        ruleId: "RULE_04_DURATION_FIT",
        type: "PASS",
        message: `Extended Stay: ${days} days allows relaxed, immersive slow travel for ${dest.name}. +4 pts`
      });
    }

    // --- RULE 5: Traveler Type & Vibe Suitability ---
    const suitableTravelers = dest.suitableTravelers || ["solo", "couple", "family", "group"];
    if (suitableTravelers.includes(resolvedTravelerType.toLowerCase())) {
      score += 12;
      matchedCriteria.push(`Suited for ${resolvedTravelerType}`);
      ruleLogs.push({
        ruleId: "RULE_05_TRAVELER_TYPE_FIT",
        type: "PASS",
        message: `Traveler Vibe Match: Highly recommended for ${resolvedTravelerType} travelers based on activities & safety. +12 pts`
      });
    } else {
      score -= 5;
      ruleLogs.push({
        ruleId: "RULE_05_TRAVELER_TYPE_FIT",
        type: "WARN",
        message: `Traveler Composition Notice: Destination is primarily tailored for ${suitableTravelers.join(", ")}. -5 pts`
      });
    }

    // --- RULE 6: Origin Proximity & Transport Feasibility ---
    if (originLocation) {
      const originNorm = normalize(originLocation);
      const destStateNorm = normalize(dest.stateOrRegion);
      const destNameNorm = normalize(dest.name);

      if (destStateNorm.includes(originNorm) || destNameNorm.includes(originNorm)) {
        score += 10;
        matchedCriteria.push(`Convenient from ${originLocation}`);
        ruleLogs.push({
          ruleId: "RULE_06_ORIGIN_TRANSPORT_FIT",
          type: "PASS",
          message: `Regional Proximity: Short travel distance from ${originLocation}. Ideal for quick, economical transit. +10 pts`
        });
      } else if (!dest.isDomestic && (transportPref === "train" || transportPref === "bus")) {
        score -= 22;
        ruleLogs.push({
          ruleId: "RULE_06_ORIGIN_TRANSPORT_FIT",
          type: "FAIL",
          message: `Transport Mode Incompatibility: Selected ${transportPref.toUpperCase()} is not viable for international destination (${dest.country}). Flights required. -22 pts`
        });
      } else {
        score += 5;
        ruleLogs.push({
          ruleId: "RULE_06_ORIGIN_TRANSPORT_FIT",
          type: "PASS",
          message: `Transit Feasibility: Accessible via standard connecting routes from ${originLocation || 'major hubs'}. +5 pts`
        });
      }
    }

    // Compute scaled match percentage (clamp between 30% and 99%)
    // Base score is centered around 50; max possible score is ~150
    const rawScore = Math.max(score, 10);
    const matchPercentage = Math.min(Math.max(Math.round((rawScore / 140) * 100), 28), 99);

    const budgetFitStatus = budgetRatio >= 1.15
      ? "Comfortably within budget"
      : budgetRatio >= 0.88
      ? "Fits target budget"
      : budgetRatio >= 0.65
      ? "Adjustable / Stretch"
      : "Exceeds current budget";

    return {
      ...dest,
      rawScore,
      matchScore: rawScore,
      matchPercentage,
      ruleLogs,
      matchedCriteria,
      estimatedTripCost: totalEstMinCost,
      perPersonEstimatedCost: Math.round(totalEstMinCost / numTravelers),
      budgetFitStatus,
      budgetRatio
    };
  });

  // 2. Sort candidates by preliminary match percentage
  const preliminarySorted = scoredDestinations.sort((a, b) => b.matchPercentage - a.matchPercentage);

  // 3. RULE 7: DIVERSITY-AWARE RE-RANKING (De-clustering identical regions/categories)
  // Ensures top recommendations offer an inspiring mix of regions and categories
  const diverseResults = [];
  const remainingCandidates = [...preliminarySorted];

  const regionCounts = {};
  const categoryCounts = {};

  while (remainingCandidates.length > 0 && diverseResults.length < 30) {
    let bestIndex = 0;
    let bestAdjustedScore = -999;

    for (let i = 0; i < remainingCandidates.length; i++) {
      const candidate = remainingCandidates[i];
      let penalty = 0;

      // Penalize redundancy of same state or region in top selections
      const regionKey = candidate.stateOrRegion || candidate.country;
      const countForRegion = regionCounts[regionKey] || 0;
      if (countForRegion >= 1) penalty += countForRegion * 8;

      // Penalize excessive category repetition
      const primaryCat = candidate.category[0] || "";
      const countForCat = categoryCounts[primaryCat] || 0;
      if (countForCat >= 2) penalty += (countForCat - 1) * 5;

      const adjustedScore = candidate.matchPercentage - penalty;
      if (adjustedScore > bestAdjustedScore) {
        bestAdjustedScore = adjustedScore;
        bestIndex = i;
      }
    }

    const [selected] = remainingCandidates.splice(bestIndex, 1);
    diverseResults.push(selected);

    // Track chosen diversity dimensions
    const regionKey = selected.stateOrRegion || selected.country;
    regionCounts[regionKey] = (regionCounts[regionKey] || 0) + 1;
    const primaryCat = selected.category[0] || "";
    categoryCounts[primaryCat] = (categoryCounts[primaryCat] || 0) + 1;
  }

  // Append remaining candidates behind the diverse top list
  return [...diverseResults, ...remainingCandidates];
}

/**
 * Calculates itemized budget allocation for a specific destination and activity selection.
 */
export function calculateBudgetAllocation(userInput, destination, selectedActivities = []) {
  const days = Math.max(Number(userInput.durationDays) || 3, 1);
  const numTravelers = Math.max(Number(userInput.travelers) || 1, 1);
  const roomsNeeded = Math.ceil(numTravelers / 2);

  const accMeta = ACCOMMODATION_TIERS[userInput.accommodationPref] || ACCOMMODATION_TIERS.budget;
  const transportTotal = estimateTransportCost(userInput, destination);
  const accommodationTotal = accMeta.avgPricePerNight * days * roomsNeeded;
  const foodTotal = Math.round(750 * days * numTravelers);
  
  const activitiesTotal = selectedActivities.reduce((sum, act) => sum + ((act.cost || 0) * numTravelers), 0);
  const miscTotal = Math.round((transportTotal + accommodationTotal + foodTotal + activitiesTotal) * 0.08);

  const grandTotal = Math.round(transportTotal + accommodationTotal + foodTotal + activitiesTotal + miscTotal);
  const userBudget = Number(userInput.budget) || 35000;

  return {
    transport: transportTotal,
    accommodation: accommodationTotal,
    food: foodTotal,
    activities: activitiesTotal,
    misc: miscTotal,
    grandTotal,
    userBudget,
    perPersonCost: Math.round(grandTotal / numTravelers),
    dailyPerPersonCost: Math.round(grandTotal / (numTravelers * days)),
    isOverBudget: grandTotal > userBudget,
    diff: grandTotal - userBudget
  };
}

/**
 * Runs constraint checking and auto-optimizes trip activities/cost if over budget.
 */
export function optimizeConstraintsAndBudget(userInput, destination) {
  const initialActivities = [...(destination.activities || [])];
  const userBudget = Number(userInput.budget) || 35000;
  let currentActivities = [...initialActivities];
  const optimizationLogs = [];

  let allocation = calculateBudgetAllocation(userInput, destination, currentActivities);

  if (allocation.isOverBudget) {
    optimizationLogs.push(`CONSTRAINT CHECK: Estimated cost ₹${allocation.grandTotal.toLocaleString()} exceeds user budget ₹${userBudget.toLocaleString()} by ₹${allocation.diff.toLocaleString()}. Triggering Rule-Based Constraint Solver...`);

    // Strategy 1: Prune Priority 3 (optional high-cost) activities
    const p3Activities = currentActivities.filter(a => a.priority === 3);
    if (p3Activities.length > 0) {
      currentActivities = currentActivities.filter(a => a.priority !== 3);
      allocation = calculateBudgetAllocation(userInput, destination, currentActivities);
      optimizationLogs.push(`RULE ACTION 1: Removed ${p3Activities.length} optional activity (${p3Activities.map(a=>a.name).join(", ")}). Revised Total: ₹${allocation.grandTotal.toLocaleString()}`);
    }

    // Strategy 2: If still over budget, prune Priority 2 activities costing over ₹1500
    if (allocation.isOverBudget) {
      const expensiveP2 = currentActivities.filter(a => a.priority === 2 && a.cost > 1500);
      if (expensiveP2.length > 0) {
        currentActivities = currentActivities.filter(a => !(a.priority === 2 && a.cost > 1500));
        allocation = calculateBudgetAllocation(userInput, destination, currentActivities);
        optimizationLogs.push(`RULE ACTION 2: Replaced premium activity (${expensiveP2.map(a=>a.name).join(", ")}) with nature exploration. Revised Total: ₹${allocation.grandTotal.toLocaleString()}`);
      }
    }

    if (!allocation.isOverBudget) {
      optimizationLogs.push(`OPTIMIZATION SUCCESS: Trip plan is now within your budget! Saved ₹${Math.abs(allocation.diff).toLocaleString()}.`);
    } else {
      optimizationLogs.push(`NOTICE: Plan minimized to ₹${allocation.grandTotal.toLocaleString()}. Consider adjusting stay tier or increasing budget by ₹${allocation.diff.toLocaleString()}.`);
    }
  } else {
    optimizationLogs.push(`CONSTRAINT CHECK PASSED: Total estimated cost ₹${allocation.grandTotal.toLocaleString()} is within user budget ₹${userBudget.toLocaleString()}. All activities preserved.`);
  }

  return {
    optimizedActivities: currentActivities,
    budgetSummary: allocation,
    optimizationLogs
  };
}

/**
 * Generates rich Day-Wise Itinerary by scheduling authentic destination activities and attractions.
 */
export function generateDayWiseItinerary(userInput, destination, activities = []) {
  const daysCount = Math.max(Number(userInput.durationDays) || 3, 1);
  const days = [];

  const attractions = [...(destination.majorAttractions || [])];
  const cuisine = destination.cuisineHighlights || "Famous regional delicacies and street food";
  let remainingActivities = [...(activities && activities.length > 0 ? activities : destination.activities || [])];

  for (let d = 1; d <= daysCount; d++) {
    const daySchedule = {
      dayNumber: d,
      title: d === 1
        ? `Day ${d}: Arrival & Orientation in ${destination.name.split(",")[0]}`
        : d === daysCount
        ? `Day ${d}: Highlights, Souvenirs & Departure`
        : `Day ${d}: Iconic Exploration & Local Immersion`,
      slots: []
    };

    // Day 1 Morning slot reserved for Arrival & Check-in
    if (d === 1) {
      daySchedule.slots.push({
        timeSlot: "Morning (09:00 AM - 12:30 PM)",
        title: `Arrival in ${destination.name.split(",")[0]} & Check-in`,
        category: "Transport & Rest",
        duration: "3.5 hrs",
        cost: 0,
        description: `Arrive via selected mode (${(userInput.transportPref || 'train').toUpperCase()}). Check in to ${userInput.accommodationPref || 'selected'} accommodation, freshen up, and unpack.`,
        isSystemSlot: true
      });
    } else if (remainingActivities.length > 0) {
      // Morning Slot: Scheduled activity
      const act = remainingActivities.shift();
      daySchedule.slots.push({
        timeSlot: "Morning (08:30 AM - 12:30 PM)",
        title: act.name,
        category: act.category,
        duration: `${act.durationHours || 3} hrs`,
        cost: act.cost || 0,
        description: act.description || `Experience ${act.name}. Ideal morning slot for comfortable weather and photography.`
      });
    } else {
      // Morning Slot: Major Attraction exploration
      const attraction = attractions.shift() || "Scenic Viewpoint & Heritage Landmarks";
      daySchedule.slots.push({
        timeSlot: "Morning (09:00 AM - 12:30 PM)",
        title: `Visit ${attraction}`,
        category: "Culture",
        duration: "3 hrs",
        cost: 150,
        description: `Explore ${attraction}. Discover historical architecture and scenic photo spots.`
      });
    }

    // Afternoon Slot
    if (remainingActivities.length > 0) {
      const act = remainingActivities.shift();
      daySchedule.slots.push({
        timeSlot: "Afternoon (01:30 PM - 05:00 PM)",
        title: act.name,
        category: act.category,
        duration: `${act.durationHours || 3} hrs`,
        cost: act.cost || 0,
        description: act.description || `Explore ${act.name}. Pair with authentic lunch at nearby regional eateries.`
      });
    } else {
      const attraction = attractions.shift();
      if (attraction) {
        daySchedule.slots.push({
          timeSlot: "Afternoon (01:30 PM - 04:30 PM)",
          title: `Discover ${attraction}`,
          category: "Nature",
          duration: "3 hrs",
          cost: 100,
          description: `Guided walk around ${attraction}. Enjoy the atmosphere and regional history.`
        });
      } else {
        daySchedule.slots.push({
          timeSlot: "Afternoon (01:00 PM - 04:00 PM)",
          title: "Authentic Culinary Experience",
          category: "Food",
          duration: "2.5 hrs",
          cost: 450,
          description: `Sample regional delicacies: ${cuisine}.`
        });
      }
    }

    // Evening Slot
    if (remainingActivities.length > 0) {
      const act = remainingActivities.shift();
      daySchedule.slots.push({
        timeSlot: "Evening (05:30 PM - 08:30 PM)",
        title: act.name,
        category: act.category,
        duration: `${act.durationHours || 2.5} hrs`,
        cost: act.cost || 0,
        description: act.description || `Unwind with ${act.name}. Perfect evening ambiance.`
      });
    } else {
      daySchedule.slots.push({
        timeSlot: "Evening (06:00 PM - 09:00 PM)",
        title: `Sunset Stroll & Traditional Markets`,
        category: "Culture",
        duration: "3 hrs",
        cost: 200,
        description: `Stroll through local bazaars, browse handcrafted souvenirs, and enjoy twilight viewpoints.`
      });
    }

    days.push(daySchedule);
  }

  return days;
}
