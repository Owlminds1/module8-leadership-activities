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
      content: "Do you think selling something is only about making it? Or do we also need to think about money?"
    },
    {
      id: 2,
      type: "progressive",
      title: "Step 1: Cost of Making a Mug",
      content: "Let's first figure out how much it costs Rohan to make one mug.",
      additionalContent: {
        title: "",
        items: ["Plain mug (base item): $3", "Painting design: $2", "Packaging (box + wrapping): $1.50"]
      },
      finalContent: {
        title: "Total cost so far = $6.50",
        description: "",
        result: ""
      }
    },
    {
      id: 3,
      type: "section",
      title: "Step 2: Extra Costs",
      content: "Wait a minute! Do you think there is any other cost besides making a customized mug?"
    },
    {
      id: 4,
      type: "progressive",
      content: "Yes! There are.",
      additionalContent: {
        title: "",
        items: ["Electricity : about $0.50 per mug", "Stall rent: He would need some place where he can set up a stall to sell mugs, so he rents a small stall at $30 per month, So approximately per customized mug it will cost $1"]
      },
      finalContent: {
        title: "",
        description: "So now the cost to make and sell one mug is $6.50 + $1.50 = $8",
        result: ""
      }
    },
    {
      id: 5,
      type: "progressive",
      title: "Step 3: Buying Materials in Bulk",
      content: "Now here's an interesting business trick, buying in bulk. If Rohan buys just 1 plain mug, it costs $3 each. But if he buys 50 mugs together, the supplier gives a discount and the mugs would cost $2 each.",
      additionalContent: {
        title: "",
        items: ["So bulk saves money!"]
      }
    },
    {
      id: 6,
      type: "question",
      content: "What if Rohan doesn’t sell all the mugs? What will happen? "
    },
    {
      id: 7,
      type: "progressive",
      content: "What if Rohan doesn’t sell all the mugs? What will happen? ",
      additionalContent: {
        title: "",
        items: ["If Rohan buys too many mugs but doesn't sell them, the extra mugs just sit around. That means his money is stuck in unsold items, and he loses money instead of earning it."]
      }
    },
    {
      id: 8,
      type: "question",
      content: "Where will he store them?"
    },
    {
      id: 9,
      type: "progressive",
      content: "Where will he store them?",
      additionalContent: {
        title: "",
        items: ["Fifty mugs take up a lot of space! Rohan might need a shelf, cupboard, or even pay for storage. That will add up as an extra cost and increase the price of mugs."]
      }
    },
    {
      id: 10,
      type: "question",
      content: "Does he need more money upfront?"
    },
    {
      id: 11,
      type: "progressive",
      content: "Does he need more money upfront?",
      additionalContent: {
        title: "",
        items: ["Yes, bulk buying is less expensive in the long run, but Rohan needs upfront cash at the beginning to pay for all the mugs at once. If he doesn't have that money saved, it could be a problem."]
      }
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
