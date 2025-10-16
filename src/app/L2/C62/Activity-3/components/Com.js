"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";

// Content data structure
const contentData = {
  steps: [
    {
      id: 0,
      type: "question",
      content: "What's the top selling item?",
      image: s1
    },
    {
      id: 1,
      type: "answer",
      content: "What's the top selling item?",
      answer: "Friendship Band is the top-selling item. All 15 bands made by Leo were sold.",
      image: s1
    },
    {
      id: 2,
      type: "question",
      content: "Which item made the most profit? Why?",
      image: s1
    },
    {
      id: 3,
      type: "answer",
      content: "Which item made the most profit? Why?",
      answer: "Friendship Bands made the most profit because all got sold, meaning Leo didn't have any leftovers.",
      image: s1
    },
    {
      id: 4,
      type: "question",
      content: "Did Leo sell all the items he made?",
      image: s1
    },
    {
      id: 5,
      type: "answer",
      content: "Did Leo sell all the items he made?",
      answer: "No. He sold all the Friendship Bands, but he didn't sell all the Bag Tags or Keychains.",
      image: s1
    },
    {
      id: 6,
      type: "question",
      content: "Which item had some leftover stock?",
      image: s1
    },
    {
      id: 7,
      type: "answer",
      content: "Which item had some leftover stock?",
      answer: "Bag Tags and Keychains had some leftover stock because not all of them got sold.",
      image: s1
    },
    {
      id: 8,
      type: "question",
      content: "Which item might cause a loss for Leo? Why?",
      image: s1
    },
    {
      id: 9,
      type: "answer",
      content: "Which item might cause a loss for Leo? Why?",
      answer: "Bag Tags might cause a loss because less than half of those tags got sold, while he still paid for the materials of the unsold items.",
      image: s1
    },
    {
      id: 10,
      type: "question",
      content: "Why do you think Bag Tags didn't sell as well as the other products?",
      image: s1
    },
    {
      id: 11,
      type: "answer",
      content: "Why do you think Bag Tags didn't sell as well as the other products?",
      answer: "Maybe they weren't as beautiful or useful. Maybe customers didn't find them as appealing as the other items.",
      image: s1
    },
    {
      id: 12,
      type: "answer",
      content: "If Leo wants to make more profit next time, which product should he focus on?",
      answer: "He should focus on the Friendship Bands, since they are the most popular item and sold out completely.",
      image: s1
    }
  ]
};

// Helper functions to render different step types
const renderStep = (stepData) => {
  switch (stepData.type) {
    case "question":
      return (
        <>
          <h1 className="text-3xl font-bold mb-6 text-green-800 text-center">{stepData.content}</h1>
          <div className="flex justify-center mb-6">
            <Image src={stepData.image} alt="Business analysis" width={750} height={750} />
          </div>
        </>
      );
    
    case "answer":
      return (
        <>
          <h1 className="text-3xl font-bold mb-6 text-green-800 text-center">{stepData.content}</h1>
          <div className="flex justify-center mb-6">
            <Image src={stepData.image} alt="Business analysis" width={750} height={750} />
          </div>
          <div className="mt-6 p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-400 text-center">
            <p className="text-xl leading-relaxed">{stepData.answer}</p>
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
  const isLastStep = step === 12; // Last step is now id: 12

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8 text-center">
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