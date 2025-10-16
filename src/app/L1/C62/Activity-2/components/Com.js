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
      description: "Now Rohan is almost ready to begin his sandwich business. He goes to Uncle Raj to share his business plan. Uncle Raj smiles and says, \"Great job, Rohan! But you forgot something important. \"How much will it cost?\" Before starting any business, we must calculate the cost i.e how much money we will spend.",
      image: s1
    },
    {
      id: 1,
      type: "questions",
      content: "How much money will you need to buy ingredients such as bread, peanut butter and napkins? How much money will you spend on promotions? For example, you can make posters to tell people about your business. How many people do you think will come to buy your sandwiches? This will help you plan how many ingredients to buy. Rohan thinks and thinks, but he is not sure about the answers."
    },
    {
      id: 2,
      type: "table",
      title: "",
      tableData: {
        headers: ["Item", "Cost Per Item", "Quantity Needed (for ~40 people)", "Total Cost (auto)"],
        rows: [
          {
            item: "A Loaf of Bread",
            costPerItem: "$1 per loaf",
            quantity: "_____",
            totalCost: "_____"
          },
          {
            item: "A Jar of Peanut Butter",
            costPerItem: "$12 per jar",
            quantity: "_____",
            totalCost: "_____"
          },
          {
            item: "Some Paper Plates & Napkins",
            costPerItem: "$1 per set",
            quantity: "_____",
            totalCost: "_____"
          },
          {
            item: "TOTAL",
            costPerItem: "—",
            quantity: "—",
            totalCost: "_____"
          }
        ]
      }
    },
    {
      id: 3,
      type: "table",
      title: "",
      tableData: {
        headers: ["Item", "Cost Per Item", "Quantity Needed (for ~40 people)", "Total Cost (auto)"],
        rows: [
          {
            item: "A Loaf of Bread",
            costPerItem: "$1 per loaf",
            quantity: "45 loaves",
            totalCost: "$45"
          },
          {
            item: "A Jar of Peanut Butter",
            costPerItem: "$12 per jar",
            quantity: "3 jars",
            totalCost: "$36"
          },
          {
            item: "Some Paper Plates & Napkins",
            costPerItem: "$1 per set",
            quantity: "45 sets",
            totalCost: "$45"
          },
          {
            item: "TOTAL",
            costPerItem: "—",
            quantity: "—",
            totalCost: "$126"
          }
        ]
      }
    },
    {
      id: 4,
      type: "advertising",
      content: "Rohan also needs money to advertise so he can make posters to tell people about his sandwiches. Let's say the total cost for making 100 posters is $50 So this money will be added to the total amount i.e. $126 + $50 = $176."
    },
    {
      id: 5,
      type: "conclusion",
      content: "Now Rohan knows how much money he needs to start his business for the fair. This is called budget planning. It helps businesses prepare and avoid running out of materials or money."
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
          <p className="mb-6 text-xl leading-relaxed">{stepData.description}</p>
          <div className="flex justify-center mb-6">
            <Image src={stepData.image} alt="Rohan's business plan" width={400} height={400} />
          </div>
        </>
      );
    
    case "questions":
      return (
        <div className="text-center">
          <div className="text-xl leading-relaxed space-y-4">
            <p>How much money will you need to buy ingredients such as bread, peanut butter and napkins?</p>
            <p>How much money will you spend on promotions? 
              <br />
              For example, you can make posters to tell people about your business.</p>
            <p>How many people do you think will come to buy your sandwiches?</p>
            <p>This will help you plan how many ingredients to buy. Rohan thinks and thinks, but he is not sure about the answers.</p>
          </div>
        </div>
      );
    
    case "table":
      return (
        <div>
          <h2 className="text-3xl font-bold mb-6 text-purple-600">{stepData.title}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 border-gray-300 text-lg">
              <thead>
                <tr className="bg-blue-100">
                  {stepData.tableData.headers.map((header, index) => (
                    <th key={index} className="border-2 border-gray-300 px-4 py-3 font-bold text-center">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stepData.tableData.rows.map((row, index) => (
                  <tr key={index} className={index === stepData.tableData.rows.length - 1 ? "bg-yellow-100 font-bold" : ""}>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">{row.item}</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">{row.costPerItem}</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">{row.quantity}</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">{row.totalCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    
    case "advertising":
      return (
        <div className="text-center">
          <div className="text-xl leading-relaxed space-y-4">
            <p>Rohan also needs money to advertise so he can make posters to tell people about his sandwiches.</p>
            <p>Let&apos;s say the total cost for making 100 posters is <span className="font-bold text-green-600">$50</span></p>
            <p>So this money will be added to the total amount i.e. <span className="font-bold text-blue-600">$126 + $50 = $176</span></p>
          </div>
        </div>
      );
    
    case "conclusion":
      return (
        <div className="text-center">
          <div className="bg-green-50 p-6 rounded-xl border-2 border-green-300">
            <p className="text-xl leading-relaxed">
              Now Rohan knows how much money he needs to start his business for the fair. This is called <span className="font-bold text-green-700">budget planning</span>. It helps businesses prepare and avoid running out of materials or money.
            </p>
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
      <div className="max-w-6xl bg-white shadow-xl rounded-2xl p-8 text-center">
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