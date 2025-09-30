"use client";
import { useState } from "react";

const screenData = [
  {
    id: 0,
    title: "Meet Zara. She loves designing colorful water bottles and wants to sell them. But she&apos;s confused about which business model to choose. Let&apos;s help her decide!",
    model: "B2B – Business to Business",
    description: "Zara sells water bottles to shops, gyms, or other businesses.",
    howItWorks: "How it works:",
    howItWorksContent: "Zara produces a batch of water bottles and sells them in bulk to a few businesses."
  },
  {
    id: 1,
    question: "Can you think of the pros of this business model?"
  },
  {
    id: 2,
    pros: [
      "Quick bulk sales: Sell many bottles at once, earn money faster.",
      "Fewer customers: Manage a small number of businesses instead of many individual buyers."
    ],
    cons: [
      "It&apos;s hard to find business contacts as a beginner.",
      "Businesses want large orders, which might be too much for Zara at the start."
    ]
  },
  {
    id: 3,
    model: "B2C – Business to Consumer",
    description: "Zara sells directly to people in her own shop or online store.",
    howItWorks: "How it works:",
    howItWorksContent: "She sets prices and sells bottles one by one to customers."
  },
  {
    id: 4,
    question: "Can you think of the pros of this business model?"
  },
  {
    id: 5,
    pros: [
      "Higher profit per item.",
      "Direct feedback from customers, build loyalty."
    ],
    cons: [
      "High upfront cost for a shop.",
      "Needs to attract many customers, marketing effort required."
    ]
  },
  {
    id: 6,
    model: "Online / Aggregator",
    description: "Zara lists her water bottles on an online platform like Amazon or Flipkart.",
    howItWorks: "How it works:",
    howItWorksContent: "The platform shows her products to many customers automatically."
  },
  {
    id: 7,
    question: "Can you think of the pros of this business model?"
  },
  {
    id: 8,
    pros: [
      "Low startup cost: no shop or huge production needed.",
      "Large audience quickly: sells nationwide or beyond.",
      "The platform brings customers automatically."
    ],
    cons: [
      "Less control over branding.",
      "High competition with other sellers."
    ]
  },
  {
    id: 9,
    question: "Now, thinking about Zara&apos;s resources and goals, which model do you think she should start with? Why?"
  }
];

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const nextScreen = () => {
    if (currentScreen < screenData.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const currentData = screenData[currentScreen];


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl p-8">
          <div className="flex items-center justify-center mb-8">
            <h1 className="text-3xl font-bold text-purple-800 text-center">
              Zara&apos;s Business Model Journey
            </h1>
          </div>

          {currentData.title && (
            <div className="mb-8">
              <div className="bg-purple-100 p-6 rounded-xl">
                <p className="text-xl text-purple-800 leading-relaxed">{currentData.title}</p>
              </div>
            </div>
          )}

          {currentData.model && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">{currentData.model}</h2>
              <p className="text-lg text-gray-700 mb-4">{currentData.description}</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{currentData.howItWorks}</h3>
                <p className="text-gray-700">{currentData.howItWorksContent}</p>
              </div>
            </div>
          )}

          {currentData.question && (
            <div className="mb-8">
              <div className="bg-yellow-100 p-6 rounded-xl">
                <h2 className="text-2xl font-semibold text-yellow-800 mb-4">Question:</h2>
                <p className="text-xl text-yellow-700">{currentData.question}</p>
              </div>
            </div>
          )}

          {currentData.pros && (
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Pros:</h3>
              <ul className="list-disc list-inside space-y-3">
                {currentData.pros.map((pro, index) => (
                  <li key={index} className="text-lg text-green-700 bg-green-50 p-3 rounded-lg">{pro}</li>
                ))}
              </ul>
            </div>
          )}

          {currentData.cons && (
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-red-800 mb-4">Cons:</h3>
              <ul className="list-disc list-inside space-y-3">
                {currentData.cons.map((con, index) => (
                  <li key={index} className="text-lg text-red-700 bg-red-50 p-3 rounded-lg">{con}</li>
                ))}
              </ul>
            </div>
          )}

          {currentScreen < screenData.length - 1 && (
            <div className="flex justify-center">
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