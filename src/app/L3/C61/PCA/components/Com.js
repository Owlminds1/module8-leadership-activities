"use client";

const companyJournal = [
  {
    name: "Nike",
    present: {
      model: "B2C, DTC (Direct to Consumer)",
      customers: "Global consumers, athletes",
      revenue: "Product sales, online sales, brand collaborations",
      pros: ["Global brand recognition", "High profit margins", "Direct customer relationships"],
      cons: ["Intense competition", "High marketing costs"]
    },
    past: {
      model: "Wholesale, B2B",
      customers: "Retailers, sports stores",
      revenue: "Bulk sales to retailers",
      pros: ["Wide distribution", "Lower marketing costs"],
      cons: ["Less control over customer experience", "Lower profit margins"]
    }
  },
  {
    name: "",
    present: {
      model: "",
      customers: "",
      revenue: "",
      pros: [""],
      cons: [""]
    },
    past: {
      model: "",
      customers: "",
      revenue: "",
      pros: [""],
      cons: [""]
    }
  },
  {
    name: "",
    present: {
      model: "",
      customers: "",
      revenue: "",
      pros: [""],
      cons: [""]
    },
    past: {
      model: "",
      customers: "",
      revenue: "",
      pros: [""],
      cons: [""]
    }
  }
];

export default function Com() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl p-8">
          <div className="flex items-center justify-center gap-6 mb-8">
            <h1 className="text-4xl font-bold text-blue-800 text-center">
              Business Model Transformation Journal
            </h1>
          </div>

          <div className="mb-8">
            <div className="p-6 rounded-xl">
              <p className="text-xl text-blue-800 leading-relaxed">
                <strong>Research five companies and document the history of their transformation and growth.</strong><br /><br />
                Some companies you may consider:<br />
                Nike, Starbucks, Sketchers, Apple, Amazon<br /><br />
                Find out about their founding principles, aspects of their product innovation, and evolution of their business models.<br /><br />
                <strong>Business Journal Entry</strong><br />
                For each business, record in your journal:
              </p>
              <ul className="list-disc ml-8 mt-2 text-blue-700 text-lg">
                <li>Present Day:
                  <ul className="list-disc ml-8">
                    <li>Name of the Business</li>
                    <li>Current Business Model Type</li>
                    <li>Main Customers (Who do they sell to?)</li>
                    <li>Revenue Source (How do they make money?)</li>
                    <li>A couple of pros of their business model</li>
                    <li>A couple of cons of their business model</li>
                  </ul>
                </li>
                <li>Past:
                  <ul className="list-disc ml-8">
                    <li>Name of the Business</li>
                    <li>Business Model Type</li>
                    <li>Main Customers (Who do they sell to?)</li>
                    <li>Revenue Source (How do they make money?)</li>
                    <li>A couple of pros of their business model</li>
                    <li>A couple of cons of their business model</li>
                  </ul>
                </li>
              </ul>
              <span className="text-blue-700">For reference, look at the below table</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Sample Table: Company Transformation</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Company</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Present Model</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Present Customers</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Present Revenue</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Present Pros</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Present Cons</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Past Model</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Past Customers</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Past Revenue</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Past Pros</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Past Cons</th>
                  </tr>
                </thead>
                <tbody>
                  {companyJournal.map((company, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">{company.name}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{company.present.model}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{company.present.customers}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{company.present.revenue}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        {(company.present.pros.length === 1 && company.present.pros[0] === "")
                          ? ""
                          : <ul className="list-disc list-inside space-y-1">{company.present.pros.map((pro, i) => (<li key={i} className="text-sm">{pro}</li>))}</ul>
                        }
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        {(company.present.cons.length === 1 && company.present.cons[0] === "")
                          ? ""
                          : <ul className="list-disc list-inside space-y-1">{company.present.cons.map((con, i) => (<li key={i} className="text-sm">{con}</li>))}</ul>
                        }
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{company.past.model}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{company.past.customers}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{company.past.revenue}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        {(company.past.pros.length === 1 && company.past.pros[0] === "")
                          ? ""
                          : <ul className="list-disc list-inside space-y-1">{company.past.pros.map((pro, i) => (<li key={i} className="text-sm">{pro}</li>))}</ul>
                        }
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        {(company.past.cons.length === 1 && company.past.cons[0] === "")
                          ? ""
                          : <ul className="list-disc list-inside space-y-1">{company.past.cons.map((con, i) => (<li key={i} className="text-sm">{con}</li>))}</ul>
                        }
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