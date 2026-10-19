import React, { useRef, useState } from "react";
import confetti from "canvas-confetti";
import { 
  Calendar, Clock, Wallet, MapPin, CheckCircle2,
  Download, Printer, Plus, Trash2, Cpu, ArrowLeft, AlertTriangle, Sparkles
} from "lucide-react";
import { calculateBudgetAllocation } from "../../utils/ruleEngine";
import "./ItineraryDashboard.css";

const FALLBACK_DESTINATION_IMAGE = "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1400&q=85";

export default function ItineraryDashboard({ 
  destination, 
  userInput, 
  itineraryDays, 
  setItineraryDays, 
  budgetSummary, 
  setBudgetSummary,
  optimizationLogs, 
  onBackToDestinations, 
  onOpenRules,
  onExportPDF
}) {
  const [activeDayTab, setActiveDayTab] = useState(1);
  const dayTimelineRef = useRef(null);
  const [showAddActivityModal, setShowAddActivityModal] = useState(false);
  const [customActName, setCustomActName] = useState("");
  const [customActCost, setCustomActCost] = useState("");
  const [customActSlot, setCustomActSlot] = useState("Afternoon");

  const fireConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log(e);
    }
  };

  // Recalculates total activities & budget when slots change
  const updateDaysAndBudget = (newDays) => {
    setItineraryDays(newDays);

    // Flatten all activities across days
    const allActivities = [];
    newDays.forEach(d => {
      d.slots.forEach(s => {
        if (!s.isSystemSlot) {
          allActivities.push({ cost: s.cost || 0 });
        }
      });
    });

    const newAllocation = calculateBudgetAllocation(userInput, destination, allActivities);
    setBudgetSummary(newAllocation);
  };

  const handleRemoveSlot = (dayNum, slotIdx) => {
    const updatedDays = itineraryDays.map(day => {
      if (day.dayNumber === dayNum) {
        const newSlots = day.slots.filter((_, idx) => idx !== slotIdx);
        return { ...day, slots: newSlots };
      }
      return day;
    });
    updateDaysAndBudget(updatedDays);
  };

  const handleAddCustomActivity = (e) => {
    e.preventDefault();
    if (!customActName) return;

    const newSlot = {
      timeSlot: `${customActSlot} (Custom Scheduled)`,
      title: customActName,
      category: "Personal Choice",
      duration: "2 hrs",
      cost: Number(customActCost) || 0,
      description: "Custom activity added by traveler."
    };

    const updatedDays = itineraryDays.map(day => {
      if (day.dayNumber === activeDayTab) {
        return { ...day, slots: [...day.slots, newSlot] };
      }
      return day;
    });

    updateDaysAndBudget(updatedDays);
    setCustomActName("");
    setCustomActCost("");
    setShowAddActivityModal(false);
    fireConfetti();
  };

  const exportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      destination: destination.name,
      userInput,
      budgetSummary,
      itineraryDays
    }, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${destination.name.replace(/[^a-zA-Z0-9]/g, '_')}_Itinerary.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const activeDay = itineraryDays.find(d => d.dayNumber === activeDayTab) || itineraryDays[0];

  const handleDaySelect = (dayNumber) => {
    setActiveDayTab(dayNumber);
    requestAnimationFrame(() => {
      dayTimelineRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div className="itinerary-dashboard-container animate-fade-in">
      {/* Navigation Header Bar */}
      <div className="dashboard-top-nav no-print">
        <button className="btn-secondary" onClick={onBackToDestinations}>
          <ArrowLeft size={16} /> Choose Another Destination
        </button>

        <div className="top-nav-actions">
          <button className="btn-outline" onClick={onOpenRules}>
            <Cpu size={16} /> Rule Transparency Log
          </button>
          <button className="btn-secondary" onClick={exportJSON}>
            <Download size={16} /> Export JSON
          </button>
          <button className="btn-primary-action" onClick={onExportPDF}>
            <Printer size={16} /> Print / Export PDF
          </button>
        </div>
      </div>

      {/* Main Destination Hero Summary Card */}
      <div className="hero-summary-card">
        <img
          className="hero-bg-overlay"
          src={destination.heroImage}
          alt=""
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = FALLBACK_DESTINATION_IMAGE;
          }}
        />
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={14} /> Personalized Rule-Based Itinerary
          </div>
          <h1>{destination.name}</h1>
          <p className="hero-subtitle"><MapPin size={14} /> {destination.region} • {userInput.durationDays} Days • {userInput.travelers} Traveler(s)</p>

          <div className="hero-quick-chips">
            <span className="hero-chip"><Calendar size={14} /> {userInput.durationDays} Days Itinerary</span>
            <span className="hero-chip"><Wallet size={14} /> Transport: {(userInput.transportPref || 'train').toUpperCase()}</span>
            <span className="hero-chip"><Wallet size={14} /> Stay: {(userInput.accommodationPref || 'budget').toUpperCase()}</span>
          </div>
        </div>
      </div>

      {/* Budget Allocation & Rule Constraint Optimizer Panel */}
      <div className="budget-dashboard-card">
        <div className="card-header-flex">
          <div>
            <h3><Wallet size={18} /> Budget Allocation & Cost Breakdown</h3>
            <p>Calculated line items based on transport, accommodation multiplier, activities, and food rules.</p>
          </div>
          <div className={`budget-status-pill ${budgetSummary.isOverBudget ? "status-over" : "status-ok"}`}>
            {budgetSummary.isOverBudget ? (
              <><AlertTriangle size={16} /> Over Budget by ₹{budgetSummary.diff.toLocaleString()}</>
            ) : (
              <><CheckCircle2 size={16} /> On Budget (Saved ₹{Math.abs(budgetSummary.diff).toLocaleString()})</>
            )}
          </div>
        </div>

        {/* Budget Progress Visual Gauge */}
        <div className="budget-gauge-area">
          <div className="gauge-labels">
            <span>Total Estimated Cost: <strong>₹{budgetSummary.grandTotal.toLocaleString()}</strong></span>
            <span>User Target Budget: <strong>₹{budgetSummary.userBudget.toLocaleString()}</strong></span>
          </div>
          <div className="progress-bar-track">
            <div 
              className={`progress-bar-fill ${budgetSummary.isOverBudget ? "over" : "ok"}`}
              style={{ width: `${Math.min((budgetSummary.grandTotal / (budgetSummary.userBudget || 1)) * 100, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Itemized Categories Grid */}
        <div className="cost-breakdown-grid">
          <div className="cost-item">
            <span className="cost-label">Transport ({userInput.transportPref})</span>
            <span className="cost-val">₹{budgetSummary.transport.toLocaleString()}</span>
          </div>
          <div className="cost-item">
            <span className="cost-label">Accommodation ({userInput.accommodationPref})</span>
            <span className="cost-val">₹{budgetSummary.accommodation.toLocaleString()}</span>
          </div>
          <div className="cost-item">
            <span className="cost-label">Food & Dining (Est.)</span>
            <span className="cost-val">₹{budgetSummary.food.toLocaleString()}</span>
          </div>
          <div className="cost-item">
            <span className="cost-label">Activities & Entry Fees</span>
            <span className="cost-val">₹{budgetSummary.activities.toLocaleString()}</span>
          </div>
          <div className="cost-item">
            <span className="cost-label">Emergency & Misc (8%)</span>
            <span className="cost-val">₹{budgetSummary.misc.toLocaleString()}</span>
          </div>
        </div>

        {/* Constraint Optimizer Rule Log Panel */}
        {optimizationLogs && optimizationLogs.length > 0 && (
          <div className="optimization-log-box">
            <div className="opt-box-title">
              <Cpu size={16} /> AI Constraint Solver Actions:
            </div>
            <ul>
              {optimizationLogs.map((log, idx) => (
                <li key={idx}>{log}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Day-Wise Itinerary Section */}
      <div className="itinerary-section-card">
        <div className="itinerary-header-flex">
          <div>
            <h3><Calendar size={18} /> Day-by-Day Travel Schedule</h3>
            <p>Tailored morning, afternoon, and evening slots fitting duration limits and activity priority scores.</p>
          </div>
          <button className="btn-secondary no-print" onClick={() => setShowAddActivityModal(true)}>
            <Plus size={16} /> Add Custom Activity
          </button>
        </div>

        {/* Day Tabs */}
        <div className="day-tabs no-print" role="tablist" aria-label="Itinerary day">
          {itineraryDays.map(d => (
            <button
              key={d.dayNumber}
              id={`itinerary-day-tab-${d.dayNumber}`}
              type="button"
              role="tab"
              aria-selected={activeDay?.dayNumber === d.dayNumber}
              aria-controls="active-day-schedule"
              className={`day-tab-btn ${activeDay?.dayNumber === d.dayNumber ? "active" : ""}`}
              onClick={() => handleDaySelect(d.dayNumber)}
            >
              Day {d.dayNumber}
            </button>
          ))}
        </div>

        {/* Timeline Slots for Active Day (or all days in print mode) */}
        <div
          className="day-timeline"
          id="active-day-schedule"
          role="tabpanel"
          aria-labelledby={activeDay ? `itinerary-day-tab-${activeDay.dayNumber}` : undefined}
          ref={dayTimelineRef}
          tabIndex={-1}
        >
          <div className="day-title-banner">
            <h4>{activeDay?.title}</h4>
            <span className="slot-count-badge">{activeDay?.slots.length} Scheduled Items</span>
          </div>

          <div className="slots-list">
            {activeDay?.slots.map((slot, sIdx) => (
              <div key={sIdx} className="slot-card">
                <div className="slot-time-col">
                  <Clock size={16} />
                  <span>{slot.timeSlot}</span>
                </div>

                <div className="slot-main-col">
                  <div className="slot-top-row">
                    <h5 className="slot-title">{slot.title}</h5>
                    <span className="category-pill">{slot.category}</span>
                  </div>

                  <p className="slot-desc">{slot.description}</p>

                  <div className="slot-meta-row">
                    <span className="meta-tag">Duration: {slot.duration}</span>
                    <span className="meta-tag">Cost: ₹{slot.cost.toLocaleString()} / person</span>
                  </div>
                </div>

                {!slot.isSystemSlot && (
                  <button 
                    className="delete-slot-btn no-print" 
                    title="Remove Activity"
                    onClick={() => handleRemoveSlot(activeDay.dayNumber, sIdx)}
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Custom Activity Modal */}
      {showAddActivityModal && (
        <div className="modal-overlay">
          <div className="modal-content animate-fade-in">
            <div className="modal-header">
              <h3>Add Custom Activity to Day {activeDayTab}</h3>
              <button className="close-btn" onClick={() => setShowAddActivityModal(false)}>×</button>
            </div>
            <form onSubmit={handleAddCustomActivity} className="modal-body">
              <div className="form-group">
                <label>Activity Title</label>
                <input
                  type="text"
                  placeholder="e.g. Visit Sunset Viewpoint / Local Shopping"
                  value={customActName}
                  onChange={(e) => setCustomActName(e.target.value)}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label>Time Slot</label>
                <select 
                  value={customActSlot} 
                  onChange={(e) => setCustomActSlot(e.target.value)}
                  className="form-input"
                >
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>

              <div className="form-group">
                <label>Estimated Cost (INR per person)</label>
                <input
                  type="number"
                  placeholder="0"
                  value={customActCost}
                  onChange={(e) => setCustomActCost(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-secondary" onClick={() => setShowAddActivityModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary-action">
                  Add Activity & Recalculate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
