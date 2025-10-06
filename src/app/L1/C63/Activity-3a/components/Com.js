"use client";
import { useState } from "react";

export default function Com() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  const renderScreen = () => {
    switch (step) {
      case 0:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-800 mb-12">
              Why do you think it is important to know how many people might use your new Miko feature?
            </h1>
          </div>
        );

      case 1:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-800 mb-12">
              Why do you think it is important to know how many people might use your new Miko feature?
            </h1>
            <div className="bg-green-100 p-8 rounded-2xl shadow-lg">
              <p className="text-2xl text-green-800 font-semibold leading-relaxed">
                Because it helps us see if our idea is something lots of people will enjoy! If many people want to use it, we'll know our feature is exciting and worth growing.
              </p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-purple-800 mb-12">
              Why do you think it is important to know how much extra profit miko will make because of this new feature?
            </h1>
          </div>
        );

      case 3:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-purple-800 mb-12">
              Why do you think it is important to know how much extra profit miko will make because of this new feature?
            </h1>
            <div className="bg-blue-100 p-8 rounded-2xl shadow-lg">
              <p className="text-2xl text-blue-800 font-semibold leading-relaxed">
                Because it helps us plan for the future! If Miko makes more money, we can use it to make even more fun features or help more people enjoy Miko.
              </p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-indigo-800 mb-12">
              Now let's explore how we can make a growth forecast:
            </h1>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6 p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl shadow-lg">
                <span className="bg-yellow-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0">1</span>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-yellow-800 mb-2">Pick the next months</h3>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl shadow-lg">
                <span className="bg-green-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0">2</span>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Guess the number of users:</h3>
                  <p className="text-xl text-gray-700">Think about how many people might try your feature each month.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-6 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl shadow-lg">
                <span className="bg-blue-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0">3</span>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-blue-800 mb-2">Guess the profit:</h3>
                  <p className="text-xl text-gray-700">Imagine how much money your business might earn each month.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl shadow-lg">
                <span className="bg-purple-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0">4</span>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-purple-800 mb-2">Draw a bar graph:</h3>
                  <p className="text-xl text-gray-700">Use fun colors to make bars for each month's users and profit!</p>
                </div>
              </div>
            </div>
            
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl bg-white shadow-2xl rounded-3xl p-12">
        {renderScreen()}
        
        {step < 4 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={nextStep}
              className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}