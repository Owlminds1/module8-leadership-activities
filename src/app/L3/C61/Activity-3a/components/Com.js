"use client";
import { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";

const screenData = [
  {
    id: 0,
    title: "Case Study: Sam's Sports Store",
    content: "Here's a table showing how much it costs Sam to make, pack, and deliver each sports jersey, along with his fixed monthly costs and selling price.",
    showTable: true,
    tableData: [
      { item: "Manufacturing sports jersey", cost: "2", notes: "Materials, production" },
      { item: "Packaging", cost: "1", notes: "Box, wrapping" },
      { item: "Delivery", cost: "1", notes: "Shipping to customers" },
      { item: "Fixed Expense", cost: "1", notes: "Energy & rent" },
      { item: "Total Cost", cost: "5", notes: "" },
    ]
  },
  {
    id: 1,
    question: "Which item costs the most?",
    answer: "The cost of manufacturing."
  },
  {
    id: 2,
    question: "How does selling more sports wear affect fixed costs?",
    answer: "Fixed costs (like energy and rent) stay the same overall, but the cost per jersey goes down because the same expense is shared across more jerseys. ",
    example: "Example: If you make 100 jerseys, the fixed cost per jersey is $1. If you make 200 jerseys, the fixed cost per jersey becomes $0.50, since the total fixed cost ($100) is spread across twice as many jerseys."
  },
  {
    id: 3,
    question: "Which kind of costs can Sam control and which costs are more challenging to modify?",
    answer: "Easily controllable costs: Manufacturing, packaging, delivery by choosing less expensive options or buying in bulk.",
    additionalAnswer: "More challenging to modify costs: Fixed expenses like energy and rent as they remain mostly the same regardless of how many jerseys are sold."
  },
  {
    id: 4,
    title: "Sales data of Sam's shop",
    showImage: true
  },
  {
    id: 5,
    question: "What does each bar denote (blue, red, and yellow)?",
    answer: "Blue bars show Revenue. Red bars show Total Cost. Yellow bars show Profit (Revenue − Total Cost).",
    showImage: true
  },
  {
    id: 6,
    question: "Which month did Sam make the most profit?",
    answer: "March (yellow bar is tallest).",
    showImage: true
  },
  {
    id: 7,
    question: "Which month did Sam lose money?",
    answer: "February (yellow bar goes below zero).",
    showImage: true
  },
  {
    id: 8,
    content: "Good job, you could read the sales data and draw conclusions like a smart entrepreneur!",
    showImage: false
  }
];

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextScreen = () => {
    if (currentData.question && !showAnswer) {
      setShowAnswer(true);
    } else if (currentScreen < screenData.length - 1) {
      setCurrentScreen(currentScreen + 1);
      setShowAnswer(false);
    }
  };

  const currentData = screenData[currentScreen];

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-lg rounded-2xl p-8">
          {currentData.title && (
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">
              {currentData.title}
            </h1>
          )}

          {currentData.content && (
            <p className="text-2xl mb-8 text-gray-700 text-center">
              {currentData.content}
            </p>
          )}

          {(currentData.showTable || (currentData.question && !currentData.showImage)) && (
            <div className="mb-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-6 py-4 text-left text-xl font-semibold">Item</th>
                      <th className="border border-gray-300 px-6 py-4 text-left text-xl font-semibold">Cost per unit</th>
                      <th className="border border-gray-300 px-6 py-4 text-left text-xl font-semibold">What does it include?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {screenData[0].tableData.map((row, index) => (
                      <tr key={index} className={index === 4 ? "bg-yellow-100 font-bold" : ""}>
                        <td className="border border-gray-300 px-6 py-4 text-lg">{row.item}</td>
                        <td className="border border-gray-300 px-6 py-4 text-lg">{row.cost}</td>
                        <td className="border border-gray-300 px-6 py-4 text-lg">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {currentData.question && (
            <div className="mb-8">
              <div className="bg-blue-100 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-blue-800 mb-4">Question:</h2>
                <p className="text-xl text-blue-700">{currentData.question}</p>
              </div>
            </div>
          )}

          {currentData.showImage && (
            <div className="mb-8 flex justify-center">
              <Image 
                src={S1} 
                alt="Sales data chart" 
                width={600} 
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          )}


          {showAnswer && currentData.answer && (
            <div className="mb-8">
              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Answer:</h3>
                <p className="text-xl text-green-700 mb-4">{currentData.answer}</p>
                {currentData.example && (
                  <div className="bg-yellow-100 p-4 rounded-lg">
                    <p className="text-lg text-yellow-800">{currentData.example}</p>
                  </div>
                )}
                {currentData.additionalAnswer && (
                  <p className="text-xl text-green-700">{currentData.additionalAnswer}</p>
                )}
              </div>
            </div>
          )}

          {/* Hide Next button on last screen */}
          {currentScreen < screenData.length - 1 && (
            <div className="flex justify-center">
              <button
                onClick={nextScreen}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105 text-lg"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}