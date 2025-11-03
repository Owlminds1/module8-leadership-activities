"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";

const contentData = {
  steps: [
    {
      id: 0,
      type: "intro",
      title: "Meet Rohan!",
      description: "Meet Rohan! He's super creative and designs beautiful, customized mugs. Everyone loves his work, and now he wants to open a small shop to sell them. But there's a challenge, Rohan is amazing at designing, but not so good at calculating money. He needs someone to help him figure out the right price so he can sell fairly and still make some profit.",
      image: s1
    },
    {
      id: 1,
      type: "question",
      content: "Is selling something only about making it? Do we also need to think about the cost?"
    },
    {
      id: 2,
      type: "progressive",
      title: "Step 1: Calculate the cost of making a customised mug.",
      content: "It has three actions with three different costs.",
      additionalContent: {
        title: "",
        items: [
          "Get a Plain mug (base item): $3",
          "Paint design: $2",
          "Package (box + wrapping): $1.50"
        ]
      },
      finalContent: {
        title: "Add up the cost of each action to get the total cost of the customised mug as $6.50",
        description: "",
        result: ""
      }
    },
    {
      id: 3,
      type: "section",
      title: "Extra Costs",
      content: "Are there any extra costs?"
    },
    {
      id: 4,
      type: "progressive",
      content: "Yes! He also needs to pay for:",
      additionalContent: {
        title: "",
        items: [
          "Electricity",
          "Rent"
        ]
      },
      finalContent: {
        title: "Rohan estimates that he will have to spend $0.50 on electricity and $1 for rent.",
        description: "So now the cost increases to $8 [6.50 + 1.50]",
        result: ""
      }
    },
    {
      id: 5,
      type: "progressive",
      title: "Step 3: Take smart business decisions",
      content: "Buying Materials in Bulk",
      additionalContent: {
        title: "",
        items: [
          "If Rohan buys just 1 plain mug, it costs $3 each. But if he buys 50 mugs together, the supplier gives a discount and the mugs would cost $2 each.",
          "So buying in bulk lets Rohan save money!"
        ]
      }
    },
    {
      id: 6,
      type: "section",
      title: "But here are some risks:",
      content: "What if Rohan doesn’t sell all the mugs?"
    },
    {
      id: 7,
      type: "progressive",
      content: "If Rohan buys too many mugs but doesn’t sell, he will lose money."
    },
    {
      id: 8,
      type: "section",
      title: "Will he require more storage space?",
      content: ""
    },
    {
      id: 9,
      type: "section",
      title: "Will he require more storage space?",
      content: "Fifty mugs take up a lot of space! Rohan might need a shelf for storage. That will add up as an additional cost thereby increasing the price of mugs."
    },
    {
      id: 10,
      type: "section",
      title: "Does he need more money upfront?",
      content: ""
    },
    {
      id: 11,
      type: "section",
      title: "Does he need more money upfront?",
      content: "Yes, bulk buying is less expensive in the long run, but Rohan needs upfront cash at the beginning to pay for all the mugs."
    }
  ]
};

// Helper functions to render different step types
const renderStep = (stepData) => {
  switch (stepData.type) {
    case "intro":
      return (
        <>
          <h1 className="text-3xl font-bold mb-4">{stepData.title}</h1>
          <p className="mb-4">{stepData.description}</p>
          <div className="flex justify-center mb-4">
            <Image src={stepData.image} alt="s1" width={300} height={300} />
          </div>
        </>
      );
    
    case "question":
      return <p>{stepData.content}</p>;
    
    case "section":
      return (
        <p>
          <span className="font-bold">{stepData.title}</span>
          <br />
          {stepData.content}
        </p>
      );
    
    case "progressive":
      return (
        <div>
          {stepData.title && (
            <p>
              <span className="font-bold">{stepData.title}</span>
              <br />
              {stepData.content}
            </p>
          )}
          {!stepData.title && (
            <p>
              {stepData.isBold ? (
                <span className="font-bold">{stepData.content}</span>
              ) : (
                stepData.content
              )}
            </p>
          )}
          
          {stepData.additionalContent && (
            <div className="mt-4">
              {stepData.additionalContent.title && (
                <p className="font-bold">{stepData.additionalContent.title}</p>
              )}
              {stepData.additionalContent.items.map((item, index) => (
                <p key={index} className="mt-2">
                  {item}
                </p>
              ))}
            </div>
          )}
          
          {stepData.finalContent && (
            <p className="mt-4">
              <span className="font-bold">{stepData.finalContent.title}</span> {stepData.finalContent.description} <span className="font-bold">{stepData.finalContent.result}</span>.
            </p>
          )}
          
          {stepData.answer && typeof stepData.answer === "string" && (
            <p className="mt-4">{stepData.answer}</p>
          )}
          
          {stepData.answer && typeof stepData.answer === "object" && (
            <p className="mt-4">
              <span className="font-bold">{stepData.answer.title}</span>
              <br />
              {stepData.answer.items.map((item, index) => (
                <span key={index}>
                  • {item}
                  {index < stepData.answer.items.length - 1 && <br />}
                </span>
              ))}
            </p>
          )}
          
          {stepData.decision && (
            <p className="mt-6">{stepData.decision}</p>
          )}
        </div>
      );
    
    case "calculation":
      return (
        <p>
          {stepData.content} <br />
          <span>{stepData.calculation}</span>
        </p>
      );
    
    default:
      return <p>{stepData.content}</p>;
  }
};

export default function Com() {
  const [step, setStep] = useState(0);

  const isComplete = step >= contentData.steps.length;
  const currentStepData = isComplete ? null : contentData.steps[step];

  const nextStep = () => {
    if (!isComplete) setStep((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-6 text-center">
      <div className="max-w-xl bg-white shadow-lg rounded-2xl p-6 text-xl">
        {isComplete ? (
          <div className="text-3xl text-green-700 font-bold py-16">Great job! You finished all steps.</div>
        ) : (
          <>
            {renderStep(currentStepData)}
            {step < contentData.steps.length - 1 && (
              <button
                onClick={nextStep}
                className="mt-6 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-xl shadow hover:bg-yellow-600"
              >
                Next
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
