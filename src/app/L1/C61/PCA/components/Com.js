"use client";

export default function Com() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8 text-purple-800">Price Detective!</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Whenever you go shopping (grocery store, fun shop, or even a bakery), become a Price Detective! Your job is to compare the price of a single item with the price of a bigger packet or bigger size.
            </p>
            
            <div className="text-left max-w-4xl mx-auto mb-8">
              <h2 className="text-2xl font-bold mb-6 text-blue-800">Example:</h2>
              <ul className="text-lg text-gray-700 space-y-3">
                <li>• 1 small bread vs. 1 big bread</li>
                <li>• 1 chocolate bar vs. a whole box of chocolates</li>
                <li>• 1 juice bottle vs. a pack of 6 juice bottles</li>
                <li>• 1 small chips packet vs. a family-size chips packet</li>
                <li>• 1 cupcake vs. a box of 6 cupcakes</li>
              </ul>
            </div>

            <div className="text-left max-w-4xl mx-auto mb-8">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Ask the elder person you went with: &quot;Which one is the better deal?&quot;
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Then, when you come home, write your detective notes in your notebook and use the following format:
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Item Compared</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Small/Single Price</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Big Pack Price</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Which is the better deal</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Bread</td>
                    <td className="border border-gray-300 px-4 py-3">Small bread = $20</td>
                    <td className="border border-gray-300 px-4 py-3">Big bread = $30</td>
                    <td className="border border-gray-300 px-4 py-3">Big bread costs less per slice</td>
                    <td className="border border-gray-300 px-4 py-3">Big bread gives more for less money</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Juice</td>
                    <td className="border border-gray-300 px-4 py-3">1 bottle = $15</td>
                    <td className="border border-gray-300 px-4 py-3">Pack of 6 = $90</td>
                    <td className="border border-gray-300 px-4 py-3">Same price per bottle</td>
                    <td className="border border-gray-300 px-4 py-3">Only better if you need many bottles</td>
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