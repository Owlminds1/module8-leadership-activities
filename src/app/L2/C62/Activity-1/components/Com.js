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
      title: "",
      description: "Leo is super creative and loves making craft products! He makes friendship bands, bag tags, and keychains. One day, he made a few items and took them to his grandma. She loved them so much that she said: “Leo, these crafts are amazing! You can sell them!” \n\nLeo thought, “Wow! Maybe I can start a small craft business!” \nBut he didn’t know how. Grandma smiled and said, “Let’s work together to set it up!",
      image: s1
    },
    {
      id: 1,
      type: "section",
      title: "Step 1: Decide What You Want To Sell",
      content: "Every business begins with an idea. You must decide what product or service you want to offer. It should be something you excel at and enjoy doing. For example, Leo chooses to sell peanut butter sandwiches because he makes it better than others and enjoys making them."
    },
    {
      id: 2,
      type: "section",
      title: "Step 2: Who Will Buy It?",
      content: "A business must have customers. These are people who will buy your product. Before starting, you should think: Who will pay money to take this?"
    },
    {
      id: 3,
      type: "progressive",
      sectionTitle: "Step 2: Who Will Buy It?",
      sectionContent: "A business must have customers. These are people who will buy your product. Before starting, you should think: Who will pay money to take this?",
      content: "Who do you think will buy crafts from Leo?",
      isBold: true
    },
    {
      id: 4,
      type: "progressive",
      sectionTitle: "Step 2: Who Will Buy It?",
      sectionContent: "A business must have customers. These are people who will buy your product. Before starting, you should think: Who will pay money to take this?",
      content: "Who do you think will buy crafts from Leo?",
      isBold: true,
      answer: {
        title: "Leo's potential customers:",
        items: ["Friends at school", "Family members", "Neighbors"]
      }
    },
    {
      id: 5,
      type: "section",
      title: "Step 3: What Makes Your Product Unique?",
      content: "Many people may sell similar things. Your product should be a distinct offering so that people choose you."
    },
    {
      id: 6,
      type: "progressive",
      sectionTitle: "Step 3: What Makes Your Product Unique?",
      sectionContent: "Many people may sell similar things. Your product should be a distinct offering so that people choose you.",
      content: "How can Leo make his crafts special?",
      isBold: true
    },
    {
      id: 7,
      type: "section",
      title: "Step 4: What Do You Need To Make The Product?",
      content: "You've to list everything you need to make or sell your product i.e. materials, tools, ingredients, etc."
    },
    {
      id: 8,
      type: "progressive",
      sectionTitle: "Step 4: What Do You Need To Make The Product?",
      sectionContent: "You've to list everything you need to make or sell your product i.e. materials, tools, ingredients, etc.",
      content: "What materials does Leo need to make his crafts?",
      isBold: true
    },
    {
      id: 9,
      type: "progressive",
      sectionTitle: "Step 4: What Do You Need To Make The Product?",
      sectionContent: "You've to list everything you need to make or sell your product i.e. materials, tools, ingredients, etc.",
      content: "What materials does Leo need to make his crafts?",
      isBold: true,
      answer: {
        title: "Leo needs:",
        items: ["Colored threads and beads", "Scissors", "Glue", "Small rings or hooks for bag tags", "Decorative stickers or charms"]
      }
    },
    {
      id: 10,
      type: "section",
      title: "Step 5: Where Will You Sell It?",
      content: "A good business has a selling location i.e. a place where people can buy. Leo thinks he can sell at:",
      contentBullets: [
        "A school fair",
        "Park",
        "Christmas market"
      ]
    },
    {
      id: 11,
      type: "section",
      title: "Step 6: How Will People Know?",
      content: "Even if your product is great, people won't buy it if they don't know about it. Businesses must tell others through advertising."
    },
    {
      id: 12,
      type: "progressive",
      sectionTitle: "Step 6: How Will People Know?",
      sectionContent: "Even if your product is great, people won't buy it if they don't know about it. Businesses must tell others through advertising.",
      content: "How can Leo tell people about his crafts?",
      isBold: true
    },
    {
      id: 13,
      type: "progressive",
      sectionTitle: "Step 6: How Will People Know?",
      sectionContent: "Even if your product is great, people won't buy it if they don't know about it. Businesses must tell others through advertising.",
      content: "How can Leo tell people about his crafts?",
      isBold: true,
      answer: "Leo can make posters, show his crafts to friends, and tell neighbors."
    },
    {
      id: 12,
      type: "completion",
      content: "Bravo! You can ace business planning!"
    }
  ]
};

// Helper functions to render different step types
const renderStep = (stepData) => {
  switch (stepData.type) {
    case "intro":
      return (
        <>
          <h1 className="text-4xl font-bold mb-6 text-blue-600">{stepData.title}</h1>
          <p className="mb-6 text-xl leading-relaxed whitespace-pre-line">{stepData.description}</p>
          <div className="flex justify-start mb-6">
            <Image src={stepData.image} alt="Leo making crafts" width={400} height={400} />
          </div>
        </>
      );
    case "section":
      return (
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-600">{stepData.title}</h2>
          <p className="text-xl leading-relaxed">{stepData.content}</p>
          {stepData.contentBullets && Array.isArray(stepData.contentBullets) && (
            <ul className="list-disc list-inside space-y-2 ml-6 mt-4">
              {stepData.contentBullets.map((item, idx) => (
                <li key={idx} className="text-xl leading-relaxed flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    case "progressive":
      return (
        <div>
          {stepData.sectionTitle && stepData.sectionContent && (
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">{stepData.sectionTitle}</h2>
              <p className="text-xl leading-relaxed">{stepData.sectionContent}</p>
            </div>
          )}
          <p className="text-xl leading-relaxed mb-6">
            {stepData.isBold ? (
              <span className="font-bold text-green-600">{stepData.content}</span>
            ) : (
              stepData.content
            )}
          </p>
          {stepData.answer && typeof stepData.answer === "string" && (
            <div className="mt-4 p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <p className="text-xl">{stepData.answer}</p>
            </div>
          )}
          {stepData.answer && typeof stepData.answer === "object" && (
            <div className="mt-4 p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              {stepData.answer.title && (
                <p className="font-bold text-xl mb-4">{stepData.answer.title}</p>
              )}
              <ul className="list-disc list-inside space-y-3 ml-4">
                {stepData.answer.items.map((item, index) => (
                  <li key={index} className="text-xl leading-relaxed flex items-start">
                    <span className="text-yellow-600 font-bold mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    case "completion":
      return (
        <div className="flex flex-col items-center justify-center min-h-[300px]">
          <div className="bg-green-100 border-2 border-green-400 rounded-2xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-4">{stepData.content}</h2>
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
  const isLastStep = step === contentData.steps.length - 1;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8 text-left">
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