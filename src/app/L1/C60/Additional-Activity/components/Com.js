"use client";
import { useState } from "react";

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [productName, setProductName] = useState("");
  const [sellingMethod, setSellingMethod] = useState("");
  const [loyaltyIdea, setLoyaltyIdea] = useState("");
  const [advertisement, setAdvertisement] = useState("");

  const nextStep = () => {
    if (currentScreen < 4) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const renderScreen1 = () => (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-8">
      <div className="max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Step 1: Pick the product</h1>
          <div className="mb-8">
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter your product name..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderScreen2 = () => (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-8">
      <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Step 2: Choose How to Sell</h1>
          <div className="space-y-6">
            <p className="text-xl text-gray-700 mb-6">
              You can sell it <span className="font-semibold text-blue-600">One-Time</span> (people pay when they buy)
            </p>
            <p className="text-xl text-gray-700 mb-6">Or</p>
            <p className="text-xl text-gray-700 mb-8">
              As a <span className="font-semibold text-green-600">Subscription</span> (people pay once and get it every week).
            </p>
            <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
              <p className="text-xl font-semibold text-gray-800">Which way do you want to sell? Why?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderScreen3 = () => (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center p-8">
      <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Step 3: Loyalty Bonus</h1>
          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
            <p className="text-xl font-semibold text-gray-800">
              What loyalty idea will you use to make customers come back to you again and again?
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderScreen4 = () => (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-8">
      <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Step 4: Advertise</h1>
          <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
            <p className="text-xl font-semibold text-gray-800">
              Now decide how you will tell people about your product and loyalty idea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 1:
        return renderScreen1();
      case 2:
        return renderScreen2();
      case 3:
        return renderScreen3();
      case 4:
        return renderScreen4();
      default:
        return renderScreen1();
    }
  };

  return (
    <div>
      {renderCurrentScreen()}
      
      {currentScreen < 4 && (
        <div className="fixed bottom-8 right-8">
          <button
            onClick={nextStep}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}