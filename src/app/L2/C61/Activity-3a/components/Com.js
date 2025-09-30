"use client";
import { useState } from "react";

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const nextScreen = () => {
    if (currentScreen < 7) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 0:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-purple-800">Case Study: Arjun Cupcakes</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Last month, Arjun sold 50 cupcakes.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Let&apos;s see the cost of making each cupcake:
            </p>
            <div className="bg-blue-100 p-6 rounded-lg text-left max-w-md mx-auto">
              <div className="space-y-3 text-lg">
                <p className="text-blue-800">$1 for making the cupcake (ingredients)</p>
                <p className="text-blue-800">$1 for packing</p>
                <p className="text-blue-800">$1 for advertisement</p>
                <p className="text-blue-800">$1 for other expenses like electricity and rent</p>
                <hr className="border-blue-300" />
                <p className="text-blue-800 font-bold text-xl">Total cost per cupcake: $4</p>
                <p className="text-blue-800 font-bold text-xl">He sells each cupcake for $5.</p>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-green-800">Step 1: Calculate Total Cost</h1>
            <p className="text-2xl text-gray-700 leading-relaxed">
              How much did it cost him to make 50 cupcakes (50 × $4)?
            </p>
          </div>
        );

      case 2:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-green-800">Step 1: Calculate Total Cost</h1>
            <p className="text-2xl text-gray-700 leading-relaxed mb-6">
              How much did it cost him to make 50 cupcakes (50 × $4)?
            </p>
            <div className="bg-green-100 p-8 rounded-lg max-w-md mx-auto">
              <p className="text-4xl font-bold text-green-800">$200</p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-blue-800">Step 2: Calculate Revenue</h1>
            <p className="text-2xl text-gray-700 leading-relaxed">
              How much money did he make from selling 50 cupcakes (50 × $5)?
            </p>
          </div>
        );

      case 4:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-blue-800">Step 2: Calculate Revenue</h1>
            <p className="text-2xl text-gray-700 leading-relaxed mb-6">
              How much money did he make from selling 50 cupcakes (50 × $5)?
            </p>
            <div className="bg-blue-100 p-8 rounded-lg max-w-md mx-auto">
              <p className="text-2xl font-bold text-blue-800">50 × $5 = $250</p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-orange-800">Step 3: Calculate Profit</h1>
            <p className="text-2xl text-gray-700 leading-relaxed">
              To calculate profit or loss what we will do?
            </p>
          </div>
        );

      case 6:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-orange-800">Step 3: Calculate Profit</h1>
            <p className="text-2xl text-gray-700 leading-relaxed mb-6">
              To calculate profit or loss what we will do?
            </p>
            <div className="bg-orange-100 p-8 rounded-lg max-w-md mx-auto">
              <p className="text-xl font-bold text-orange-800">
                We will subtract review and cost and we will get either profit or loss.
              </p>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-orange-800">Step 3: Calculate Profit</h1>
            <p className="text-2xl text-gray-700 leading-relaxed mb-6">
              To calculate profit or loss what we will do?
            </p>
            <div className="bg-orange-100 p-6 rounded-lg max-w-md mx-auto mb-6">
              <p className="text-xl font-bold text-orange-800">
                We will subtract review and cost and we will get either profit or loss.
              </p>
            </div>
            <p className="text-2xl text-gray-700 leading-relaxed mb-6">
              So Revenue is $250 and cost is $200, so how much profit or loss happened?
            </p>
            <div className="bg-green-100 p-8 rounded-lg max-w-md mx-auto">
              <p className="text-2xl font-bold text-green-800">$250 − $200 = $50 profit</p>
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
          
          {currentScreen < 7 && (
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