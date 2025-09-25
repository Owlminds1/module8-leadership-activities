"use client";
import { useState } from "react";

export default function Com() {
  const [subscriptions] = useState([
    {
      name: "Netflix",
      whatWeGet: "Movies & Shows",
      cost: "$10/month",
      whyUse: "Entertainment",
      perks: "Free trial, profiles",
      renewal: "Auto-renews monthly",
    },
  ]);

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
        Subscription Sleuth
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-xl rounded-2xl overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm uppercase">
              <th className="px-6 py-4 text-left">Subscription Name</th>
              <th className="px-6 py-4 text-left">What We Get</th>
              <th className="px-6 py-4 text-left">Cost & Payment</th>
              <th className="px-6 py-4 text-left">Why We Use It</th>
              <th className="px-6 py-4 text-left">Special Perks</th>
              <th className="px-6 py-4 text-left">Renewal Policy</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {subscriptions.map((sub, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-indigo-50 transition`}
              >
                <td className="px-6 py-4 font-semibold">{sub.name}</td>
                <td className="px-6 py-4">{sub.whatWeGet}</td>
                <td className="px-6 py-4">{sub.cost}</td>
                <td className="px-6 py-4">{sub.whyUse}</td>
                <td className="px-6 py-4">{sub.perks}</td>
                <td className="px-6 py-4">{sub.renewal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
