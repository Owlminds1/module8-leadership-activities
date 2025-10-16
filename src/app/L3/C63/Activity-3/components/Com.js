"use client";
import { useState } from "react";

export default function Com() {
  const [step, setStep] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextStep = () => {
    if (!showAnswer) {
      setShowAnswer(true);
    } else {
      setShowAnswer(false);
      setStep((prev) => prev + 1);
    }
  };

  const networkingPlaces = [
    {
      title: "Community Groups / Local Clubs",
      question: "How could joining a Community Groups / Local Clubs or club help you network?",
      answer: "Networking happens when people come together for activities, learning, or fun.",
      example: "Example: You join a library club. By talking to others, you share book ideas, get tips, and make new friends.",
      color: "from-blue-50 to-indigo-100",
      textColor: "blue-800",
      badgeColor: "blue-600"
    },
    {
      title: "Classes or Courses",
      question: "Why do you think classes or courses are good for networking?",
      answer: "Enrolling in courses means learning with others who share your interests.",
      example: "Example: You attend a robotics workshop. You and your classmates exchange ideas, and maybe even plan future projects together.",
      color: "from-green-50 to-emerald-100",
      textColor: "green-800",
      badgeColor: "green-600"
    },
    {
      title: "Sports Academies or Skill Programs",
      question: "What about learning a sport or skill, how can that build connections?",
      answer: "Academies for music, dance, or sports help you grow your skills and meet like-minded people.",
      example: "Example: You join a basketball academy. You meet teammates, and one introduces you to a coach who helps you improve.",
      color: "from-purple-50 to-pink-100",
      textColor: "purple-800",
      badgeColor: "purple-600"
    },
    {
      title: "School Clubs & Events",
      question: "Can you think of ways school clubs or events can help you network?",
      answer: "Your school has lots of networking chances, clubs, fairs, and competitions.",
      example: "Example: You join the debate club. Not only do you practice public speaking, but you meet friends who love sharing ideas.",
      color: "from-yellow-50 to-orange-100",
      textColor: "yellow-800",
      badgeColor: "yellow-600"
    },
    {
      title: "Messaging Groups",
      question: "How could messaging groups like WhatsApp help with networking?",
      answer: "Groups let people share tips, projects, and opportunities.",
      example: "Example: You join a WhatsApp group for young artists. Someone shared a new drawing app, and now you've learned something new, plus, made a connection!",
      color: "from-red-50 to-rose-100",
      textColor: "red-800",
      badgeColor: "red-600"
    },
    {
      title: "Community Events & Workshops",
      question: "Why are events and fairs good places for networking?",
      answer: "Festivals, exhibitions, or workshops let you meet a wide range of people.",
      example: "Example: You visit a science fair and talk to an exhibitor. Their ideas inspire you, and now you've made a valuable connection.",
      color: "from-indigo-50 to-cyan-100",
      textColor: "indigo-800",
      badgeColor: "indigo-600"
    }
  ];

  const renderScreen = () => {
    if (step === 0) {
      return (
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-indigo-800 mb-12">
            Where can you actually network?
          </h1>
          
          {!showAnswer ? (
            <>
            </>
          ) : (
            <div className="space-y-6 text-2xl text-gray-700 leading-relaxed">
              <p>Networking doesn&apos;t just happen in one spot. It&apos;s everywhere, you just have to explore it.</p>
              <p>So let&apos;s become Networking Explorers.</p>
              <p>We&apos;ll explore different places where we can meet new people and learn or sell our things.</p>
            </div>
          )}
        </div>
      );
    }


    const currentPlace = networkingPlaces[step - 1];
    
    return (
      <div className="text-center max-w-5xl mx-auto">
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
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl bg-white shadow-2xl rounded-3xl p-12">
        {renderScreen()}
        
        {step < networkingPlaces.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={nextStep}
              className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {!showAnswer ? 'Next' : 'Next'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}