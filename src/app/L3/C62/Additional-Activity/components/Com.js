"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";

export default function Com() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    likes: "",
    buysBecause: "",
    shopsAt: ""
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Step 0: Intro screen
  if (step === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-2">
        <div className="max-w-3xl bg-white shadow-xl rounded-2xl p-8 text-center">
          <h1 className="text-3xl font-bold mb-6 text-blue-800">What is a Customer Persona?</h1>
          <div className="text-lg text-gray-700 mb-6">
            <span>
              A customer persona is like a made-up character that represents your typical customer — the kind of person who would love to buy your product.<br /><br />
              Businesses create persona to:<br />
            </span>
            <ul className="list-disc list-inside text-left mx-auto max-w-xl mb-4">
              <li>Understand who they are selling to</li>
              <li>Know what their customer likes</li>
              <li>Make better products, ads, and messages</li>
            </ul>
            <span className="block mt-4 font-semibold text-blue-700">Here is an example of customer persona For Mia:</span>
            <div className="bg-blue-50 rounded-lg p-4 mt-2 mb-2 text-left max-w-xl mx-auto">
              <span className="font-bold">Name:</span> Isha<br />
              <span className="font-bold">Age:</span> 10<br />
              <span className="font-bold">Likes:</span> Cartoons, Bright colors and trendy fashion<br />
              <span className="font-bold">Buys things because:</span> She wants clothes that show her favorite characters
            </div>
          </div>
          <button
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold text-lg shadow hover:bg-blue-700 transition"
            onClick={() => setStep(1)}
          >
            Create a Customer Persona
          </button>
        </div>
      </div>
    );
  }

  // Step 1: Form for bracelet business (or any business)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-6xl bg-white shadow-xl rounded-2xl p-4 text-center">
        <h1 className="text-2xl font-bold mb-4 text-blue-800">Create Your Customer Persona</h1>
        <div className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <label className="block text-xl font-semibold text-gray-700">
              Name:
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full max-w-md mx-auto px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 text-center"
              placeholder="Enter name..."
            />
            <p className="text-sm text-gray-500">Example: Riley</p>
          </div>

          {/* Age */}
          <div className="space-y-2">
            <label className="block text-xl font-semibold text-gray-700">
              Age:
            </label>
            <input
              type="text"
              value={formData.age}
              onChange={(e) => handleInputChange('age', e.target.value)}
              className="w-full max-w-md mx-auto px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 text-center"
              placeholder="Enter age..."
            />
            <p className="text-sm text-gray-500">Example: 10</p>
          </div>

          {/* Likes */}
          <div className="space-y-2">
            <label className="block text-xl font-semibold text-gray-700">
              Likes:
            </label>
            <input
              type="text"
              value={formData.likes}
              onChange={(e) => handleInputChange('likes', e.target.value)}
              className="w-full max-w-md mx-auto px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 text-center"
              placeholder="Enter likes..."
            />
            <p className="text-sm text-gray-500">Example: Bracelets with favorite colors, simple patterns, or their names</p>
          </div>

          {/* Buys things because */}
          <div className="space-y-2">
            <label className="block text-xl font-semibold text-gray-700">
              Buys things because:
            </label>
            <input
              type="text"
              value={formData.buysBecause}
              onChange={(e) => handleInputChange('buysBecause', e.target.value)}
              className="w-full max-w-md mx-auto px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 text-center"
              placeholder="Why do they buy?"
            />
            <p className="text-sm text-gray-500">Example: Wants a bracelet with their favorite color or name</p>
          </div>

          {/* Shops at */}
          <div className="space-y-2">
            <label className="block text-xl font-semibold text-gray-700">
              Shops at:
            </label>
            <input
              type="text"
              value={formData.shopsAt}
              onChange={(e) => handleInputChange('shopsAt', e.target.value)}
              className="w-full max-w-md mx-auto px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 text-center"
              placeholder="Where do they shop?"
            />
            <p className="text-sm text-gray-500">Example: Online store, local gift shop</p>
          </div>
        </div>
      </div>
    </div>
  );
}