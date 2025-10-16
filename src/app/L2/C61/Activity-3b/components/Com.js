"use client";
import { useState } from "react";

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const nextScreen = () => {
    if (currentScreen < 5) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 0:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-purple-800">Bulk buying ingredients</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              If Arjun buys cupcake ingredients in bigger quantities, the price per cupcake goes down.
            </p>
            <div className="bg-green-100 p-6 rounded-lg">
              <p className="text-lg text-green-800 font-semibold">
                Example: Instead of $1 per cupcake, it might cost $0.80 per cupcake.
              </p>
              <p className="text-lg text-green-800 mt-2">
                This helps him save money without changing the selling price.
              </p>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-blue-800">Reduce advertisement cost</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Instead of spending $1 per cupcake on ads, he can spend $0.50.
              <br />
              He could use social media posts or flyers in the neighborhood instead of paid ads.
            </p>
          </div>
        );

      case 2:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-green-800">Reduce packaging cost</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Instead of $1 per cupcake for packaging, spend $0.50.
              <br />
              Use simple but attractive boxes or eco-friendly materials that cost less.
            </p>
          </div>
        );

      case 3:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-orange-800">Offer weekday deals</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Encourage more people to buy during slower days with a small discount or bundle.
            </p>
            <div className="bg-orange-100 p-6 rounded-lg">
              <p className="text-lg text-orange-800 font-semibold mb-2">
                Example: &quot;Buy 3 cupcakes on Monday, get 1 free.&quot;
              </p>
              <p className="text-lg text-orange-800">
                This increases total sales and overall profit.
              </p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-pink-800">Introduce new flavors</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Add fun flavors like chocolate chip, strawberry, or caramel to attract more customers.
              <br />
              More customers – more cupcakes sold – more profit.
            </p>        
          </div>
        );

      case 5:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-indigo-800">Package deals or bundles</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Sell cupcakes in packs of 4 or 6 at a slightly higher price.
            </p>
            <div className="bg-indigo-100 p-6 rounded-lg">
              <p className="text-lg text-indigo-800 font-semibold">
                Example: 4 cupcakes for $18 instead of $20 individually.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl p-8">
          {renderScreen()}
          
          {currentScreen < 5 && (
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