"use client";
import { useState } from "react";


const businesses = [
  "Local bakery shop",
  "Domino&apos;s Pizza",
  "Toy store",
  "Ice cream truck",
  "Lego online store",
  "Netflix",
  "Amazon marketplace",
  "Food app like: Swiggy / Zomato",
  "Cap app like: Uber / Ola",
  "Stationery factory",
  "Farmers selling to a grocery store",
  "Toy manufacturer selling to big stores"
];

const businessModels = [
  { id: "b2c", name: "B2C", items: [] },
  { id: "b2c-online", name: "B2C/B2C Online", items: [] },
  { id: "aggregator", name: "Aggregator", items: [] },
  { id: "b2b", name: "B2B", items: [] }
];

const correctAnswers = {
  "b2c": ["Local bakery shop", "Toy store", "Ice cream truck", "Domino&apos;s Pizza"],
  "b2c-online": ["Lego online store", "Netflix", "Domino&apos;s Pizza"],
  "aggregator": ["Amazon marketplace", "Food app like: Swiggy / Zomato", "Cap app like: Uber / Ola"],
  "b2b": ["Stationery factory", "Farmers selling to a grocery store", "Toy manufacturer selling to big stores"]
};

export default function Com() {
  const [leftSideItems, setLeftSideItems] = useState([...businesses]);
  const [modelItems, setModelItems] = useState(businessModels);
  const [draggedItem, setDraggedItem] = useState(null);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetModelId) => {
    e.preventDefault();
    if (!draggedItem) return;

    const newLeftSideItems = leftSideItems.filter(item => item !== draggedItem);
    const newModelItems = modelItems.map(model => {
      if (model.id === targetModelId) {
        return { ...model, items: [...model.items, draggedItem] };
      }
      return { ...model, items: model.items.filter(item => item !== draggedItem) };
    });

    setLeftSideItems(newLeftSideItems);
    setModelItems(newModelItems);
    setDraggedItem(null);
  };

  const handleDropToLeft = (e) => {
    e.preventDefault();
    if (!draggedItem) return;

    const newModelItems = modelItems.map(model => ({
      ...model,
      items: model.items.filter(item => item !== draggedItem)
    }));

    setLeftSideItems([draggedItem, ...leftSideItems]);
    setModelItems(newModelItems);
    setDraggedItem(null);
  };

  const checkAnswers = () => {
    setShowAnswers(true);
  };

  const getItemColor = (item, modelId) => {
    if (!showAnswers) return "bg-white";
    const correctItems = correctAnswers[modelId] || [];
    return correctItems.includes(item) ? "bg-green-200" : "bg-red-200";
  };

  const getModelColor = (modelId) => {
    if (!showAnswers) return "bg-gray-100";
    const correctItems = correctAnswers[modelId] || [];
    const hasCorrectItems = modelItems.find(m => m.id === modelId)?.items.some(item => correctItems.includes(item));
    const hasIncorrectItems = modelItems.find(m => m.id === modelId)?.items.some(item => !correctItems.includes(item));
    
    if (hasCorrectItems && !hasIncorrectItems) return "bg-green-100";
    if (hasIncorrectItems) return "bg-red-100";
    return "bg-gray-100";
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Businesses</h2>
            <div 
              className="min-h-96 border-2 border-dashed border-gray-300 rounded-lg p-4"
              onDragOver={handleDragOver}
              onDrop={handleDropToLeft}
            >
              <div className="grid grid-cols-1 gap-2">
                {leftSideItems.map((item, index) => (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, item)}
                    className="bg-blue-100 hover:bg-blue-200 p-3 rounded-lg cursor-move transition-colors"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Business Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modelItems.map((model) => (
                <div
                  key={model.id}
                  className={`border-2 border-dashed border-gray-300 rounded-lg p-4 min-h-20 ${getModelColor(model.id)}`}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, model.id)}
                >
                  <h3 className="font-semibold text-gray-800 mb-2">{model.name}</h3>
                  <div className="space-y-2">
                    {model.items.map((item, index) => (
                      <div
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, item)}
                        className={`p-2 rounded cursor-move transition-colors ${getItemColor(item, model.id)}`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {leftSideItems.length === 0 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={checkAnswers}
              className={`px-8 py-3 text-white font-semibold rounded-xl shadow-lg transition-colors duration-200 transform hover:scale-105 ${
                showAnswers 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {showAnswers ? 'Check Answer Again' : 'Check Answer'}
            </button>
          </div>
        )}

      
      </div>
    </div>
  );
}