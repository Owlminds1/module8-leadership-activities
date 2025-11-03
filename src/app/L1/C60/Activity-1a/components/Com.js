"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";

// Updated content data structure
const contentData = {
  steps: [
    {
      id: 0,
      type: "intro",
      title: "Meet Chef Max",
      description:
        "Chef Max loves cooking and has the yummiest recipe to make a burger. He wants to open his own fast-food corner. But Max is not good with money. He needs your help to figure out the right price for his burger!",
      image: s1
    },
    {
      id: 1,
      type: "question",
      content:
        "Is selling something is only about making it? Do we also need to think about money?"
    },
    {
      id: 2,
      type: "progressive",
      title: "Cost of Making a Burger",
      content:
        "Think of the ingredients: A burger is not just one thing. What are the different items you require to put a burger together?"
    },
    {
      id: 3,
      type: "progressive",
      title: "List cost of each ingredient:",
      additionalContent: {
        items: ["Bread = $1", "Patty = $1", "Cheese = $1", "Ketchup = $1"]
      },
      finalContent: {
        description:
          "Add up the cost of each ingredient to get the total cost of making a burger. This comes to $4."
      }
    },
    {
      id: 4,
      type: "progressive",
      title: "Are there any extra costs?",
      content:
        ""
    },
    {
      id: 5,
      type: "progressive",
      title: "Are there any extra costs?",
      content:
        "Yes! Max also needs to promote his burgers."
    },
    {
      id: 6,
      type: "progressive",
      title: "How would he do so?",
      content: ""
    },
    {
      id: 7,
      type: "progressive",
      title: "How would he do so?",
      content: "By putting up advertisements."
    },
    {
      id: 8,
      type: "progressive",
      title: "How can advertisements help?",
      content:
        ""
    },
    {
      id: 9,
      type: "progressive",
      title: "How can advertisements help?",
      content:
        "Advertisements grab attention and showcase the product in ways to encourage purchase."
    },
    {
      id: 10,
      type: "select-multi",
      title:
        "What are some of the ways Max can advertise his burger shop? (Select all that apply)",
      options: [
        "Put up Posters",
        "Word of Mouth through friends and family",
        "Distribute flyers or brochures",
        "Create ads on TV or radio",
        "Share on social media apps like YouTube"
      ]
    },
    {
      id: 11,
      type: "progressive",
      title: "Max decided to create flyers",
      content: "Making a flyer and giving it to people also incurs cost, about $1 per burger."
    },
    {
      id: 12,
      type: "calculation",
      title: "What’s the total cost of each burger now? $4 (ingredients) + $1 (advertisement)",
      content: ""
    },
    {
      id: 13,
      type: "calculation",
      title: "What’s the total cost of each burger now? $4 (ingredients) + $1 (advertisement)",
      content: "$5"
    }
  ]
};

// Helper functions to render different step types
const renderStep = (stepData, step, setStep, multiSelectState, setMultiSelectState, singleSelectState, setSingleSelectState) => {
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
          {!stepData.title && stepData.content && (
            <p>{stepData.content}</p>
          )}
          {stepData.additionalContent && (
            <div className="mt-4">
              {stepData.additionalContent.items.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          )}
          {stepData.finalContent && (
            <div className="mt-4">
              {stepData.finalContent.description}
            </div>
          )}
        </div>
      );
    case "calculation":
      return (
        <div>
          {stepData.title && <div className="font-bold mb-2">{stepData.title}</div>}
          {stepData.content && <div>{stepData.content}</div>}
          <div className="mt-2 font-bold">{stepData.calculation}</div>
        </div>
      );
    case "select-multi":
      return (
        <div>
          <div className="font-bold mb-2">{stepData.title}</div>
          <div className="flex flex-col items-start gap-2 mb-4">
            {stepData.options.map((option, idx) => (
              <label key={idx} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={multiSelectState.includes(option)}
                  onChange={() => {
                    if (multiSelectState.includes(option)) {
                      setMultiSelectState(multiSelectState.filter((o) => o !== option));
                    } else {
                      setMultiSelectState([...multiSelectState, option]);
                    }
                  }}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      );
    case "select-single":
      return (
        <div>
          <div className="font-bold mb-2">{stepData.title}</div>
          <div className="mb-2">{stepData.content}</div>
          <div className="flex flex-col items-start gap-2 mb-4">
            {stepData.options.map((option, idx) => (
              <label key={idx} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="price-select"
                  checked={singleSelectState === option}
                  onChange={() => setSingleSelectState(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      );
    default:
      return <p>{stepData.content}</p>;
  }
};

export default function Com() {
  const [step, setStep] = useState(0);
  const [multiSelectState, setMultiSelectState] = useState([]);
  const [singleSelectState, setSingleSelectState] = useState("");

  const currentStepData = contentData.steps[step];

  // Only show next button for non-final step
  const isLastStep = step === contentData.steps.length - 1;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-6 text-center">
      <div className="max-w-xl bg-white shadow-lg rounded-2xl p-6 text-xl">
        {renderStep(currentStepData, step, setStep, multiSelectState, setMultiSelectState, singleSelectState, setSingleSelectState)}

        {!isLastStep && (
          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="mt-6 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-xl shadow hover:bg-yellow-600"
          >
            Next
          </button>
        )}
        {isLastStep && (
          <div className="mt-6 text-green-700 font-bold text-2xl"></div>
        )}
      </div>
    </div>
  );
}
