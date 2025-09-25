"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";

const contentData = {
  steps: [
    {
      id: 0,
      type: "intro",
      title: "Mia's Pricing Dilemma",
      image: s1,
      content: "Mia's lunchboxes are doing well! But now she's wondering \"Should I always keep the same price? Or should I change my price depending on the situation?\""
    },
    {
      id: 1,
      type: "explanation",
      content: "Sometimes you want to sell products really fast. Sometimes you want to add some time to the product to make it special. Sometimes you just want to match other competitors. Each situation needs a different pricing strategy."
    },
    {
      id: 2,
      type: "strategy",
      title: "Strategy 1: Discount Pricing",
      content: "If Mia wants to sell all her lunchboxes quickly, maybe sell all the lunchboxes in the first school break, what should she do?"
    },
    {
      id: 3,
      type: "strategy-details",
      title: "Strategy 1: Discount Pricing",
      content: "If Mia wants to sell all her lunchboxes quickly, maybe sell all the lunchboxes in the first school break, what should she do?",
      definition: "Discount pricing means lowering the price so more people rush to buy.",
      example: "Example: \"Imagine the school canteen has leftover muffins at the end of the day. If they sell them at discounted prices, students quickly grab them.\""
    },
    {
      id: 4,
      type: "strategy",
      title: "Strategy 2: Premium Pricing",
      content: "What if Mia makes a really special lunchbox, something colorful, with stickers, or glow-in-the-dark, how should she price it? She could do it by applying a premium pricing strategy."
    },
    {
      id: 5,
      type: "strategy-details",
      title: "Strategy 2: Premium Pricing",
      content: "What if Mia makes a really special lunchbox, something colorful, with stickers, or glow-in-the-dark, how should she price it? She could do it by applying a premium pricing strategy.",
      definition: "Premium pricing means charging more because the product is unique or extra special.",
      example: "Example: \"A fancy water bottle with built-in cooling feature will cost more than a normal bottle because it has a special feature.\""
    },
    {
      id: 6,
      type: "strategy",
      title: "Strategy 3: Competitive Pricing",
      content: "If many stalls already sell similar lunch boxes as Mia and she doesn't have anything extra or special to offer then what should she do? She could do it by applying a competitive pricing strategy."
    },
    {
      id: 7,
      type: "strategy-details",
      title: "Strategy 3: Competitive Pricing",
      content: "If many stalls already sell similar lunch boxes as Mia and she doesn't have anything extra or special to offer then what should she do? She could do it by applying a competitive pricing strategy.",
      definition: "Competitive pricing means setting your price close to other sellers so you don't lose customers.",
      example: "Example: If two nearby stores sell the same chocolate bar, one charges $10 while the other charges $8, all the kids will go with the option which is less expensive."
    },
    {
      id: 8,
      type: "question",
      content: "Have you ever seen a shop put a SALE sign? Why do they do it?"
    },
    {
      id: 9,
      type: "question",
      content: "Why do some things in the school stationery shop, like glitter pens or fancy pencil boxes, cost more than plain ones?"
    },
    {
      id: 10,
      type: "question",
      content: "Why do you and your family sometimes check prices at two shops before buying the same snack or toy?"
    }
  ]
};

const renderStep = (stepData) => {
  switch (stepData.type) {
    case "intro":
      return (
        <>
          <h1 className="text-4xl font-bold mb-6 text-blue-600">{stepData.title}</h1>
          <p className="text-xl leading-relaxed">{stepData.content}</p>
          <br />
          <Image src={stepData.image} alt={stepData.title} width={350} height={350} className="rounded-lg mx-auto" />
        </>
      );
    
    case "explanation":
      return (
        <div className="text-xl leading-relaxed space-y-4">
          <p>{stepData.content}</p>
        </div>
      );
    
    case "strategy":
      return (
        <div className="text-xl leading-relaxed space-y-4">
          <h2 className="text-3xl font-bold text-green-600 mb-4">{stepData.title}</h2>
          <p>{stepData.content}</p>
        </div>
      );
    
    case "strategy-details":
      return (
        <div className="text-xl leading-relaxed space-y-4">
          <h2 className="text-3xl font-bold text-green-600 mb-4">{stepData.title}</h2>
          <p className="mb-4">{stepData.content}</p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-800 text-lg">{stepData.definition}</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <p className="text-gray-700 text-lg">{stepData.example}</p>
          </div>
        </div>
      );
    
    case "question":
      return (
        <div className="text-center">
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
            <p className="text-2xl font-semibold text-purple-800">{stepData.content}</p>
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