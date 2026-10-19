import React, { useState } from "react";
import { Sparkles, MapPin, ChevronDown, ChevronUp, Cpu, ArrowRight, ShieldCheck } from "lucide-react";
import "./DestinationCards.css";

const FALLBACK_DESTINATION_IMAGE = "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1000&q=80";

export default function DestinationCards({ recommendations, onSelectDestination, onBackToWizard }) {
  const [expandedLogId, setExpandedLogId] = useState(null);

  const toggleRuleLog = (destId, e) => {
    e.stopPropagation();
    setExpandedLogId(expandedLogId === destId ? null : destId);
  };

  return (
    <div className="destinations-container animate-fade-in">
      <div className="destinations-header">
        <div>
          <span className="section-badge"><Cpu size={14} /> Rule Engine Scoring Active</span>
          <h2>Recommended Destinations</h2>
          <p>Scored and sorted by Rule-Based AI logic considering your budget, duration fit, and travel interests.</p>
        </div>
        <button className="btn-secondary" onClick={onBackToWizard}>
          Edit Preferences
        </button>
      </div>

      <div className="destinations-grid">
        {recommendations.map((dest, idx) => {
          const isTopMatch = idx === 0;
          const isExpanded = expandedLogId === dest.id;

          return (
            <div key={dest.id} className={`dest-card ${isTopMatch ? "top-match" : ""}`}>
              {isTopMatch && (
                <div className="top-match-badge">
                  <Sparkles size={14} /> AI #1 Top Choice
                </div>
              )}

              <div className="dest-image-container">
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  className="dest-hero-img"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = FALLBACK_DESTINATION_IMAGE;
                  }}
                />
                <div className="match-score-pill">
                  <span className="score-num">{dest.matchPercentage}%</span>
                  <span className="score-label">Rule Match</span>
                </div>
              </div>

              <div className="dest-card-body">
                <div className="dest-title-row">
                  <h3>{dest.name}</h3>
                  <span className="dest-region"><MapPin size={12} /> {dest.region}</span>
                </div>

                <p className="dest-desc">{dest.description}</p>

                <div className="dest-tags">
                  {dest.category.map(cat => (
                    <span key={cat} className="category-pill">{cat}</span>
                  ))}
                  <span className="tier-pill">{dest.budgetTier} Tier</span>
                </div>

                <div className="dest-quick-stats">
                  <div>
                    <span className="stat-label">Best Months</span>
                    <span className="stat-val">{dest.bestMonths.slice(0, 4).join(", ")}</span>
                  </div>
                  <div>
                    <span className="stat-label">Base Cost / Day</span>
                    <span className="stat-val">₹{dest.baseDailyCostPerPerson.toLocaleString()} / person</span>
                  </div>
                </div>

                {/* Rule Transparency Drawer Toggle */}
                <div 
                  className={`rule-drawer-toggle ${isExpanded ? "active" : ""}`} 
                  onClick={(e) => toggleRuleLog(dest.id, e)}
                  title="Expand IF-THEN Rule Evaluation Trace"
                >
                  <span className="drawer-title-flex">
                    <Cpu size={14} /> Why Recommended? ({dest.ruleLogs.length} Rules Evaluated)
                  </span>
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>

                {isExpanded && (
                  <div className="rule-logs-drawer animate-fade-in">
                    <div className="drawer-header-text">
                      <ShieldCheck size={14} /> Deterministic Rule Trace Log:
                    </div>
                    {dest.ruleLogs.map((log, lIdx) => (
                      <div key={lIdx} className={`log-item log-${log.type.toLowerCase()}`}>
                        <span className="log-type-badge">{log.type}</span>
                        <span className="log-msg">{log.message}</span>
                      </div>
                    ))}
                  </div>
                )}

                <button 
                  className="btn-primary-action"
                  onClick={() => onSelectDestination(dest)}
                >
                  Generate Day-Wise Itinerary <ArrowRight size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
