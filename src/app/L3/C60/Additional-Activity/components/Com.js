"use client";
import { useState } from "react";

export default function Com() {
  const [product, setProduct] = useState("");
  const [strategy, setStrategy] = useState("");
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
          Create Your Own Pricing Strategy
        </h1>

        {/* Product Name */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Product Name
          </label>
          <input
            type="text"
            placeholder="e.g., Smartwatch, Cookie Box"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          />
        </div>

        {/* Dropdown */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Pricing Strategy
          </label>
          <select
            value={strategy}
            onChange={(e) => setStrategy(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          >
            <option value="">Select a strategy</option>
            <option value="Subscription">Subscription</option>
            <option value="Freemium">Freemium</option>
            <option value="Discount pricing">Discount pricing</option>
            <option value="Premium Pricing">Premium Pricing</option>
          </select>
        </div>

        {/* Incentives */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-600">
            Additional Values or Incentives
          </label>
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
