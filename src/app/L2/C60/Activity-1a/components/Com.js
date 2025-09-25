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
      title: "Meet Mia!",
      description: "Mia is a creative 4th grader who loves coming up with new ideas. She has designed a special school lunchbox meal that he thinks kids would love. But there’s one problem, Mia is not very good at calculating money. She needs your help to figure out the right price for his lunchbox!",
      image: s1
    },
    {
      id: 1,
      type: "question",
      content: "Do you think selling something is only about making it? Or do we also need to think about money?"
    },
    {
      id: 2,
      type: "progressive",
      title: "Step 1: Cost of Making a LunchBox",
      content: "A lunchbox isn’t just one thing. It has different parts"
    },
    {
      id: 3,
      type: "progressive",
      title: "Step 1: Cost of Making a Burger",
      content: "A lunchbox isn’t just one thing. It has different parts",
      additionalContent: {
        title: "Cost of each part:",
        items: ["Sandwich = $2", "Juice box = $1.50", "Apple slices = $1", "Cookie = $0.50"]
      }
    },
    {
      id: 4,
      type: "progressive",
      title: "Step 1: Cost of Making a Burger",
      content: "A lunchbox isn’t just one thing. It has different parts",
      additionalContent: {
        title: "Cost of each part:",
        items: ["Sandwich = $2", "Juice box = $1.50", "Apple slices = $1", "Cookie = $0.50"]
      },
      finalContent: {
        title: "",
        description: "So, total cost of the food items is: $2 + $1.50 + $1 + $0.50",
        result: "$5"
      }
    },
    {
      id: 5,
      type: "section",
      title: "Step 2: Extra Costs",
      content: "Wait a minute! Do you think there is any other cost besides making lunch boxes?"
    },
    {
      id: 6,
      type: "progressive",
      content: "1. Packaging: She needs to put the food in a clean, neat lunchbox which will cost $1"
    },
    {
      id: 7,
      type: "progressive",
      content: "1. Packaging: She needs to put the food in a clean, neat lunchbox which will cost $1",
      additionalContent: {
        title: "",
        items: ["2. Advertising: She needs to let people know about so, she will distribute posters in school to let everyone know which will cost $1"]
      }
    },
    {
      id: 8,
      type: "progressive",
      content: "1. Packaging: She needs to put the food in a clean, neat lunchbox which will cost $1",
      additionalContent: {
        title: "",
        items: [
          "2. Advertising: She needs to let people know about so, she will distribute posters in school to let everyone know which will cost $1",
          "3. Food Stall: She needs some place to where she can set up a stall to sell lunchboxes, so she rents a small stall in the school canteen $30 per month, So approximately per lunchbox it will cost $1"
        ]
      }
    },
    {
      id: 9,
      type: "calculation",
      content: "",
      calculation: "So, the total extra cost is $3. That means the total cost of making and selling one lunchbox will be: $5 (food) + $3 (extras) = $8"
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

  const nextStep = () => setStep((prev) => prev + 1);

  const currentStepData = contentData.steps[step];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-6 text-center">
      <div className="max-w-xl bg-white shadow-lg rounded-2xl p-6 text-xl">
        {renderStep(currentStepData)}

        {step !== 9 && (
          <button
            onClick={nextStep}
            className="mt-6 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-xl shadow hover:bg-yellow-600"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
