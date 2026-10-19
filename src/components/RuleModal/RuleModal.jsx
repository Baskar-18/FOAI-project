import React, { useState } from "react";
import { Cpu, ShieldCheck, Layers, X, Sparkles, BookOpen } from "lucide-react";
import { RULES_DOCUMENTATION } from "../../data/travelKnowledgeBase";
import "./RuleModal.css";

export default function RuleModal({ isOpen, onClose, activeLogs = [] }) {
  const [activeTab, setActiveTab] = useState("rules"); // "rules", "architecture", "activeLogs"

  if (!isOpen) return null;

  return (
    <div className="rule-modal-overlay animate-fade-in">
      <div className="rule-modal-container">
        {/* Modal Header */}
        <div className="rule-modal-header">
          <div className="modal-title-box">
            <div className="cpu-badge">
              <Cpu size={22} className="spin-subtle" />
            </div>
            <div>
              <h3>Rule-Based AI Engine & System Transparency</h3>
              <p>Deterministic IF-THEN Rules, Constraint Solvers & Explainable Architecture (No ML/DL)</p>
            </div>
          </div>
          <button className="rule-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="rule-modal-tabs">
          <button 
            className={`tab-btn ${activeTab === "rules" ? "active" : ""}`}
            onClick={() => setActiveTab("rules")}
          >
            <ShieldCheck size={16} /> Predefined IF-THEN Rules ({RULES_DOCUMENTATION.length})
          </button>
          <button 
            className={`tab-btn ${activeTab === "architecture" ? "active" : ""}`}
            onClick={() => setActiveTab("architecture")}
          >
            <Layers size={16} /> System Architecture Flow
          </button>
          {activeLogs.length > 0 && (
            <button 
              className={`tab-btn ${activeTab === "activeLogs" ? "active" : ""}`}
              onClick={() => setActiveTab("activeLogs")}
            >
              <Sparkles size={16} /> Active Session Traces ({activeLogs.length})
            </button>
          )}
        </div>

        {/* Modal Body */}
        <div className="rule-modal-body">
          {/* TAB 1: Predefined IF-THEN Rules */}
          {activeTab === "rules" && (
            <div className="tab-content animate-fade-in">
              <div className="info-banner">
                <BookOpen size={20} />
                <div>
                  <strong>Why Rule-Based AI?</strong>
                  <p>Rule-Based AI guarantees 100% transparent, predictable, and budget-safe travel planning without hallucinations or black-box predictions.</p>
                </div>
              </div>

              <div className="rules-list-grid">
                {RULES_DOCUMENTATION.map((rule) => (
                  <div key={rule.id} className="rule-card">
                    <div className="rule-card-header">
                      <span className="rule-id-pill">{rule.id}</span>
                      <span className="rule-weight-badge">{rule.weight}</span>
                    </div>
                    <h4>{rule.name}</h4>
                    <div className="rule-code-box">
                      <code>{rule.condition}</code>
                    </div>
                    <p className="rule-desc">{rule.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: System Architecture Diagram */}
          {activeTab === "architecture" && (
            <div className="tab-content animate-fade-in">
              <div className="arch-flow-wrapper">
                <h4>System Architecture Pipeline</h4>
                <p>Simple end-to-end data processing workflow for personalized trip plan generation:</p>

                <div className="arch-nodes-container">
                  <div className="arch-node">
                    <div className="node-step">1</div>
                    <div className="node-box">
                      <h5>USER INPUT</h5>
                      <span>Budget, Days, Travelers, Interests, Transport & Stay Prefs</span>
                    </div>
                  </div>

                  <div className="arch-arrow">↓</div>

                  <div className="arch-node">
                    <div className="node-step">2</div>
                    <div className="node-box">
                      <h5>INPUT PROCESSING</h5>
                      <span>Sanitize, validate budget bounds & parse interest arrays</span>
                    </div>
                  </div>

                  <div className="arch-arrow">↓</div>

                  <div className="arch-node">
                    <div className="node-step">3</div>
                    <div className="node-box highlight-node">
                      <h5>RULE-BASED AI ENGINE</h5>
                      <span>IF-THEN Rules & Multi-Preference Scoring Algorithm</span>
                    </div>
                  </div>

                  <div className="arch-split-row">
                    <div className="split-branch">
                      <div className="arch-arrow">↙</div>
                      <div className="node-box sub-node">
                        <h5>DESTINATION SCORING</h5>
                        <span>Rank destinations by tag match & daily cost ratio</span>
                      </div>
                    </div>
                    <div className="split-branch">
                      <div className="arch-arrow">↘</div>
                      <div className="node-box sub-node">
                        <h5>CONSTRAINT SOLVER</h5>
                        <span>Auto-prune P3 activities if cost exceeds user budget</span>
                      </div>
                    </div>
                  </div>

                  <div className="arch-arrow">↓</div>

                  <div className="arch-node">
                    <div className="node-step">4</div>
                    <div className="node-box">
                      <h5>ITINERARY GENERATOR</h5>
                      <span>Arrange activities into Morning, Afternoon & Evening slots</span>
                    </div>
                  </div>

                  <div className="arch-arrow">↓</div>

                  <div className="arch-node">
                    <div className="node-step">5</div>
                    <div className="node-box">
                      <h5>BUDGET CALCULATOR</h5>
                      <span>Line item breakdown (Transport, Stay, Food, Activities, Misc)</span>
                    </div>
                  </div>

                  <div className="arch-arrow">↓</div>

                  <div className="arch-node">
                    <div className="node-step">6</div>
                    <div className="node-box final-node">
                      <h5>PERSONALIZED TRIP OUTPUT</h5>
                      <span>Interactive Timeline, Budget Gauge, PDF Export & Rules Log</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Active Session Logs */}
          {activeTab === "activeLogs" && (
            <div className="tab-content animate-fade-in">
              <div className="active-logs-list">
                <h4>Rule Firing Traces in Current Session</h4>
                {activeLogs.map((log, idx) => (
                  <div key={idx} className={`trace-item log-${log.type?.toLowerCase() || 'pass'}`}>
                    <span className="trace-badge">{log.type || 'INFO'}</span>
                    <span className="trace-msg">{log.message || log}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
