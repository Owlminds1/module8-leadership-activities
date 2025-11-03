"use client";
import { useState } from "react";

export default function Com() {
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [factors, setFactors] = useState("");
  const [strategy, setStrategy] = useState("");
  const [rationale, setRationale] = useState("");
  const [values, setValues] = useState(["", "", "", ""]);

  const handleValueChange = (index, newValue) => {
    const updated = [...values];
    updated[index] = newValue;
    setValues(updated);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-green-50 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg border border-gray-100">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
          Smart Selling Practices
        </h1>

        {/* Step 1: Product Name & Description */}
        <div className="mb-6">
          <div className="font-bold text-lg mb-2">Step 1: Talk about your product</div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Product Name</label>
          <input
            type="text"
            placeholder="e.g., Smartwatch, Cookie Box"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition mb-2"
          />
          <label className="block text-sm font-medium text-gray-600 mb-2">Describe your product in less than 30 words</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={200}
            rows={2}
            placeholder="Describe your product..."
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          />
        </div>

        {/* Step 2: Factors affecting price */}
        <div className="mb-6">
          <div className="font-bold text-lg mb-2">Step 2: What factors can change the price of your product?</div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Think of factors that affect demand and supply</label>
          <textarea
            value={factors}
            onChange={(e) => setFactors(e.target.value)}
            rows={2}
            placeholder="E.g., season, popularity, cost of materials, competition, etc."
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
          />
        </div>

        {/* Step 3: Choose How to Sell */}
        <div className="mb-6">
          <div className="font-bold text-lg mb-2">Step 3: Choose How to Sell</div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Pricing Strategy</label>
          <select
            value={strategy}
            onChange={(e) => setStrategy(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition mb-2"
          >
            <option value="">Select a strategy</option>
            <option value="Subscription">Subscription</option>
            <option value="Freemium">Freemium</option>
            <option value="Discount pricing">Discount pricing</option>
            <option value="Premium Pricing">Premium Pricing</option>
          </select>
          <label className="block text-sm font-medium text-gray-600 mb-2">Add rationale for your choice</label>
          <textarea
            value={rationale}
            onChange={(e) => setRationale(e.target.value)}
            rows={2}
            placeholder="Why did you choose this strategy?"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          />
        </div>

        {/* Step 4: Incentives */}
        <div className="space-y-4">
          <div className="font-bold text-lg mb-2">Step 4: What additional value or incentives will you offer?</div>
          <label className="block text-sm font-medium text-gray-600 mb-2">E.g. Free gift with your purchase, Discount on bulk orders, Limited edition or seasonal design, Loyalty points or rewards for repeat buyers</label>
          {values.map((val, idx) => (
            <input
              key={idx}
              type="text"
              placeholder={`Incentive ${idx + 1}`}
              value={val}
              onChange={(e) => handleValueChange(idx, e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
