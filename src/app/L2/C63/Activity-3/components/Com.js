"use client";
import { useState } from "react";

export default function Com() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  const etiquetteRules = [
    {
      title: "Smile & Be Friendly",
      description: "A warm smile makes others feel welcome and comfortable. It shows you are open and happy to meet new people.",
      color: "from-yellow-50 to-orange-100",
      textColor: "yellow-800",
      badgeColor: "yellow-600"
    },
    {
      title: "Introduce Yourself Clearly",
      description: "Always say your name and what you do in a simple way. This helps the other person remember you easily.",
      color: "from-blue-50 to-indigo-100",
      textColor: "blue-800",
      badgeColor: "blue-600"
    },
    {
      title: "Show Respect",
      description: "Wait your turn to speak and don't interrupt. Being polite makes others want to keep talking with you.",
      color: "from-green-50 to-emerald-100",
      textColor: "green-800",
      badgeColor: "green-600"
    },
    {
      title: "Be Curious & Ask Questions",
      description: "Show interest in others by asking them something about what they do. People love it when you listen and care.",
      color: "from-purple-50 to-pink-100",
      textColor: "purple-800",
      badgeColor: "purple-600"
    },
    {
      title: "Share, Don't Brag",
      description: "Talk about your product or idea in a simple, friendly way. Don't make it sound like you are better than everyone else.",
      color: "from-red-50 to-rose-100",
      textColor: "red-800",
      badgeColor: "red-600"
    },
    {
      title: "Mind Your Manners",
      description: "Use kind words, speak politely, and don't interrupt. Good manners make every conversation smoother.",
      color: "from-indigo-50 to-cyan-100",
      textColor: "indigo-800",
      badgeColor: "indigo-600"
    },
    {
      title: "Exchange Contact Info Politely",
      description: "If you want to share or ask for details, do it politely and only if the other person agrees.",
      color: "from-teal-50 to-emerald-100",
      textColor: "yellow-800",
      badgeColor: "yellow-600"
    },
    {
      title: "Tell Yourself",
      description: "Be real and honest about who you are. Networking works best when people see the real you, not a pretend version.",
      color: "from-amber-50 to-yellow-100",
      textColor: "yellow-800",
      badgeColor: "yellow-600"
    }
  ];

  const renderScreen = () => {
    const currentRule = etiquetteRules[step];
    
    return (
      <div className="text-center max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-indigo-800 mb-12">
          Networking Etiquette
        </h1>
        
        <div className={`bg-gradient-to-r ${currentRule.color} p-12 rounded-3xl shadow-2xl`}>
          <div className="flex items-center justify-center mb-8">
            <span className={`bg-${currentRule.badgeColor} text-white font-bold rounded-full w-16 h-16 flex items-center justify-center text-3xl`}>
              {step + 1}
            </span>
          </div>
          
          <h2 className={`text-4xl font-bold text-${currentRule.textColor} mb-8`}>
            {currentRule.title}
          </h2>
          
          <p className="text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            {currentRule.description}
          </p>
        </div>
        
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl bg-white shadow-2xl rounded-3xl p-12">
        {renderScreen()}
        
        {step < etiquetteRules.length - 1 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={nextStep}
              className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}