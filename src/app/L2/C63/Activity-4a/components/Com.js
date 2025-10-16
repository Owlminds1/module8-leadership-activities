"use client";
import { useState } from "react";

export default function Com() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  const renderScreen = () => {
    switch (step) {
      case 0:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-800 mb-12">
              Do you know what a Business Card is?
            </h1>
          </div>
        );

      case 1:
        return (
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-800 mb-12">
              Do you know what a Business Card is?
            </h1>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg mb-8">
              <div className="space-y-6 text-2xl text-gray-700 leading-relaxed">
                <p>A business card is a small card that has important information about a person or a business.</p>
                <p>It is like a networking tool: a way to share your details with others.</p>
                <p>When you give your card to someone, they know who you are, what you do, and how to contact you.</p>
                <p>It helps people remember you and connect later.</p>
                Think of it like a mini-poster all about you that fits in your pocket!
                <p></p>
              </div>
            </div>

          </div>
        );

      case 2:
        return (
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-purple-800 mb-12">
              Here are the important parts a Business Card should have:
            </h1>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-100 p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-6">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Name</h3>
                    <p className="text-xl text-gray-700">(your name or your business name)</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-6">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-blue-800 mb-2">What you do</h3>
                    <p className="text-xl text-gray-700">(example: Cookie Maker, Student Artist, or Young Inventor)</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-6">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-purple-800 mb-2">Contact Information</h3>
                    <p className="text-xl text-gray-700">(phone, email, or a website – you can make a pretend one if you like)</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-100 p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-6">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-yellow-800 mb-2">Logo or Picture</h3>
                    <p className="text-xl text-gray-700">(a small design that shows what you do)</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-100 p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-6">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-red-800 mb-2">Catchy Line / Slogan</h3>
                    <p className="text-xl text-gray-700">(a fun phrase that makes people remember you, like &quot;Baking Happiness!&quot;)</p>
                  </div>
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl bg-white shadow-2xl rounded-3xl p-12">
        {renderScreen()}

        {step < 2 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={nextStep}
              className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}