"use client";
import { useState } from "react";

export default function Com() {
  const [matches, setMatches] = useState(Array(10).fill(null)); // index: description, value: label index
  const [draggedLabel, setDraggedLabel] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);

  const etiquetteRules = [
    {
      title: "Smile & Be Friendly",
      description: "Greet with confidence and a welcoming smile.",
      color: "from-yellow-50 to-orange-100",
      textColor: "yellow-800",
      badgeColor: "yellow-600"
    },
    {
      title: "Listen More Than You Talk",
      description: "Good networkers ask questions and listen carefully. Example: \"What do you like about your business?\"",
      color: "from-green-50 to-emerald-100",
      textColor: "green-800",
      badgeColor: "green-600"
    },
    {
      title: "Show Respect",
      description: "Respect everyone equally. Wait for your turn to speak. Use polite words: Please, Thank you, Excuse me.",
      color: "from-purple-50 to-pink-100",
      textColor: "purple-800",
      badgeColor: "purple-600"
    },
    {
      title: "Be Curious & Ask Questions",
      description: "Show interest in others. For example, \"How did you get this idea? How did you start your business?\"",
      color: "from-red-50 to-rose-100",
      textColor: "red-800",
      badgeColor: "red-600"
    },
    {
      title: "Share, Don't Brag",
      description: "Talk about your ideas or projects in a simple, excited way, but don't try to show off.",
      color: "from-indigo-50 to-cyan-100",
      textColor: "indigo-800",
      badgeColor: "indigo-600"
    },
    {
      title: "Mind Your Manners",
      description: "Use kind words, speak politely, and don’t interrupt. Good manners make every conversation smoother. For example: If you’re at an event with food, take smaller portions. Chew quietly.  Wash your hands before you meet others.",
      color: "from-teal-50 to-emerald-100",
      textColor: "yellow-800",
      badgeColor: "yellow-600"
    },
    {
      title: "Exchange Contact Info Politely",
      description: "If you want to share or ask for details, do it politely and only if the other person agrees. For example: If you have a simple business card, share it. Always ask first. Example:  'May I have your email please?'",
      color: "from-amber-50 to-yellow-100",
      textColor: "yellow-800",
      badgeColor: "yellow-600"
    },
    {
      title: "Follow Up",
      description: "Send a brief thank-you message after meeting someone. Example: “It was great to meet you yesterday. I loved learning about your project!”",
      color: "from-pink-50 to-rose-100",
      textColor: "yellow-800",
      badgeColor: "yellow-600"
    },
    {
      title: "Be Yourself",
      description: "People remember how you make them feel. Networking works best when you’re kind, real, and authentic.",
      color: "from-violet-50 to-purple-100",
      textColor: "yellow-800",
      badgeColor: "yellow-600"
    },
    {
      title: "Introduce Yourself Clearly",
      description: "Always say your name and what you do in a simple way. This helps the other person remember you easily. Example: “Hi, I’m Joe. I design handmade greeting cards.”",
      color: "from-blue-50 to-indigo-100",
      textColor: "blue-800",
      badgeColor: "blue-600"
    }
  ];

  const handleDragStart = (labelIdx) => {
    setDraggedLabel(labelIdx);
  };

  const handleDrop = (descIdx) => {
    if (draggedLabel !== null) {
      const newMatches = [...matches];
      newMatches[descIdx] = draggedLabel;
      setMatches(newMatches);
      setDraggedLabel(null);
      // Check if all matches are correct
      const allMatched = newMatches.every((labelIdx, i) => labelIdx === i);
      if (allMatched) setShowCelebration(true);
    }
  };

  const handleReset = () => {
    setMatches(Array(10).fill(null));
    setShowCelebration(false);
  };

  const renderScreen = () => {
    if (showCelebration) {
      return (
        <div className="text-center max-w-8xl mx-auto">
          <h1 className="text-5xl font-bold text-green-700 mb-12">Bravo!</h1>
          <p className="text-3xl text-indigo-700 font-semibold mb-8">Now you know the networking etiquettes.</p>
        </div>
      );
    }

    // Shuffle labels for game
    const labels = etiquetteRules.map((rule, i) => ({ ...rule, idx: i }));
    // For simplicity, do not shuffle descriptions

    return (
      <div className="text-center max-w-8xl mx-auto">
        <p className="text-md text-left text-gray-700 mb-2">Drag each etiquette label to its correct description.</p>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Labels - now 1 column on md+ screens */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-indigo-700 mb-4">Etiquette Labels</h2>
            <div className="space-y-4">
              {labels.map((label, i) => (
                <div
                  key={label.idx}
                  draggable
                  onDragStart={() => handleDragStart(label.idx)}
                  className={`cursor-move bg-gradient-to-r ${label.color} p-2 rounded-xl shadow-md text-${label.textColor} font-bold text-md border-2 border-solid border-indigo-300`}
                  style={{ opacity: draggedLabel === label.idx ? 0.5 : 1 }}
                >
                  {label.title}
                </div>
              ))}
            </div>
          </div>
          {/* Descriptions - now 5 columns on md+ screens */}
          <div className="md:col-span-4">
            <h2 className="text-xl font-bold text-indigo-700 mb-4">Descriptions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {etiquetteRules.map((desc, i) => (
                <div
                  key={i}
                  onDragOver={e => e.preventDefault()}
                  onDrop={() => handleDrop(i)}
                  className={`bg-gradient-to-r ${desc.color} p-3 rounded-xl shadow-md border-2 border-solid border-purple-300 flex items-center justify-between `}
                >
                  <span className="text-gray-800 text-[17px] text-left w-full">{desc.description}</span>
                  {matches[i] !== null && (
                    <span className={`text-[13px] ml-2 px-1 py-1 rounded-lg font-bold text-white bg-${etiquetteRules[matches[i]].badgeColor}`}>{etiquetteRules[matches[i]].title}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen h-screen">
      <div className="max-w-8xl p-2 mt-0 w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        {renderScreen()}
        {/* No Next button needed for matching game */}
      </div>
    </div>
  );
}