"use client";
import { useState, useRef } from "react";

const allItems = [
  { id: 1, name: "Magazines and newspapers", icon: "📰", correct: "can" },
  { id: 2, name: "Shoes", icon: "👟", correct: "cannot" },
  { id: 3, name: "Fruit and vegetables", icon: "🥗", correct: "can" },
  { id: 4, name: "School bag", icon: "🎒", correct: "cannot" },
  { id: 5, name: "Online cartoons apps, like youtube", icon: "🎥", correct: "can" },
  { id: 6, name: "Birthday dress", icon: "👗", correct: "cannot" },
  { id: 7, name: "Phone", icon: "📱", correct: "cannot" },
  { id: 8, name: "Laptop", icon: "💻", correct: "cannot" },
  { id: 9, name: "Lego set", icon: "🧩", correct: "cannot" },
  { id: 10, name: "Water bottle", icon: "🧴", correct: "cannot" },
  { id: 11, name: "House cleaning", icon: "🧹", correct: "can" },
  { id: 12, name: "Cycling classes", icon: "🚴", correct: "can" }
];

export default function Com() {
  const [unassigned, setUnassigned] = useState(allItems);
  const [can, setCan] = useState([]);
  const [cannot, setCannot] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);
  const dragItem = useRef();
  const dragSource = useRef();

  const onDragStart = (item, source) => {
    dragItem.current = item;
    dragSource.current = source;
  };

  const onDrop = (target) => {
    const item = dragItem.current;
    const source = dragSource.current;
    if (!item || source === target) return;

    // Remove from source
    if (source === "unassigned") setUnassigned(prev => prev.filter(i => i.id !== item.id));
    if (source === "can") setCan(prev => prev.filter(i => i.id !== item.id));
    if (source === "cannot") setCannot(prev => prev.filter(i => i.id !== item.id));

    // Add to target
    if (target === "can") setCan(prev => [...prev, item]);
    if (target === "cannot") setCannot(prev => [...prev, item]);
    if (target === "unassigned") setUnassigned(prev => [...prev, item]);

    dragItem.current = null;
    dragSource.current = null;
  };

  const checkAnswers = () => setShowAnswers(true);

  const getItemColor = () => "bg-white border-gray-200";

  // ✅ Improved validation logic
  const hasIncorrect =
    showAnswers &&
    (
      can.some(item => item.correct !== "can") ||
      cannot.some(item => item.correct !== "cannot") ||
      unassigned.length > 0 // ensure all items placed
    );

  const allCorrect =
    showAnswers &&
    !hasIncorrect &&
    can.length + cannot.length === allItems.length;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-blue-700 text-center">
          Drag and drop each item into the correct box
        </h2>

        <div className="flex flex-col items-center mb-8">
          <button
            onClick={checkAnswers}
            className="px-3 py-2 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 text-lg shadow mb-4"
          >
            Check Answers
          </button>

          {showAnswers && hasIncorrect && (
            <div className="text-red-600 text-lg font-semibold">
              Some answers are incorrect. Please try again!
            </div>
          )}

          {allCorrect && (
            <div className="text-green-600 text-lg font-semibold mb-2">
              All answers are correct! Well done!
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Unassigned */}
          <div
            className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-300 min-h-[300px]"
            onDragOver={e => e.preventDefault()}
            onDrop={() => onDrop("unassigned")}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Items</h3>
            {unassigned.length === 0 && (
              <p className="text-gray-400">All items assigned</p>
            )}
            {unassigned.map(item => (
              <div
                key={item.id}
                draggable
                onDragStart={() => onDragStart(item, "unassigned")}
                className={`rounded-lg border-2 px-4 py-3 mb-3 cursor-move text-lg font-medium flex items-center gap-3 ${getItemColor()}`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          {/* Can be sold in subscription */}
          <div
            className="bg-green-50 rounded-xl shadow-md p-6 border-2 border-green-400 min-h-[300px]"
            onDragOver={e => e.preventDefault()}
            onDrop={() => onDrop("can")}
          >
            <h3 className="text-xl font-semibold mb-4 text-green-700">
              Can be sold in subscription
            </h3>
            {can.length === 0 && <p className="text-gray-400">Drop here</p>}
            {can.map(item => (
              <div
                key={item.id}
                draggable
                onDragStart={() => onDragStart(item, "can")}
                className={`rounded-lg border-2 px-4 py-3 mb-3 cursor-move text-lg font-medium flex items-center gap-3 ${getItemColor()}`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          {/* Can't be sold in subscription */}
          <div
            className="bg-red-50 rounded-xl shadow-md p-6 border-2 border-red-400 min-h-[300px]"
            onDragOver={e => e.preventDefault()}
            onDrop={() => onDrop("cannot")}
          >
            <h3 className="text-xl font-semibold mb-4 text-red-700">
              Can&apos;t be sold in subscription
            </h3>
            {cannot.length === 0 && <p className="text-gray-400">Drop here</p>}
            {cannot.map(item => (
              <div
                key={item.id}
                draggable
                onDragStart={() => onDragStart(item, "cannot")}
                className={`rounded-lg border-2 px-4 py-3 mb-3 cursor-move text-lg font-medium flex items-center gap-3 ${getItemColor()}`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
