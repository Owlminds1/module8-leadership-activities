"use client";
import { useState } from "react";

const contentData = {
  steps: [
    {
      id: 0,
      type: "case",
      title: "Case 1: Movie Tickets",
      content: "A cinema offers half-price tickets on Mondays. Which pricing strategy is this? Why?"
    },
    {
      id: 1,
      type: "case",
      title: "Case 2: School Canteen Sandwiches",
      content: "One stall sells sandwiches for $5. Another stall across the street also sells them for $5. Which pricing strategy is this? Why?"
    },
    {
      id: 2,
      type: "case",
      title: "Case 3: Branded Sneakers",
      content: "Plain sneakers cost $20, but Nike sneakers with a logo cost $90. Which pricing strategy is this? Why?"
    }
  ]
};

const renderStep = (stepData) => {
  switch (stepData.type) {
    case "case":
      return (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8 text-blue-600">{stepData.title}</h1>
          <div className="bg-purple-50 p-8 rounded-xl border-2 border-purple-200 max-w-4xl mx-auto">
            <p className="text-2xl font-semibold text-purple-800 leading-relaxed">{stepData.content}</p>
          </div>
        </div>
      );
    
    default:
      return <p>{stepData.content}</p>;
  }
};

export default function Com() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  const currentStepData = contentData.steps[step];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-6xl bg-white shadow-xl rounded-2xl p-8">
        {renderStep(currentStepData)}

        {step < contentData.steps.length - 1 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={nextStep}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}