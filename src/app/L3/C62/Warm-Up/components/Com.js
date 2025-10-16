"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";

// Content data structure
const contentData = {
  steps: [
    {
      id: 0,
      type: "product",
      title: "Reusable Water Bottles",
      image: s1,
      options: [
        "School cafeteria",
        "Online kids' store",
        "Toy store",
        "Grocery store"
      ]
    },
    {
      id: 1,
      type: "product",
      title: "Fun Stationery Set",
      image: s2,
      options: [
        "Bookstore",
        "School supply shop",
        "Electronics store",
        "Sports store"
      ]
    },
    {
      id: 2,
      type: "product",
      title: "Puzzle Game",
      image: s3,
      options: [
        "Toy store",
        "Library gift shop",
        "Grocery store",
        "Clothing store"
      ]
    },
    {
      id: 3,
      type: "product",
      title: "LED Keychain",
      image: s4,
      options: [
        "Party supply store",
        "Online accessories shop",
        "Pharmacy",
        "Bookstore"
      ]
    }
  ]
};

// Helper function to render product step
const renderStep = (stepData) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-blue-600 text-center">{stepData.title}</h1>
      
      <div className="flex justify-center mb-8">
        <Image 
          src={stepData.image} 
          alt={stepData.title} 
          width={400} 
          height={400} 
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Options:</h2>
        <div className="grid grid-cols-2 gap-4">
          {stepData.options.map((option, index) => (
            <div
              key={index}
              className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg text-center hover:bg-blue-100 transition-colors duration-200"
            >
              <p className="text-lg font-medium text-gray-700">{option}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default function Com() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  const currentStepData = contentData.steps[step];
  const isLastStep = step === contentData.steps.length - 1;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8 text-left">
        {renderStep(currentStepData)}

        {!isLastStep && (
          <div className="text-center mt-8">
            <button
              onClick={nextStep}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold text-xl rounded-xl shadow-lg hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-200"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}