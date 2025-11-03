"use client";

import { useState } from 'react';
import Image from 'next/image';
import s1 from '../assets/s1.png';

const Com = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const nextScreen = () => {
    setCurrentScreen(prev => prev + 1);
  };



  const renderScreen = () => {
    switch (currentScreen) {
      case 0:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">

              <div className="space-y-6">
                <div className="text-lg text-gray-700">
                  <p className="mb-4">1. How many shirts should I make?</p>
                  <p>2. At what price should I sell them to make a profit?</p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <div className="space-y-2 text-gray-700">
                    <p>1. If Maya makes too few T-shirts, she might lose customers.</p>
                    <p>2. If she makes too many T-shirts, and they are not sold, she might make a loss and lose money.</p>
                    <p>3. She doesn&apos;t want to guess; she wants to use data and business logic again!</p>
                  </div>
                </div>

                <button
                  onClick={nextScreen}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Items</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cost Per Item</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Quantity</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Total Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">T-Shirts</td>
                      <td className="border border-gray-300 px-4 py-3">$5</td>
                      <td className="border border-gray-300 px-4 py-3">____</td>
                      <td className="border border-gray-300 px-4 py-3">____</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Paint</td>
                      <td className="border border-gray-300 px-4 py-3">$2</td>
                      <td className="border border-gray-300 px-4 py-3">____</td>
                      <td className="border border-gray-300 px-4 py-3">____</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Packaging</td>
                      <td className="border border-gray-300 px-4 py-3">$1</td>
                      <td className="border border-gray-300 px-4 py-3">____</td>
                      <td className="border border-gray-300 px-4 py-3">____</td>
                    </tr>
                    <tr className="bg-gray-100 font-semibold">
                      <td className="border border-gray-300 px-4 py-3">TOTAL</td>
                      <td className="border border-gray-300 px-4 py-3"></td>
                      <td className="border border-gray-300 px-4 py-3"></td>
                      <td className="border border-gray-300 px-4 py-3">____</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <button
                onClick={nextScreen}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold mt-6"
              >
                Next
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">

              <div className="space-y-6">
                <p className="text-2xl text-gray-700 text-center">
                  But how can she estimate the quantity?
                </p>

                <button
                  onClick={nextScreen}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">

              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  In activity 1, we saw the data of the Customer interest report showing the Estimated T-Shirt buyers per month. We can use it to figure out the quantity she should make.
                </p>

                <div className="flex justify-center">
                  <Image
                    src={s1}
                    alt="Customer interest report"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md"
                  />
                </div>

                <button
                  onClick={nextScreen}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
              <div className="space-y-6">
                <p className="text-2xl text-gray-700 text-center">
                  What is the highest number of T-shirts sold in SparkFest in a given month?
                </p>

                <div className="flex justify-center">
                  <Image
                    src={s1}
                    alt="Sales data chart"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md"
                  />
                </div>

                <button
                  onClick={nextScreen}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
              <div className="space-y-6">
                <p className="text-2xl text-gray-700 text-center">
                  What is the highest number of T-shirts sold in SparkFest in a given month?
                </p>

                <div className="flex justify-center">
                  <Image
                    src={s1}
                    alt="Sales data chart"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md"
                  />
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                  <p className="text-lg text-gray-700">
                    The highest number of T-shirts were sold in August, 220 to be exact.
                  </p>
                </div>

                <button
                  onClick={nextScreen}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
              <div className="space-y-6">
                <p className="text-2xl text-gray-700 text-center">
                  Should Maya make 220 T-shirts in her first attempt? Why or why not?
                </p>

                <div className="flex justify-center">
                  <Image
                    src={s1}
                    alt="Sales data chart"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md"
                  />
                </div>

                <button
                  onClick={nextScreen}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
              <div className="space-y-6">
                <p className="text-2xl text-gray-700 text-center">
                  Should Maya make 220 T-shirts in her first attempt? Why or why not?
                </p>

                <div className="flex justify-center">
                  <Image
                    src={s1}
                    alt="Sales data chart"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md"
                  />
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                  <p className="text-lg text-gray-700">
                    Not necessarily, we don’t know in which month Maya will set up her stall, and sales can vary each month.
                    If she produces 220 T-shirts based only on August’s demand and the turnout is smaller, she could end up with unsold stock and lose money.
                    <br /><br />
                    It’s safer for Maya to start with a smaller quantity, such as half of the maximum sales or around 100–110 T-shirts. This helps her test the market and avoid unnecessary losses while still meeting a reasonable demand.
                  </p>
                </div>

              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {renderScreen()}
    </div>
  );
};

export default Com;