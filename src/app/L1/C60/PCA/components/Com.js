"use client";

import { useState } from "react";

const sampleItems = [
  {
    item: "Shampoo",
    subscription: "No",
    special: "Smells good and gives shiny hair",
    buyAgain: "Maybe"
  }
];

export default function Com() {
  const [items, setItems] = useState(sampleItems);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">Step 1</h1>
        <p className="mb-6 text-lg text-gray-700">
          Look around your home and note down things your family gets regularly, like milk, cereal, internet, or shampoo.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-blue-600">Step 2</h2>
        <p className="mb-6 text-lg text-gray-700">
          For each item, write: Can it be a subscription? (Yes/No) <br />
          What makes the brand special? (Nice packaging, ads, offers, free gifts, etc.) <br />
          Would you buy from them again? Why or why not?
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-blue-100">
                <th className="py-3 px-4 text-left font-semibold">Item</th>
                <th className="py-3 px-4 text-left font-semibold">Can it be a Subscription?</th>
                <th className="py-3 px-4 text-left font-semibold">What Makes the Brand Special?</th>
                <th className="py-3 px-4 text-left font-semibold">Would I Buy Again?</th>
              </tr>
            </thead>
            <tbody>
              {items.map((row, idx) => (
                <tr key={row.item} className="border-t border-gray-200">
                  <td className="py-2 px-4 font-medium">{row.item}</td>
                  <td className="py-2 px-4">{row.subscription}</td>
                  <td className="py-2 px-4">{row.special}</td>
                  <td className="py-2 px-4">{row.buyAgain}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 text-gray-600 text-sm">
          <p>
            <span className="font-semibold">Sample Table:</span> Add more items from your home and fill in the details!
          </p>
        </div>
      </div>
    </div>
  );
}