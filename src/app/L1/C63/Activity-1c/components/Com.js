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
            <h1 className="text-4xl font-bold text-blue-800 mb-8">
              Benefits & Use Cases
            </h1>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              So, Miko is not just for fun, it helps kids learn too! Let's see how.
            </p>
            
            <div className="space-y-6 text-left">
              <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                <span className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-lg flex-shrink-0">1</span>
                <p className="text-lg text-gray-800">Miko helps with learning new topics like math, science, and reading.</p>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                <span className="bg-green-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-lg flex-shrink-0">2</span>
                <p className="text-lg text-gray-800">It keeps kids curious and creative by asking fun questions.</p>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                <span className="bg-purple-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-lg flex-shrink-0">3</span>
                <p className="text-lg text-gray-800">It helps kids communicate better by encouraging conversations.</p>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
                <span className="bg-yellow-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-lg flex-shrink-0">4</span>
                <p className="text-lg text-gray-800">It makes learning at home more fun, through games, quizzes, and stories.</p>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg">
                <span className="bg-red-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-lg flex-shrink-0">5</span>
                <p className="text-lg text-gray-800">With Miko Chess, kids can play many board games and learn critical thinking.</p>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">
              Which activity would you try first with Miko, a quiz, a story, or a dance game?
            </h2>
            
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-6">
      <div className="max-w-6xl bg-white shadow-2xl rounded-3xl p-12">
        {renderScreen()}
        
        {step < 1 && (
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