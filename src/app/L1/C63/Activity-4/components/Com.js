"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";

export default function Com() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  const renderScreen = () => {
    switch (step) {
      case 0:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-800 mb-12">
              Do you know what an elevator pitch means?
            </h1>
          </div>
        );

      case 1:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-800 mb-12">
              Do you know what an elevator pitch means?
            </h1>
            <div className="bg-green-100 p-8 rounded-2xl shadow-lg">
              <p className="text-2xl text-green-800 font-semibold leading-relaxed">
                An elevator pitch is a quick and exciting way to share your idea, in the same amount of time it takes to ride an elevator, about 30 seconds! It's like giving someone a tiny story about your idea that makes them want to know more.
              </p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-purple-800 mb-12">
              Imagine you're in an elevator with the person who created Miko!
            </h1>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg mb-8">
              <p className="text-2xl text-gray-700 mb-6">You smile and say,</p>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                <p className="text-xl text-gray-800 italic leading-relaxed">
                  "Hi! I've made a new Miko feature that helps kids learn dance moves with music and fun lights. It makes learning active and joyful!"
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-100 p-8 rounded-2xl shadow-lg">
              <p className="text-2xl text-gray-700 mb-6">By the time the elevator doors open, the creator of Miko is impressed and says,</p>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                <p className="text-xl text-gray-800 italic leading-relaxed">
                  "Wow, that sounds amazing! Tell me more about it!"
                </p>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center max-w-5xl mx-auto">
            
            <div className="mb-8">
              <Image src={s1} alt="Elevator Pitch Etiquettes" width={500} height={400} className="mx-auto rounded-2xl shadow-lg" />
            </div>
          
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl bg-white shadow-2xl rounded-3xl p-12">
        {renderScreen()}
        
        {step < 3 && (
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