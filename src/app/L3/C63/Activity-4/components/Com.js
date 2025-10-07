"use client";
import { useState } from "react";

export default function Com() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  const etiquetteRules = [
    {
      title: "Smile & Be Friendly",
      description: "Greet with confidence and a welcoming smile.",
      color: "from-yellow-50 to-orange-100",
      textColor: "yellow-800",
      badgeColor: "yellow-600"
    },
    {
      title: "Introduce Yourself Clearly",
      description: "Say your name, what you do (or what you're learning/building), and keep it short. Example: \"Hi, I'm Joe. I design handmade greeting cards.\"",
      color: "from-blue-50 to-indigo-100",
      textColor: "blue-800",
      badgeColor: "blue-600"
    },
    {
      title: "Listen More Than You Talk",
      description: "Good networkers ask questions and listen carefully. Example: \"What do you like about your business?\"",
      color: "from-green-50 to-emerald-100",
      textColor: "green-800",
      badgeColor: "green-600"
    },
    {
      title: "Show Respect",
      description: "Respect everyone equally. Wait for your turn to speak. Use polite words: Please, Thank you, Excuse me.",
      color: "from-purple-50 to-pink-100",
      textColor: "purple-800",
      badgeColor: "purple-600"
    },
    {
      title: "Be Curious & Ask Questions",
      description: "Show interest in others. For example, \"How did you get this idea? How did you start your business?\"",
      color: "from-red-50 to-rose-100",
      textColor: "red-800",
      badgeColor: "red-600"
    },
    {
      title: "Share, Don't Brag",
      description: "Talk about your ideas or projects in a simple, excited way, but don't try to show off.",
      color: "from-indigo-50 to-cyan-100",
      textColor: "indigo-800",
      badgeColor: "indigo-600"
    },
    {
      title: "Mind Your Manners",
      description: "If it's at an event with food, don't grab too much. Chew quietly and remember to clean before shaking hands.",
      color: "from-teal-50 to-emerald-100",
      textColor: "yellow-800",
      badgeColor: "yellow-600"
    },
    {
      title: "Exchange Contact Info Politely",
      description: "If you have a simple business card, share it. Seek permission before asking for an email/phone number. Example: 'May I have your email please?'",
      color: "from-amber-50 to-yellow-100",
      textColor: "yellow-800",
      badgeColor: "yellow-600"
    },
    {
      title: "Follow Up",
      description: "Send a short thank-you message after meeting someone. Example: \"It was great to meet you yesterday. I loved learning about your project!\"",
      color: "from-pink-50 to-rose-100",
      textColor: "yellow-800",
      badgeColor: "yellow-600"
    },
    {
      title: "Be Yourself",
      description: "People remember how you made them feel. Networking works best when you're kind, real, and authentic.",
      color: "from-violet-50 to-purple-100",
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