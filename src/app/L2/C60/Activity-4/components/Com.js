"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";

const contentData = {
  steps: [
    {
      id: 1,
      type: "intro",
      title: "Mia's Business Model Innovation",
      image: s1,
      content: "Mia’s lunchbox stall is getting popular at school. But there are days where fewer people come and there is a lot of wastage.\n\nMia wonders: “Buyers come to my stall every day, pay immediately and go away. Is there another way I can sell? I don’t want to worry every single day about whether I will get sales!”"
    },
    {
      id: 2,
      type: "question",
      content: "Can you think of a solution for Mia’s problem?"
    },
    {
      id: 3,
      type: "answer",
      question: "Can you think of a solution for Mia’s problem?",
      answer: "Mia can shift the way she sells lunchboxes from a single payment to a subscription model."
    },
    {
      id: 4,
      type: "concept",
      title: "Single Payment",
      definition: "Single payment indicates you pay only when you buy the product.",
      examples: [
        "Pay chess class fees after every session"
      ]
    },
    {
      id: 5,
      type: "concept",
      title: "Subscription",
      definition: "A subscription is when a customer pays a fixed amount regularly to get a product on a regular basis over time.",
      examples: [
        "Pay for chess fees upfront and take three sessions every week for 3 months."
      ]
    },
    {
      id: 6,
      type: "question",
      content: "How can Mia change her business model to subscription?"
    },
    {
      id: 7,
      type: "solution",
      question: "How can Mia change her business model to subscription?",
      answer: "She can tell her buyer, “You can either buy a lunchbox whenever you want for $5, OR, Take a monthly subscription, and I’ll save a lunchbox for you every day.”"
    },
    {
      id: 8,
      type: "question",
      content: "Why does the subscription model work for Mia?"
    },
    {
      id: 9,
      type: "answer",
      question: "Why does the subscription model work for Mia?",
      answer: "She never runs out of customers and is assured of steady sales. Her customers are never disappointed as their lunch box is saved. She minimises the risk of having unsold lunchboxes."
    }
  ]
};

const renderStep = (stepData) => {
  switch (stepData.type) {
    case "intro":
      return (
        <>
          <h1 className="text-4xl font-bold mb-6 text-blue-600">{stepData.title}</h1>
          {stepData.content.split("\n").map((line, idx) => (
            <p key={idx} className="text-xl leading-relaxed mb-4">{line}</p>
          ))}
          <Image src={stepData.image} alt={stepData.title} width={350} height={350} className="rounded-lg mx-auto" />
        </>
      );
    
    case "question":
      return (
        <div className="text-center">
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
            <p className="text-2xl font-semibold text-purple-800">{stepData.content}</p>
          </div>
        </div>
      );
    
    case "answer":
      return (
        <div className="text-xl leading-relaxed space-y-4">
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 mb-4">
            <p className="text-2xl font-semibold text-purple-800">{stepData.question}</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
            <p className="text-xl font-semibold text-green-800">{stepData.answer}</p>
          </div>
        </div>
      );
    
    case "concept":
      return (
        <div className="text-xl leading-relaxed space-y-4">
          <h2 className="text-3xl font-bold text-green-600 mb-4">{stepData.title}</h2>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <p className="font-semibold text-blue-800 text-lg">{stepData.definition}</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <p className="font-semibold text-gray-800 mb-2">Examples:</p>
            {stepData.examples.map((example, index) => (
              <p key={index} className="text-gray-700 text-lg">• {example}</p>
            ))}
          </div>
        </div>
      );
    
    case "solution":
      return (
        <div className="text-xl leading-relaxed space-y-4">
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 mb-4">
            <p className="text-2xl font-semibold text-purple-800">{stepData.question}</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
            <p className="text-xl font-semibold text-green-800">{stepData.answer}</p>
          </div>
        </div>
      );
    
    case "comparison":
      return (
        <div className="text-center">
          <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
            <p className="text-xl font-semibold text-orange-800">{stepData.content}</p>
          </div>
        </div>
      );
    
    case "conclusion":
      return (
        <div className="text-xl leading-relaxed space-y-4">
          <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200 mb-4">
            <p className="text-xl font-semibold text-orange-800">{stepData.question}</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
            <p className="text-xl font-semibold text-green-800">{stepData.answer}</p>
          </div>
        </div>
      );
    
    default:
      return <p>{stepData.content}</p>;
  }
};

export default function Com() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  const currentStepData = contentData.steps[step];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8">
        {renderStep(currentStepData)}

        {step < contentData.steps.length - 1 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={nextStep}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}