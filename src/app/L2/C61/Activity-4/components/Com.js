"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const nextScreen = () => {
    if (currentScreen < 9) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 0:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-purple-800">Meet our next entrepreneur, Zara!</h1>
            <div className="flex justify-center mb-6">
              <Image src={s1} alt="Zara" width={300} height={300} className="rounded-lg" />
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              She loves designing colorful water bottles. She wants to sell them, but she isn&apos;t sure which business model is the best choice. Let&apos;s help her decide!
            </p>
          </div>
        );

      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-800">B2B – Business to Business</h2>
            <p className="text-xl text-gray-700 mb-6">How could Zara sell her water bottles to other businesses?</p>
          </div>
        );

      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-800">B2B – Business to Business</h2>
            <p className="text-xl text-gray-700 mb-4">How could Zara sell her water bottles to other businesses?</p>
            <div className="bg-green-100 p-4 rounded-lg mb-4">
              <p className="text-lg text-green-800">Zara could sell her water bottles to shops, gyms, or other businesses.</p>
              <p className="text-lg text-green-800 mt-2">Let&apos;s discuss its pros and cons:</p>
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-800">B2B – Business to Business</h2>
            <p className="text-xl text-gray-700 mb-4">How could Zara sell her water bottles to other businesses?</p>
            <div className="bg-green-100 p-4 rounded-lg mb-4">
              <p className="text-lg text-green-800">Zara could sell her water bottles to shops, gyms, or other businesses.</p>
              <p className="text-lg text-green-800 mt-2">Let&apos;s discuss its pros and cons:</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Pros:</h3>
                <ul className="space-y-2 text-green-700 text-lg">
                  <li>• Quick bulk sales: Zara can sell a lot of water bottles at once to a shop or gym, which brings in money faster than selling one by one.</li>
                  <li>• Fewer customers to manage: Instead of dealing with many individual buyers, Zara only needs to communicate with a few businesses, making it easier to manage orders.</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Cons:</h3>
                <ul className="space-y-2 text-red-700 text-lg">
                  <li>• Needs contacts with businesses: Zara will have to know people or find shops willing to buy from her, which can be hard for a new seller.</li>
                  <li>• Large quantity expectations: Businesses usually want big orders, but Zara is just starting and may not be able to produce enough bottles yet.</li>
                  <li>• Dependence on a few buyers: If one business stops buying, Zara could lose a lot of income since she relies on only a few customers.</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-green-800">B2C – Business to Consumer</h2>
            <p className="text-xl text-gray-700 mb-6">How could Zara sell directly to people?</p>
          </div>
        );

      case 5:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-green-800">B2C – Business to Consumer</h2>
            <p className="text-xl text-gray-700 mb-4">How could Zara sell directly to people?</p>
            <div className="bg-green-100 p-4 rounded-lg mb-4">
              <p className="text-lg text-green-800">Zara could sell directly to customers, either in her own shop or online.</p>
              <p className="text-lg text-green-800 mt-2">Let&apos;s discuss its pros and cons:</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Pros:</h3>
                <ul className="space-y-2 text-green-700 text-lg">
                  <li>• Higher profit per item: By selling directly to people, Zara can set her own price and earn more money for each water bottle sold.</li>
                  <li>• Direct connection with customers: Zara can build a relationship with buyers, get feedback, and make loyal customers.</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Cons:</h3>
                <ul className="space-y-2 text-red-700 text-lg">
                  <li>• High upfront investment for a shop: Opening a physical store costs money for rent, staff, and setup, which may be hard for Zara as a beginner.</li>
                  <li>• Needs to attract many customers: Selling directly means she must bring people to her shop or website, which can take effort and time.</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-orange-800">Aggregator</h2>
            <p className="text-xl text-gray-700 mb-6">Could Zara sell her water bottles through a platform like Amazon?</p>
          </div>
        );

      case 7:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-orange-800">Aggregator</h2>
            <p className="text-xl text-gray-700 mb-4">Could Zara sell her water bottles through a platform like Amazon?</p>
            <div className="bg-green-100 p-4 rounded-lg mb-4">
              <p className="text-lg text-green-800">Zara could sell on an aggregator website, where many sellers list products.</p>
              <p className="text-lg text-green-800 mt-2">Let&apos;s discuss its pros and cons:</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Pros:</h3>
                <ul className="space-y-2 text-green-700 text-lg">
                  <li>• Low upfront cost and less risk: Zara doesn&apos;t need to rent a shop or produce large quantities immediately, so she spends less money to start.</li>
                  <li>• The platform brings customers automatically: Sites like Amazon or Flipkart already have many shoppers, so Zara doesn&apos;t need to advertise as much.</li>
                  <li>• Reach a large audience quickly: Selling on an aggregator allows Zara to sell her bottles to people all over, not just in her neighborhood.</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Cons:</h3>
                <ul className="space-y-2 text-red-700 text-lg">
                  <li>• Less control over branding: Zara cannot fully design how her products look on the platform or control the shopping experience like in her own shop.</li>
                  <li>• Competition with other sellers: Her bottles will be listed alongside many other water bottles, so she must find ways to stand out.</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 8:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-purple-800">Now, considering Zara&apos;s product and resources, which business model do you think she should start with?</h2>
          </div>
        );

      case 9:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-purple-800">Now, considering Zara&apos;s product and resources, which business model do you think she should start with?</h2>
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Recommended Options:</h3>
              <ul className="space-y-3 text-blue-700">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">• Aggregator:</span>
                  <span>Low risk, easy to reach many customers, no big production initially</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">• B2C Online:</span>
                  <span>If she wants more control over branding but still sell directly</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">• B2B:</span>
                  <span>Could be an option later when she can produce in bulk</span>
                </li>
              </ul>
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