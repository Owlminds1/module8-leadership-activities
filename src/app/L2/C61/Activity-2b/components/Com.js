"use client";
import { useState } from "react";

const businessModelData = [
  {
    id: 0,
    title: "B2B (Business to Business)",
    advantages: [
      "Big orders from other businesses: stable revenue",
      "Less need for advertising to many individual customers",
      "Can focus on quality production",
    ],
    disadvantages: [
      "Depends on other businesses to sell products",
      "Less direct contact with end customers",
      "Profit per item may be lower",
    ]
  },
  {
    id: 1,
    title: "B2C (Business to Consumer)",
    advantages: [
      "Direct profit from customers",
      "Build strong customer relationships",
      "Can experiment with items like testing a new ice cream flavour people like or not.",
    ],
    disadvantages: [
      "Need to do a lot of advertisements to attract customers.",
      "May require more staff for service",
    ]
  },
  {
    id: 2,
    title: "B2C Online (Direct to Consumer Online Store)",
    advantages: [
      "Sell to people everywhere, not just nearby",
      "Open 24/7",
    ],
    disadvantages: [
      "Need a website/app and tech skills",
      "Shipping and delivery challenges",
      "Need to do a lot of advertisements to attract customers.",
    ]
  },
  {
    id: 3,
    title: "Aggregator Model (Marketplace Platform)",
    advantages: [
      "Offers many choices for customers in one place",
      "Earns a little extra money for the products getting sold of other  sellers",
      "Can grow quickly without producing all products themselves",
    ],
    disadvantages: [
      "Depends on other sellers for quality and delivery",
      "Need to do a lot of advertisements to attract customers.",
    ]
  }
];

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const nextScreen = () => {
    if (currentScreen < businessModelData.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const currentData = businessModelData[currentScreen];

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">
            {currentData.title}
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-green-100 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-green-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-lg font-bold mr-3">+</span>
                  Advantages
                </h2>
                <ul className="space-y-3">
                  {currentData.advantages.map((advantage, index) => (
                    <li key={index} className="text-green-700 flex items-start text-lg">
                      <span className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {advantage}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-red-100 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-red-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-lg font-bold mr-3">-</span>
                  Disadvantages
                </h2>
                <ul className="space-y-3">
                  {currentData.disadvantages.map((disadvantage, index) => (
                    <li key={index} className="text-red-700 flex items-start text-lg">
                      <span className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {disadvantage}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {currentScreen < businessModelData.length - 1 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={nextScreen}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105 text-lg"
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