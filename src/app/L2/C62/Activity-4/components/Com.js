"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";

// Content data structure
const contentData = {
  steps: [
    {
      id: 0,
      type: "intro",
      content: "Looking at the success of the school fair stall, Leo decided to start a small Handmade Craft Shop. He added some new items such as Bracelets and Glow-in-the-dark Bands.\n\nBut Leo has a problem with the shop:\n\nSometimes, some products like Bracelets and Glow-in-the-dark Bands are quickly sold.\nThis is good except many customers have to leave empty-handed.\nThis is known as high demand.\n\nLet's help Leo understand the situations so he can learn how to plan better.",
      image: s1
    },
    {
      id: 1,
      type: "question",
      content: "Why do you think Bracelets and Glow-in-the-dark Bands finish so quickly?",
      image: s1
    },
    {
      id: 2,
      type: "answer",
      content: "Why do you think Bracelets and Glow-in-the-dark Bands finish so quickly?",
      answer: "Because many customers wanted them, but Leo didn't make enough stock.",
      image: s1
    },
    {
      id: 3,
      type: "question",
      content: "What happens when products quickly sell out?",
      image: s1
    },
    {
      id: 4,
      type: "answer",
      content: "What happens when products quickly sell out?",
      answer: "Customers are not able to buy, and Leo loses his sales.",
      image: s1
    },
    {
      id: 5,
      type: "question",
      content: "How can Leo plan better for next week?",
      image: s1
    },
    {
      id: 6,
      type: "answer",
      content: "How can Leo plan better for next week?",
      answer: "He can make more of the popular items, prepare buffer stock, or check what sells most.",
      image: s1
    },
    {
      id: 7,
      type: "question",
      content: "How can Leo know which items are popular?",
      image: s1
    },
    {
      id: 8,
      type: "answer",
      content: "How can Leo know which items are popular?",
      answer: "He can analyse last week's sales or ask customers what they liked most.",
      image: s1
    },
    {
      id: 9,
      type: "question",
      content: "Should Leo increase the price of popular items to reduce demand?",
      image: s1
    },
    {
      id: 10,
      type: "answer",
      content: "Should Leo increase the price of popular items to reduce demand?",
      answer: "A little increase can help, but if the price is too high, customers may stop buying.",
      image: s1
    },
    {
      id: 11,
      type: "question",
      content: "What's at risk if Leo makes too many products?",
      image: s1
    },
    {
      id: 12,
      type: "answer",
      content: "What's at risk if Leo makes too many products?",
      answer: "He would waste materials and unsold items, and will have to bear the losses.",
      image: s1
    },
    {
      id: 13,
      type: "question",
      content: "How can Leo manage the risk of waste?",
      image: s1
    },
    {
      id: 14,
      type: "answer",
      content: "How can Leo manage the risk of waste?",
      answer: "Leo can minimise waste by planning better before he makes products.\n\nHe can take pre-orders to know exactly how many people want to buy each item.\nHe can also look at previous items' sales data to see which products were popular and which were not.\nThis way, Leo won't make too many items that nobody buys and will save money as well as materials.",
      image: s1
    },
    {
      id: 15,
      type: "intro",
      content: "Another problem Leo faced was that many products such as Sticker Packs and Mini Notebooks were left unsold. This led to some waste and less profit. This situation is known as Low Demand.\n\nLet's help Leo understand these situations to learn how to plan better.",
      image: s2
    },
    {
      id: 16,
      type: "question",
      content: "Why do you think some products like Sticker Packs and Mini Notebooks don't sell much?",
      image: s1
    },
    {
      id: 17,
      type: "answer",
      content: "Why do you think some products like Sticker Packs and Mini Notebooks don't sell much?",
      answer: "Maybe these items are not very appealing or perhaps they are not well-liked by all the customers. So Leo might have overestimated how many he can sell. As a result, he produced more than needed, leaving some items unsold.",
      image: s1
    },
    {
      id: 18,
      type: "question",
      content: "What happens when products don't sell?",
      image: s1
    },
    {
      id: 19,
      type: "answer",
      content: "What happens when products don't sell?",
      answer: "Materials go to waste, money spent on making those products is lost, and overall profit goes down.",
      image: s1
    },
    {
      id: 20,
      type: "question",
      content: "How can Leo improve his sales next week?",
      image: s1
    },
    {
      id: 21,
      type: "answer",
      content: "How can Leo improve his sales next week?",
      answer: "He can minimise the stock for items that sell slowly, offer discounts to attract customers, create product bundles, and try to improve the slow-moving items.",
      image: s1
    },
    {
      id: 22,
      type: "question",
      content: "Do you remember what a discount is?",
      image: s1
    },
    {
      id: 23,
      type: "answer",
      content: "Do you remember what a discount is?",
      answer: "A discount is when the price of an item is lowered to make people want to buy it.",
      image: s1
    },
    {
      id: 24,
      type: "question",
      content: "Do you remember what a product bundle is?",
      image: s1
    },
    {
      id: 25,
      type: "answer",
      content: "Do you remember what a product bundle is?",
      answer: "A bundle is when two or more items are sold together as a set, so customers would get more value.",
      image: s1
    }
  ]
};

// Helper functions to render different step types
const renderStep = (stepData) => {
  switch (stepData.type) {
    case "intro":
      return (
        <>
          <div className="mb-6 text-xl leading-relaxed whitespace-pre-line text-center">
            {stepData.content}
          </div>
          <div className="flex justify-center mb-6">
            <Image src={stepData.image} alt="Leo's craft shop" width={400} height={400} />
          </div>
        </>
      );
    
    case "question":
      return (
        <>
          <h1 className="text-3xl font-bold mb-6 text-green-800 text-center">{stepData.content}</h1>
          {(stepData.id === 0 || stepData.id === 15) && (
            <div className="flex justify-center mb-6">
              <Image src={stepData.image} alt="Business analysis" width={400} height={400} />
            </div>
          )}
        </>
      );
    
    case "answer":
      return (
        <>
          <h1 className="text-3xl font-bold mb-6 text-green-800 text-center">{stepData.content}</h1>
          {(stepData.id === 0 || stepData.id === 15) && (
            <div className="flex justify-center mb-6">
              <Image src={stepData.image} alt="Business analysis" width={400} height={400} />
            </div>
          )}
          <div className="mt-6 p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-400 text-center">
            <p className="text-xl leading-relaxed whitespace-pre-line">{stepData.answer}</p>
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
  const isLastStep = step === 25; // Last step is now id: 25

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