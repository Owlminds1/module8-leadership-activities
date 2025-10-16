"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";

const contentData = {
  steps: [
    {
      id: 0,
      type: "intro",
      title: "",
      description: "Rohan was doing well selling sandwiches, but he noticed how fewer people were coming to his shop. He also said a new sandwich shop opened nearby. They were selling sandwiches at a lower price compared to Rohan's shop. Because of this, Rohan sold fewer sandwiches than what he expected.",
      image: s1
    },
    {
      id: 1,
      type: "progressive",
      content: "Why did Rohan sell fewer sandwiches?",
      isBold: true
    },
    {
      id: 2,
      type: "progressive",
      content: "Why did Rohan sell fewer sandwiches?",
      isBold: true,
      answer: {
        title: "",
        items: [
          "A new shop started selling sandwiches at a lower price, so some customers decided to buy from that place instead.",
          "Some customers may have also tried the new sandwiches out of curiosity just to see how they taste."
        ]
      }
    },
    {
      id: 3,
      type: "progressive",
      content: "What would happen if fewer sandwiches were sold?",
      isBold: true
    },
    {
      id: 4,
      type: "progressive",
      content: "What would happen if fewer sandwiches were sold?",
      isBold: true,
      answer: {
        title: "",
        items: [
          "Rohan would make less money than planned.",
          "He might not even cover the cost of ingredients, which might mean a small loss.",
          "Some customers might think the sandwich table is not popular and may not come next time.",
          "Rohan may run out of money to buy ingredients."
        ]
      }
    },
    {
      id: 5,
      type: "progressive",
      content: "What can Rohan do to sell more sandwiches next week?",
      isBold: true
    },
    {
      id: 6,
      type: "progressive",
      content: "What can Rohan do to sell more sandwiches next week?",
      isBold: true,
      answer: {
        title: "",
        items: [
          "Lower the price a little to attract more customers without losing too much money.",
          "Offer bundle deals such as: \"Buy 2 sandwiches and pay less than the actual price!\" This way, customers get more and Rohan still earns money.",
          "Make sandwiches unique by adding new flavors, toppings, or fun shapes.",
          "Tell customers about special offers or \"limited sandwiches today!\" to make it exciting."
        ]
      }
    },
    {
      id: 7,
      type: "progressive",
      content: "What would happen if Rohan lowered the price too much?",
      isBold: true
    },
    {
      id: 8,
      type: "progressive",
      content: "What would happen if Rohan lowered the price too much?",
      isBold: true,
      answer: {
        title: "",
        items: [
          "Rohan might not make enough money to pay for his ingredients, which means it would be a loss.",
          "Also, if he keeps the prices too low, customers may always expect low prices and may not want to pay more later."
        ]
      }
    },
    {
      id: 9,
      type: "progressive",
      content: "What if he keeps the price high?",
      isBold: true
    },
    {
      id: 10,
      type: "progressive",
      content: "What if he keeps the price high?",
      isBold: true,
      answer: {
        title: "",
        items: [
          "Only a few customers would buy sandwiches because others might think it's too costly.",
          "Rohan might lose customers to other shops that sell sandwiches for a lower price."
        ]
      }
    }
  ]
};

// Helper functions to render different step types
const renderStep = (stepData) => {
  switch (stepData.type) {
    case "intro":
      return (
        <>
          <h1 className="text-4xl font-bold mb-6 text-blue-600">{stepData.title}</h1>
          <div className="mb-6 text-xl leading-relaxed">
            <p className="mb-4">{stepData.description}</p>
            <p className="mb-4 font-semibold text-blue-600">Rohan wondered:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Why did this happen?</li>
              <li>What can I do to sell more sandwiches next week?</li>
            </ul>
          </div>
          <div className="flex justify-start mb-6">
            <Image src={stepData.image} alt="Rohan's sandwich shop competition" width={400} height={400} />
          </div>
        </>
      );
    
    case "progressive":
      return (
        <div>
          <p className="text-xl leading-relaxed mb-6">
            {stepData.isBold ? (
              <span className="font-bold text-green-600">{stepData.content}</span>
            ) : (
              stepData.content
            )}
          </p>
          
          {stepData.answer && typeof stepData.answer === "string" && (
            <div className="mt-4 p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <p className="text-xl">{stepData.answer}</p>
            </div>
          )}
          
          {stepData.answer && typeof stepData.answer === "object" && (
            <div className="mt-4 p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              {stepData.answer.title && (
                <p className="font-bold text-xl mb-4">{stepData.answer.title}</p>
              )}
              <ul className="list-disc list-inside space-y-3 ml-4">
                {stepData.answer.items.map((item, index) => (
                  <li key={index} className="text-xl leading-relaxed flex items-start">
                    <span className="text-yellow-600 font-bold mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
      <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8 text-left">
        {renderStep(currentStepData)}

        {!isLastStep && (
          <div className="text-center">
            <button
              onClick={nextStep}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold text-xl rounded-xl shadow-lg hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-200"
            >
              Next
            </button>
          </div>
        )}
        
      </div>
    </div>
  );
}