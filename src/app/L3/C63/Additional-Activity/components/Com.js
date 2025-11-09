"use client";
import { useState } from "react";

export default function Com() {
  const [step, setStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const nextStep = () => {
    if (!showResult) {
      setShowResult(true);
    } else {
      setShowResult(false);
      setStep((prev) => prev + 1);
    }
  };

  const handleAnswerSelect = (questionIndex, answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const questions = [
    {
      question: "What’s a polite way to start a conversation at a networking event?",
      type: "multiple",
      options: ["Stay silent until someone talks to you", "Ask about the other person’s work or interests", "Start talking only about yourself"],
      correctAnswer: "Ask about the other person’s work or interests"
    },
    {
      question: "Why is listening an important part of networking? ",
      type: "multiple",
      options: ["It helps you understand others and build trust", "It wastes time you could spend talking ", "It shows you don’t have anything to say"],
      correctAnswer: "It helps you understand others and build trust"
    },
    {
      question: "During a networking event, someone gives you their card. What’s the best next step after the event?",
      type: "multiple",
      options: [
        "Throw it away",
        "Send a quick thank-you or follow-up message",
        "Wait for them to contact you"
      ],
      correctAnswer: "Send a quick thank-you or follow-up message"
    },
    {
      question: "Which of the following shows strategic networking?",
      type: "multiple",
      options: [
        "Only talking to people in your same field",
        "Connecting with people from different industries to explore partnerships",
        "Adding random people online"
      ],
      correctAnswer: "Connecting with people from different industries to explore partnerships"
    },
    {
      question: "If a potential customer says they’re not interested right now, what should you do?",
      type: "multiple",
      options: [
        "Argue and convince them immediately",
        "Respectfully thank them and stay in touch",
        "Delete their contact"
      ],
      correctAnswer: "Respectfully thank them and stay in touch"
    },
    {
      question: "How can you keep a new connection strong after meeting them?",
      type: "multiple",
      options: ["Ignore them until your next event","Send updates or share useful information from time to time", "Ask them for favors immediately"],
      correctAnswer: "Send updates or share useful information from time to time"
    },
    {
      question: "What’s the best reason to attend industry meetups and conferences?",
      type: "multiple",
      options: [
        "To hand out as many business cards as possible",
        "To build meaningful, long-term relationships",
        "To collect freebies"
      ],
      correctAnswer: "To build meaningful, long-term relationships"
    }
  ];
  

  const renderScreen = () => {
    if (step >= questions.length) {
      return (
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-8">
             Quiz Complete!
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            Great job! You&apos;ve finished all the networking questions.
          </p>
        </div>
      );
    }

    const currentQuestion = questions[step];
    const selectedAnswer = selectedAnswers[step];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    if (showResult) {
      return (
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-indigo-800 mb-12 leading-relaxed">
            {currentQuestion.question}
          </h1>

          <div className="space-y-4 mb-8">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`w-full p-6 text-xl font-semibold rounded-2xl ${
                  option === currentQuestion.correctAnswer
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                    : option === selectedAnswer && !isCorrect
                    ? 'bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-lg'
                    : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800'
                }`}
              >
                {option}
                {option === currentQuestion.correctAnswer && (
                  <span className="ml-4 text-2xl">✓</span>
                )}
                {option === selectedAnswer && !isCorrect && (
                  <span className="ml-4 text-2xl">✗</span>
                )}
              </div>
            ))}
          </div>

          <div className={`p-8 rounded-2xl shadow-lg ${
            isCorrect 
              ? 'bg-gradient-to-r from-green-50 to-emerald-100' 
              : 'bg-gradient-to-r from-red-50 to-rose-100'
          }`}>
            <h2 className={`text-3xl font-bold mb-4 ${
              isCorrect ? 'text-green-800' : 'text-red-800'
            }`}>
              {isCorrect ? 'Correct!' : 'Incorrect!'}
            </h2>
            <p className={`text-xl ${
              isCorrect ? 'text-green-700' : 'text-red-700'
            }`}>
              {isCorrect 
                ? 'Great job! You got it right.' 
                : `The correct answer is: ${currentQuestion.correctAnswer}`
              }
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="text-center max-w-5xl mx-auto">
       
        <h1 className="text-3xl font-bold text-indigo-800 mb-12 leading-relaxed">
          {currentQuestion.question}
        </h1>

        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(step, option)}
              className={`w-full p-6 text-xl font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                selectedAnswer === option
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                  : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-blue-100 hover:to-indigo-200'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl bg-white shadow-2xl rounded-3xl p-12">
        {renderScreen()}
        
        {step < questions.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={nextStep}
              className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!showResult && !selectedAnswers[step]}
            >
              {!showResult ? 'Check Answer' : step < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}