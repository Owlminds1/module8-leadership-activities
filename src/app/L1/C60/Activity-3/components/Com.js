"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";

const contentData = {
  steps: [
    {
      id: 0,
      type: "equipment",
      title: "Chef Max is almost ready to sell his yummy burgers. But wait! Before he can start, he needs some important things for his shop:",
      items: [
        { name: "Stove", price: "$10", image: s1 },
        { name: "Pan", price: "$5", image: s2 },
        { name: "Table", price: "$5", image: s3 }
      ]
    },
    {
      id: 1,
      type: "summary",
      content: "So, to start his shop, Max needs $20. Let's call this amount his start-up money."
    },
    {
      id: 2,
      type: "scenario",
      title: "Scenario 1:",
      content: "Max decides to sell each burger for $6. It costs him $5 to make the burger."
    },
    {
      id: 3,
      type: "question",
      content: "So is he making profit or loss?"
    },
    {
      id: 4,
      type: "answer",
      question: "So is he making profit or loss?",
      answer: "He is making a $1 profit on each burger."
    },
    {
      id: 5,
      type: "calculation",
      content: "Let's say Max sells 20 burgers. That means he made $20 profit."
    },
    {
      id: 6,
      type: "choice",
      question: "What should he do with this money?",
      options: [
        "Celebrate the happiest profit!",
        "Buy more items for his burger shop",
        "Return the money to his friend"
      ]
    },
    {
      id: 7,
      type: "scenario",
      title: "Scenario 2:",
      content: "Max thought that he will keep the cost of the burger less so he can attract more customers hence he decided to sell each burger for $4. And it actually costs him $5 to make the burger."
    },
    {
      id: 8,
      type: "question",
      content: "So is he making profit or loss?"
    },
    {
      id: 9,
      type: "answer",
      question: "So is he making profit or loss?",
      answer: "He is making a $1 loss on each burger."
    },
    {
      id: 10,
      type: "calculation",
      content: "Now, let's say Max sells 20 burgers. That means he made a $20 loss."
    }
  ]
};

const renderStep = (stepData) => {
  switch (stepData.type) {
    case "equipment":
      return (
        <div>
          <p className="mb-6 text-xl">{stepData.title}</p>
          <div className="space-y-4">
            {stepData.items.map((item, index) => (
              <div key={index} className="flex items-center p-4 rounded-lg">
                <div className="flex-1">
                  <span className="text-xl font-semibold">{item.name}</span>
                </div>
                <div className="mx-4">
                  <Image src={item.image} alt={item.name} width={80} height={80} className="rounded" />
                </div>
                <div className="flex-1 text-right">
                  <span className="font-bold text-green-600 text-xl">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    
    case "summary":
      return <p className="text-xl">{stepData.content}</p>;
    
    case "scenario":
      return (
        <div>
          <h2 className="text-2xl font-bold mb-4">{stepData.title}</h2>
          <p className="text-xl">{stepData.content}</p>
        </div>
      );
    
    case "question":
      return <p className="text-xl font-semibold">{stepData.content}</p>;
    
    case "answer":
      return (
        <div>
          <p className="text-xl font-semibold mb-6">{stepData.question}</p>
          <p className="text-xl text-green-600 font-bold">{stepData.answer}</p>
        </div>
      );
    
    case "calculation":
      return <p className="text-xl">{stepData.content}</p>;
    
    case "choice":
      return (
        <div>
          <p className="text-xl font-semibold mb-6">{stepData.question}</p>
          <div className="space-y-3">
            {stepData.options.map((option, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-lg">
                {option}
              </div>
            ))}
          </div>
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-6 text-center">
      <div className="max-w-2xl bg-white shadow-lg rounded-2xl p-8 text-xl">
        {renderStep(currentStepData)}

        {step < contentData.steps.length - 1 && (
          <button
            onClick={nextStep}
            className="mt-8 px-8 py-3 bg-yellow-500 text-white font-semibold rounded-xl shadow hover:bg-yellow-600 transition-colors text-lg"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}