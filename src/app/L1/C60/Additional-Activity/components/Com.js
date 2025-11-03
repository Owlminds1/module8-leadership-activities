"use client";
import { useState } from "react";

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [sellingMethod, setSellingMethod] = useState("");
  const [loyaltyIdeas, setLoyaltyIdeas] = useState([]);

  const nextStep = () => {
    if (currentScreen < 3) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const renderScreen1 = () => (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Smart Selling Practices</h1>
        </div>
      </div>
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Step 1: Talk about your product</h2>
          <p className="mb-4 text-lg text-gray-700">Describe your product in less than 30 words</p>
          <p className="mb-4 text-gray-500 text-base italic">Example: You may talk about cookies, lemonade, sandwiches, cupcakes, or juice</p>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter your product name..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg mb-4"
          />
          <textarea
            value={productDesc}
            onChange={(e) => setProductDesc(e.target.value)}
            placeholder="Describe your product (max 30 words)"
            maxLength={200}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            rows={2}
          />
        </div>
      </div>
    </div>
  );

  const renderScreen2 = () => (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-8">
      <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Step 2: Choose How to Sell</h2>
          <p className="text-lg text-gray-700 mb-4">You can sell it as <span className="font-semibold text-blue-600">pay as you go</span> (people pay when they buy)</p>
          <p className="text-lg text-gray-700 mb-4">Or</p>
          <p className="text-lg text-gray-700 mb-6">You can make it a <span className="font-semibold text-green-600">subscription</span> (people pay a whole amount to get it every week).</p>
          <div className="flex flex-col items-center gap-4 mt-6">
            <select
              value={sellingMethod}
              onChange={e => setSellingMethod(e.target.value)}
              className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
            >
              <option value="">Select selling method</option>
              <option value="pay-as-you-go">Pay as you go</option>
              <option value="subscription">Subscription</option>
            </select>
            <textarea
              placeholder="Why did you choose this method?"
              className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
              rows={2}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const loyaltyOptions = [
    "Buy 5, Get 1 Free",
    "Issue points",
    "Birthday Freebie",
    "Referral reward",
    "Party reward",
    "Wall of fame"
  ];

  const handleLoyaltyChange = (option) => {
    setLoyaltyIdeas(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const renderScreen3 = () => (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center p-8">
      <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Step 3: How will you promote brand loyalty for your product?</h2>
          <div className="flex flex-col items-start gap-3 mx-auto max-w-md mb-6">
            {loyaltyOptions.map(option => (
              <label key={option} className="flex items-center gap-2 text-lg">
                <input
                  type="checkbox"
                  checked={loyaltyIdeas.includes(option)}
                  onChange={() => handleLoyaltyChange(option)}
                  className="accent-purple-600 w-5 h-5"
                />
                {option}
              </label>
            ))}
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
      default:
        return renderScreen1();
    }
  };

  return (
    <div>
      {renderCurrentScreen()}
      
      {currentScreen < 3 && (
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