"use client";

export default function Com() {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        My Mini Business Idea!
      </h1>

      <p className="text-lg mb-4 text-gray-700 leading-relaxed">
        Now that you have learned how to plan & start a business, it’s time for you to become a young entrepreneur! Think of a product you want to sell and fill your Mini Business Plan.
      </p>

      <div className="mb-8 bg-blue-50 p-5 rounded-xl border border-blue-100">
        <h2 className="text-2xl font-semibold mb-3 text-green-700">
          The first question is:
        </h2>
        <p className="text-lg mb-3">What do you enjoy making and selling?</p>

        <ul className="list-disc pl-6 text-lg space-y-2 text-gray-700">
          <li>
            <span className="font-semibold text-gray-800">Is it a drink?</span>{" "}
            <br />
            <span className="italic text-gray-600">
              For example: lemon juice
            </span>
          </li>
          <li>
            <span className="font-semibold text-gray-800">
              Is it some art and craft time?
            </span>{" "}
            <br />
            <span className="italic text-gray-600">
              For example: Paper flowers, stickers, decorated pencils, painted stones
            </span>
          </li>
          <li>
            <span className="font-semibold text-gray-800">
              Is it some toys you can make?
            </span>{" "}
            <br />
            <span className="italic text-gray-600">
              For example: Slime, playdough, paper airplanes, sock puppets, finger puppets.
            </span>
          </li>
        </ul>

        <p className="text-lg mt-4 text-gray-700">
          When you have finalized the product, make the business plan.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-purple-700">
        Sample Mini Business Plan
      </h2>

      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="min-w-full border-collapse text-left text-gray-800">
          <thead className="bg-gradient-to-r from-purple-100 to-blue-100">
            <tr>
              {[
                "Product",
                "Who will buy?",
                "How will you make it?",
                "Item",
                "Cost per item",
                "Quantity needed",
                "Total cost",
              ].map((heading) => (
                <th
                  key={heading}
                  className="py-4 px-6 text-base font-semibold border-b border-gray-200"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            <tr className="hover:bg-gray-50 transition">
              <td className="py-4 px-6 text-lg font-medium">Lemon Juice</td>
              <td className="py-4 px-6">Friends, family, neighbors</td>
              <td className="py-4 px-6">
                Mix lemons, water, sugar, and ice
              </td>
              <td className="py-4 px-6">Lemon</td>
              <td className="py-4 px-6">₹5</td>
              <td className="py-4 px-6">10</td>
              <td className="py-4 px-6 font-semibold text-green-700">₹50</td>
            </tr>

            <tr className="hover:bg-gray-50 transition">
              <td className="py-4 px-6">--</td>
              <td className="py-4 px-6">--</td>
              <td className="py-4 px-6">--</td>
              <td className="py-4 px-6">--</td>
              <td className="py-4 px-6">--</td>
              <td className="py-4 px-6">--</td>
              <td className="py-4 px-6">--</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
