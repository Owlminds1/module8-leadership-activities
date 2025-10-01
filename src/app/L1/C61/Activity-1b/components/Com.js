"use client";
import { useState } from "react";

export default function Com() {
  const [sellingPrices, setSellingPrices] = useState({
    apple: "",
    banana: "",
    mango: "",
    orange: "",
    grapes: ""
  });

  const handlePriceChange = (fruit, value) => {
    setSellingPrices(prev => ({
      ...prev,
      [fruit]: value
    }));
  };

  const calculateProfit = (cost, sellingPrice) => {
    const price = parseFloat(sellingPrice) || 0;
    const profit = price - cost;
    return profit;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl p-8">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-purple-800">Now set the selling prices for each fruit:</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-purple-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Fruit Name</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cost to Buy (per piece)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Suggested Sell Price (Student decides)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Profit or loss?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Apple</td>
                    <td className="border border-gray-300 px-4 py-3">$2</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <input
                        type="number"
                        value={sellingPrices.apple}
                        onChange={(e) => handlePriceChange('apple', e.target.value)}
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-center"
                        placeholder="0"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {sellingPrices.apple ? `$${calculateProfit(2, sellingPrices.apple).toFixed(2)}` : '-'}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Banana</td>
                    <td className="border border-gray-300 px-4 py-3">$1</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <input
                        type="number"
                        value={sellingPrices.banana}
                        onChange={(e) => handlePriceChange('banana', e.target.value)}
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-center"
                        placeholder="0"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {sellingPrices.banana ? `$${calculateProfit(1, sellingPrices.banana).toFixed(2)}` : '-'}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Mango</td>
                    <td className="border border-gray-300 px-4 py-3">$3</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <input
                        type="number"
                        value={sellingPrices.mango}
                        onChange={(e) => handlePriceChange('mango', e.target.value)}
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-center"
                        placeholder="0"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {sellingPrices.mango ? `$${calculateProfit(3, sellingPrices.mango).toFixed(2)}` : '-'}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Orange</td>
                    <td className="border border-gray-300 px-4 py-3">$2</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <input
                        type="number"
                        value={sellingPrices.orange}
                        onChange={(e) => handlePriceChange('orange', e.target.value)}
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-center"
                        placeholder="0"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {sellingPrices.orange ? `$${calculateProfit(2, sellingPrices.orange).toFixed(2)}` : '-'}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Grapes</td>
                    <td className="border border-gray-300 px-4 py-3">$2</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <input
                        type="number"
                        value={sellingPrices.grapes}
                        onChange={(e) => handlePriceChange('grapes', e.target.value)}
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-center"
                        placeholder="0"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {sellingPrices.grapes ? `$${calculateProfit(2, sellingPrices.grapes).toFixed(2)}` : '-'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
