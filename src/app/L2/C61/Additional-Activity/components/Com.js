"use client";
import { useState } from "react";

const boardLabels = [
  {label:'B2B',hint:'Business to Business'},
  {label:'B2C',hint:'Business to Consumer'},
  {label:'B2C Online',hint:'Online Consumer'},
  {label:'Aggregator',hint:'Connects sellers & buyers'}
];

const scenarios = [
  { sentence: "A pencil factory selling thousands of pencils to schools", answer: "B2B" },
  { sentence: "A YouTube Premium account where kids watch ad-free videos", answer: "B2C Online" },
  { sentence: "A girl selling lemonade at a stand outside her home", answer: "B2C" },
  { sentence: "Netflix streaming movies to people who pay monthly", answer: "B2C Online" },
  { sentence: "A factory making sports shoes and selling to shoe stores", answer: "B2B" },
  { sentence: "A farmer’s app connecting farmers directly with restaurants", answer: "Aggregator" },
  { sentence: "Disney+ Hotstar showing cartoons and movies for a monthly fee", answer: "B2C Online" },
  { sentence: "Apps to book flights and hotels", answer: "Aggregator" },
  { sentence: "A uniform supplier provides uniforms to different schools", answer: "B2B" },
  { sentence: "A clothing store’s website where parents buy T-shirts for their kids", answer: "B2C Online" },
  { sentence: "Sports dress store that prints customised t-shirts for teams", answer: "B2B" }
];

export default function Com() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelect = (label) => {
    setSelected(label);
    setShowFeedback(true);
    if (label === scenarios[currentIdx].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < scenarios.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelected(null);
      setShowFeedback(false);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-orange-700 text-center">Business Model Match</h1>
        {!finished ? (
          <>
            <div className="mb-8 text-xl text-gray-800 text-center font-semibold">
              {scenarios[currentIdx].sentence}
            </div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {boardLabels.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => !showFeedback && handleSelect(item.label)}
                  className={`rounded-xl p-6 min-h-20 flex flex-col items-center justify-center text-center font-bold text-xl border-2 transition-all duration-150 cursor-pointer ${
                    selected === item.label
                      ? (item.label === scenarios[currentIdx].answer ? 'bg-green-200 border-green-600' : 'bg-red-200 border-red-600')
                      : 'bg-gradient-to-b from-white to-orange-50 border-orange-200 hover:-translate-y-1 hover:shadow-lg'
                  }`}
                  disabled={showFeedback}
                >
                  <div>{item.label}</div>
                  <div className="text-base text-gray-600 mt-2">{item.hint}</div>
                </button>
              ))}
            </div>
            {showFeedback && (
              <div className="text-center mb-6">
                {selected === scenarios[currentIdx].answer ? (
                  <span className="text-green-700 font-bold text-xl">Correct!</span>
                ) : (
                  <span className="text-red-700 font-bold text-xl">Incorrect. The correct answer is <span className="underline">{scenarios[currentIdx].answer}</span>.</span>
                )}
              </div>
            )}
            <div className="flex justify-center">
              {showFeedback && (
                <button
                  onClick={handleNext}
                  className="px-8 py-3 bg-orange-500 text-white font-bold rounded-xl shadow-lg text-lg"
                >
                  {currentIdx < scenarios.length - 1 ? 'Next' : 'See Results'}
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Quiz Complete!</h2>
            <p className="text-xl mb-2">You got <span className="font-bold text-orange-700">{score}</span> out of <span className="font-bold text-orange-700">{scenarios.length}</span> correct.</p>
            <p className="text-lg text-gray-700">Great job learning about business models!</p>
          </div>
        )}
      </div>
    </div>
  );
}