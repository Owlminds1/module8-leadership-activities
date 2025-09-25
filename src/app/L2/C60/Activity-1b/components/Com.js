"use client";

import { useState } from "react";

export default function Com() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const options = [
    { price: "$7.00", feedback: "She will make a loss." },
    { price: "$8.00", feedback: "She will make no profit." },
    { price: "$9.00", feedback: "She will make a small profit." },
    { price: "$11.00", feedback: "She will make a bigger profit." }
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowFeedback(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-6">
      <div className="max-w-2xl bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
        If it costs Mia $8 to make one lunchbox, at what price should she sell it? 
        </h1>
        
        <div className="space-y-4 mb-8">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`w-full p-4 text-xl font-semibold rounded-xl border-2 transition-all duration-200 ${
                selectedOption === option
                  ? 'border-yellow-500 bg-yellow-100 text-yellow-800'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-yellow-400 hover:bg-yellow-50'
              }`}
            >
              {option.price}
            </button>
          ))}
        </div>

        {showFeedback && selectedOption && (
          <div className="mt-6 p-4 bg-gray-100 rounded-xl">
            <p className="text-xl font-semibold text-gray-800">
              {selectedOption.price}: {selectedOption.feedback}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}