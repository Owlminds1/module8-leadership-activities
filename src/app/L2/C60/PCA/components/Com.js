"use client";
import { useState } from "react";

const contentData = {
  steps: [
    {
      id: 0,
      type: "table",
      title: "Family Subscription Survey",
      tableData: [
        {
          subscription: "Netflix",
          service: "Movies, TV shows, and series available anytime.",
          frequency: "Monthly",
          smartIdea: "Offers a free trial month, sends reminders before payments, and discounts on yearly plans.",
          yourIdeas: "Offering a free trial, reminders, or discounts for long-term plans can help attract and keep more customers."
        },
        {
          subscription: "Milk Delivery Service",
          service: "Fresh milk delivered daily without going to the store.",
          frequency: "Weekly or Monthly",
          smartIdea: "Provides automatic delivery, discounts for committing to longer plans, and friendly payment reminders.",
          yourIdeas: "Regular delivery, small discounts for longer sign-ups, and reminders help keep customers loyal and consistent."
        }, 
        {
          subscription: "________",
          service: "________",
          frequency: "________",
          smartIdea: "________",
          yourIdeas: "________"
        },
        {
          subscription: "________",
          service: "________",
          frequency: "________",
          smartIdea: "________",
          yourIdeas: "________"
        },
        {
          subscription: "________",
          service: "________",
          frequency: "________",
          smartIdea: "________",
          yourIdeas: "________"
        }
      ]
    }
  ]
};

const renderStep = (stepData) => {
  switch (stepData.type) {
    case "table":
      return (
        <div className="w-full overflow-x-auto">
          <h1 className="text-4xl font-bold mb-6 text-blue-600 text-center">{stepData.title}</h1>
          <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-bold text-lg text-blue-800">Subscription Name</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold text-lg text-blue-800">What Do We Get? (service / product)</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold text-lg text-blue-800">How Often Do We Pay? (weekly / monthly / yearly)</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold text-lg text-blue-800">What Smart Idea Does the Brand Use?</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold text-lg text-blue-800">Your Ideas That Can Help the Business</th>
              </tr>
            </thead>
            <tbody>
              {stepData.tableData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="border border-gray-300 px-4 py-3 text-lg font-semibold text-gray-800">{row.subscription}</td>
                  <td className="border border-gray-300 px-4 py-3 text-lg text-gray-700">{row.service}</td>
                  <td className="border border-gray-300 px-4 py-3 text-lg text-gray-700">{row.frequency}</td>
                  <td className="border border-gray-300 px-4 py-3 text-lg text-gray-700">{row.smartIdea}</td>
                  <td className="border border-gray-300 px-4 py-3 text-lg text-gray-700">{row.yourIdeas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-7xl bg-white shadow-xl rounded-2xl p-8">
        {renderStep(currentStepData)}
      </div>
    </div>
  );
}