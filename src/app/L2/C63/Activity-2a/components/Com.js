"use client";
import { useState } from "react";

export default function Com() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  const renderScreen = () => {
    switch (step) {
      case 0:
        return (
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-indigo-800 mb-12">
              Let's explore some important aspects of networking!
            </h1>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-6">
                  <span className="bg-blue-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0">1</span>
                  <p className="text-2xl text-gray-800">Some people are customers: they want to buy something.</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-100 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-6">
                  <span className="bg-green-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0">2</span>
                  <p className="text-2xl text-gray-800">Some people are helpers or partners, they can give advice, supply what you need, or even invest in your idea.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="text-center max-w-5xl mx-auto">
            <div className="space-y-6 text-2xl text-gray-700 leading-relaxed">
              <p>And here's the exciting part: when helpers and businesses connect, something magical happens, businesses start sharing things between each other.</p>
              <p>One business's product becomes the raw material, support, or boost for another business. That's how both grow together!</p>
            </div>
            
          </div>
        );

      case 2:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-purple-800 mb-12">
              Do you know what raw material means?
            </h2>
          </div>
        );

      case 3:
        return (
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-purple-800 mb-12">
              Do you know what raw material means?
            </h2>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-100 p-8 rounded-2xl shadow-lg text-left">
              <p className="text-2xl text-gray-800 mb-8 leading-relaxed">
                Raw material is the basic thing you need to make something. It's like the starting ingredient.
              </p>
              
              <h3 className="text-2xl font-bold text-orange-800 mb-6">Examples:</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md">
                  <span className="bg-orange-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-lg flex-shrink-0">1</span>
                  <p className="text-xl text-gray-800">If you want to make a cake, your raw materials are flour, eggs, and sugar.</p>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md">
                  <span className="bg-orange-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-lg flex-shrink-0">2</span>
                  <p className="text-xl text-gray-800">If you want to make a toy, your raw material could be plastic or wood.</p>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md">
                  <span className="bg-orange-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-lg flex-shrink-0">3</span>
                  <p className="text-xl text-gray-800">If you want to make a lemonade stand, your raw materials are lemons, water, sugar, and cups.</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <p className="text-xl text-blue-800 font-semibold">
                  So raw materials are not the final product we use, but the building blocks that help businesses create their products.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl bg-white shadow-2xl rounded-3xl p-12">
        {renderScreen()}
        
        {step < 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={nextStep}
              className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}