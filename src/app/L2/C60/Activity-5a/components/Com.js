"use client";
import { useState, useRef } from "react";

const benefitItems = [
  "Mia gets money regularly, even before selling each lunchbox",
  "Mia can offer discount and still make more profit.",
  "Mia never runs out of customers and is assured of steady sales",
  "Mia's customers are never disappointed as their lunch box is saved",
  "Mia minimises the risk of having unsold lunchboxes.",
  "Mia can buy items in bulk."
];

const notBenefitItems = [
  "Mia has to worry whether students will buy lunchboxes.",
  "Mia has to pay an additional rent for each subscription.",
  "Mia will never need to advertise her lunchboxes again."
];

const allItems = [
  ...benefitItems.map((text, idx) => ({ id: `b${idx}`, text, correct: "benefit" })),
  ...notBenefitItems.map((text, idx) => ({ id: `n${idx}`, text, correct: "notBenefit" }))
];

export default function Com() {
  const [unassigned, setUnassigned] = useState(allItems);
  const [benefit, setBenefit] = useState([]);
  const [notBenefit, setNotBenefit] = useState([]);
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
    if (source === "benefit") setBenefit(prev => prev.filter(i => i.id !== item.id));
    if (source === "notBenefit") setNotBenefit(prev => prev.filter(i => i.id !== item.id));

    // Add to target
    if (target === "benefit") setBenefit(prev => [...prev, item]);
    if (target === "notBenefit") setNotBenefit(prev => [...prev, item]);
    if (target === "unassigned") setUnassigned(prev => [...prev, item]);

    dragItem.current = null;
    dragSource.current = null;
  };

  const checkAnswers = () => setShowAnswers(true);

  const getItemColor = () => "bg-white border-gray-200";

  // ✅ Logic Fix
  const hasIncorrect =
    showAnswers &&
    (
      benefit.some(item => item.correct !== "benefit") ||
      notBenefit.some(item => item.correct !== "notBenefit") ||
      unassigned.length > 0 // <- ensure everything is assigned
    );

  const allCorrect =
    showAnswers &&
    !hasIncorrect &&
    benefit.length + notBenefit.length === allItems.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-8xl mx-auto p-2">
        <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">Drag and drop each item into the correct box</h2>
        <div className="flex flex-col items-center mt-4">
          <button
            onClick={checkAnswers}
            className="px-4 py-2 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 text-md shadow mb-4"
          >
            Check Answers
          </button>

          {showAnswers && hasIncorrect && (
            <div className="text-red-600 text-lg font-semibold mb-2">
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
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Statements</h3>
            {unassigned.length === 0 && <p className="text-gray-400">All statements assigned</p>}
            {unassigned.map(item => (
              <div
                key={item.id}
                draggable
                onDragStart={() => onDragStart(item, "unassigned")}
                className={`rounded-lg border-2 px-4 py-3 mb-3 cursor-move text-lg font-medium ${getItemColor()}`}
              >
                {item.text}
              </div>
            ))}
          </div>

          {/* Benefit */}
          <div
            className="bg-green-50 rounded-xl shadow-md p-6 border-2 border-green-400 min-h-[300px]"
            onDragOver={e => e.preventDefault()}
            onDrop={() => onDrop("benefit")}
          >
            <h3 className="text-xl font-semibold mb-4 text-green-700">Benefits of Subscription</h3>
            {benefit.length === 0 && <p className="text-gray-400">Drop here</p>}
            {benefit.map(item => (
              <div
                key={item.id}
                draggable
                onDragStart={() => onDragStart(item, "benefit")}
                className={`rounded-lg border-2 px-4 py-3 mb-3 cursor-move text-lg font-medium ${getItemColor()}`}
              >
                {item.text}
              </div>
            ))}
          </div>

          {/* Not a Benefit */}
          <div
            className="bg-red-50 rounded-xl shadow-md p-6 border-2 border-red-400 min-h-[300px]"
            onDragOver={e => e.preventDefault()}
            onDrop={() => onDrop("notBenefit")}
          >
            <h3 className="text-xl font-semibold mb-4 text-red-700">Not a Benefit of Subscription</h3>
            {notBenefit.length === 0 && <p className="text-gray-400">Drop here</p>}
            {notBenefit.map(item => (
              <div
                key={item.id}
                draggable
                onDragStart={() => onDragStart(item, "notBenefit")}
                className={`rounded-lg border-2 px-4 py-3 mb-3 cursor-move text-lg font-medium ${getItemColor()}`}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
