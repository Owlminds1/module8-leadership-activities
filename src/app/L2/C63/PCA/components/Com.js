"use client";
import { useState } from "react";

export default function Com() {
  const [cards] = useState([
    {
      id: 1,
      businessName: "Tech Solutions Inc.",
      phone: "+1-555-0123",
      email: "info@techsolutions.com",
      website: "www.techsolutions.com",
      socialMedia: "@techsolutions",
      qrCode: "Yes",
      material: "Paper",
      printedSides: "Both Sides",
      suggestion: "Great design, clear contact info"
    },
    {
      id: 2,
      businessName: "",
      phone: "",
      email: "",
      website: "",
      socialMedia: "",
      qrCode: "",
      material: "",
      printedSides: "",
      suggestion: ""
    },
    {
      id: 3,
      businessName: "",
      phone: "",
      email: "",
      website: "",
      socialMedia: "",
      qrCode: "",
      material: "",
      printedSides: "",
      suggestion: ""
    }
  ]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl bg-white shadow-2xl rounded-3xl p-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-indigo-800 mb-6">
            Business Card Detective
          </h1>
          <p className="text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Your mission is to be a Business Card Detective! Collect different business or visiting cards from family, friends, or shops.
          </p>
          <p className="text-xl text-gray-600 mt-4">
            Look at each card carefully and note the details below:
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Business Card Collection</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Business Name</th>
                  <th className="px-4 py-3 text-left">Phone</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Website</th>
                  <th className="px-4 py-3 text-left">Social Media</th>
                  <th className="px-4 py-3 text-left">QR Code</th>
                  <th className="px-4 py-3 text-left">Material</th>
                  <th className="px-4 py-3 text-left">Sides</th>
                  <th className="px-4 py-3 text-left">Suggestion</th>
                </tr>
              </thead>
              <tbody>
                {cards.map((card, index) => (
                  <tr key={card.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-800">{card.businessName || '-'}</td>
                    <td className="px-4 py-3 text-gray-600">{card.phone || '-'}</td>
                    <td className="px-4 py-3 text-gray-600">{card.email || '-'}</td>
                    <td className="px-4 py-3 text-gray-600">{card.website || '-'}</td>
                    <td className="px-4 py-3 text-gray-600">{card.socialMedia || '-'}</td>
                    <td className="px-4 py-3 text-gray-600">{card.qrCode || '-'}</td>
                    <td className="px-4 py-3 text-gray-600">{card.material || '-'}</td>
                    <td className="px-4 py-3 text-gray-600">{card.printedSides || '-'}</td>
                    <td className="px-4 py-3 text-gray-600">{card.suggestion || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      

      </div>
    </div>
  );
}