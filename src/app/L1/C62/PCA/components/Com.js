"use client";

export default function Com() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-3xl bg-white shadow-xl rounded-2xl p-8 text-left">
        <div className="space-y-8">
          <div className="border-2 border-blue-300 rounded-lg p-6 bg-blue-50">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">My Mini Business Idea!</h2>
            <ul className="list-disc list-inside mb-4 ml-4 text-lg">
              <li>Think of a product you want to sell.</li>
              <li>Create a Mini Business Plan by answering questions in the notebook.</li>
              <li>Work out the cost by drawing a table like this in notebook:</li>
            </ul>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border-2 border-gray-300 text-lg">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border-2 border-gray-300 px-4 py-3 font-bold text-center">Item</th>
                    <th className="border-2 border-gray-300 px-4 py-3 font-bold text-center">Cost per item</th>
                    <th className="border-2 border-gray-300 px-4 py-3 font-bold text-center">Quantity needed</th>
                    <th className="border-2 border-gray-300 px-4 py-3 font-bold text-center">Total cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">&nbsp;</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">&nbsp;</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">&nbsp;</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">&nbsp;</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">&nbsp;</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">&nbsp;</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">&nbsp;</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">&nbsp;</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">&nbsp;</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">&nbsp;</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">&nbsp;</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">&nbsp;</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-lg mt-6">Share the picture of your business plan with the teacher.</p>
          </div>
        </div>
      </div>
    </div>
  );
}