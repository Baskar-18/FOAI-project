// travelKnowledgeBase.js - Comprehensive Rule-Based AI Knowledge Base & Data Repository
import { DESTINATIONS } from "./destinationsData.js";

export { DESTINATIONS };

export const ACCOMMODATION_TIERS = {
  hostel: { name: "Budget Hostel / Homestay", multiplier: 0.5, avgPricePerNight: 800 },
  budget: { name: "Standard 3★ Hotel", multiplier: 1.0, avgPricePerNight: 2200 },
  homestay: { name: "Heritage Homestay", multiplier: 0.85, avgPricePerNight: 1600 },
  luxury: { name: "Luxury Resort & Spa", multiplier: 2.4, avgPricePerNight: 6200 }
};

export const TRANSPORT_MODES = {
  train: { name: "Express Train", baseCost: 1400, speedKmH: 80, icon: "Train" },
  flight: { name: "Flight", baseCost: 5200, speedKmH: 600, icon: "Plane" },
  bus: { name: "AC Sleeper Bus", baseCost: 1100, speedKmH: 50, icon: "Bus" },
  selfdrive: { name: "Rental / Self-Drive", baseCost: 2600, speedKmH: 70, icon: "Car" }
};

export const RULES_DOCUMENTATION = [
  {
    id: "RULE_01_BUDGET_FEASIBILITY",
    name: "Multi-Tier Budget Feasibility & Tolerance",
    condition: "Comfortable: budget >= 1.2x cost (+25 pts) | Exact/Tight: budget >= 0.85x cost (+10 pts) | Exceeds slightly: budget >= 0.7x (-10 pts, marked 'Adjustable') | Major Over-budget: (-30 pts)",
    explanation: "Calculates realistic cost (Stay + Transport + Daily Ground + Food) for all travelers. Distinguishes comfortably affordable, stretch/adjustable, and high-cost destinations rather than arbitrarily rejecting them.",
    weight: "+25 / +10 / -10 / -30 pts"
  },
  {
    id: "RULE_02_INTEREST_TAG_MATCH",
    name: "Weighted Multi-Interest Category Match",
    condition: "Calculates overlap between user interests (Nature, Beach, Adventure, Culture, Food, Spiritual, Nightlife, Shopping) and destination categories/tags.",
    explanation: "Scores up to +35 points based on interest match ratio. Each aligned primary category awards +12 pts; aligned specific tags award +4 pts.",
    weight: "Up to +35 pts"
  },
  {
    id: "RULE_03_SEASON_CLIMATE_MATCH",
    name: "Travel Season & Peak Month Compatibility",
    condition: "Compares trip start date month against destination's curated bestMonths array.",
    explanation: "If selected travel month falls within ideal season, awards +18 pts. If shoulder season, awards +6 pts. If monsoon/unfavorable, applies mild adjustment (-12 pts) with explanatory note.",
    weight: "+18 / +6 / -12 pts"
  },
  {
    id: "RULE_04_DURATION_FIT",
    name: "Trip Duration & Pace Compatibility",
    condition: "Checks if durationDays is within [minDays, maxDays] and matches idealDuration.",
    explanation: "Awards +15 pts when trip duration matches destination ideal length. If trip is shorter than minDays (e.g. 2 days for international or remote Himalayas), applies -20 pts penalty for rushed pacing.",
    weight: "+15 / -20 pts"
  },
  {
    id: "RULE_05_TRAVELER_TYPE_FIT",
    name: "Traveler Group & Composition Suitability",
    condition: "Matches user.travelerType ('solo', 'couple', 'family', 'group') against destination's suitableTravelers list.",
    explanation: "Validates safety, amenities, and vibe for families with kids, romantic couples, solo backpackers, or groups of friends (+12 pts).",
    weight: "+12 / 0 pts"
  },
  {
    id: "RULE_06_ORIGIN_TRANSPORT_FIT",
    name: "Origin Proximity & Transport Mode Feasibility",
    condition: "Evaluates origin location proximity, international flight necessity, and preferred transport feasibility.",
    explanation: "Ensures international destinations require flight compatibility and appropriate travel scope. Evaluates domestic connectivity from the traveler's stated starting city (+10 pts).",
    weight: "+10 / -15 pts"
  },
  {
    id: "RULE_07_DIVERSITY_AWARE_RANKING",
    name: "Diversity-Aware Selection & De-clustering",
    condition: "Re-ranks candidates to prevent repetitive clusters of identical regions and categories in the top recommendations.",
    explanation: "Applies diversity balancing so the top results present an inspiring mix of mountain, coastal, cultural, and international options reflecting all user criteria.",
    weight: "Algorithmic Re-ranking"
  }
];
