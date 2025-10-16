"use client";
import { useState } from "react";

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(1);

  const nextStep = () => {
    if (currentScreen < 6) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const renderScreen1 = () => (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-8">
      <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            To see how many apples there are in the basket we have to ___
          </h1>
        </div>
      </div>
    </div>
  );

  const renderScreen2 = () => (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-8">
      <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            When we want to buy a toy at the store, we need to have _____
          </h1>
        </div>
      </div>
    </div>
  );

  const renderScreen3 = () => (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center p-8">
      <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            When a shop has a sign that says &apos;sale!&apos;, it means things are ____
          </h1>
        </div>
      </div>
    </div>
  );

  const renderScreen4 = () => (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center p-8">
      <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            When you see a big poster for a new movie, that&apos;s an example of an ____
          </h1>
        </div>
      </div>
    </div>
  );

  const renderScreen5 = () => (
    <div className="min-h-screen bg-red-50 flex items-center justify-center p-8">
      <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            If one shop sells a toy for a lot less than the others then _____
          </h1>
        </div>
      </div>
    </div>
  );

  const renderScreen6 = () => (
    <div className="min-h-screen bg-indigo-50 flex items-center justify-center p-8">
      <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            To know if you have enough money to buy the snack you need to know ____
          </h1>
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
      case 5:
        return renderScreen5();
      case 6:
        return renderScreen6();
      default:
        return renderScreen1();
    }
  };

  return (
    <div>
      {renderCurrentScreen()}
      
      {currentScreen < 6 && (
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