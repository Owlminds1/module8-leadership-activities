"use client";
import { useState } from "react";

const contentData = {
  steps: [
    {
      id: 0,
      type: "table",
      title: "",
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
          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-xl mb-6">
              <h2 className="text-2xl font-bold text-yellow-700 mb-2">Instructions</h2>
              <ul className="list-disc list-inside text-lg text-gray-800 space-y-2">
                <li>A subscription means getting something regularly but making a single payment.</li>
                <li><span className="font-semibold">Let’s do a Family Subscription Survey:</span> Ask your family members about the subscriptions they use at home.</li>
                <li>For each subscription, find out:
                  <ul className="list-disc ml-6">
                    <li>What do they get for that subscription (what services or items)?</li>
                    <li>How often do they pay for it (weekly, monthly, or yearly)?</li>
                    <li>Why do they keep using it (what makes them stay subscribed)?</li>
                  </ul>
                </li>
                <li>About the subscription brand: Search online or ask your parents about that brand.
                  <ul className="list-disc ml-6">
                    <li>Do they offer a free trial?</li>
                    <li>Do they send reminders before payment renewals?</li>
                    <li>Do they give special “subscriber-only” benefits (discounts, additional features, gifts)?</li>
                  </ul>
                </li>
                <li>Gather all the details and record them in a table.</li>
                <li>Summarise your learnings and record yourself presenting the table.</li>
                <li>Share the picture of completed table and recording with the teacher.</li>
              </ul>
            </div>
          </div>
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