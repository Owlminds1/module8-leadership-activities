"use client";
import { useState } from "react";

const businessModelData = [
  {
    id: 0,
    title: "B2B (Business to Business)",
    advantages: [
      "Large orders bring steady and predictable revenue.",
      "Less focus on marketing since you&apos;re selling to organizations.",
      "Can build long-term contracts with clients like schools and gyms."
    ],
    disadvantages: [
      "Heavy dependence on fewer clients: if one stops buying, revenue drops significantly.",
      "Limited chance to build a brand identity with end customers, since the gym/school&apos;s name may get more recognition than Sam&apos;s.",
      "Businesses often negotiate for lower prices, reducing profit."
    ]
  },
  {
    id: 1,
    title: "B2C (Business to Consumer)",
    advantages: [
      "Direct relationships with customers allows for feedback and gets loyal customers.",
      "Can introduce products quickly like, add a trendy football or water bottle design.",
      "Higher profit per item compared to B2B, since no middleman is involved between you and the business."
    ],
    disadvantages: [
      "Requires constant marketing and promotions to attract individual buyers.",
      "Customers&apos; buying habits can change quickly like : seasonal demand for cricket bats vs. footballs.",
      "Managing customer service, inventory, and sales staff adds extra responsibilities."
    ]
  },
  {
    id: 2,
    title: "B2C Online (Direct to Consumer Online Store)",
    advantages: [
      "Can reach customers beyond the local area: potentially the whole country.",
      "The store is open 24/7",
      "Digital tools can be used for marketing like email marketing."
    ],
    disadvantages: [
      "Requires technical skills or investment to build and maintain the website.",
      "Shipping and logistics like : delivery delays, damaged products, return requests, can be expensive and complicated.",
      "Online competition is intense, meaning more effort and money spent on marketing."
    ]
  },
  {
    id: 3,
    title: "Aggregator Model (Marketplace Platform)",
    advantages: [
      "A wide variety of products attracts more customers.",
      "More money can be earned without producing everything himself, by taking small parts from sales of other sellers.",
      "Fast growth, since sellers add their own products and stock."
    ],
    disadvantages: [
      "Reputation depends on other sellers, poor quality or delayed delivery can harm the platform&apos;s image.",
      "Requires strong technology to manage multiple sellers, payments, and logistics.",
      "High cost of marketing to stand out against giants like Amazon, Flipkart, or Decathlon."
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