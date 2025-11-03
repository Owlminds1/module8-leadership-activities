"use client";

import { useState } from 'react';

const Com = () => {
  const [quantities, setQuantities] = useState({
    tshirts: 0,
    paint: 0,
    packaging: 0
  });

  const [showCelebration, setShowCelebration] = useState(false);

  const items = [
    { name: 'T-Shirts', cost: 5, key: 'tshirts' },
    { name: 'Paint', cost: 2, key: 'paint' },
    { name: 'Packaging', cost: 1, key: 'packaging' }
  ];

  const handleQuantityChange = (key, value) => {
    const numValue = parseInt(value) || 0;
    setQuantities(prev => ({
      ...prev,
      [key]: numValue
    }));
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      return total + (item.cost * quantities[item.key]);
    }, 0);
  };

  const grandTotal = calculateTotal();

  if (showCelebration) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 p-8">
        <div className="max-w-2xl bg-white shadow-2xl rounded-2xl p-12 text-center">
          <h1 className="text-5xl font-extrabold text-green-600 mb-6">Good job!</h1>
          <p className="text-2xl font-semibold text-blue-700 mb-4">You estimate the cost of each item!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Items Cost Calculator
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Items</th>
                <th className="px-6 py-4 text-left font-semibold">Cost Per Item</th>
                <th className="px-6 py-4 text-left font-semibold">Quantity</th>
                <th className="px-6 py-4 text-left font-semibold">Total Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {items.map((item, index) => (
                <tr key={item.key} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium text-gray-900">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-green-600">
                    ${item.cost}
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="number"
                      min="0"
                      value={quantities[item.key]}
                      onChange={(e) => handleQuantityChange(item.key, e.target.value)}
                      className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="0"
                    />
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-blue-600">
                    ${item.cost * quantities[item.key]}
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-100 font-bold">
                <td className="px-6 py-4 text-lg">TOTAL</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4 text-xl text-red-600">
                  ${grandTotal}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowCelebration(true)}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold text-xl rounded-xl shadow-lg hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Com;