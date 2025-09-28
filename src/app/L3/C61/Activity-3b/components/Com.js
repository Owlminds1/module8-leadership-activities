"use client";
import { useState } from "react";

const screenData = [
  {
    id: 0,
    title: "Increase Sales Volume",
    content: "If Sam sells more bottles, the fixed costs like electricity and rent are shared across more products.",
    example: "Example: Instead of selling 100 bottles, Sam sells 200 bottles. The profit per bottle increases because the fixed cost is spread over more items. This helps him earn more without changing the price of each bottle."
  },
  {
    id: 1,
    title: "Bulk Material Purchase",
    content: "Buying bottles, packaging, or delivery materials in bigger quantities reduces the cost per bottle.",
    example: "Example: Instead of $2 per bottle, buying in bulk lowers it to $1.50 per bottle. This helps Sam save money and increase profit for each bottle sold."
  },
  {
    id: 2,
    title: "B2B Partnerships",
    content: "Selling in bulk to gyms, schools, or sports clubs saves time and reaches more customers.",
    example: "Example: Selling 50 bottles at once to a school instead of 1 bottle at a time to individuals. This helps Sam get bigger orders and more consistent revenue."
  },
  {
    id: 3,
    title: "Product Bundles",
    content: "Sam can create packages like \"Buy 2 bottles, get a sports towel at a discount.\"",
    example: "Example: 2 bottles + 1 towel for $12 instead of $15 individually. Bundles encourage customers to buy more and increase total sales."
  },
  {
    id: 4,
    title: "Subscription Boxes",
    content: "Customers pay a monthly fee and receive a new product every month.",
    example: "Example: $10 per month for 1 bottle and a sports accessory delivered every month. This helps Sam plan production better and earn regular income."
  },
  {
    id: 5,
    title: "Advertising & Online Presence",
    content: "Sam can promote his products through social media, local ads, or his website.",
    example: "Example: Posting on Instagram or Facebook about a new water bottle design. This helps him attract more customers and sell more without changing the products."
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
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">
            {currentData.title}
          </h1>

          <p className="text-xl text-gray-700 text-center leading-relaxed">
            {currentData.content}
          </p>

          <p className="text-xl mb-8 text-gray-700 text-center leading-relaxed">
            {currentData.example}
          </p>



          {currentScreen < screenData.length - 1 && (
            <div className="flex justify-center">
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