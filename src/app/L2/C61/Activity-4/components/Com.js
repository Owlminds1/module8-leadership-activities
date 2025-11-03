"use client";
import { useState } from "react";

export default function Com() {
  // Business models and their data
  const models = [
    {
      label: "B2B – Business to Business",
      description: "Mia can sell her water bottles to gift shops, gyms, or other businesses.",
      pros: [
        "Bulk sales: Mia can sell a lot of water bottles in a go to a gift shop or gym, which brings in money faster than selling a bottle at a time.",
        "Fewer customers to manage: Instead of dealing with many individual buyers, Mia only needs to communicate with a few businesses, making it easier to manage orders."
      ],
      cons: [
        "Needs contacts with businesses: Mia will need good contacts i.e. to know people or find shops willing to buy from her. This can be challenging for a new seller.",
        "Large Quantities: Businesses usually want big orders, but Mia is just starting so may not be able to sell large quantities just yet.",
        "Relying on a few buyers: If a business stops buying, Mia might lose income since she relies on just a few customers."
      ]
    },
    {
      label: "B2C – Business to Consumer",
      description: "Mia can sell directly to customers by taking the following actions: Word of mouth: selling to friends and family, Go door to door, Set up a kiosk at a fair, Set up her own shop, Sell online.",
      pros: [
        "Higher profit per item: By selling directly to people, Mia can set her own price and earn more money for each water bottle sold.",
        "Direct connection with customers: Mia can build a relationship with buyers, get feedback, and make loyal customers."
      ],
      cons: [
        "More effort to reach out to each customer: She will have to make an effort to get each customer.",
        "High upfront investment for a shop: Opening a physical store costs money for rent, staff, and setup, which may be challenging for Mia as a beginner.",
        "Needs to attract many customers: Selling directly means she must bring people to her shop or website, which requires effort and time."
      ]
    },
    {
      label: "Aggregator",
      description: "If Mia builds her own online platform that connects different bottle designers to customers just like Amazon does for many sellers.",
      pros: [
        "Earns from commissions: She can charge sellers a fee for using her platform.",
        "Scalable business: As more sellers join, her platform grows.",
        "Brand power: The platform itself becomes valuable."
      ],
      cons: [
        "Complex to start: Needs tech setup, marketing, and seller onboarding.",
        "Expensive and time-consuming.",
        "High competition: Competing with major established platforms.",
      ]
    }
  ];

  // Step state
  const [step, setStep] = useState(0); // 0: intro, 1: match model, 2: match pros, 3: match cons, 4: summary, 5: open-ended
  const [modelIdx, setModelIdx] = useState(0); // which model is active
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedPros, setSelectedPros] = useState([]);
  const [selectedCons, setSelectedCons] = useState([]);
  const [showModelFeedback, setShowModelFeedback] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [openEnded, setOpenEnded] = useState("");
  const [showFinal, setShowFinal] = useState(false);

  // Mixed list for pros/cons matching
  const mixedList = [...models[modelIdx].pros, ...models[modelIdx].cons].sort();

  // Handlers
  const handleModelSelect = (e) => {
    setSelectedModel(e.target.value);
    setShowModelFeedback(true);
  };
  const handleProsSelect = (item) => {
    setSelectedPros(selectedPros.includes(item)
      ? selectedPros.filter(p => p !== item)
      : [...selectedPros, item]);
  };
  const handleConsSelect = (item) => {
    setSelectedCons(selectedCons.includes(item)
      ? selectedCons.filter(c => c !== item)
      : [...selectedCons, item]);
  };

  // Stepwise screens
  const renderScreen = () => {
    if (step === 0) {
      return (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8 text-purple-800">Now let&apos;s see how choosing the right business model can make a big difference for those starting a new product.</h1>
          <p className="text-2xl text-gray-700 mb-8">Meet our next entrepreneur, Mia!</p>
          <p className="text-2xl text-gray-700 mb-8">Mia designs customised water bottles. She wants to sell them, but she isn’t sure which business model is the best choice. Let’s help her decide!</p>
          <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-xl text-2xl mt-6" onClick={() => setStep(1)}>Start</button>
        </div>
      );
    }
    // Match business model to description
    if (step === 1) {
      return (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-800">Match the business model to its description</h2>
          <div className="mb-8">
            <label className="block text-xl font-semibold mb-4">Select from the drop down which description matches <span className="text-purple-700 font-bold">{models[modelIdx].label}</span>?</label>
            <select className="border border-purple-300 rounded-lg px-4 py-3 text-xl w-full max-w-2xl mx-auto" value={selectedModel} onChange={handleModelSelect}>
              <option value="">Select description...</option>
              {models.map((m, idx) => (
                <option key={idx} value={m.description}>{m.description}</option>
              ))}
            </select>
          </div>
          {showModelFeedback && selectedModel && (
            <div className="bg-green-100 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Correct Answer:</h3>
              <p className="text-xl text-green-700">{models[modelIdx].description}</p>
              <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg text-xl" onClick={() => { setStep(2); setShowModelFeedback(false); }}>
                Next
              </button>
            </div>
          )}
        </div>
      );
    }
    // Identify pros
    if (step === 2) {
      return (
        <div>
          <h2 className="text-3xl font-bold mb-8 text-green-800">Identify the advantages (pros) of this business model</h2>
          <div className="mb-8">
            <p className="text-xl text-gray-700 mb-4">Select all that are advantages (pros) for <span className="font-bold text-green-700">{models[modelIdx].label}</span>:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mixedList.map((item, idx) => (
                <label key={idx} className={`flex items-center bg-green-50 rounded-lg p-4 cursor-pointer border ${selectedPros.includes(item) ? 'border-green-500' : 'border-transparent'} text-xl`}>
                  <input type="checkbox" checked={selectedPros.includes(item)} onChange={() => handleProsSelect(item)} className="mr-3 w-6 h-6 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
          <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg text-xl" disabled={selectedPros.length === 0} onClick={() => setStep(3)}>Next</button>
        </div>
      );
    }
    // Identify cons
    if (step === 3) {
      return (
        <div>
          <h2 className="text-3xl font-bold mb-8 text-red-800">Identify the disadvantages (cons) of this business model</h2>
          <div className="mb-8">
            <p className="text-xl text-gray-700 mb-4">Select all that are disadvantages (cons) for <span className="font-bold text-red-700">{models[modelIdx].label}</span>:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mixedList.map((item, idx) => (
                <label key={idx} className={`flex items-center bg-red-50 rounded-lg p-4 cursor-pointer border ${selectedCons.includes(item) ? 'border-red-500' : 'border-transparent'} text-xl`}>
                  <input type="checkbox" checked={selectedCons.includes(item)} onChange={() => handleConsSelect(item)} className="mr-3 w-6 h-6 text-red-600 focus:ring-red-500 border-gray-300 rounded" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
          <button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-xl shadow-lg text-xl" disabled={selectedCons.length === 0} onClick={() => { setShowFeedback(true); setStep(4); }}>Submit</button>
        </div>
      );
    }
  // Show feedback and summary for this model
  if (step === 4 && showFeedback) {
      return (
        <div>
          <h2 className="text-3xl font-bold mb-8 text-purple-800">{models[modelIdx].label}</h2>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Description:</h3>
            <p className="text-xl text-gray-700 mb-6">{models[modelIdx].description}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Pros:</h3>
                <ul className="list-disc ml-6 space-y-2 text-green-700 text-lg">
                  {models[modelIdx].pros.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Cons:</h3>
                <ul className="list-disc ml-6 space-y-2 text-red-700 text-lg">
                  {models[modelIdx].cons.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {modelIdx < models.length - 1 ? (
            <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-xl text-2xl mt-8" onClick={() => {
              setModelIdx(modelIdx + 1);
              setStep(1);
              setSelectedModel("");
              setSelectedPros([]);
              setSelectedCons([]);
              setShowFeedback(false);
            }}>Next Model</button>
          ) : (
            <button className="px-10 py-4 bg-green-600 text-white font-bold rounded-2xl shadow-xl text-2xl mt-8" onClick={() => setStep(5)}>Next</button>
          )}
        </div>
      );
    }
    // Open-ended question
    if (step === 5) {
      return (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-purple-800">Now, considering Mia’s product and resources, which business model do you think she should begin with?</h2>
          <textarea className="border border-purple-300 rounded-lg px-4 py-3 text-xl w-full max-w-2xl mx-auto mb-6" rows={4} value={openEnded} onChange={e => setOpenEnded(e.target.value)} placeholder="Type your answer here..." />
          {/* <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-xl text-2xl" onClick={() => setShowFinal(true)} disabled={!openEnded}>Submit</button> */}
        </div>
      );
    }
    // Final feedback/discussion
    if (showFinal) {
      return (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-800">Recommended Options & Discussion</h2>
          <div className="bg-blue-100 p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Aggregator:</h3>
            <p className="text-xl text-blue-700 mb-4">Low risk, easy to reach many customers, not a big production initially</p>
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">B2C Online:</h3>
            <p className="text-xl text-blue-700 mb-4">If she wants more control over branding but still intends to sell directly</p>
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">B2B:</h3>
            <p className="text-xl text-blue-700">Can be an option later when she can produce in bulk</p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold text-purple-800 mb-2">Your answer:</h3>
            <p className="text-xl text-gray-700">{openEnded}</p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl p-8">
          {renderScreen()}
        </div>
      </div>
    </div>
  );
}