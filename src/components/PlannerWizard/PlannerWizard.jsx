import React, { useState, useEffect, useRef } from "react";
import { 
  MapPin, Calendar, CalendarDays, Users, Wallet, Bus, Plane, Train, Car, 
  Home, Hotel, Sparkles, Compass, CheckCircle2, ArrowRight, ArrowLeft,
  ShieldCheck, UserRound, Heart, UsersRound, ChevronDown,
  TreePine, Waves, Mountain, Landmark, Utensils, Music2, Flower2, ShoppingBag
} from "lucide-react";
import { DESTINATIONS } from "../../data/travelKnowledgeBase";
import WizardSideVisual from "./WizardSideVisual";
import "./PlannerWizard.css";

const SIDE_DESTINATION_SETS = {
  1: [
    { id: "dest_manali", label: "Manali" },
    { id: "dest_munnar", label: "Kerala" },
    { id: "dest_bali_intl", label: "Bali" }
  ],
  2: [
    { id: "dest_munnar", label: "Kerala" },
    { id: "dest_bali_intl", label: "Bali" },
    { id: "dest_manali", label: "Manali" }
  ],
  3: [
    { id: "dest_bali_intl", label: "Bali" },
    { id: "dest_manali", label: "Manali" },
    { id: "dest_munnar", label: "Kerala" }
  ]
};

const getSideDestinationCards = (step) =>
  (SIDE_DESTINATION_SETS[step] || SIDE_DESTINATION_SETS[1])
    .map((item, index) => ({
      ...item,
      position: index + 1,
      destination: DESTINATIONS.find((destination) => destination.id === item.id)
    }))
    .filter((item) => item.destination);

  const SIDE_DESTINATION_IMAGE_FALLBACK = getSideDestinationCards(1)[1]?.destination.heroImage || "";

const INTEREST_OPTIONS = [
  { id: "Nature", label: "Nature & Wildlife", icon: <TreePine size={19} />, desc: "Mountains, lakes, national parks & tea gardens" },
  { id: "Beach", label: "Beaches & Islands", icon: <Waves size={19} />, desc: "Golden sands, coastal waves & tropical views" },
  { id: "Adventure", label: "Adventure & Sports", icon: <Mountain size={19} />, desc: "Trekking, rafting, paragliding & snow sports" },
  { id: "Culture", label: "History & Culture", icon: <Landmark size={19} />, desc: "Royal forts, palaces, cathedrals & museums" },
  { id: "Food", label: "Culinary & Dining", icon: <Utensils size={19} />, desc: "Authentic local thalis, street food & cafes" },
  { id: "Nightlife", label: "Nightlife & Music", icon: <Music2 size={19} />, desc: "Beach shacks, live music, river cruises & lounges" },
  { id: "Spiritual", label: "Spiritual & Wellness", icon: <Flower2 size={19} />, desc: "Yoga ashrams, holy rivers, temples & Ganga Aarti" },
  { id: "Shopping", label: "Bazaars & Shopping", icon: <ShoppingBag size={19} />, desc: "Handicrafts, traditional silk & artisan bazaars" }
];

const INDIAN_STATES = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

const toLocalDateString = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getTripDays = (startDate, endDate) => {
  if (!startDate || !endDate) return 1;
  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);
  return Math.max(1, Math.round((end - start) / 86400000) + 1);
};

const formatTripDate = (date) => {
  if (!date) return "Not selected";
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
};

