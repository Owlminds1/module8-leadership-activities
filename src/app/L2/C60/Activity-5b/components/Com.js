"use client";
import { useState } from "react";

const items = [
  {
    id: 1,
    name: "Mia gets money regularly, even before selling each lunchbox",
    icon: ""
  },
  {
    id: 2,
    name: "Mia has to worry more about whether students will buy lunchboxes.",
    icon: ""
  },
  {
    id: 3,
    name: "Mia can plan how much food and ingredients to prepare",
    icon: ""
  },
  {
    id: 4,
    name: "Mia has to pay extra rent for each subscription",
    icon: ""
  },
  {
    id: 5,
    name: "Mia can offer a small discount and still make more money in the long run.",
    icon: ""
  },
  {
    id: 6,
    name: "Mia will never need to advertise her lunchboxes again.",
    icon: ""
  }
];

const subscriptionOptions = [
  "True benefit of subscriptions",
  "Not a true benefit subscriptions"
];

const answerKey = {
  1: "True benefit of subscriptions", // Magazines and newspapers
  2: "Not a true benefit subscriptions", // Shoes
  3: "True benefit of subscriptions", // Fruit and vegetables
  4: "Not a true benefit subscriptions", // School bag
  5: "True benefit of subscriptions", // Online cartoons apps, like youtube
  6: "Not a true benefit subscriptions" // Birthday dress
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