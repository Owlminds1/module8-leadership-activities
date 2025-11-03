"use client";
import { useState } from "react";

export default function Com() {
  const [step, setStep] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextStep = () => {
    setShowAnswer(false);
    setStep((prev) => prev + 1);
  };

  const networkingPlaces = [
    {
      title: "Community Groups / Local Clubs",
      question: "How can joining a Community Group or Local Club lead to networking?",
      answer: "Networking happens when people come together for activities, or learning.",
      example: "Example: You join a library club. By interacting with others, you share book ideas, get tips, and make new friends.",
      color: "from-blue-50 to-indigo-100",
      textColor: "blue-800",
      badgeColor: "blue-600",
    },
    {
      title: "Classes or Courses",
      question: "Why do you think classes or courses are good for networking?",
      answer: "Enrolling in courses means learning with others who share your interests.",
      example: "Example: You attend a robotics workshop. You and your classmates exchange ideas, and maybe even plan future projects together.",
      color: "from-purple-50 to-pink-100",
      textColor: "purple-800",
      badgeColor: "purple-600",
    },
    {
      title: "Sports Academies or Skill Programs",
      question: "How can learning a sport or a skill lead to building connections?",
      answer: "Academies for music, dance, or sports help you grow your skills and meet like-minded people.",
      example: "Example: You join a basketball academy. You meet teammates who might introduce you to a coach who helps you improve.",
      color: "from-green-50 to-emerald-100",
      textColor: "green-800",
      badgeColor: "green-600",
    },
    {
      title: "School Clubs or Events",
      question: "Can you think of ways school clubs or events can help you network?",
      answer: "Your school has many avenues for networking i.e. clubs, fairs, and competitions.",
      example: "Example: You join the debate club. Not only do you practice public speaking, but you meet friends who love sharing ideas.",
      color: "from-yellow-50 to-amber-100",
      textColor: "yellow-800",
      badgeColor: "yellow-600",
    },
    {
      title: "Messaging Groups",
      question: "How can communication platforms such as WhatsApp lead to networking?",
      answer: "Groups let people share tips, projects, and opportunities.",
      example: "Example: You join a WhatsApp group for young artists. Someone shares a new drawing app, so you learn something new, plus, make a connection!",
      color: "from-red-50 to-rose-100",
      textColor: "red-800",
      badgeColor: "red-600",
    },
    {
      title: "Community Events & Workshops",
      question: "Why are events and fairs good places for networking?",
      answer: "Festivals, exhibitions, or workshops let you meet a wide range of people.",
      example: "Example: You visit a science fair and talk to an exhibitor. Their ideas inspire you, so you make a valuable connection.",
      color: "from-indigo-50 to-cyan-100",
      textColor: "indigo-800",
      badgeColor: "indigo-600",
    },
  ];

  const renderScreen = () => {
    if (step === 0) {
      return (
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-indigo-800 mb-12">
            Where can you actually network?
          </h1>
          <div className="space-y-6 text-2xl text-gray-700 leading-relaxed">
            <p>
              Networking doesn’t just happen in one place. It’s everywhere — you
              just have to explore it.
            </p>
            <p>So let’s become Networking Explorers!</p>
          </div>
          <div className="flex justify-center mt-12">
            <button
              onClick={nextStep}
              className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Next
            </button>
          </div>
        </div>
      );
    }

    // Prevent error if step is out of bounds
    if (step > networkingPlaces.length) {
      return (
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-indigo-700 mb-12">Great job exploring various the networking places!</h2>
        </div>
      );
    }

    const currentPlace = networkingPlaces[step - 1];
    if (!currentPlace) return null;

    return (
      <div className="text-center max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-indigo-700 mb-8">
          We’ll explore different places where we can meet new people and learn or sell our things.
        </h2>
        <div className={`bg-gradient-to-r ${currentPlace.color} p-12 rounded-3xl shadow-2xl`}>
          <div className="flex items-center justify-center mb-8">
            <span className={`bg-${currentPlace.badgeColor} text-white font-bold rounded-full w-16 h-16 flex items-center justify-center text-3xl`}>
              {step}
            </span>
          </div>
          <h2 className={`text-4xl font-bold text-${currentPlace.textColor} mb-8`}>
            {currentPlace.title}
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            {currentPlace.question}
          </h3>
          {showAnswer && (
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
              <p className="font-semibold">{currentPlace.answer}</p>
              <p className="italic text-gray-600">{currentPlace.example}</p>
            </div>
          )}
          {/* Buttons */}
          <div className="flex justify-center gap-6 mt-10">
            {!showAnswer && (
              <button
                onClick={() => setShowAnswer(true)}
                className="px-10 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                Show Answer
              </button>
            )}
            {showAnswer && (
              <button
                onClick={nextStep}
                className="px-10 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl bg-white shadow-2xl rounded-3xl p-12">
        {renderScreen()}
      </div>
    </div>
  );
}
