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
            
            <div className="mb-12">
              <p className="text-2xl text-gray-700 mb-6 leading-relaxed">
                A business plan is like a roadmap, it helps us to think and explain about the product in a better way.
              </p>
              <p className="text-xl text-gray-600">
                Even big companies make business plans before launching something new!
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Making a business plan helps us:
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-md">
                  <span className="bg-indigo-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-xl flex-shrink-0">1</span>
                  <p className="text-xl text-gray-800">Understand what we are creating.</p>
                </div>
                
                <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-md">
                  <span className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-xl flex-shrink-0">2</span>
                  <p className="text-xl text-gray-800">Decide who will use it.</p>
                </div>
                
                <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-md">
                  <span className="bg-purple-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-xl flex-shrink-0">3</span>
                  <p className="text-xl text-gray-800">Think about how it will help people.</p>
                </div>
                
                <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-md">
                  <span className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-xl flex-shrink-0">4</span>
                  <p className="text-xl text-gray-800">Know what we need to make it work.</p>
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6">
      <div className="max-w-8xl bg-white shadow-2xl rounded-3xl p-8">
        {renderScreen()}
      </div>
    </div>
  );
}