export default function PlannerWizard({ userInput, setUserInput, onSubmitForm }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [sideVisualPhase, setSideVisualPhase] = useState("idle");
  const [isOriginMenuOpen, setIsOriginMenuOpen] = useState(false);
  const originMenuRef = useRef(null);
  const transitionTimerRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (originMenuRef.current && !originMenuRef.current.contains(event.target)) {
        setIsOriginMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.clearTimeout(transitionTimerRef.current);
    };
  }, []);

  const handleInputChange = (field, value) => {
    setUserInput(prev => ({ ...prev, [field]: value }));
  };

  const handleTripDateChange = (field, value) => {
    setUserInput((prev) => {
      let tripStartDate = field === "tripStartDate" ? value : prev.tripStartDate;
      let tripEndDate = field === "tripEndDate" ? value : prev.tripEndDate;

      if (field === "tripStartDate" && tripEndDate < tripStartDate) {
        tripEndDate = tripStartDate;
      }
      if (field === "tripEndDate" && tripEndDate < tripStartDate) {
        tripStartDate = tripEndDate;
      }

      return {
        ...prev,
        tripStartDate,
        tripEndDate,
        durationDays: getTripDays(tripStartDate, tripEndDate),
      };
    });
  };

  const toggleInterest = (interestId) => {
    setUserInput(prev => {
      const current = prev.interests || [];
      if (current.includes(interestId)) {
        return { ...prev, interests: current.filter(i => i !== interestId) };
      } else {
        return { ...prev, interests: [...current, interestId] };
      }
    });
  };

  const isStepOneValid = Boolean(
    userInput.originLocation &&
    userInput.tripStartDate &&
    userInput.tripEndDate &&
    userInput.tripEndDate >= userInput.tripStartDate
  );

  const transitionToStep = (step) => {
    if (step === currentStep) return;
    window.clearTimeout(transitionTimerRef.current);
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setCurrentStep(step);
      setSideVisualPhase("idle");
      return;
    }
    setSideVisualPhase("exit");
    transitionTimerRef.current = window.setTimeout(() => {
      setCurrentStep(step);
      setSideVisualPhase("enter");
      transitionTimerRef.current = window.setTimeout(() => {
        setSideVisualPhase("idle");
      }, 440);
    }, 150);
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !isStepOneValid) return;
    if (currentStep < 3) {
      transitionToStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      onSubmitForm();
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      transitionToStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleStepClick = (step) => {
    if (step === currentStep) return;
    if (step > currentStep && !isStepOneValid) return;
    transitionToStep(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const travelerOptions = [
    { value: 1, label: "Solo Traveler", desc: "A trip just for you", icon: <UserRound size={20} /> },
    { value: 2, label: "Couple / Duo", desc: "Two travelers", icon: <Heart size={20} /> },
    { value: 4, label: "Family / Small Group", desc: "Three to four travelers", icon: <Users size={20} /> },
    { value: 6, label: "Large Group", desc: "Five or more travelers", icon: <UsersRound size={20} /> }
  ];

  const transportOptions = [
    { id: "train", name: "Express Train", icon: <Train size={20} />, note: "Budget friendly" },
    { id: "flight", name: "Flight", icon: <Plane size={20} />, note: "Fastest travel" },
    { id: "bus", name: "AC Sleeper Bus", icon: <Bus size={20} />, note: "Overnight routes" },
    { id: "selfdrive", name: "Rental / Self-Drive", icon: <Car size={20} />, note: "Scenic roadtrips" }
  ];

  const accommodationOptions = [
    { id: "hostel", name: "Budget Hostel", icon: <Home size={20} />, note: "~₹800 / night" },
    { id: "budget", name: "Standard 3★ Hotel", icon: <Hotel size={20} />, note: "~₹2,200 / night" },
    { id: "homestay", name: "Heritage Homestay", icon: <Home size={20} />, note: "~₹1,600 / night" },
    { id: "luxury", name: "Luxury Resort & Spa", icon: <Hotel size={20} />, note: "~₹6,200 / night" }
  ];

  // Lookup labels for summary
  const currentTraveler = travelerOptions.find(t => t.value === userInput.travelers) || travelerOptions[1];
  const currentTransport = transportOptions.find(t => t.id === userInput.transportPref) || transportOptions[0];
  const currentStay = accommodationOptions.find(a => a.id === userInput.accommodationPref) || accommodationOptions[1];

  return (
    <div className="planner-wizard-container">
      <WizardSideVisual step={currentStep} phase={sideVisualPhase} />

      <aside className={`wizard-side-art wizard-side-art-right wizard-side-art-step-${currentStep}`} aria-hidden="true">
        <div
          className={`side-destination-stack ${sideVisualPhase === "exit" ? "is-exiting" : sideVisualPhase === "enter" ? "is-entering" : ""}`}
          key={currentStep}
        >
          {getSideDestinationCards(currentStep).map(({ id, label, position, destination }) => (
            <div className={`side-destination-photo side-photo-position-${position}`} key={id}>
              <img
                src={destination.heroImage}
                alt=""
                loading="lazy"
                onError={(event) => {
                  if (event.currentTarget.src !== SIDE_DESTINATION_IMAGE_FALLBACK) {
                    event.currentTarget.src = SIDE_DESTINATION_IMAGE_FALLBACK;
                  }
                }}
              />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Wizard Intro Header */}
      <div className="wizard-intro-header">
        <h1 className="wizard-main-title">Personalized Travel Planner</h1>
        <p className="wizard-main-subtitle">
          Set your parameters, budget, and travel preferences to generate a tailored itinerary.
        </p>
      </div>

      {/* Connected 3-Step Indicator */}
      <div className="wizard-steps-nav" role="tablist" aria-label="Booking steps">
        {/* Step 1 */}
        <button
          type="button"
          role="tab"
          aria-selected={currentStep === 1}
          className={`step-nav-item ${currentStep === 1 ? "active" : ""} ${currentStep > 1 ? "completed" : ""}`}
          onClick={() => handleStepClick(1)}
        >
          <div className="step-nav-badge">
            {currentStep > 1 ? <CheckCircle2 size={16} /> : "1"}
          </div>
          <div className="step-nav-text">
            <span className="step-nav-step">Step 1</span>
            <span className="step-nav-title">Basic Parameters</span>
          </div>
        </button>

        <div className={`step-nav-divider ${currentStep > 1 ? "completed" : ""}`} />

        {/* Step 2 */}
        <button
          type="button"
          role="tab"
          aria-selected={currentStep === 2}
          className={`step-nav-item ${currentStep === 2 ? "active" : ""} ${currentStep > 2 ? "completed" : ""}`}
          onClick={() => handleStepClick(2)}
          disabled={!isStepOneValid}
        >
          <div className="step-nav-badge">
            {currentStep > 2 ? <CheckCircle2 size={16} /> : "2"}
          </div>
          <div className="step-nav-text">
            <span className="step-nav-step">Step 2</span>
            <span className="step-nav-title">Budget & Preferences</span>
          </div>
        </button>

        <div className={`step-nav-divider ${currentStep > 2 ? "completed" : ""}`} />

        {/* Step 3 */}
        <button
          type="button"
          role="tab"
          aria-selected={currentStep === 3}
          className={`step-nav-item ${currentStep === 3 ? "active" : ""}`}
          onClick={() => handleStepClick(3)}
          disabled={!isStepOneValid}
        >
          <div className="step-nav-badge">3</div>
          <div className="step-nav-text">
            <span className="step-nav-step">Step 3</span>
            <span className="step-nav-title">Interests & AI Execution</span>
          </div>
        </button>
      </div>

      {/* Main Wizard Form Card */}
      <div className="wizard-form-card animate-fade-in">
        {/* STEP 1: Basic Parameters */}
        {currentStep === 1 && (
          <div className="wizard-step-body">
            <div className="step-heading-group">
              <span className="step-kicker">STEP 1 OF 3</span>
              <h2 className="step-headline">Let’s start with the essentials</h2>
              <p className="step-lead">
                Choose your departure point and dates, then tell us who’s coming along.
              </p>
            </div>

            {/* Two-Column Form Layout: Origin & Dates */}
            <div className="wizard-two-col">
              {/* Origin Location Column */}
              <div className="form-field-group">
                <label className="field-label" htmlFor="origin-location-trigger">
                  <MapPin size={15} className="field-label-icon" /> Starting Origin Location
                </label>
                <div className="custom-select-wrapper" ref={originMenuRef}>
                  <button
                    id="origin-location-trigger"
                    type="button"
                    className={`form-input form-select-trigger ${isOriginMenuOpen ? "open" : ""}`}
                    onClick={() => setIsOriginMenuOpen((prev) => !prev)}
                    aria-expanded={isOriginMenuOpen}
                    aria-haspopup="listbox"
                  >
                    <span>{userInput.originLocation || "Select state or union territory"}</span>
                    <ChevronDown size={16} className={`select-chevron ${isOriginMenuOpen ? "rotated" : ""}`} />
                  </button>

                  {isOriginMenuOpen && (
                    <div className="custom-select-menu" role="listbox" aria-label="State selection">
                      {INDIAN_STATES.map((state) => (
                        <button
                          key={state}
                          type="button"
                          className={`custom-select-option ${userInput.originLocation === state ? "selected" : ""}`}
                          onClick={() => {
                            handleInputChange("originLocation", state);
                            setIsOriginMenuOpen(false);
                          }}
                        >
                          <span>{state}</span>
                          {userInput.originLocation === state && (
                            <CheckCircle2 size={15} className="option-check-icon" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Trip Dates Column */}
              <div className="form-field-group">
                <label className="field-label">
                  <CalendarDays size={15} className="field-label-icon" /> Trip Dates
                </label>
                <div className="trip-date-range-box">
                  <div className="trip-date-col">
                    <span className="trip-date-col-caption">START</span>
                    <input
                      aria-label="Trip start date"
                      type="date"
                      value={userInput.tripStartDate || ""}
                      min={toLocalDateString(new Date())}
                      onChange={(e) => handleTripDateChange("tripStartDate", e.target.value)}
                      className="clean-date-input"
                      required
                    />
                  </div>
                  <div className="trip-date-arrow" aria-hidden="true">→</div>
                  <div className="trip-date-col">
                    <span className="trip-date-col-caption">END</span>
                    <input
                      aria-label="Trip end date"
                      type="date"
                      value={userInput.tripEndDate || ""}
                      min={userInput.tripStartDate || toLocalDateString(new Date())}
                      onChange={(e) => handleTripDateChange("tripEndDate", e.target.value)}
                      className="clean-date-input"
                      required
                    />
                  </div>
                </div>

                <div className="trip-duration-bar">
                  <Calendar size={13} className="duration-icon" />
                  <span><strong>{userInput.durationDays}</strong> {userInput.durationDays === 1 ? "day" : "days"} planned</span>
                </div>
              </div>
            </div>

            {/* Traveler Selection 2x2 Grid */}
            <div className="form-field-group traveler-section full-width">
              <label className="field-label">
                <Users size={15} className="field-label-icon" /> Group Size & Traveler Type
              </label>
              <div className="selection-cards-grid">
                {travelerOptions.map((item) => {
                  const isSelected = userInput.travelers === item.value;
                  return (
                    <button
                      key={item.value}
                      type="button"
                      aria-pressed={isSelected}
                      className={`selection-card ${isSelected ? "selected" : ""}`}
                      onClick={() => handleInputChange("travelers", item.value)}
                    >
                      <div className="card-icon-container">{item.icon}</div>
                      <div className="card-text-container">
                        <span className="card-title-text">{item.label}</span>
                        <span className="card-desc-text">{item.desc}</span>
                      </div>
                      <div className="card-check-status">
                        {isSelected ? (
                          <CheckCircle2 size={18} className="check-icon-selected" />
                        ) : (
                          <div className="check-icon-empty" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Budget & Preferences */}
        {currentStep === 2 && (
          <div className="wizard-step-body step-two-layout">
            <div className="step-heading-group">
              <span className="step-kicker">STEP 2 OF 3</span>
              <h2 className="step-headline">Set your budget and travel style</h2>
              <p className="step-lead">
                Choose the comfort level, budget, and transport that work best for your trip.
              </p>
            </div>

            {/* Section 1: Total Budget Limit */}
            <div className="form-section-block budget-section">
              <div className="section-header-flex">
                <label className="field-label">
                  <Wallet size={15} className="field-label-icon" /> Total Budget Limit
                </label>
                <div className="budget-value-tag">
                  ₹{Number(userInput.budget).toLocaleString()} <span className="budget-curr">INR</span>
                </div>
              </div>

              <div className="budget-slider-container">
                <input
                  type="range"
                  min="8000"
                  max="120000"
                  step="2000"
                  value={userInput.budget}
                  onChange={(e) => handleInputChange("budget", Number(e.target.value))}
                  className="modern-range-input"
                  aria-label="Trip budget range slider"
                />
                <div className="range-minmax-labels">
                  <span>₹8,000</span>
                  <span>₹1,20,000+</span>
                </div>
              </div>

              <div className="budget-presets-bar">
                <span className="presets-label">Quick select:</span>
                {[12000, 25000, 45000, 85000].map((val) => (
                  <button
                    key={val}
                    type="button"
                    className={`preset-pill-btn ${userInput.budget === val ? "active" : ""}`}
                    onClick={() => handleInputChange("budget", val)}
                  >
                    ₹{val.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Section 2: Preferred Transport Mode */}
            <div className="form-section-block transport-section">
              <label className="field-label">
                <Plane size={15} className="field-label-icon" /> Preferred Transport Mode
              </label>
              <div className="selection-cards-grid">
                {transportOptions.map((mode) => {
                  const isSelected = userInput.transportPref === mode.id;
                  return (
                    <button
                      key={mode.id}
                      type="button"
                      aria-pressed={isSelected}
                      className={`selection-card ${isSelected ? "selected" : ""}`}
                      onClick={() => handleInputChange("transportPref", mode.id)}
                    >
                      <div className="card-icon-container">{mode.icon}</div>
                      <div className="card-text-container">
                        <span className="card-title-text">{mode.name}</span>
                        <span className="card-desc-text">{mode.note}</span>
                      </div>
                      <div className="card-check-status">
                        {isSelected ? (
                          <CheckCircle2 size={18} className="check-icon-selected" />
                        ) : (
                          <div className="check-icon-empty" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Section 3: Preferred Stay Tier */}
            <div className="form-section-block accommodation-section">
              <label className="field-label">
                <Hotel size={15} className="field-label-icon" /> Preferred Stay Tier
              </label>
              <div className="selection-cards-grid">
                {accommodationOptions.map((acc) => {
                  const isSelected = userInput.accommodationPref === acc.id;
                  return (
                    <button
                      key={acc.id}
                      type="button"
                      aria-pressed={isSelected}
                      className={`selection-card ${isSelected ? "selected" : ""}`}
                      onClick={() => handleInputChange("accommodationPref", acc.id)}
                    >
                      <div className="card-icon-container">{acc.icon}</div>
                      <div className="card-text-container">
                        <span className="card-title-text">{acc.name}</span>
                        <span className="card-desc-text">{acc.note}</span>
                      </div>
                      <div className="card-check-status">
                        {isSelected ? (
                          <CheckCircle2 size={18} className="check-icon-selected" />
                        ) : (
                          <div className="check-icon-empty" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Interests & AI Execution */}
        {currentStep === 3 && (
          <div className="wizard-step-body step-three-layout">
            <div className="step-heading-group">
              <span className="step-kicker">STEP 3 OF 3</span>
              <h2 className="step-headline">What would make this trip memorable?</h2>
              <p className="step-lead">
                Pick the experiences you’re drawn to. You can choose more than one.
              </p>
            </div>

            {/* Interests Grid */}
            <div className="form-section-block">
              <div className="section-header-flex">
                <label className="field-label">
                  <Sparkles size={15} className="field-label-icon" /> Travel Interests
                </label>
                <span className="field-hint-text">Select all that apply</span>
              </div>
              <div className="interests-cards-grid">
                {INTEREST_OPTIONS.map((opt) => {
                  const isSelected = (userInput.interests || []).includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      aria-pressed={isSelected}
                      className={`interest-card ${isSelected ? "selected" : ""}`}
                      onClick={() => toggleInterest(opt.id)}
                    >
                      <div className="interest-emoji-badge">{opt.icon}</div>
                      <div className="interest-text-box">
                        <span className="interest-title-text">{opt.label}</span>
                        <span className="interest-desc-text">{opt.desc}</span>
                      </div>
                      <div className="interest-check-status">
                        {isSelected ? (
                          <CheckCircle2 size={17} className="check-icon-selected" />
                        ) : (
                          <div className="check-icon-empty-sm" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Trip Preference Summary */}
            <div className="trip-preference-summary-box" aria-label="Trip preference summary">
              <div className="summary-box-header">
                <Compass size={14} className="summary-header-icon" />
                <span className="summary-header-title">YOUR TRIP AT A GLANCE</span>
              </div>
              <div className="summary-items-grid">
                <div className="summary-pill">
                  <MapPin size={14} className="summary-item-icon" />
                  <span>From {userInput.originLocation || "Origin"}</span>
                </div>
                <div className="summary-pill">
                  <CalendarDays size={14} className="summary-item-icon" />
                  <span>{formatTripDate(userInput.tripStartDate)} to {formatTripDate(userInput.tripEndDate)}</span>
                </div>
                <div className="summary-pill">
                  <Calendar size={14} className="summary-item-icon" />
                  <span>{userInput.durationDays} {userInput.durationDays === 1 ? "day" : "days"}</span>
                </div>
                <div className="summary-pill">
                  <Users size={14} className="summary-item-icon" />
                  <span>{currentTraveler.label}</span>
                </div>
                <div className="summary-pill">
                  <Wallet size={14} className="summary-item-icon" />
                  <span>₹{Number(userInput.budget).toLocaleString()}</span>
                </div>
                <div className="summary-pill">
                  <Plane size={14} className="summary-item-icon" />
                  <span>{currentTransport.name}</span>
                </div>
                <div className="summary-pill">
                  <Hotel size={14} className="summary-item-icon" />
                  <span>{currentStay.name}</span>
                </div>
              </div>
            </div>

            {/* AI Rule Logic Banner */}
            <div className="ai-rule-transparency-banner">
              <ShieldCheck size={22} className="ai-shield-icon" />
              <div className="ai-banner-content">
                <strong>Rule-based trip matching is ready</strong>
                <p>Your preferences will be scored against budget fit, interest matches, trip length, and itinerary constraints.</p>
                <div className="ai-rule-ids" aria-label="Rules used">
                  <code>RULE_01_BUDGET_FEASIBILITY</code>
                  <code>RULE_02_INTEREST_TAG_MATCH</code>
                  <code>RULE_03_DURATION_SUITABILITY</code>
                  <code>RULE_05_CONSTRAINT_SOLVER</code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Wizard Footer Navigation Buttons */}
        <div className="wizard-card-footer">
          {currentStep > 1 ? (
            <button
              type="button"
              className="wizard-btn btn-back-action"
              onClick={handlePrevStep}
            >
              <ArrowLeft size={16} /> Back
            </button>
          ) : (
            <div />
          )}

          <button
            type="button"
            className="wizard-btn btn-continue-action"
            onClick={handleNextStep}
            disabled={currentStep === 1 && !isStepOneValid}
          >
            {currentStep === 3 ? (
              <>
                <Sparkles size={17} /> Generate My Itinerary
              </>
            ) : (
              <>
                Continue <ArrowRight size={17} />
              </>
            )}
          </button>
        </div>
      </div>

    </div>
  );
}
