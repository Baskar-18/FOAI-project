import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import PlannerWizard from "./components/PlannerWizard/PlannerWizard";
import DestinationCards from "./components/DestinationCards/DestinationCards";
import ItineraryDashboard from "./components/ItineraryDashboard/ItineraryDashboard";
import RuleModal from "./components/RuleModal/RuleModal";

import { 
  evaluateDestinations, 
  optimizeConstraintsAndBudget, 
  generateDayWiseItinerary 
} from "./utils/ruleEngine";

import "./App.css";

const getDefaultTripDates = () => {
  const start = new Date();
  start.setDate(start.getDate() + 7);
  const end = new Date(start);
  end.setDate(end.getDate() + 3);
  const toDateString = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  return { tripStartDate: toDateString(start), tripEndDate: toDateString(end) };
};

function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState(false);

  // Active step flow: 1 = Wizard, 2 = Destination Grid, 3 = Itinerary Dashboard
  const [activeStep, setActiveStep] = useState(1);

  // User input preferences
  const [userInput, setUserInput] = useState({
    ...getDefaultTripDates(),
    originLocation: "Delhi",
    durationDays: 4,
    travelers: 2,
    budget: 35000,
    transportPref: "train",
    accommodationPref: "budget",
    interests: ["Nature", "Adventure", "Culture"]
  });

  // Rule engine outputs
  const [recommendations, setRecommendations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [itineraryDays, setItineraryDays] = useState([]);
  const [budgetSummary, setBudgetSummary] = useState({});
  const [optimizationLogs, setOptimizationLogs] = useState([]);
  const [activeRuleLogs, setActiveRuleLogs] = useState([]);

  // Rule modal open state
  const [isRuleModalOpen, setIsRuleModalOpen] = useState(false);

  // Sync theme attribute to <html> tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [darkMode]);

  // Step 1 -> Step 2: Run Rule-Based AI Engine on form submit
  const handleWizardSubmit = () => {
    const scoredDestinations = evaluateDestinations(userInput);
    setRecommendations(scoredDestinations);

    // Collect trace logs across top recommendations for transparency
    const combinedLogs = [];
    scoredDestinations.slice(0, 3).forEach(dest => {
      combinedLogs.push(...dest.ruleLogs);
    });
    setActiveRuleLogs(combinedLogs);

    setActiveStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Step 2 -> Step 3: Pick destination and run Constraint Solver & Scheduler
  const handleSelectDestination = (dest) => {
    setSelectedDestination(dest);

    // Run AI Constraint Solver to check budget compatibility & prune optional activities if needed
    const { optimizedActivities, budgetSummary: bSummary, optimizationLogs: optLogs } = optimizeConstraintsAndBudget(userInput, dest);
    setBudgetSummary(bSummary);
    setOptimizationLogs(optLogs);

    // Generate day-wise schedule
    const days = generateDayWiseItinerary(userInput, dest, optimizedActivities);
    setItineraryDays(days);

    setActiveStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset workflow back to Wizard
  const handleResetPlan = () => {
    setActiveStep(1);
    setSelectedDestination(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Export PDF / Print handler
  const handleExportPDF = () => {
    window.print();
  };

  return (
    <div className="app-container">
      {/* Top Navbar */}
      <Navbar 
        onReset={handleResetPlan}
        onOpenRules={() => setIsRuleModalOpen(true)}
        activeStep={activeStep}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content Area */}
      <main className="app-main">
        <div className="app-shell">
          {activeStep === 1 && (
            <PlannerWizard 
              userInput={userInput}
              setUserInput={setUserInput}
              onSubmitForm={handleWizardSubmit}
            />
          )}

          {activeStep === 2 && (
            <DestinationCards 
              recommendations={recommendations}
              onSelectDestination={handleSelectDestination}
              onBackToWizard={() => setActiveStep(1)}
            />
          )}

          {activeStep === 3 && selectedDestination && (
            <ItineraryDashboard 
              destination={selectedDestination}
              userInput={userInput}
              itineraryDays={itineraryDays}
              setItineraryDays={setItineraryDays}
              budgetSummary={budgetSummary}
              setBudgetSummary={setBudgetSummary}
              optimizationLogs={optimizationLogs}
              onBackToDestinations={() => setActiveStep(2)}
              onOpenRules={() => setIsRuleModalOpen(true)}
              onExportPDF={handleExportPDF}
            />
          )}
        </div>
      </main>

      {/* Rule Transparency & Architecture Modal */}
      <RuleModal 
        isOpen={isRuleModalOpen}
        onClose={() => setIsRuleModalOpen(false)}
        activeLogs={activeRuleLogs}
      />

      {/* Footer */}
      <footer className="footer-bar no-print">
        <div className="footer-content">
          <span className="footer-badge">Holidays • Rule-Based Travel Planning System</span>
          <span>Deterministic IF-THEN AI • 100% Transparent Decision Making</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
