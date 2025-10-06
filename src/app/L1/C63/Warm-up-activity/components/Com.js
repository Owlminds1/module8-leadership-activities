"use client";
import { useState } from "react";
import Image from "next/image";
import s0 from "../assets/s0.png";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";

export default function Com() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  const screens = [
    {
      image: s0,
      title: "Banana"
    },
    {
      image: s1,
      title: "Apple"
    },
    {
      image: s2,
      title: "Socks"
    },
    {
      image: s3,
      title: "Umbrella"
    },
    {
      image: s4,
      title: "Balloon"
    }
  ];

  const renderScreen = () => {
    const currentScreen = screens[step];
    
    return (
      <div className="text-center">
        <div className="mb-8">
          <Image 
            src={currentScreen.image} 
            alt={`Screen ${step + 1}`} 
            width={400} 
            height={400}
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {currentScreen.title}
        </h1>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl bg-white shadow-2xl rounded-3xl p-12">
        {renderScreen()}
        
        {step < screens.length - 1 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={nextStep}
              className="px-12 py-4 bg-blue-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}