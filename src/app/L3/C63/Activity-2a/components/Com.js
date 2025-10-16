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
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
                <p className="text-xl font-semibold text-gray-800">
                  The raw material of one business becomes the product of another.
                </p>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <h1 className="text-3xl font-bold text-blue-800 mb-8">
                Here&apos;s the secret of how businesses grow:
              </h1>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
                <p className="text-xl font-semibold text-gray-800">
                  The raw material of one business becomes the product of another.
                </p>
              </div>
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-purple-800 mb-6">
                  Do you remember what raw materials are?
                </h2>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <h1 className="text-3xl font-bold text-blue-800 mb-8">
                Here&apos;s the secret of how businesses grow:
              </h1>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
                <p className="text-xl font-semibold text-gray-800">
                  The raw material of one business becomes the product of another.
                </p>
              </div>
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-purple-800 mb-6">
                  Do you remember what raw materials are?
                </h2>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                  <p className="text-xl text-gray-800 mb-6">
                    They&apos;re the basic building blocks to make something.
                  </p>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-green-800 mb-4">Example:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      One business sells flour, sugar, and eggs, these become the raw materials for another business that makes cupcakes. And those cupcakes aren&apos;t just tasty treats, they become an important input for a party planner&apos;s event
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <h1 className="text-3xl font-bold text-blue-800 mb-8">
                Here&apos;s the secret of how businesses grow:
              </h1>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
                <p className="text-xl font-semibold text-gray-800">
                  The raw material of one business becomes the product of another.
                </p>
              </div>
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-purple-800 mb-6">
                  Do you remember what raw materials are?
                </h2>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                  <p className="text-xl text-gray-800 mb-6">
                    They&apos;re the basic building blocks to make something.
                  </p>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-green-800 mb-4">Example:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      One business sells flour, sugar, and eggs, these become the raw materials for another business that makes cupcakes. And those cupcakes aren&apos;t just tasty treats, they become an important input for a party planner&apos;s event
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-8 rounded-2xl shadow-lg">
                    <p className="text-xl text-gray-800 mb-6">
                      Sometimes, one product helps sell another product too, this is called cross-selling.
                    </p>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-orange-800 mb-4">Example:</h3>
                      <p className="text-gray-700 leading-relaxed">
                        A toy shop sells comic books. If they also display slime kits next to the comics, kids who buy the comics might also buy the slime. This way, one product helps sell another!
                      </p>
                    </div>
                  </div>
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-6">
      <div className="max-w-7xl bg-white shadow-2xl rounded-3xl p-12">
        {renderScreen()}
        
        {step < 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={nextStep}
              className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}