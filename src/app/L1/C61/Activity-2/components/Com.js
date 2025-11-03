"use client";
import { useState } from "react";

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);
  // SCENARIOS DATA
  const scenarios = [
    {
      title: "Waiting apples",
      sentence: "Maya bought apples at $3 and wanted to sell at $4. No one bought them for 2 days, but on the 3rd day, buyers turned up and she sold them all at $4.",
      correct: "Yes",
      feedback: "Yes, she made a profit by waiting a bit."
    },
    {
      title: "Mango Break-Even",
      sentence: "Maya bought mangoes for $3. They were going rotten, so she sold them for $3.",
      correct: "Yes",
      feedback: "Yes, she avoided losing. Break-even is better than losing it all."
    },
    {
      title: "Quick Sale Profit",
      sentence: "Maya bought bananas for $1 and sold them immediately at $2.",
      correct: "Yes",
      feedback: "Yes, she made a quick profit."
    },
    {
      title: "Waiting Too Long",
      sentence: "Maya bought grapes for $2 and waited 5 days to sell at $3, but they got spoiled. She could only sell at $1.",
      correct: "No",
      feedback: "No, waiting too long led to losing a higher percentage of money."
    },
    {
      title: "Perishable Item Quick Sale",
      sentence: "Maya bought yogurt for $3 and by night nobody purchased it so she reduced the price to $2 and it got sold.",
      correct: "Yes",
      feedback: "Yes, the Perishable Item can get bad faster hence its good decision to avoid losing."
    },
    {
      title: "Small Profit First",
      sentence: "Maya sold a small juice box for $1 even though it cost $1. Later, the customer bought a bigger pack too.",
      correct: "Yes",
      feedback: "Yes, sometimes selling small first on cost to cost can lead to more and big sales."
    },
    {
      title: "Price Too High",
      sentence: "Maya made apple juice which cost her $2. She tried selling at $4 for 3 days but no one bought. She reduced the price to $3.",
      correct: "Yes",
      feedback: "Yes, she made some profit instead of waiting too long."
    },
    {
      title: "Big Bundle Profit",
      sentence: "Maya made a fruit basket for $5 and sold it as a combo with juice for $8.",
      correct: "Yes",
      feedback: "Yes, bundling items can increase profit."
    }
  ];

  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setShowFeedback(true);
    // Only disable buttons if correct answer is chosen
    // Otherwise, allow re-attempt
  };

  const handleNext = () => {
    setScenarioIdx(scenarioIdx + 1);
    setSelected(null);
    setShowFeedback(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl p-8">
          <h1 className="text-3xl font-bold mb-4 text-purple-800">Decision Making with Maya</h1>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-6 max-w-2xl mx-auto">
            <p className="text-lg text-purple-900 font-semibold">Read each case and decide if Maya made a good decision. Give reasons for your choice.</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">{scenarios[scenarioIdx].title}</h2>
            <p className="text-xl text-gray-700 mb-6">{scenarios[scenarioIdx].sentence}</p>
            <p className="text-xl font-semibold mb-4">Is it a good decision?</p>
            <div className="flex justify-center gap-8 mb-6">
              <button
                className={`px-8 py-3 rounded-2xl font-bold text-white text-xl shadow ${selected === "Yes" ? "bg-green-600" : "bg-green-400 hover:bg-green-600"}`}
                onClick={() => handleSelect("Yes")}
                disabled={showFeedback && selected === scenarios[scenarioIdx].correct}
              >
                Yes
              </button>
              <button
                className={`px-8 py-3 rounded-2xl font-bold text-white text-xl shadow ${selected === "No" ? "bg-red-600" : "bg-red-400 hover:bg-red-600"}`}
                onClick={() => handleSelect("No")}
                disabled={showFeedback && selected === scenarios[scenarioIdx].correct}
              >
                No
              </button>
            </div>
            {showFeedback && (
              <div className="mb-6">
                {selected === scenarios[scenarioIdx].correct ? (
                  <div className="bg-green-100 p-6 rounded-xl max-w-xl mx-auto">
                    <span className="text-green-800 text-xl font-bold">{scenarios[scenarioIdx].feedback}</span>
                  </div>
                ) : (
                  <span className="text-red-700 text-xl font-bold">Try again.</span>
                )}
              </div>
            )}
            {showFeedback && selected === scenarios[scenarioIdx].correct && scenarioIdx < scenarios.length - 1 && (
              <button
                className="mt-4 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-xl"
                onClick={handleNext}
              >
                Next
              </button>
            )}
            {showFeedback && selected === scenarios[scenarioIdx].correct && scenarioIdx === scenarios.length - 1 && (
              <div className="mt-8 text-3xl font-bold text-green-700">Good Job! You have completed all cases.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  };

// End of component