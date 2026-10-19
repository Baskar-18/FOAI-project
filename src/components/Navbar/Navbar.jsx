import React from "react";
import { Compass, Cpu, RefreshCw, Sun, Moon } from "lucide-react";
import "./Navbar.css";

export default function Navbar({ onReset, onOpenRules, activeStep, darkMode, setDarkMode }) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={onReset} title="VoyageAI Holidays - Reset to step 1">
          <div className="logo-icon">
            <Compass size={20} />
          </div>
          <div className="brand-text">
            <span className="brand-title">EscapeEra</span>
            <span className="brand-badge">Holidays</span>
          </div>
        </div>

        <nav className="navbar-actions">
          {activeStep > 1 && (
            <button className="nav-btn btn-nav-secondary" onClick={onReset} aria-label="New Plan" title="New Plan">
              <RefreshCw size={14} />
              <span className="new-plan-text">New Plan</span>
            </button>
          )}

          <button 
            className="nav-btn btn-nav-rule" 
            onClick={onOpenRules} 
            aria-label="Rule Transparency Log" 
            title="View Rule Transparency Log"
          >
            <Cpu size={15} />
            <span className="rule-btn-text">Rule Transparency Log</span>
          </button>

          <button 
            className="theme-toggle-btn" 
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle Light/Dark Theme"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={17} className="theme-icon-sun" /> : <Moon size={17} className="theme-icon-moon" />}
          </button>
        </nav>
      </div>
    </header>
  );
}
