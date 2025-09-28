"use client";

const businessExamples = [
  {
    name: "Local Bakery",
    model: "B2C",
    customers: "Families & individuals",
    revenue: "Selling cakes, pastries, snacks",
    pros: [
      "Direct feedback from customers",
      "Higher profit per item"
    ],
    cons: [
      "Needs daily marketing",
      "Food wastage if not sold"
    ],
    improvements: [
      "Add online delivery",
      "Create a monthly snack subscription"
    ]
  },
  {
    name: "Flipkart",
    model: "Aggregator",
    customers: "Online shoppers",
    revenue: "Commission from sellers + advertising",
    pros: [
      "Large customer base",
      "Multiple revenue streams"
    ],
    cons: [
      "High competition",
      "Less control over seller quality"
    ],
    improvements: [
      "Better seller verification",
      "Enhanced customer support"
    ]
  },
  {
    name: "School Uniform Supplier",
    model: "B2B",
    customers: "Schools and educational institutions",
    revenue: "Bulk sales to schools",
    pros: [
      "Large order volumes",
      "Stable customer relationships"
    ],
    cons: [
      "Limited customer base",
      "Seasonal demand"
    ],
    improvements: [
      "Partner with sports clubs for bulk sales",
      "Expand to corporate uniforms"
    ]
  },
  {
    name: "Nike.com",
    model: "B2C Online",
    customers: "Individual consumers",
    revenue: "Direct online sales",
    pros: [
      "Global reach",
      "Direct customer relationship"
    ],
    cons: [
      "High marketing costs",
      "Competition from marketplaces"
    ],
    improvements: [
      "Personalized recommendations",
      "Virtual try-on features"
    ]
  }
];

export default function Com() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl p-8">
          <div className="flex items-center justify-center gap-6 mb-8">
            <h1 className="text-4xl font-bold text-blue-800 text-center">
              Business Detective!
            </h1>
          </div>

          <div className="mb-8">
            <div className="bg-blue-100 p-6 rounded-xl">
              <p className="text-xl text-blue-800 leading-relaxed">
                Look around your home, school, or neighborhood and find 1 business for each business model. You can ask your parents, teachers, or elders to help you.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Step 1: Business Hunt</h2>
              <p className="text-lg text-gray-700 mb-4">
                Find 4 businesses for each business, identify whether it is B2B, B2C, B2C Online, or Aggregator/Marketplace.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Examples:</h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">Local bakery → B2C</li>
                  <li className="text-gray-700">Flipkart → Aggregator</li>
                  <li className="text-gray-700">School uniform supplier → B2B</li>
                  <li className="text-gray-700">Nike.com → B2C Online</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Step 2: Business Journal Entry</h2>
              <p className="text-lg text-gray-700 mb-4">
                For each business, record in your journal:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="text-gray-700 flex items-center">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                    Name of the Business
                  </li>
                  <li className="text-gray-700 flex items-center">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                    Business Model Type
                  </li>
                  <li className="text-gray-700 flex items-center">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                    Main Customers (Who do they sell to?)
                  </li>
                  <li className="text-gray-700 flex items-center">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                    Revenue Source (How do they make money?)
                  </li>
                  <li className="text-gray-700 flex items-center">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                    1-2 Pros of their business model
                  </li>
                  <li className="text-gray-700 flex items-center">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                    1-2 Cons of their business model
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Step 3: Improvement Ideas</h2>
            <p className="text-lg text-gray-700 mb-4">
              Suggest 2–3 creative improvements for each business.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Examples:</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">Bakery: Offer subscription boxes for snacks.</li>
                <li className="text-gray-700">School supplier: Partner with sports clubs for bulk sales.</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Business Analysis Table</h2>
            <p className="text-lg text-gray-700 mb-6">
              Complete the following table with your findings:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Business Name</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Business Model</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Main Customers</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Revenue Source</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Pros (2 points)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cons (2 points)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Improvement Ideas (2-3 points)</th>
                  </tr>
                </thead>
                <tbody>
                  {businessExamples.map((business, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">{business.name}</td>
                      <td className="border border-gray-300 px-4 py-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          business.model === 'B2B' ? 'bg-blue-100 text-blue-800' :
                          business.model === 'B2C' ? 'bg-green-100 text-green-800' :
                          business.model === 'B2C Online' ? 'bg-purple-100 text-purple-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {business.model}
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{business.customers}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{business.revenue}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        <ul className="list-disc list-inside space-y-1">
                          {business.pros.map((pro, proIndex) => (
                            <li key={proIndex} className="text-sm">{pro}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        <ul className="list-disc list-inside space-y-1">
                          {business.cons.map((con, conIndex) => (
                            <li key={conIndex} className="text-sm">{con}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        <ul className="list-disc list-inside space-y-1">
                          {business.improvements.map((improvement, impIndex) => (
                            <li key={impIndex} className="text-sm">{improvement}</li>
                          ))}
                        </ul>
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