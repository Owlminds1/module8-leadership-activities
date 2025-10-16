"use client";
import { useState } from "react";

const actions = [
  { id: 1, text: "Slowly open a single store at a time", isCorrect: true },
  { id: 2, text: "Open 10 new stores all at once", isCorrect: false },
  { id: 3, text: "Buy materials in bulk to save money", isCorrect: true },
  { id: 4, text: "Buy too many materials without checking demand", isCorrect: false },
  { id: 5, text: "Ask customers what they like before opening new shops", isCorrect: true },
  { id: 6, text: "Keep the product quality high in all shops", isCorrect: true },
  { id: 7, text: "Spend all the money on advertising without planning", isCorrect: false },
  { id: 8, text: "Track sales and adjust products accordingly", isCorrect: true },
  { id: 9, text: "Train assistants before opening more shops", isCorrect: true },
  { id: 10, text: "Start with one new product at a time", isCorrect: true }
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
                  {action.text}
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
                      {action.text}
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
            <p className="text-xl text-green-700">You've identified all the right things to scale the business!</p>
          </div>
        )}
      </div>
    </div>
  );
}