"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [sellingPrices, setSellingPrices] = useState({
    apple: "",
    banana: "",
    mango: "",
    orange: "",
    grapes: ""
  });

  const nextScreen = () => {
    if (currentScreen < 9) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const handlePriceChange = (fruit, value) => {
    setSellingPrices(prev => ({
      ...prev,
      [fruit]: value
    }));
  };

  const calculateProfit = (cost, sellingPrice) => {
    const price = parseFloat(sellingPrice) || 0;
    const profit = price - cost;
    return profit;
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 0:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-purple-800">Meet Maya, the proud owner of a fruit stand</h1>
            <div className="flex justify-center mb-6">
              <Image src={s1} alt="fruit stand" width={400} height={400} className="rounded-lg" />
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              She buys fruits from the wholesale market and sells them in her neighborhood. Maya needs your help to decide - how much should she sell the fruits for! Help her earn well to keep her business running.
            </p>
          </div>
        );

      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Look at the cost for each fruit on the table.</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Fruit Name</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cost to Buy (per piece)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Suggested Sell Price</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Profit or loss?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Apple</td>
                    <td className="border border-gray-300 px-4 py-3">$2</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Banana</td>
                    <td className="border border-gray-300 px-4 py-3">$1</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Mango</td>
                    <td className="border border-gray-300 px-4 py-3">$3</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Orange</td>
                    <td className="border border-gray-300 px-4 py-3">$2</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Grapes</td>
                    <td className="border border-gray-300 px-4 py-3">$2</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-center">
              <p className="text-lg text-gray-700 mb-2">You decide the selling price - should it be more, same, or less than the cost?</p>
              <p className="text-lg text-gray-700">As you put the selling price in the table the profit or loss will be auto calculated.</p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-green-800">Do you remember what profit we have learned in previous classes?</h1>
          </div>
        );

      case 3:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-green-800">Do you remember what profit we have learned in previous classes?</h1>
            <div className="bg-green-100 p-8 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-green-800">
                Profit is review - cost, if the value is positive then it&apos;s a profit else it is a loss.
              </p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-blue-800">If an apple costs Maya $2, and she sells it for $3, is that more or less than the cost?</h1>
          </div>
        );

      case 5:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-blue-800">If an apple costs Maya $2, and she sells it for $3, is that more or less than the cost?</h1>
            <div className="bg-blue-100 p-8 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-blue-800">
                It&apos;s more. That means Maya makes a profit.
              </p>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-orange-800">If she sells the banana at the same price she bought it, which is $1, does Maya earn anything?</h1>
          </div>
        );

      case 7:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-orange-800">If she sells the banana at the same price she bought it, which is $1, does Maya earn anything?</h1>
            <div className="bg-orange-100 p-8 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-orange-800">
                No, she doesn&apos;t earn anything. That means no profit, no loss, it is called break even.
              </p>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-red-800">What if she sells mango for less than the cost, do you think that&apos;s good for Maya&apos;s business?</h1>
          </div>
        );

      case 9:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-red-800">What if she sells mango for less than the cost, do you think that&apos;s good for Maya&apos;s business?</h1>
            <div className="bg-red-100 p-8 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-red-800">
                No, it&apos;s not good. She will lose money if she sells for less than the cost.
              </p>
            </div>
          </div>
        );


      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl p-8">
          {renderScreen()}
          
          {currentScreen < 9 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={nextScreen}
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-xl"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}