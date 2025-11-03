"use client";
import { useState, useEffect } from "react";

const businessModelData = [
  {
    id: 0,
    title: "B2B (Business to Business)",
    advantages: [
      "Big orders from other businesses: stable revenue",
      "No need to advertise to many individual customers",
      "Can focus on quality production",
    ],
    disadvantages: [
      "Based on other businesses to sell products",
      "No direct contact with end customers",
      "Profit per item may be lower",
    ]
  },
  {
    id: 1,
    title: "B2C (Business to Consumer)",
    advantages: [
      "Direct profit from customers",
      "Strong customer relationships",
      "Can experiment such as testing new ice-cream flavours people like.",
    ],
    disadvantages: [
      "Require a lot of advertisements to attract customers.",
      "May require more staff for service",
    ]
  },
  {
    id: 2,
    title: "B2C Online",
    advantages: [
      "Sell to people everywhere, not just nearby",
      "Open 24/7",
    ],
    disadvantages: [
      "Need a website/app and tech skills",
      "Shipping and delivery challenges",
      "Require advertisements to attract customers.",
    ]
  },
  {
    id: 3,
    title: "Aggregator",
    advantages: [
      "Offers many choices for customers in a single place",
      "Earns additional money for the products getting sold through other  sellers",
      "Can grow easily without storing or making products",
    ],
    disadvantages: [
      "Based on other sellers for quality and delivery",
      "Requires advertisements to attract customers.",
    ]
  }
];

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentData = businessModelData[currentScreen];

  const handleItemSelect = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(a => a !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleSubmit = () => {
    setShowFeedback(true);
  };

  const handleNext = () => {
    setCurrentScreen(currentScreen + 1);
    setSelectedItems([]);
    setShowFeedback(false);
  };

  // Merge advantages and disadvantages into a single list, shuffled once per screen
  const [mergedItems, setMergedItems] = useState([]);

  // Shuffle function
  function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Shuffle mergedItems only when currentScreen changes
  useEffect(() => {
    const merged = [...currentData.advantages, ...currentData.disadvantages];
    setMergedItems(shuffle(merged));
  }, [currentScreen, currentData.advantages, currentData.disadvantages]);

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">
            {currentData.title}
          </h1>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Select the advantages of this model:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mergedItems.map((item, idx) => (
                <label key={idx} className={`flex items-center bg-green-50 rounded-lg p-4 cursor-pointer border ${selectedItems.includes(item) ? 'border-green-500' : 'border-transparent'} transition-all`}>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item)}
                    onChange={() => handleItemSelect(item)}
                    className="mr-3 w-5 h-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <span className="text-green-800 text-lg">{item}</span>
                </label>
              ))}
            </div>
          </div>
          {showFeedback && (
            <div className="mb-8">
              <div className="bg-green-100 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-green-700 mb-2">Advantages of {currentData.title}:</h3>
                <ul className="list-disc ml-6">
                  {currentData.advantages.map((adv, idx) => (
                    <li key={idx} className="text-green-700 text-lg">{adv}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-100 p-4 rounded-lg mt-4">
                <h3 className="text-xl font-bold text-red-700 mb-2">Disadvantages of {currentData.title}:</h3>
                <ul className="list-disc ml-6">
                  {currentData.disadvantages.map((dis, idx) => (
                    <li key={idx} className="text-red-700 text-lg">{dis}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {!showFeedback ? (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 transition-colors duration-200 transform hover:scale-105 text-lg"
                disabled={selectedItems.length === 0}
              >
                Submit
              </button>
            </div>
          ) : (
            currentScreen < businessModelData.length - 1 && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleNext}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105 text-lg"
                >
                  Next
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}