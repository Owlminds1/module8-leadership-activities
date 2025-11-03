"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";

// Content data structure
const contentData = {
  steps: [
    {
      id: 0,
      type: "gallery",
      title: "",
      description: "Select any one item and answer questions on planning a business with it.",
      images: [
        { src: s1, alt: "Product idea 1", label: "Bag Tag" },
        { src: s2, alt: "Product idea 2", label: "Glitter pens" },
        { src: s3, alt: "Product idea 3", label: "Belt Buckle" },
        { src: s4, alt: "Product idea 4", label: "Rings" },
        { src: s5, alt: "Product idea 5", label: "Fidget Spinner" },
        { src: s6, alt: "Product idea 6", label: "Hair Band " }
      ]
    },
    {
      id: 1,
      type: "question",
      content: "What makes your product unique?",
      isBold: true
    },
    {
      id: 2,
      type: "question",
      content: "Who do you think would like to buy it and why?",
      isBold: true
    },
    {
      id: 3,
      type: "question",
      content: "How will you tell people about your product?",
      isBold: true
    },
    {
      id: 4,
      type: "question",
      content: "Can you give your product a catchy name?",
      isBold: true
    }
  ]
};

// Helper functions to render different step types
const renderStep = (stepData) => {
  switch (stepData.type) {
    case "gallery":
      return (
        <>
          <h1 className="text-4xl font-bold mb-6 text-blue-600">{stepData.title}</h1>
          <p className="text-xl mb-8 text-gray-600">{stepData.description}</p>
          
          {/* Row 1 - 3 images */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center">
              <Image 
                src={stepData.images[0].src} 
                alt={stepData.images[0].alt} 
                width={280} 
                height={280} 
                className="rounded-lg shadow-lg"
              />
              <p className="text-lg font-semibold text-gray-700 mt-2 text-center">{stepData.images[0].label}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src={stepData.images[1].src} 
                alt={stepData.images[1].alt} 
                width={200} 
                height={200} 
                className="rounded-lg shadow-lg"
              />
              <p className="text-lg font-semibold text-gray-700 mt-2 text-center">{stepData.images[1].label}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src={stepData.images[2].src} 
                alt={stepData.images[2].alt} 
                width={200} 
                height={200} 
                className="rounded-lg shadow-lg"
              />
              <p className="text-lg font-semibold text-gray-700 mt-2 text-center">{stepData.images[2].label}</p>
            </div>
          </div>

          {/* Row 2 - 3 images */}
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <Image 
                src={stepData.images[3].src} 
                alt={stepData.images[3].alt} 
                width={200} 
                height={200} 
                className="rounded-lg shadow-lg"
              />
              <p className="text-lg font-semibold text-gray-700 mt-2 text-center">{stepData.images[3].label}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src={stepData.images[4].src} 
                alt={stepData.images[4].alt} 
                width={200} 
                height={200} 
                className="rounded-lg shadow-lg"
              />
              <p className="text-lg font-semibold text-gray-700 mt-2 text-center">{stepData.images[4].label}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src={stepData.images[5].src} 
                alt={stepData.images[5].alt} 
                width={200} 
                height={200} 
                className="rounded-lg shadow-lg"
              />
              <p className="text-lg font-semibold text-gray-700 mt-2 text-center">{stepData.images[5].label}</p>
            </div>
          </div>
        </>
      );
    
    case "question":
      return (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-8">
            {stepData.content}
          </h2>
        </div>
      );
    
    default:
      return <p className="text-xl">{stepData.content}</p>;
  }
};

export default function Com() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  const currentStepData = contentData.steps[step];
  const isLastStep = step === contentData.steps.length - 1;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-6xl bg-white shadow-xl rounded-2xl p-8 text-left">
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