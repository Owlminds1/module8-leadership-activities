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
  const [outcome, setOutcome] = useState("");
  const [showOutcome, setShowOutcome] = useState(false);
  const fruitData = [
    { name: "apple", cost: 2 },
    { name: "banana", cost: 1 },
    { name: "mango", cost: 3 },
    { name: "orange", cost: 2 },
    { name: "grapes", cost: 2 }
  ];

  const handleCheckOutcome = () => {
    let totalProfit = 0;
    let allFilled = true;
    fruitData.forEach(fruit => {
      const price = parseFloat(sellingPrices[fruit.name]);
      if (isNaN(price) || sellingPrices[fruit.name] === "") {
        allFilled = false;
      } else {
        totalProfit += price - fruit.cost;
      }
    });
    if (!allFilled) {
      setOutcome("Please fill in all selling prices to check your outcome.");
      setShowOutcome(true);
      return;
    }
    if (totalProfit > 0) {
      setOutcome(`You made a profit of $${totalProfit.toFixed(2)}`);
    } else if (totalProfit < 0) {
      setOutcome(`You ran a loss of $${Math.abs(totalProfit).toFixed(2)}`);
    } else {
      setOutcome("You achieved break even.");
    }
    setShowOutcome(true);
  };

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
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-6 max-w-2xl mx-auto">
              <ul className="list-disc list-inside text-lg text-purple-900">
                <li>Observe the cost for each fruit on the table.</li>
                <li>Decide the selling price: should it be more, the same, or less than the cost?</li>
                <li>Note the profit or loss based on the price.</li>
              </ul>
            </div>
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
            <div className="flex justify-center mt-8">
              <button
                onClick={handleCheckOutcome}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-purple-500 text-white font-bold rounded-2xl shadow-xl hover:from-green-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Check Outcome
              </button>
            </div>
            {showOutcome && (
              <div className="mt-6 text-center">
                <span className="text-2xl font-bold text-purple-700">{outcome}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
