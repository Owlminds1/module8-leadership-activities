"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";

// Content data structure
const contentData = {
  steps: [
    {
      id: 0,
      type: "intro",
      title: "",
      content: "After the success of the T-shirt stall at SparkFest, Maya launched her own online store where she now sells:",
      products: [
        "Custom Printed T-Shirts",
        "Hoodies", 
        "Tote Bags",
        "Name Bracelets"
      ],
      image: s1
    },
    {
      id: 1,
      type: "problem",
      title: "",
      content: "Maya's business is growing FAST! But now she has another problem. She is getting way too many orders on a daily basis!",
      challenges: [
        "She writes customers' details on sticky notes",
        "She tracks orders through WhatsApp messages", 
        "She forgets who ordered what",
        "She loses track of repeat customers"
      ]
    },
    {
      id: 2,
      type: "solution",
      title: "",
      content: "So she called Emma, and she advised her to use a CRM to manage orders."
    },
    {
      id: 3,
      type: "question",
      title: "Do you know what a CRM is?"
    },
    {
      id: 4,
      type: "progressive",
      sectionTitle: "Do you know what a CRM is?",
      sectionContent: "A CRM (Customer Relationship Management) is like a super notebook that remembers everything about your business."
    },
    {
      id: 5,
      type: "benefits",
      title: "",
      questions: [
        "Who loves sports T-shirts?",
        "Who always buys winter wear?",
        "Who often shops during sales?",
        "Who has a birthday next week?"
      ],
      benefits: [
        "Send new sports T-shirt designs to customers who love sports fashion",
        "Share special winter combo offers with customers who buy jackets and hoodies",
        "Send early sale access to customers who shop during discounts",
        "Surprise customers with a birthday coupon to make them feel special."
      ]
    }
  ]
};

// Helper functions to render different step types
const renderStep = (stepData) => {
  switch (stepData.type) {
    case "intro":
      return (
        <>
          <h1 className="text-4xl font-bold mb-6 text-blue-600 text-center">{stepData.title}</h1>
          <p className="text-xl mb-6 text-gray-700 text-center">{stepData.content}</p>
          <div className="space-y-3 mb-8">
            {stepData.products.map((product, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-blue-600 bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </span>
                <p className="text-xl text-gray-700">{product}</p>
              </div>
            ))}
            <p className="text-xl text-gray-700">And many more lifestyle products.</p>
          </div>
          <div className="flex justify-center">
            <Image 
              src={stepData.image} 
              alt={stepData.title} 
              width={500} 
              height={400} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </>
      );
    
    case "problem":
      return (
        <>
          <h1 className="text-4xl font-bold mb-6 text-red-600 text-center">{stepData.title}</h1>
          <p className="text-xl mb-6 text-gray-700 text-center">{stepData.content}</p>
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
            <h2 className="text-2xl font-semibold text-red-800 mb-4">Managing is becoming challenging:</h2>
            <div className="space-y-3">
              {stepData.challenges.map((challenge, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-xl font-bold text-red-600 bg-red-100 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    {index + 1}
                  </span>
                  <p className="text-lg text-gray-700">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    
    case "solution":
      return (
        <>
          <h1 className="text-4xl font-bold mb-6 text-green-600 text-center">{stepData.title}</h1>
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
            <p className="text-xl text-gray-700">{stepData.content}</p>
          </div>
        </>
      );
    
    case "question":
      return (
        <>
          <h1 className="text-4xl font-bold mb-8 text-blue-600 text-center">{stepData.title}</h1>
        </>
      );
    
    case "progressive":
      return (
        <>
          <h1 className="text-4xl font-bold mb-6 text-blue-600 text-center">{stepData.sectionTitle}</h1>
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <p className="text-xl leading-relaxed text-gray-700">{stepData.sectionContent}</p>
          </div>
        </>
      );
    
    case "benefits":
      return (
        <>
          <h1 className="text-4xl font-bold mb-6 text-blue-600 text-center">{stepData.title}</h1>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">CRM can store information such as:</h2>
              <div className="space-y-3">
                {stepData.questions.map((question, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-xl font-bold text-blue-600 bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      {index + 1}
                    </span>
                    <p className="text-lg text-gray-700">{question}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Knowing these details, you can:</h2>
              <div className="space-y-3">
                {stepData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-xl font-bold text-green-600 bg-green-100 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      {index + 1}
                    </span>
                    <p className="text-lg text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
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