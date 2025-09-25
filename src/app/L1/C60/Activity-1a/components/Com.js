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
      title: "Meet Meer Chef Max",
      description: "Max loves cooking and has the yummiest burger recipe. He wants to open his own fast-food corner. But Max has one little problem, he's not very good at calculating money. He needs your help to figure out the right price for his burger!",
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
      title: "Step 1: Cost of Making a Burger",
      content: "Think of the parts: A burger is not just one thing. It has many parts like bread, patty, cheese, and ketchup."
    },
    {
      id: 3,
      type: "progressive",
      title: "Step 1: Cost of Making a Burger",
      content: "Think of the parts: A burger is not just one thing. It has many parts like bread, patty, cheese, and ketchup.",
      additionalContent: {
        title: "Cost of each part:",
        items: ["Bread = $1", "Patty = $1", "Cheese = $1", "Ketchup = $1"]
      }
    },
    {
      id: 4,
      type: "progressive",
      title: "Step 1: Cost of Making a Burger",
      content: "Think of the parts: A burger is not just one thing. It has many parts like bread, patty, cheese, and ketchup.",
      additionalContent: {
        title: "Cost of each part:",
        items: ["Bread = $1", "Patty = $1", "Cheese = $1", "Ketchup = $1"]
      },
      finalContent: {
        title: "Add the costs together:",
        description: "To know the total cost, we need to add up the cost of each ingredient which will be",
        result: "$4"
      }
    },
    {
      id: 5,
      type: "section",
      title: "Step 2: Extra Costs",
      content: "Wait a minute! Is there any other cost besides the food? Yes! Max also needs to tell people about his burger shop by doing advertisements."
    },
    {
      id: 6,
      type: "progressive",
      content: "What do you think advertisement means?",
      isBold: true
    },
    {
      id: 7,
      type: "progressive",
      content: "What do you think advertisement means?",
      isBold: true,
      answer: "Advertisement means telling people about something you are selling so they know about it and want to buy it. It's like showing or sharing a message to get people interested."
    },
    {
      id: 8,
      type: "progressive",
      content: "Can you think of ways Max advertise his burger shop? What are some ways to do it?",
      isBold: true
    },
    {
      id: 9,
      type: "progressive",
      content: "Can you think of ways Max advertise his burger shop? What are some ways to do it?",
      isBold: true,
      answer: {
        title: "There are many ways like:",
        items: ["Put up posters", "Tell people through TV or radio ads", "Share on social media apps like Instagram and WhatsApp"]
      }
    },
    {
      id: 10,
      type: "progressive",
      content: "Can you think of ways Max advertise his burger shop? What are some ways to do it?",
      isBold: true,
      answer: {
        title: "There are many ways like:",
        items: ["Put up posters", "Tell people through TV or radio ads", "Share on social media apps like Instagram and WhatsApp"]
      },
      decision: "From all these ideas max has have decided to make posters and give them to people as advertisements."
    },
    {
      id: 11,
      type: "calculation",
      content: "Making a poster and giving it to people costs $1 per burger.",
      calculation: "So the cost of making and advertising one burger is: $4 (ingredients) + $1 (advertisement) = $5"
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
            <p className="mt-4">
              <span className="font-bold">{stepData.additionalContent.title}</span>
              <br />
              {stepData.additionalContent.items.map((item, index) => (
                <span key={index}>
                  {item}
                  {index < stepData.additionalContent.items.length - 1 && <br />}
                </span>
              ))}
            </p>
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
          <span className="font-bold">{stepData.calculation}</span>
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

        {step !== 11 && (
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
