"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";

export default function Com() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    hobbies: "",
    likes: "",
    shoppingHabits: "",
    funFact: ""
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold mb-8 text-blue-800">Customer Persona</h1>
        <div className="flex justify-center mb-6">
          <Image className="rounded-lg" src={s1} alt="Customer Persona" width={400} height={300} />
        </div>
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

          {/* Hobbies */}
          <div className="space-y-2">
            <label className="block text-xl font-semibold text-gray-700">
              Hobbies:
            </label>
            <input
              type="text"
              value={formData.hobbies}
              onChange={(e) => handleInputChange('hobbies', e.target.value)}
              className="w-full max-w-md mx-auto px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 text-center"
              placeholder="Enter hobbies..."
            />
            <p className="text-sm text-gray-500">Example: Playing soccer, drawing, reading adventure stories</p>
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

          {/* Shopping Habits */}
          <div className="space-y-2">
            <label className="block text-xl font-semibold text-gray-700">
              Shopping Habits:
            </label>
            <input
              type="text"
              value={formData.shoppingHabits}
              onChange={(e) => handleInputChange('shoppingHabits', e.target.value)}
              className="w-full max-w-md mx-auto px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 text-center"
              placeholder="Enter shopping habits..."
            />
            <p className="text-sm text-gray-500">Example: Orders online, likes to buy a bracelet as a gift for friends</p>
          </div>

          {/* Fun Fact */}
          <div className="space-y-2">
            <label className="block text-xl font-semibold text-gray-700">
              Fun Fact:
            </label>
            <input
              type="text"
              value={formData.funFact}
              onChange={(e) => handleInputChange('funFact', e.target.value)}
              className="w-full max-w-md mx-auto px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 text-center"
              placeholder="Enter fun fact..."
            />
            <p className="text-sm text-gray-500">Example: Loves mixing and matching colors to make their own unique style</p>
          </div>
        </div>
      </div>
    </div>
  );
}