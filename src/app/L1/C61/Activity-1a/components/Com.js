"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [profitLossStep, setProfitLossStep] = useState(0); // 0: instruction, 1-3: situations
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [isLocked, setIsLocked] = useState(false);

  const nextScreen = () => {
    if (currentScreen < 6) {
      setCurrentScreen(currentScreen + 1);
    } else if (currentScreen === 6) {
      setCurrentScreen(7); // move to profit/loss instruction
    } else if (currentScreen === 7 && profitLossStep === 0) {
      setProfitLossStep(1);
    }
  };

  const profitLossSituations = [
    {
      sentence: "A box of apples costs $20, and is sold for $30.",
      answer: "Profit"
    },
    {
      sentence: "A bunch of bananas is bought for $1 and sold at the same price.",
      answer: "Break even"
    },
    {
      sentence: "A box of mangoes is sold at a lower price than cost, as they may go bad if stored longer.",
      answer: "Loss"
    }
  ];

  const handleProfitLossButton = (option) => {
    if (isLocked) return;
    setSelectedOption(option);
    if (option === profitLossSituations[profitLossStep - 1].answer) {
      setFeedback("Correct!");
      setIsLocked(true);
      setTimeout(() => {
        if (profitLossStep < 3) {
          setProfitLossStep(profitLossStep + 1);
          setSelectedOption(null);
          setFeedback("");
          setIsLocked(false);
        } else {
          setCurrentScreen(8); // move to summary or next activity
        }
      }, 700);
    } else {
      setFeedback("Try again.");
    }
  };

  const handleProfitLossSelect = (idx, value) => {
    const updated = [...profitLossAnswers];
    updated[idx] = value;
    setProfitLossAnswers(updated);
    setShowFeedback(true);
  };

  const renderScreen = () => {
    // Interactive profit/loss screens
    if (currentScreen === 7 && profitLossStep > 0 && profitLossStep <= 3) {
      const situation = profitLossSituations[profitLossStep - 1];
      return (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-6 text-blue-800">{situation.sentence}</h1>
          <div className="flex justify-center gap-4 mb-4">
            {["Profit", "Loss", "Break even"].map(option => (
              <button
                key={option}
                disabled={isLocked}
                className={`px-6 py-2 rounded-xl font-bold text-white text-lg shadow ${selectedOption === option ? "bg-purple-600" : "bg-purple-400 hover:bg-purple-600"} ${isLocked ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={() => handleProfitLossButton(option)}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedOption && (
            <div className="mt-2">
              {feedback === "Correct!" ? (
                <span className="text-green-700 font-bold">Correct!</span>
              ) : (
                <span className="text-red-700 font-bold">Try again.</span>
              )}
            </div>
          )}
        </div>
      );
    }
    switch (currentScreen) {
      case 0:
        // ...existing code...
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-purple-800">Meet Maya, the proud owner of a fruit stand.</h1>
            <div className="flex justify-center mb-6">
              <Image src={s1} alt="fruit stand" width={400} height={400} className="rounded-lg" />
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              She buys fruits from the wholesale market and sells them in her neighborhood. Let&apos;s help Maya decide how much she should sell the fruits for! Get her to earn well to keep her business running.
            </p>
          </div>
        );
      case 1:
        // ...existing code...
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-green-800">How can we make profit?</h1>
          </div>
        );
      case 2:
        // ...existing code...
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-green-800">How can we make profit?</h1>
            <div className="bg-green-100 p-8 rounded-lg max-w-2xl mx-auto mt-6">
              <p className="text-xl font-bold text-green-800 mb-4">
                When the selling price is higher than the cost price, we make a profit.
              </p>
            </div>
          </div>
        );
      case 3:
        // ...existing code...
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-red-800">When does a business run in loss?</h1>
          </div>
        );
      case 4:
        // ...existing code...
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-red-800">When does a business run in loss?</h1>
            <div className="bg-red-100 p-8 rounded-lg max-w-2xl mx-auto mt-6">
              <p className="text-xl font-bold text-red-800 mb-4">
                If the cost price is higher than the selling price, the business makes a loss.
              </p>
            </div>
          </div>
        );
      case 5:
        // ...existing code...
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-blue-800">When does a business get breakeven?</h1>
          </div>
        );
      case 6:
        // ...existing code...
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-blue-800">When does a business get breakeven?</h1>
            <div className="bg-blue-100 p-8 rounded-lg max-w-2xl mx-auto mt-6">
              <p className="text-xl font-bold text-blue-800 mb-4">
                When it makes neither profit, nor loss money; it is called breakeven.
              </p>
            </div>
          </div>
        );
      case 7:
        // Instruction screen for profit/loss activity
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-blue-800">Profit or Loss?</h1>
            <div className="bg-blue-50 p-6 rounded-lg max-w-2xl mx-auto mb-4">
              <p className="text-xl text-blue-800 font-semibold">Check each of these situations and decide if Maya is making profit or loss.</p>
            </div>
          
          </div>
        );
      case 8:
        // Show Good Job message
        return (
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8 text-green-700">Good Job!</h1>
            <p className="text-xl text-gray-700">You have completed the activity.</p>
          </div>
        );
      // No default clause
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl p-8">
          {renderScreen()}
          {(currentScreen <= 6 || (currentScreen === 7 && profitLossStep === 0)) && (
            <div className="flex justify-center mt-8">
              <button
                onClick={nextScreen}
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-xl"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}