"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";

// Content data structure
const contentData = {
  steps: [
    {
      id: 0,
      type: "report_intro",
      title: "Area foot traffic report:",
      description: "The graph shows foot traffic i.e. the number of people visiting two market locations:",
      image: s1,
      options: ["Option A: SparkFest", "Option B: City Carnival"]
    },
    {
      id: 1,
      type: "question",
      title: "Which location has more foot traffic?",
      image: s1,
    },
    {
      id: 2,
      type: "answer",
      title: "Which location has more foot traffic?",
      answer: "SparkFest consistently has more foot traffic every month compared to City Carnival.",
      image: s1
    },
    {
      id: 3,
      type: "question",
      title: "What does higher foot traffic mean for a business?",
      image: s1
    },
    {
      id: 4,
      type: "answer",
      title: "What does higher foot traffic mean for a business?",
      answer: "Higher foot traffic means more potential customers, which usually leads to more sales and a higher profit.",
      image: s1
    },
    {
      id: 5,
      type: "question",
      title: "Which location is better for starting a business according to this report?",
      image: s1
    },
    {
      id: 6,
      type: "answer",
      title: "Which location is better for starting a business according to this report?",
      answer: "SparkFest is better because more people visit, so Maya would have better chances of selling her products.",
      image: s1
    },
    {
      id: 7,
      type: "report_intro",
      title: "Customer interest report",
      subtitle: "Estimated T-shirt buyers every month",
      description: "The graph shows the estimated number of T-shirt buyers each month at two locations:",
      image: s2,
      options: ["Option A: SparkFest", "Option B: City Carnival"]
    },
    {
      id: 8,
      type: "question",
      title: "Which location has more potential buyers?",
      image: s2
    },
    {
      id: 9,
      type: "answer",
      title: "Which location has more potential buyers?",
      answer: "SparkFest consistently has more estimated buyers every month compared to City Carnival.",
      image: s2
    },
    {
      id: 10,
      type: "question",
      title: "What does higher customer interest mean for a business?",
      image: s2
    },
    {
      id: 11,
      type: "answer",
      title: "What does higher customer interest mean for a business?",
      answer: "Higher customer interest means more people might buy the products, which usually leads to higher sales and profit.",
      image: s2
    },
    {
      id: 12,
      type: "question",
      title: "Which location is better for starting Maya's T-shirt shop according to this report?",
      image: s2
    },
    {
      id: 13,
      type: "answer",
      title: "Which location is better for starting Maya's T-shirt shop according to this report?",
      answer: "SparkFest is better because more people are interested in buying T-shirts, giving Maya a higher chance of success.",
      image: s2
    }
  ]
};

// Helper function to render previous content
const renderPreviousContent = (previousContent) => {
  if (!previousContent) return null;
  
  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-6 border-l-4 border-gray-300">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{previousContent.title}</h3>
      {previousContent.subtitle && (
        <h4 className="text-md font-medium text-gray-600 mb-2">{previousContent.subtitle}</h4>
      )}
      <p className="text-sm text-gray-600 mb-3">{previousContent.description}</p>
      <div className="flex gap-4 mb-3">
        {previousContent.options.map((option, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {option}
          </span>
        ))}
      </div>
      {previousContent.answer && (
        <div className="bg-green-50 p-3 rounded border-l-2 border-green-300 mb-2">
          <p className="text-sm text-green-800 font-medium">{previousContent.answer}</p>
        </div>
      )}
      {previousContent.explanation && (
        <div className="bg-yellow-50 p-3 rounded border-l-2 border-yellow-300">
          <p className="text-sm text-yellow-800 font-medium">{previousContent.explanation}</p>
        </div>
      )}
    </div>
  );
};

// Helper functions to render different step types
const renderStep = (stepData) => {
  switch (stepData.type) {
    case "report_intro":
      return (
        <>
          <h1 className="text-3xl font-bold mb-4 text-blue-600">{stepData.title}</h1>
          {stepData.subtitle && (
            <h2 className="text-xl font-semibold mb-4 text-gray-700">{stepData.subtitle}</h2>
          )}
          <p className="mb-6 text-lg leading-relaxed text-gray-700">{stepData.description}</p>
          <div className="flex justify-center gap-8 mb-6">
            {stepData.options.map((option, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold text-lg shadow-lg">
                {option}
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-4">
            <Image src={stepData.image} alt="Data visualization" width={600} height={400} />
          </div>
        </>
      );
    
    case "question":
      return (
        <>
          {renderPreviousContent(stepData.previousContent)}
          <h2 className="text-2xl font-bold mb-6 text-green-600">{stepData.title}</h2>
          {stepData.id !== 3 && stepData.id !== 10 && (
            <div className="flex justify-center mb-4">
              <Image src={stepData.image} alt="Data visualization" width={600} height={400} />
            </div>
          )}
        </>
      );
    
    case "answer":
      return (
        <>
          {renderPreviousContent(stepData.previousContent)}
          <h2 className="text-2xl font-bold mb-6 text-green-600">{stepData.title}</h2>
          {stepData.id !== 4 && stepData.id !== 11 && (
            <div className="flex justify-center mb-4">
              <Image src={stepData.image} alt="Data visualization" width={600} height={400} />
            </div>
          )}
          <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
            <p className="text-xl font-semibold text-green-800">{stepData.answer}</p>
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
      <div className="max-w-5xl bg-white shadow-xl rounded-2xl p-8">
        {renderStep(currentStepData)}

        {!isLastStep && (
          <div className="flex justify-center mt-8">
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