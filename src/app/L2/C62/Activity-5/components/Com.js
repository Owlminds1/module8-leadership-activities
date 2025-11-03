"use client";
import { useState } from "react";

const actions = [
  {
    id: 1,
    text: "Open a single store at a time.",
    isCorrect: true,
    explanation: "This allows a person to test each new shop and avoid losing too much money if a shop doesn’t sell well."
  },
  {
    id: 2,
    text: "Open 10 new stores all at once.",
    isCorrect: false,
    explanation: "Too many shops at once is risky; some may not sell enough, and the business individual might waste money."
  },
  {
    id: 3,
    text: "Buy materials in bulk to save money.",
    isCorrect: true,
    explanation: "Buying in bulk minimizes the cost per item and ensures the business person has enough stock for high demand."
  },
  {
    id: 4,
    text: "Buy too many materials without checking demand.",
    isCorrect: false,
    explanation: "If the products don’t sell, materials are wasted and the business loses money."
  },
  {
    id: 5,
    text: "Ask customers what they like before opening new shops.",
    isCorrect: true,
    explanation: "This helps the business make products that people will actually want, increasing the chances of success."
  },
  {
    id: 6,
    text: "Keep the product quality high in all shops.",
    isCorrect: true,
    explanation: "High-quality products make customers happy, turning them into returning customers who buy regularly."
  },
  {
    id: 7,
    text: "Spend all the money on advertising without planning.",
    isCorrect: false,
    explanation: "Without planning, money may be wasted and shops may still not attract enough customers."
  },
  {
    id: 8,
    text: "Track sales and adjust products accordingly.",
    isCorrect: true,
    explanation: "Monitoring what sells will help the business person decide what to make more of and avoid wasting money."
  },
  {
    id: 9,
    text: "Train assistants before opening more shops.",
    isCorrect: true,
    explanation: "Well-trained assistants keep the shops running smoothly and maintain quality."
  },
  {
    id: 10,
    text: "Start with one new product at a time.",
    isCorrect: true,
    explanation: "Gradually testing a new product will help the business see if it’s a popular product before making a lot of the same."
  }
];

export default function Com() {
  const [leftActions, setLeftActions] = useState(actions);
  const [rightActions, setRightActions] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, action) => {
    setDraggedItem(action);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    
    if (draggedItem) {
      if (draggedItem.isCorrect) {
        // Correct action - add to right side
        setRightActions(prev => [...prev, draggedItem]);
        setLeftActions(prev => prev.filter(action => action.id !== draggedItem.id));
      } else {
        // Incorrect action - remove from left side (vanish forever)
        setLeftActions(prev => prev.filter(action => action.id !== draggedItem.id));
      }
      setDraggedItem(null);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-7xl bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-10 text-center text-blue-700">Business Strategies of Smart Entrepreneur</h1>
        <p className="text-xl text-center mb-8 text-gray-700 font-medium">Drag smart decisions into the box of <span className="text-green-700 font-bold">Right Things To Scale The Business</span></p>
        <div className="flex gap-8">
          {/* Left Side - Actions List */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              {leftActions.map((action) => (
                <div
                  key={action.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, action)}
                  className="p-4 bg-blue-100 border-2 border-blue-300 rounded-lg cursor-move hover:bg-blue-200 transition-colors duration-200 text-lg font-medium"
                >
                  <div className="font-semibold mb-2">{action.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Drop Container */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6 text-green-600 text-center">
              Right Things To Scale The Business
            </h2>
            <div
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className="min-h-96 p-6 border-3 border-dashed border-green-400 rounded-lg bg-green-50"
            >
              {rightActions.length === 0 ? (
                <div className="flex items-center justify-center h-full text-gray-500 text-lg">
                  Drag the correct actions here
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {rightActions.map((action) => (
                    <div
                      key={action.id}
                      className="p-4 bg-green-200 border-2 border-green-400 rounded-lg text-lg font-medium"
                    >
                      <div className="font-semibold mb-2">{action.text}</div>
                      <div className="text-sm text-gray-700 mt-2">{action.explanation}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>


        {/* Success Message */}
        {rightActions.length === 7 && (
          <div className="mt-6 p-6 bg-green-100 rounded-xl border-2 border-green-300 text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-2">Congratulations!</h3>
            <p className="text-xl text-green-700">You&apos;ve identified all the right things to scale the business!</p>
          </div>
        )}
      </div>
    </div>
  );
}