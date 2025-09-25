"use client";
import { useState } from "react";

const items = [
  {
    id: 1,
    name: "Hotstar Disney",
    icon: ""
  },
  {
    id: 2,
    name: "Domino’s Buy 1 Get 1 Free Offer",
    icon: ""
  },
  {
    id: 3,
    name: "Nike Air Jordans",
    icon: ""
  },
  {
    id: 4,
    name: "Youtube",
    icon: ""
  },
  {
    id: 5,
    name: "Amazon Prime",
    icon: ""
  },
  {
    id: 6,
    name: "Burger King “2 for $5 Whopper Deal",
    icon: ""
  },
  {
    id: 7,
    name: "LEGO Collector’s Sets",
    icon: ""
  }
];

const subscriptionOptions = [
  "Subscription",
  "Discount pricing strategy",
  "Premium Pricing",
  "Freemium",
];

const answerKey = {
  1: "Subscription", 
  2: "Discount pricing strategy", 
  3: "Premium Pricing", 
  4: "Freemium", 
  5: "Subscription", 
  6: "Discount pricing strategy",
  7: "Premium Pricing"
};

export default function Com() {
  const [selectedValues, setSelectedValues] = useState({});
  const [showAnswers, setShowAnswers] = useState(false);

  const handleDropdownChange = (itemId, value) => {
    setSelectedValues(prev => ({
      ...prev,
      [itemId]: value
    }));
  };

  const checkAnswers = () => {
    setShowAnswers(true);
  };

  const getItemColor = (itemId) => {
    if (!showAnswers) return "bg-white border-gray-200";
    
    const selectedValue = selectedValues[itemId];
    const correctAnswer = answerKey[itemId];
    
    if (selectedValue === correctAnswer) {
      return "bg-green-100 border-green-500";
    } else {
      return "bg-red-100 border-red-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        
        
        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.id} className={`rounded-lg shadow-md p-6 border-2 ${getItemColor(item.id)}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-xl font-medium text-gray-700">{item.name}</span>
                </div>
                
                <select
                  value={selectedValues[item.id] || ""}
                  onChange={(e) => handleDropdownChange(item.id, e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 min-w-[250px]"
                >
                  <option value="">Select an option</option>
                  {subscriptionOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-5">
          <button
            onClick={checkAnswers}
            className="px-6 py-3 rounded-lg font-semibold text-white transition-colors bg-blue-600 hover:bg-blue-700"
          >
            Check Answers
          </button>
        </div>

      </div>
    </div>
  );
}