"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const nextScreen = () => {
    if (currentScreen < 19) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 0:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-purple-800">Let&apos;s meet another entrepreneur Lina!</h1>
            <div className="flex justify-center mb-6">
              <Image src={s1} alt="pizza shop" width={400} height={400} className="rounded-lg" />
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              She has opened a small pizza shop. Some days she makes money, and some days she doesn&apos;t make money. She needs to understand why. Today, you are going to be a Customer Detective!
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Let&apos;s look at the sales and solve the mystery behind profit and loss.
            </p>
          </div>
        );

      case 1:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Day 1 Rainy Day:</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed">
              Look at the chart and say did the business made profit or make a loss?
            </p>
          </div>
        );

      case 2:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Day 1 Rainy Day:</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Look at the chart and say did the business made profit or make a loss?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-red-800 mb-4">They made a loss.</p>
              <p className="text-lg text-red-700">
                It rained all day, and very few people came out of their houses. Lina&apos;s sales went down. Which causes wasted food that leads to loss.
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Day 1 Rainy Day:</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Look at the chart and say did the business made profit or make a loss?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-xl font-bold text-red-800 mb-4">They made a loss.</p>
              <p className="text-lg text-red-700">
                It rained all day, and very few people came out of their houses. Lina&apos;s sales went down. Which causes wasted food that leads to loss.
              </p>
            </div>
            <p className="text-2xl text-gray-700 font-semibold">
              What could Lina do better?
            </p>
          </div>
        );

      case 4:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Day 1 Rainy Day:</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Look at the chart and say did the business made profit or make a loss?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-xl font-bold text-red-800 mb-4">They made a loss.</p>
              <p className="text-lg text-red-700">
                It rained all day, and very few people came out of their houses. Lina&apos;s sales went down. Which causes wasted food that leads to loss.
              </p>
            </div>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What could Lina do better?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <ul className="text-lg text-green-800 space-y-2">
                <li>• Offer free or low-cost home delivery for regular customers</li>
                <li>• Partner with a delivery service small extra cost but keeps sales moving</li>
              </ul>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-orange-800">Day 2 : Price Increase</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed">
              Look at the chart and say did the business make profit or make a loss?
            </p>
          </div>
        );

      case 6:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-orange-800">Day 2 : Price Increase</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Look at the chart and say did the business make profit or make a loss?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-red-800 mb-4">They made a loss.</p>
              <p className="text-lg text-red-700">
                Lina raised the price of her pizza by $2. Customers said it was too expensive, and fewer people bought.
              </p>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-orange-800">Day 2 : Price Increase</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Look at the chart and say did the business make profit or make a loss?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-xl font-bold text-red-800 mb-4">They made a loss.</p>
              <p className="text-lg text-red-700">
                Lina raised the price of her pizza by $2. Customers said it was too expensive, and fewer people bought.
              </p>
            </div>
            <p className="text-2xl text-gray-700 font-semibold">
              What could Lina do better?
            </p>
          </div>
        );

      case 8:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-orange-800">Day 2 : Price Increase</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Look at the chart and say did the business make profit or make a loss?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-xl font-bold text-red-800 mb-4">They made a loss.</p>
              <p className="text-lg text-red-700">
                Lina raised the price of her pizza by $2. Customers said it was too expensive, and fewer people bought.
              </p>
            </div>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What could Lina do better?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <ul className="text-lg text-green-800 space-y-2">
                <li>• Add extra toppings or larger size to match the higher price</li>
                <li>• Create &apos;value deals&apos; like Buy 1 Get 1 Free, or family combos</li>
              </ul>
            </div>
          </div>
        );

      case 9:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-green-800">Day 3 – New Cheesy Burst Pizza</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed">
              Look at the chart and say did the business make profit or make a loss?
            </p>
          </div>
        );

      case 10:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-green-800">Day 3 – New Cheesy Burst Pizza</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Look at the chart and say did the business make profit or make a loss?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-green-800 mb-4">They made good profit.</p>
              <p className="text-lg text-green-700">
                Lina added a new &apos;Cheesy Burst&apos; pizza. Customers loved it, and sales went up.
              </p>
            </div>
          </div>
        );

      case 11:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-green-800">Day 3 – New Cheesy Burst Pizza</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Look at the chart and say did the business make profit or make a loss?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-xl font-bold text-green-800 mb-4">They made good profit.</p>
              <p className="text-lg text-green-700">
                Lina added a new &apos;Cheesy Burst&apos; pizza. Customers loved it, and sales went up.
              </p>
            </div>
            <p className="text-2xl text-gray-700 font-semibold">
              Why do you think that happened?
            </p>
          </div>
        );

      case 12:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-green-800">Day 3 – New Cheesy Burst Pizza</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Look at the chart and say did the business make profit or make a loss?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-xl font-bold text-green-800 mb-4">They made good profit.</p>
              <p className="text-lg text-green-700">
                Lina added a new &apos;Cheesy Burst&apos; pizza. Customers loved it, and sales went up.
              </p>
            </div>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              Why do you think that happened?
            </p>
            <div className="bg-blue-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-blue-800">
                The new pizza was exciting and tasty, so more people bought it.
              </p>
            </div>
          </div>
        );

      case 13:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-red-800">Day 4 – Competition Nearby</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              A new pizza shop opened across the street selling at lower prices. Many customers went there instead, and Lina&apos;s sales dropped.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              What could Lina do to make sure her pizza shop stays relevant and people do buy from her.?
            </p>
          </div>
        );

      case 14:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-red-800">Day 4 – Competition Nearby</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              A new pizza shop opened across the street selling at lower prices. Many customers went there instead, and Lina&apos;s sales dropped.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              What could Lina do to make sure her pizza shop stays relevant and people do buy from her.?
            </p>
            <div className="bg-yellow-100 p-6 rounded-lg max-w-2xl mx-auto">
              <ul className="text-lg text-yellow-800 space-y-2">
                <li>• Focus on quality, taste, and friendly service</li>
                <li>• Run promotions (like Wednesday Specials)</li>
                <li>• Give loyalty cards to keep regular customers</li>
              </ul>
            </div>
          </div>
        );

      case 15:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-purple-800">Day 5 – Holiday Crowd</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              It was a public holiday. Families went out for food, and Lina&apos;s shop was full of hungry customers. Sales went up.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Why do you think that happened?
            </p>
          </div>
        );

      case 16:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-purple-800">Day 5 – Holiday Crowd</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              It was a public holiday. Families went out for food, and Lina&apos;s shop was full of hungry customers. Sales went up.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Why do you think that happened?
            </p>
            <div className="bg-purple-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-purple-800">
                Because more families were outside and wanted to eat together.
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
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl p-8">
          {renderScreen()}

          {currentScreen < 16 && (
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