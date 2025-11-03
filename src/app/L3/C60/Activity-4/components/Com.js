"use client";
import { useState } from "react";
import Image from "next/image";
import bikeImg from "../assets/s1.png";
import watchImg from "../assets/s2.png";

export default function Com() {
  const [selectedGood, setSelectedGood] = useState([]);
  const [selectedBad, setSelectedBad] = useState([]);
  const [step, setStep] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const strategies = [
    {
      id: 1,
      text: "Know Your Budget",
      good: true,
      description: "Decide the maximum you can spend on that product before you start.",
    },
    {
      id: 2,
      text: "Be rude and throw away the item if seller disagrees",
      good: false,
      description: "Being rude or disrespectful can upset the seller and ruin your chances of a good deal.",
    },
    {
      id: 3,
      text: "Start Lower",
      good: true,
      description: "Don’t offer your maximum budget right away. Start with a smaller amount so you set a lower anchor and have space to move up if needed.",
    },
    {
      id: 4,
      text: "Pay the quoted price right away",
      good: false,
      description: "If you agree to the first price without asking, you might miss the chance to get a better deal.",
    },
    {
      id: 5,
      text: "Give Reasons",
      good: true,
      description: "Don’t just say a random number; explain why you want to pay less. Sellers listen more when you can reason.",
    },
    {
      id: 6,
      text: "Ask for Extras",
      good: true,
      description: "If the seller won’t lower the price, ask for something additional. For example, if you are buying a jacket, ask for a free muffler. It’s another smart way to make the deal better.",
    },
    {
      id: 7,
      text: "Make an emotional appeal - I really want it and I can't afford your price",
      good: false,
      description: "Negotiations based only on emotions rarely work. Sellers respond better to logical reasons than emotional appeals.",
    },
    {
      id: 8,
      text: "Interrupt and talk over the seller to show confidence",
      good: false,
      description: "Interrupting makes you seem disrespectful and aggressive. Confident negotiators listen carefully and respond calmly.",
    },
    {
      id: 9,
      text: "Stay Polite",
      good: true,
      description: "Always be kind and respectful. Polite negotiators are more likely to get good deals than impolite people.",
    },
    {
      id: 10,
      text: "Be Ready to Walk Away",
      good: true,
      description: "Sometimes the best choice is to leave if the price doesn’t fit. Walking away can even make the seller reach out to you with a lower price!",
    },
  ];


  // Error message state for sorting activity
  const [errorMsg, setErrorMsg] = useState("");

  // Handler for selecting good/bad strategies
  function handleSelect(id, type) {
    setErrorMsg("");
    if (type === "good") {
      setSelectedGood((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      );
      setSelectedBad((prev) => prev.filter((x) => x !== id));
    } else {
      setSelectedBad((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      );
      setSelectedGood((prev) => prev.filter((x) => x !== id));
    }
  }

  // Handler for submit button in sorting activity
  function handleSubmit() {
    // Must select all strategies as either good or bad
    if (selectedGood.length + selectedBad.length !== strategies.length) {
      setErrorMsg("Please sort all strategies before submitting.");
      return;
    }
    setShowResult(true);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-5xl w-full text-center">
        <h2 className="text-3xl font-bold mb-6">Negotiate to get a good deal.</h2>
        {step === 0 && (
          <>
            <p className="text-xl text-gray-700 mb-4">
              Even though sellers set their prices, they may be open to negotiating.
              <br /><br />
              Negotiation occurs when two people want to make a deal but have different ideas about pricing.
            </p>
            <button
              onClick={() => setStep(1)}
              className="mt-4 px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Next
            </button>
          </>
        )}
        {step === 1 && (
          <>
            <p className="text-xl text-gray-700 mb-4">
              Even though sellers set their prices, they may be open to negotiating.
              <br /><br />
              Negotiation occurs when two people want to make a deal but have different ideas about pricing.
              <br /><br />
              For example, when buying a bicycle, the seller might want a higher price, but the buyer still wants to spend less.
              <br /><br />
              The buyer has to bargain to negotiate the price to get a good deal.
            </p>
            <button
              onClick={() => setStep(2)}
              className="mt-4 px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Next
            </button>
          </>
        )}
        {step === 2 && !showResult && (
          <>
            <h3 className="text-2xl font-bold mb-4">Sort the strategies below:</h3>
            <p className="text-gray-700 mb-6">Select which strategies are good practices and which are inappropriate for negotiation.</p>
            <div className="grid grid-cols-1 gap-4 mb-8 text-left">
              {strategies.map((s) => (
                <div key={s.id} className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm mb-2">
                  <span className="text-lg text-gray-800 mb-2 md:mb-0">{s.text}</span>
                  <div className="flex gap-2">
                    <button
                      className={`px-4 py-2 rounded-lg font-semibold border ${selectedGood.includes(s.id) ? "bg-green-600 text-white" : "bg-white text-green-700 border-green-600"}`}
                      onClick={() => handleSelect(s.id, "good")}
                    >
                      Good Practice
                    </button>
                    <button
                      className={`px-4 py-2 rounded-lg font-semibold border ${selectedBad.includes(s.id) ? "bg-red-600 text-white" : "bg-white text-red-700 border-red-600"}`}
                      onClick={() => handleSelect(s.id, "bad")}
                    >
                      Inappropriate
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {errorMsg && (
              <div className="text-red-600 font-semibold mb-4">{errorMsg}</div>
            )}
            <button
              onClick={handleSubmit}
              className="mt-4 px-8 py-3 bg-purple-600 text-white text-lg font-semibold rounded-lg hover:bg-purple-700 transition"
            >
              Submit
            </button>
          </>
        )}
        {step === 2 && showResult && (
          <>
            <h3 className="text-2xl font-bold mb-4 text-green-700">Good Practices for Negotiation</h3>
            <ul className="text-left mb-6">
              {strategies.filter(s => s.good).map(s => (
                <li key={s.id} className="mb-4">
                  <span className="block text-lg text-gray-800 font-semibold">• {s.text}</span>
                  <span className="block text-gray-600 text-md ml-4">{s.description}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setStep(3)}
              className="mt-4 px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Next
            </button>
          </>
        )}
        {step === 3 && (
          <>
            <h2 className="text-3xl font-bold mb-6">Scene 1</h2>
            <p className="text-gray-700 text-lg mb-6">
              Imagine you come to my shop to buy a bike. I’m the seller, and I say the bike costs <strong>$120</strong>. But your budget is only <strong>$90</strong>. You need to convince me to sell it to you according to your budget or approximately that much. Remember the thumb rules while you negotiate.
            </p>
            <div className="mb-4 text-md text-gray-600">Seller: Teacher &nbsp;|&nbsp; Buyer: Student</div>
            <button
              onClick={() => setStep(4)}
              className="mt-8 px-8 py-3 bg-purple-600 text-white text-lg font-semibold rounded-lg hover:bg-purple-700 transition"
            >
              Next
            </button>
          </>
        )}
        {step === 4 && (
          <>
            <h2 className="text-3xl font-bold mb-6">Scene 2</h2>
            <p className="text-gray-700 text-lg mb-6">
              You have a small gadget shop, and one of your most popular items is a smartwatch. The price is <strong>$50</strong>, but I only have <strong>$35</strong>. You need to decide if you’ll lower your price, give me additional items, or stick to your price and explain why.
            </p>
            <div className="mb-4 text-md text-gray-600">Seller: Student &nbsp;|&nbsp; Buyer: Teacher</div>
          </>
        )}
      </div>
    </div>
  );
}
