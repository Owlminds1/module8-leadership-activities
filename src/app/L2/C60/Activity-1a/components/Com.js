"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";

// ✅ Content data structure
const contentData = {
  steps: [
    {
      id: 0,
      type: "intro",
      title: "",
      description:
        "Mia has designed a lunchbox meal for school kids. She needs your help to figure out the right price for her lunchbox!",
      image: s1,
    },
    {
      id: 1,
      type: "question",
      title:
        "Is selling something only about making it? Do we also need to think about the cost?",
      content: "",
    },
    {
      id: 2,
      type: "question",
      title:
        "Is selling something only about making it? Do we also need to think about the cost?",
      content:
        "Yes, money also matters! We discussed money and how to sell things in our previous classes. So today, let’s use that knowledge to help Mia.",
    },
    {
      id: 3,
      type: "section",
      title: "Cost of the Lunchbox",
      content: "A lunchbox has 4 items put together.",
    },
    {
      id: 4,
      type: "progressive",
      title: "List cost of each item",
      additionalContent: {
        items: [
          "Sandwich = $2",
          "Juice Box = $1.50",
          "Apple Slices = $1",
          "Cookie = $0.50",
        ],
      },
    },
    {
      id: 5,
      type: "progressive",
      title:
        "Add up the cost of each item to get the total cost of the lunchbox.",
      finalContent: {
        description: "This comes to $5.",
      },
    },
    {
      id: 6,
      type: "section",
      title: "Are there any extra costs?",
      content: "",
    },
    {
      id: 7,
      type: "section",
      title: "Are there any extra costs?",
      contentList: [
        "Packaging: She needs to put the food in a hygienic lunchbox.",
        "Advertising: She needs to distribute posters in school to promote her lunchbox.",
        "Food Stall: She needs a place to set up a stall to sell lunchboxes.",
      ],
    },
    {
      id: 8,
      type: "progressive",
      title:
        "Mia estimates that she will have to spend $1 for each of the above tasks.",
      finalContent: {
        description:
          "She calculates that the total cost of making and selling one lunchbox will be: $5 (food) + $3 (extras) = $8",
      },
    },
    {
      id: 9,
      type: "input",
      title:
        "So, the total extra cost is $3. That means the total cost of making and selling one lunchbox will be: $5 (food) + $3 (extras) = $8",
      prompt: "Can you enter the total cost Mia should charge for one lunchbox?",
    },
  ],
};

// ✅ Helper function to render step types
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
      return (
        <div>
          <h1 className="text-2xl font-bold mb-4">{stepData.title}</h1>
          <p>{stepData.content}</p>
        </div>
      );

    case "section":
      return (
        <div>
          <h2 className="text-xl font-bold mb-2">{stepData.title}</h2>
          {stepData.content && <p>{stepData.content}</p>}
          {stepData.contentList && (
            <ul className="list-disc text-left ml-6 mt-2 space-y-1">
              {stepData.contentList.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      );

    case "progressive":
      return (
        <div>
          {stepData.title && (
            <h2 className="text-xl font-bold mb-2">{stepData.title}</h2>
          )}
          {stepData.content && <p>{stepData.content}</p>}
          {stepData.additionalContent && (
            <div className="mt-4">
              {stepData.additionalContent.title && (
                <p className="font-bold">
                  {stepData.additionalContent.title}
                </p>
              )}
              {stepData.additionalContent.items.map((item, index) => (
                <p key={index} className="mt-2">
                  {item}
                </p>
              ))}
            </div>
          )}
          {stepData.finalContent && (
            <p className="mt-4">{stepData.finalContent.description}</p>
          )}
        </div>
      );

    case "input":
      return (
        <div>
          <h2 className="text-xl font-bold mb-2">{stepData.title}</h2>
          <p className="mb-4">{stepData.prompt}</p>
          <input
            type="number"
            min={0}
            step={0.01}
            className="px-4 py-2 border border-gray-300 rounded-lg text-lg"
            placeholder="Enter total cost..."
          />
        </div>
      );

    default:
      return <p>{stepData.content}</p>;
  }
};

// ✅ Main component
export default function Com() {
  const [step, setStep] = useState(0);
  const nextStep = () => setStep((prev) => prev + 1);
  const currentStepData = contentData.steps[step];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-6 text-center">
      <div className="max-w-xl bg-white shadow-lg rounded-2xl p-6 text-xl">
        {renderStep(currentStepData)}

        {step < contentData.steps.length - 1 && (
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
