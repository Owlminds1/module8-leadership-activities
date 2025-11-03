"use client";
import { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";
import S3 from "../assets/s3.png";
const contentData = {
  steps: [
    {
      id: 0,
      type: "case",
      title: "Case 1",
      image: S1,
      content: "A cinema offers half-price tickets on Mondays.",
      answer: "Discount pricing"
    },
    {
      id: 1,
      type: "case",
      title: "Case 2",
      image: S2,
      content: "A stall sells sandwiches for $5. Another stall across the street also sells them for $5.",
      answer: "Competitive pricing"
    },
    {
      id: 2,
      type: "case",
      title: "Case 3",
      image: S3,
      content: "A cap costs $10, but an Adidas cap with a Mercedes Formula 1 team driver cap costs $90.",
      answer: "Premium pricing"
    }
  ]
};

const strategyOptions = [
  "Discount pricing",
  "Premium pricing",
  "Competitive pricing"
];

const renderStep = (stepData, selected, handleSelect, feedback) => {
  switch (stepData.type) {
    case "case":
      return (
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-center text-blue-800 mb-2">Pricing Strategy Detective</h1>
          <div className="text-lg text-gray-700 text-center mb-8">Which pricing strategy is this? Why? </div>
          <h2 className="text-2xl font-bold mb-4 text-blue-700">{stepData.title}</h2>
          <div className="flex flex-col items-center">
            <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 max-w-2xl mx-auto mb-6">
              <p className="text-xl font-semibold text-purple-800 leading-relaxed">{stepData.content}</p>
            </div>
            <Image src={stepData.image} alt="case" className="w-[350px] mb-4" />
            <div className="flex flex-row gap-4 justify-center mb-4">
              {strategyOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  disabled={!!feedback && feedback === "Correct!"}
                  className={`px-4 py-2 rounded-lg font-bold shadow-md transition-all duration-150 border-2 border-blue-300 ${selected === option ? "bg-blue-600 text-white" : "bg-white text-blue-600 hover:bg-blue-100"} ${feedback === "Correct!" ? "opacity-60 cursor-not-allowed" : ""}`}
                >
                  {option}
                </button>
              ))}
            </div>
            {selected && (
              <div className={`mt-2 text-xl font-bold ${feedback === "Correct!" ? "text-green-700" : "text-red-600"}`}>{feedback ? feedback : `You selected: ${selected}`}</div>
            )}
          </div>
        </div>
      );
    default:
      return <p>{stepData.content}</p>;
  }
};

export default function Com() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState("");

  const isComplete = step >= contentData.steps.length;
  const currentStepData = isComplete ? null : contentData.steps[step];

  const handleSelect = (option) => {
    setSelected(option);
    if (option === currentStepData.answer) {
      setFeedback("Correct!");
      setTimeout(() => {
        setStep((prev) => prev + 1);
        setSelected("");
        setFeedback("");
      }, 700);
    } else {
      setFeedback("Try again");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-8xl bg-white shadow-xl rounded-2xl p-6">
        {isComplete ? (
          <div className="text-3xl text-green-700 text-center font-bold py-4">Great job!</div>
        ) : (
          renderStep(currentStepData, selected, handleSelect, feedback)
        )}
      </div>
    </div>
  );
}