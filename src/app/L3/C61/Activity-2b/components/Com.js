"use client";
import { useState, useMemo } from "react";

const businessModelData = [
  {
    id: 0,
    title: "B2B (Business to Business)",
    description:
      "In this model, a business sells its products or services to other businesses. Example: A water bottle company sells bottles in bulk to gyms and schools.",
    advantages: [
      "Large orders bring steady and predictable revenue.",
      "Less focus on marketing since you're selling to organizations.",
      "Can build long-term contracts with clients like schools and gyms.",
    ],
    disadvantages: [
      "Heavy dependence on fewer clients: if one stops buying, revenue drops significantly.",
      "Less likely to build a brand identity with end customers, since the gym/school’s name may get more recognition than Sam’s.",
      "Businesses often negotiate for lower prices, reducing profit.",
    ],
  },
  {
    id: 1,
    title: "B2C (Business to Consumer)",
    description:
      "A business sells directly to individual customers. Example: Sam sells bottles at a store or online to people who use them personally.",
    advantages: [
      "Direct relationships with customers allows for feedback and retain loyal customers.",
      "Can introduce products such as a trendy football or a new water bottle design.",
      "Higher profit per item compared to B2B, since no middleman is involved between you and the business.",
    ],
    disadvantages: [
      "Requires constant marketing and promotions to attract individual buyers.",
      "Customers’ buying habits can change such as seasonal demand for baseball bats vs. footballs.",
      "Managing customer service, inventory, and sales staff adds additional responsibilities.",
    ],
  },
  {
    id: 2,
    title: "B2C Online (Direct to Consumer Online Store)",
    description:
      "Here, a business sells directly through its own website or app, no physical store needed. Example: Sam creates an online shop to sell bottles across the country.",
    advantages: [
      "Can reach customers beyond the local area, potentially the whole country.",
      "The store is open 24/7.",
      "Digital tools such as email marketing can be used for marketing.",
    ],
    disadvantages: [
      "Requires technical skills or investment to build and maintain the website.",
      "Shipping and logistics such as delivery delays, unusable products, or return requests, can be expensive and tricky.",
      "Online competition can be intense, requiring more effort and money spent on marketing."
    ],
  },
  {
    id: 3,
    title: "Aggregator Model (Marketplace Platform)",
    description:
      "A platform where multiple sellers list products under one brand name. Example: Sam creates a platform where other sellers also list their sports bottles.",
    advantages: [
      "A wide variety of products attracts more customers.",
      "More money can be earned without producing everything in store, by taking small commissions from the sales of other sellers.",
      "Fast growth, since sellers add their own products and stock."
    ],
    disadvantages: [
      "Reputation is based on the collaboration with other sellers.  Poor quality or delayed delivery can affect the platform’s image.",
      "Requires strong technology to manage multiple sellers, payments, and logistics.",
      "High cost of marketing to stand out against giants such as Amazon, Flipkart, or Decathlon."
    ],
  },
];

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [selectedType, setSelectedType] = useState("");
  const [identifiedPros, setIdentifiedPros] = useState([]);
  const [identifiedCons, setIdentifiedCons] = useState([]);
  const [step, setStep] = useState(0); // 0: identify model, 1: classify pros/cons, 2: completed
  const [feedback, setFeedback] = useState("");
  const [completed, setCompleted] = useState(false);

  const nextModel = () => {
    if (currentScreen < businessModelData.length - 1) {
      setCurrentScreen((prev) => prev + 1);
      setStep(0);
      setSelectedType("");
      setIdentifiedPros([]);
      setIdentifiedCons([]);
      setFeedback("");
    } else {
      setCompleted(true);
    }
  };

  const currentData = businessModelData[currentScreen];
  const allModels = businessModelData.map((m) => m.title);
  const [classifications, setClassifications] = useState({});
  function shuffle(array) {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  const allStatements = useMemo(
    () => shuffle([...currentData.advantages, ...currentData.disadvantages]),
    [currentScreen, currentData.advantages, currentData.disadvantages]
  );

  const checkAnswer = () => {
    if (step === 0) {
      if (selectedType === currentData.title) {
        setFeedback("Correct! Now classify the statements as advantages or disadvantages.");
        setTimeout(() => {
          setFeedback("");
          setStep(1);
        }, 1200);
      } else {
        setFeedback("Try again! That’s not the right model description.");
      }
    } else if (step === 1) {
      let correct = true;
      for (let statement of allStatements) {
        if (currentData.advantages.includes(statement)) {
          if (classifications[statement] !== "Advantage") correct = false;
        } else if (currentData.disadvantages.includes(statement)) {
          if (classifications[statement] !== "Disadvantage") correct = false;
        }
      }
      if (correct) {
        setFeedback("Well done! You classified all statements correctly.");
        setTimeout(() => {
          setFeedback("");
          nextModel();
        }, 1200);
      } else {
        setFeedback("Please check your answers and try again.");
      }
    }
  };

  if (completed) {
    return (
      <div className="min-h-screen bg-blue-50 p-6 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-2xl p-12 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-green-700 mb-6">Good job!</h2>
          <p className="text-2xl text-gray-800 mb-6 text-center">You’ve completed all business models and learned to identify their advantages and disadvantages like a smart entrepreneur!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <div className="text-center mb-6">
            <p className="text-2xl font-semibold mb-2">{currentData.description}</p>
          </div>
          {step === 0 && (
            <div>
              <h3 className="text-xl font-medium mb-8">
                Which business model matches this description?
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {allModels.map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedType(m)}
                    className={`px-5 py-3 rounded-xl border text-lg ${selectedType === m
                      ? "bg-yellow-600 text-white"
                      : "bg-gray-600 text-white hover:bg-gray-500"
                      }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
              <div className="text-center mt-6">
                <button
                  onClick={checkAnswer}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition transform hover:scale-105 text-lg"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                For each statement, select if it is an Advantage or Disadvantage
              </h3>
              <div className="space-y-4">
                {allStatements.map((statement, idx) => (
                  <div key={idx} className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <span className="flex-1 text-lg text-gray-800">{statement}</span>
                    <select
                      className="ml-4 px-3 py-2 rounded-lg border border-gray-300 text-lg"
                      value={classifications[statement] || ""}
                      onChange={e => setClassifications(prev => ({ ...prev, [statement]: e.target.value }))}
                    >
                      <option value="">Select</option>
                      <option value="Advantage">Advantage</option>
                      <option value="Disadvantage">Disadvantage</option>
                    </select>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <button
                  onClick={checkAnswer}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition transform hover:scale-105 text-lg"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {feedback && (
            <div className="mt-6 text-center text-xl font-semibold text-blue-700">
              {feedback}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
