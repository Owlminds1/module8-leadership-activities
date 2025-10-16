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
      description: "Rohan is a smart and helpful boy who loves making peanut butter sandwiches. One day, he made a sandwich and shared it with his neighbor Uncle Raj. He loved it so much that he said, \"Rohan, these sandwiches are amazing! You can sell them!\" Rohan thought, \"Wow! Maybe I can start a small sandwich business!\" But he didn't know how. So Uncle Raj smiled and said, \"It's easy if you follow some simple rules. Let me show you!\"",
      image: s1
    },
    {
      id: 1,
      type: "section",
      title: "Step 1: Decide What You Want To Sell",
      content: "Every business begins with an idea. You must decide what product or service you want to offer. It should be something you enjoy doing or making. For example, Rohan chooses to sell peanut butter sandwiches because he enjoys making them."
    },
    {
      id: 2,
      type: "section",
      title: "Step 2: Who Will Buy It?",
      content: "A business must have customers. These are people who will buy your product. Before starting, you should think: Who needs or wants this?"
    },
    {
      id: 3,
      type: "progressive",
      sectionTitle: "Step 2: Who Will Buy It?",
      sectionContent: "A business must have customers. These are people who will buy your product. Before starting, you should think: Who needs or wants this?",
      content: "Who do you think will buy sandwiches from Rohan?",
      isBold: true
    },
    {
      id: 4,
      type: "progressive",
      sectionTitle: "Step 2: Who Will Buy It?",
      sectionContent: "A business must have customers. These are people who will buy your product. Before starting, you should think: Who needs or wants this?",
      content: "Who do you think will buy sandwiches from Rohan?",
      isBold: true,
      answer: {
        title: "Rohan's potential customers:",
        items: ["Rohan's friends after school", "People in the park", "Neighbors who want snacks."]
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
      content: "What do you think Rohan can do to make his sandwiches special?",
      isBold: true
    },
    {
      id: 8,
      type: "section",
      title: "Step 4: What Do You Need To Make The Product?",
      content: "You've to list everything you need to make or sell your product i.e. materials, tools, ingredients, etc."
    },
    {
      id: 9,
      type: "progressive",
      sectionTitle: "Step 4: What Do You Need To Make The Product?",
      sectionContent: "You've to list everything you need to make or sell your product i.e. materials, tools, ingredients, etc.",
      content: "What materials does Rohan need to make sandwiches?",
      isBold: true
    },
    {
      id: 10,
      type: "progressive",
      sectionTitle: "Step 4: What Do You Need To Make The Product?",
      sectionContent: "You've to list everything you need to make or sell your product i.e. materials, tools, ingredients, etc.",
      content: "What materials does Rohan need to make sandwiches?",
      isBold: true,
      answer: {
        title: "Rohan needs:",
        items: ["Some bread", "Some peanut butter", "A butter knife", "Some plates", "Some napkins."]
      }
    },
    {
      id: 11,
      type: "section",
      title: "Step 5: Where Will You Sell It?",
      content: "A good business has a selling location i.e. a place where people can buy. Rohan has listed some options: A school fair, A small shop, From home"
    },
    {
      id: 12,
      type: "progressive",
      sectionTitle: "Step 5: Where Will You Sell It?",
      sectionContent: "A good business has a selling location i.e. a place where people can buy. Rohan has listed some options: A school fair, A small shop, From home",
      content: "Where do you think Rohan should sell sandwiches?",
      isBold: true
    },
    {
      id: 13,
      type: "progressive",
      sectionTitle: "Step 5: Where Will You Sell It?",
      sectionContent: "A good business has a selling location i.e. a place where people can buy. Rohan has listed some options: A school fair, A small shop, From home",
      content: "Where do you think Rohan should sell sandwiches?",
      isBold: true,
      answer: "Rohan should sell his sandwiches at the school fair. The school fair is a good place to start because many children and parents would be present. He can see if people like his sandwiches and get their feedback. If all goes well, he can make more and grow his business later."
    },
    {
      id: 14,
      type: "section",
      title: "Step 6: How Will People Know?",
      content: "Even if your product is great, people won't buy it if they don't know about it. Businesses must tell others through advertising, which we have discussed in previous classes."
    },
    {
      id: 15,
      type: "progressive",
      sectionTitle: "Step 6: How Will People Know?",
      sectionContent: "Even if your product is great, people won't buy it if they don't know about it. Businesses must tell others through advertising, which we have discussed in previous classes.",
      content: "How can Rohan tell people about his business?",
      isBold: true
    },
    {
      id: 16,
      type: "progressive",
      sectionTitle: "Step 6: How Will People Know?",
      sectionContent: "Even if your product is great, people won't buy it if they don't know about it. Businesses must tell others through advertising, which we have discussed in previous classes.",
      content: "How can Rohan tell people about his business?",
      isBold: true,
      answer: "Rohan can make posters and tell his friends and neighbors!"
    }
  ]
};

// Helper functions to render different step types
const renderStep = (stepData) => {
  switch (stepData.type) {
    case "intro":
      return (
        <>
          <h1 className="text-4xl font-bold mb-4">{stepData.title}</h1>
          <p className="mb-4 text-xl leading-relaxed">{stepData.description}</p>
          <div className="flex justify-center mb-4">
            <Image src={stepData.image} alt="Rohan making sandwiches" width={400} height={400} />
          </div>
        </>
      );
    
    case "section":
      return (
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-600">{stepData.title}</h2>
          <p className="text-xl leading-relaxed">{stepData.content}</p>
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
          
          <p className="text-xl leading-relaxed">
            {stepData.isBold ? (
              <span className="font-bold text-green-600">{stepData.content}</span>
            ) : (
              stepData.content
            )}
          </p>
          
          {stepData.answer && typeof stepData.answer === "string" && (
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <p className="text-xl">{stepData.answer}</p>
            </div>
          )}
          
          {stepData.answer && typeof stepData.answer === "object" && (
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <p className="font-bold text-xl mb-2">{stepData.answer.title}</p>
              <ul className="list-disc list-inside space-y-1">
                {stepData.answer.items.map((item, index) => (
                  <li key={index} className="text-xl">{item}</li>
                ))}
              </ul>
            </div>
          )}
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 p-6">
      <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8 text-center">
        {renderStep(currentStepData)}

        {!isLastStep && (
          <button
            onClick={nextStep}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold text-xl rounded-xl shadow-lg hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-200"
          >
            Next
          </button>
        )}
        
      </div>
    </div>
  );
}