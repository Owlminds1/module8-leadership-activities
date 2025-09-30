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
      image: s1,
      content: "Mia&apos;s lunchbox stall is getting popular at school. Students love her food! At first, everyone just bought a lunchbox when they wanted one and paid once. But Mia is thinking: \"Is there another way I could sell my lunchboxes so I don&apos;t have to worry every single day about who will buy?\""
    },
    {
      id: 1,
      type: "question",
      content: "Can you think of a solution for Mia&apos;s problem?"
    },
    {
      id: 2,
      type: "answer",
      question: "Can you think of a solution for Mia&apos;s problem?",
      answer: "Mia can shift the way she sells lunchboxes from one-time payment to subscription model."
    },
    {
      id: 3,
      type: "concept",
      title: "One-Time Pay",
      definition: "One-time pay means you pay only when you buy the product, and that&apos;s it.",
      examples: [
        "Buying a sandwich at the canteen.",
        "Buying a new backpack at the start of the school year."
      ]
    },
    {
      id: 4,
      type: "concept",
      title: "Subscription",
      definition: "Subscription means you pay a fixed amount regularly, every week, every month, or even every year, and you keep getting the product or service again and again without paying each time.",
      examples: [
        "Paying for milk delivered every morning.",
        "Your parents paid your school bus fee in one go at the start of the year. Now you can travel on the bus every day without paying each day."
      ]
    },
    {
      id: 5,
      type: "question",
      content: "Can you think of something your family pays for once, but you get to use it repeatedly without paying every time?"
    },
    {
      id: 6,
      type: "question",
      content: "How could Mia use the subscription idea for her lunchboxes?"
    },
    {
      id: 7,
      type: "solution",
      question: "How could Mia use the subscription idea for her lunchboxes?",
      answer: "She can tell her classmates, \"You can either buy a lunchbox whenever you want for $5, OR, you can pay $20 at the start of the month, and I&apos;ll bring you one lunchbox every Friday.\""
    },
    {
      id: 8,
      type: "comparison",
      content: "One-time pay: Students pay $5 when they want. Subscription: Students pay $20 once, and get 4 lunchboxes across the month. Which one is better for Mia&apos;s business one-time pay or subscription?"
    },
    {
      id: 9,
      type: "conclusion",
      question: "One-time pay: Students pay $5 when they want. Subscription: Students pay $20 once, and get 4 lunchboxes across the month. Which one is better for Mia&apos;s business one-time pay or subscription?",
      answer: "Subscription is better. As Mia gets money upfront and regularly, which helps her plan how many lunchboxes and ingredients to prepare. She reduces the risk of having unsold lunchboxes. Even if she offers a small discount, she earns steady income."
    }
  ]
};

const renderStep = (stepData) => {
  switch (stepData.type) {
    case "intro":
      return (
        <>
          <h1 className="text-4xl font-bold mb-6 text-blue-600">{stepData.title}</h1>
          <p className="text-xl leading-relaxed mb-4">{stepData.content}</p>
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