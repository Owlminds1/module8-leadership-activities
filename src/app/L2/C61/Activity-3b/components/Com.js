"use client";
import { useState } from "react";

export default function Com() {
  // Smart business decisions and updated language
  const decisions = [
    "Bulk buying ingredients",
    "Reduce advertising cost",
    "Reduce packaging cost",
    "Offer prices and deals",
    "Introduce new flavors",
    "Package deals or bundles"
  ];

  const examples = [
    "If Nick buys cupcake ingredients in larger quantities, the price per cupcake goes down. Example: Instead of spending $1 per cupcake, it might cost him $0.80 per cupcake. This helps him save money without changing the selling price.",
    "Instead of spending $1 per cupcake on ads, he can spend $0.50. He can use cost-saving methods such as social media posts instead of paid ads.",
    "Instead of $1 per cupcake for packaging, he can spend $0.50. Instead of fancy boxes, he can use simple eco-friendly materials that cost less.",
    "Encourage more people to buy at discounted rates on special days or at a particular time. This can increase total sales and overall profit. Example: “Friday offer: Buy 2, Get 1 free.” Or “Get cupcakes for half price, after 7.00 pm. Or “If it’s your birthday today, treat friends here and get your cupcake for free.”",
    "Add fun flavors like chocolate chip, strawberry, or caramel to attract more customers. More customers means more cupcakes sold i.e. more profit.",
    "Sell cupcakes in packs of 4 or 6 at a slightly lower price. Example: “Buy 5 cupcakes, get 1 Free.” OR 4 cupcakes for $18 instead of $20 individually."
  ];

  // Correct matches: index of example matches index of decision
  const correctMatches = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5
  };

  const [selected, setSelected] = useState(Array(examples.length).fill(""));
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSelect = (exampleIdx, decisionIdx) => {
    const updated = [...selected];
    updated[exampleIdx] = decisionIdx;
    setSelected(updated);
  };

  const handleSubmit = () => {
    setShowFeedback(true);
  };

  const handleReset = () => {
    setSelected(Array(examples.length).fill(""));
    setShowFeedback(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl p-8">
          <h1 className="text-4xl font-bold mb-8 text-purple-800 text-center">Smart business decisions that can help Nick increase profit</h1>
          <p className="text-xl text-gray-700 mb-10 text-center">Match each example to the smart business decision it represents.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-6">
              <thead>
                <tr>
                  <th className="text-left text-2xl text-purple-700">Actions</th>
                  <th className="text-left text-2xl text-pink-700">Smart Decision</th>
                  <th className="text-left text-2xl">Answers</th>
                </tr>
              </thead>
              <tbody>
                {examples.map((ex, idx) => (
                  <tr key={idx} className="bg-purple-50 rounded-xl">
                    <td className="py-5 px-6 text-purple-900 font-medium text-xl">{ex}</td>
                    <td className="py-5 px-6">
                      <select
                        className="border border-pink-300 rounded-lg px-4 py-3 text-pink-800 bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-400 text-xl"
                        value={selected[idx]}
                        onChange={e => handleSelect(idx, e.target.value)}
                        disabled={showFeedback}
                      >
                        <option value="">Select...</option>
                        {decisions.map((d, dIdx) => (
                          <option key={dIdx} value={dIdx} className="text-xl">{d}</option>
                        ))}
                      </select>
                    </td>
                    <td className="py-5 px-6 text-xl">
                      {showFeedback && (
                        <div>
                          {selected[idx] !== "" ? (
                            Number(selected[idx]) === correctMatches[idx] ? (
                              <span className="text-green-700 font-semibold text-xl">Correct!</span>
                            ) : (
                              <span className="text-red-700 font-semibold text-md">You answer is Incorrect, correct answer is</span>
                            )
                          ) : (
                            <span className="text-gray-500 text-xl">No answer</span>
                          )}
                          <div className="mt-2">
                            <span className="text-blue-700 font-bold text-lg">{decisions[correctMatches[idx]]}</span>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {!showFeedback ? (
            <div className="flex justify-center mt-10">
              <button
                onClick={handleSubmit}
                className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-2xl"
                disabled={selected.some(sel => sel === "")}
              >
                Submit
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center mt-10 gap-6">
              
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
}