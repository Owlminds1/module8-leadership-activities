"use client";
import { useState } from "react";

export default function Com() {
  const [tableData, setTableData] = useState({
    friendshipBands: { sellingPrice: "", quantity: "__", totalCost: "__" },
    bagTags: { sellingPrice: "", quantity: "__", totalCost: "__" },
    keychains: { sellingPrice: "", quantity: "__", totalCost: "__" }
  });

  const [isCalculated, setIsCalculated] = useState(false);

  const handleSellingPriceChange = (item, value) => {
    setTableData(prev => ({
      ...prev,
      [item]: {
        ...prev[item],
        sellingPrice: value
      }
    }));
  };

  const calculateValues = () => {
    const updatedData = {
      friendshipBands: {
        sellingPrice: tableData.friendshipBands.sellingPrice,
        quantity: "15",
        totalCost: `$${3 * 15}`
      },
      bagTags: {
        sellingPrice: tableData.bagTags.sellingPrice,
        quantity: "15",
        totalCost: `$${2 * 15}`
      },
      keychains: {
        sellingPrice: tableData.keychains.sellingPrice,
        quantity: "15",
        totalCost: `$${3 * 15}`
      }
    };
    
    setTableData(updatedData);
    setIsCalculated(true);
  };

  const totalCost = isCalculated ? 45 + 30 + 45 : 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-6xl bg-white shadow-xl rounded-2xl p-8 text-left">
        
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border-2 border-gray-300 text-lg">
            <thead>
              <tr className="bg-blue-100">
                <th className="border-2 border-gray-300 px-4 py-3 font-bold text-center">Item</th>
                <th className="border-2 border-gray-300 px-4 py-3 font-bold text-center">Cost Per Item</th>
                <th className="border-2 border-gray-300 px-4 py-3 font-bold text-center">Selling Price (STUDENT HAS TO FILL)</th>
                <th className="border-2 border-gray-300 px-4 py-3 font-bold text-center">Quantity Needed</th>
                <th className="border-2 border-gray-300 px-4 py-3 font-bold text-center">Total Cost</th>
              </tr>
            </thead>
            <tbody>
              {/* Friendship bands row */}
              <tr>
                <td className="border-2 border-gray-300 px-4 py-3 text-center">Friendship bands</td>
                <td className="border-2 border-gray-300 px-4 py-3 text-center">$3</td>
                <td className="border-2 border-gray-300 px-4 py-3 text-center">
                  <input
                    type="number"
                    value={tableData.friendshipBands.sellingPrice}
                    onChange={(e) => handleSellingPriceChange('friendshipBands', e.target.value)}
                    className="w-20 text-center border border-gray-400 rounded px-2 py-1"
                    placeholder="__"
                  />
                </td>
                <td className="border-2 border-gray-300 px-4 py-3 text-center">{tableData.friendshipBands.quantity}</td>
                <td className="border-2 border-gray-300 px-4 py-3 text-center">{tableData.friendshipBands.totalCost}</td>
              </tr>
              
              {/* Bag tags row */}
              <tr>
                <td className="border-2 border-gray-300 px-4 py-3 text-center">Bag tags</td>
                <td className="border-2 border-gray-300 px-4 py-3 text-center">$2</td>
                <td className="border-2 border-gray-300 px-4 py-3 text-center">
                  <input
                    type="number"
                    value={tableData.bagTags.sellingPrice}
                    onChange={(e) => handleSellingPriceChange('bagTags', e.target.value)}
                    className="w-20 text-center border border-gray-400 rounded px-2 py-1"
                    placeholder="__"
                  />
                </td>
                <td className="border-2 border-gray-300 px-4 py-3 text-center">{tableData.bagTags.quantity}</td>
                <td className="border-2 border-gray-300 px-4 py-3 text-center">{tableData.bagTags.totalCost}</td>
              </tr>
              
              {/* Keychains row */}
              <tr>
                <td className="border-2 border-gray-300 px-4 py-3 text-center">Keychains</td>
                <td className="border-2 border-gray-300 px-4 py-3 text-center">$3</td>
                <td className="border-2 border-gray-300 px-4 py-3 text-center">
                  <input
                    type="number"
                    value={tableData.keychains.sellingPrice}
                    onChange={(e) => handleSellingPriceChange('keychains', e.target.value)}
                    className="w-20 text-center border border-gray-400 rounded px-2 py-1"
                    placeholder="__"
                  />
                </td>
                <td className="border-2 border-gray-300 px-4 py-3 text-center">{tableData.keychains.quantity}</td>
                <td className="border-2 border-gray-300 px-4 py-3 text-center">{tableData.keychains.totalCost}</td>
              </tr>
              
              {/* Total row */}
              <tr className="bg-yellow-100 font-bold">
                <td className="border-2 border-gray-300 px-4 py-3 text-center">TOTAL</td>
                <td className="border-2 border-gray-300 px-4 py-3 text-center">—</td>
                <td className="border-2 border-gray-300 px-4 py-3 text-center"></td>
                <td className="border-2 border-gray-300 px-4 py-3 text-center">__</td>
                <td className="border-2 border-gray-300 px-4 py-3 text-center">
                  {isCalculated ? `$${totalCost}` : "__"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center">
          <button
            onClick={calculateValues}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold text-xl rounded-xl shadow-lg hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-200"
          >
            Update quantity and total cost
          </button>
        </div>
      </div>
    </div>
  );
}