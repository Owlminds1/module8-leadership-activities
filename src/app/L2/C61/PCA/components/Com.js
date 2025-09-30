"use client";
import Image from "next/image";

const businessData = [
  {
    id: 1,
    businessName: "Local Chocolate Shop",
    whatTheySell: "Chocolates & sweets",
    whoTheySellTo: "Other gift shops buy in bulk",
    businessModel: "B2B",
    ideas: "Make fancy packaging, start festival gift boxes"
  },
  {
    id: 2,
    businessName: "",
    whatTheySell: "",
    whoTheySellTo: "",
    businessModel: "",
    ideas: ""
  },
  {
    id: 3,
    businessName: "",
    whatTheySell: "",
    whoTheySellTo: "",
    businessModel: "",
    ideas: ""
  },
  {
    id: 4,
    businessName: "",
    whatTheySell: "",
    whoTheySellTo: "",
    businessModel: "",
    ideas: ""
  },
  {
    id: 5,
    businessName: "",
    whatTheySell: "",
    whoTheySellTo: "",
    businessModel: "",
    ideas: ""
  }
];

export default function Com() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-800 mb-6">Business Model Journal</h1>
            <div className="bg-blue-50 p-6 rounded-xl mb-6">
              <p className="text-lg mb-4">
                Look around your home, school, or neighborhood and find 1 business for each business model. 
                You can ask your parents, teachers, or elders to help you.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Your task:</h3>
                <ul className="text-left space-y-2">
                  <li>• Find a local or online business. (Example: a chocolate shop, a clothing store, or a food delivery app)</li>
                  <li>• Identify its business model – B2B, B2C, or Aggregator/Marketplace.</li>
                  <li>• Write it in your Business Journal in the format provided in post class activity.</li>
                  <li>• Think of 1–2 ideas to make their business better.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full mb-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Business / App Name</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">What do they sell?</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Who do they sell to?</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Business Model (B2B / B2C / Aggregator)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">My Ideas to Make It Better</th>
                  </tr>
                </thead>
                <tbody>
                  {businessData.map((business, index) => (
                    <tr key={business.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="border border-gray-300 px-4 py-3">
                        {business.businessName}
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        {business.whatTheySell}
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        {business.whoTheySellTo}
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        {business.businessModel}
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        {business.ideas}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}