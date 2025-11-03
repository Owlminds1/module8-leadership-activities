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
const renderStep = (stepData, selectedOptionIndices, handleOptionClick) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-blue-600 text-center">{stepData.title}</h1>
      <div className="flex flex-row items-center justify-center mb-8 gap-8">
        <div className="flex-shrink-0">
          <Image
            src={stepData.image}
            alt={stepData.title}
            width={320}
            height={320}
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Options:</h2>
          <div className="space-y-4">
            {stepData.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                className={`w-full p-4 border-2 rounded-xl text-center text-lg font-medium transition-colors duration-200 shadow focus:outline-none 
                  ${selectedOptionIndices.includes(index) ? 'bg-blue-300 border-blue-600 text-white' : 'bg-blue-50 border-blue-300 text-gray-700 hover:bg-blue-100 hover:border-blue-500'}`}
                type="button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default function Com() {
  const [step, setStep] = useState(0);
  // Each step's selected options is an array of indices
  const [selectedOptions, setSelectedOptions] = useState(
    Array(contentData.steps.length).fill([])
  );

  const nextStep = () => setStep((prev) => prev + 1);

  // Toggle selection for multiple options
  const handleOptionClick = (optionIndex) => {
    setSelectedOptions((prev) => {
      const updated = [...prev];
      const currentSelections = updated[step] || [];
      if (currentSelections.includes(optionIndex)) {
        // Remove if already selected
        updated[step] = currentSelections.filter((i) => i !== optionIndex);
      } else {
        // Add if not selected
        updated[step] = [...currentSelections, optionIndex];
      }
      return updated;
    });
  };

  const currentStepData = contentData.steps[step];
  const isLastStep = step === contentData.steps.length - 1;
  const selectedOptionIndices = selectedOptions[step] || [];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-2">
      <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-2 text-left">
        <div className="mb-4">
          <div className="bg-blue-100 border-l-4 border-blue-400 p-4 rounded-xl">
            <p className="text-xl font-semibold text-blue-700">
              Pick the best place to sell the product at a good price.<br />
              <span className="font-normal text-gray-700">Give reasons for your choice.</span>
            </p>
          </div>
        </div>
        {renderStep(currentStepData, selectedOptionIndices, handleOptionClick)}

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