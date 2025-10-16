"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";

// Content data structure
const contentData = {
  steps: [
    {
      id: 0,
      type: "intro",
      title: "Do you know what Netflix & Blockbuster is?",
      image: s1
    },
    {
      id: 1,
      type: "progressive",
      sectionTitle: "Do you know what Netflix & Blockbuster is?",
      sectionContent: "Netflix is a company that runs an online streaming service for people to watch movies and shows over the internet. Blockbuster was a company where people rented DVDs from physical stores before streaming became mainstream. In the late 90s, both Blockbuster & Netflix ran a DVD rental business.",
      image: s1
    },
    {
      id: 2,
      type: "intro",
      title: "What is a DVD?",
      image: s3
    },
    {
      id: 3,
      type: "progressive",
      sectionTitle: "What is a DVD?",
      sectionContent: "A DVD is a disc that stores movies or shows. People used to buy or rent DVDs to watch entertainment on a DVD player at home.",
      image: s3
    },
    {
      id: 4,
      type: "evolution",
      title: "Evolution",
      content: [
        "Netflix used to mail DVDs to customers' homes for people to watch movies without going to a video rental store.",
        "In the late 2000s, however, DVDs started becoming less popular because people wanted movies and shows on their devices instead.",
        "During this market shift, Blockbuster did not adapt to online streaming. They relied only on physical stores. Slowly, customers left Blockbuster for easier options, and eventually, Blockbuster closed most of its stores.",
        "Netflix, on the other hand, adapted early to online streaming. They started letting people instantly watch movies and shows on TVs, computers, and phones. Because they adapted to the market shift, Netflix managed to survive only to grow into a global entertainment giant!"
      ],
      image: s3
    },
    {
      id: 5,
      type: "question",
      title: "What did you learn from this?",
    },
    {
      id: 6,
      type: "progressive",
      sectionTitle: "What did you learn from this?",
      sectionContent: "Netflix succeeded because it adapted at the right time. They shifted from DVD rentals to online streaming and redefined their market strategy. Instead of targeting all entertainment viewers, Netflix focused on a more realistic Serviceable Available Market (SAM) for people with internet access, who were willing to pay for streaming subscriptions. This smart move helped them grow.",
    }
  ]
};

// Helper functions to render different step types
const renderStep = (stepData) => {
  switch (stepData.type) {
    case "intro":
      return (
        <>
          <h1 className="text-4xl font-bold mb-8 text-blue-600 text-center">{stepData.title}</h1>
          <div className="flex justify-center gap-6 mb-8">
            {stepData.id === 0 ? (
              <>
                <Image 
                  src={stepData.image} 
                  alt={stepData.title} 
                  width={400} 
                  height={300} 
                  className="rounded-lg shadow-lg"
                />
                <Image 
                  src={s2} 
                  alt={stepData.title} 
                  width={400} 
                  height={300} 
                  className="rounded-lg shadow-lg"
                />
              </>
            ) : (
              <Image 
                src={stepData.image} 
                alt={stepData.title} 
                width={500} 
                height={350} 
                className="rounded-lg shadow-lg"
              />
            )}
          </div>
        </>
      );
    
    case "progressive":
      return (
        <>
          <h1 className="text-4xl font-bold mb-8 text-blue-600 text-center">{stepData.sectionTitle}</h1>
          {stepData.id < 4 && (
            <div className="flex justify-center mb-8">
              {stepData.id < 2 ? (
                <>
                  <Image 
                    src={stepData.image} 
                    alt={stepData.sectionTitle} 
                    width={400} 
                    height={300} 
                    className="rounded-lg shadow-lg"
                  />
                  <Image 
                    src={s2} 
                    alt={stepData.sectionTitle} 
                    width={400} 
                    height={300} 
                    className="rounded-lg shadow-lg ml-6"
                  />
                </>
              ) : (
                <Image 
                  src={stepData.image} 
                  alt={stepData.sectionTitle} 
                  width={500} 
                  height={400} 
                  className="rounded-lg shadow-lg"
                />
              )}
            </div>
          )}
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <p className="text-xl leading-relaxed text-gray-700">{stepData.sectionContent}</p>
          </div>
        </>
      );
    
    case "evolution":
      return (
        <>
          <h1 className="text-4xl font-bold mb-8 text-blue-600 text-center">{stepData.title}</h1>
          <div className="space-y-6">
            {stepData.content.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <span className="text-2xl font-bold text-blue-600 bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </span>
                <p className="text-xl leading-relaxed text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </>
      );
    
    case "question":
      return (
        <>
          <h1 className="text-4xl font-bold mb-8 text-blue-600 text-center">{stepData.title}</h1>
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
