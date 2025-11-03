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
      question: "Networking can help you find people who want to buy your product.",
      type: "truefalse",
      options: ["True", "False"],
      correctAnswer: "True"
    },
    {
      question: "What is one thing you should do when meeting someone new in business?",
      type: "multiple",
      options: ["Yell your product name", "Introduce yourself politely", "Ignore them"],
      correctAnswer: "Introduce yourself politely"
    },
    {
      question: "Listening attentively is not important when communicating with someone.",
      type: "truefalse",
      options: ["True", "False"],
      correctAnswer: "False"
    },
    {
      question: "If you meet someone who sells something you need, what should you do?",
      type: "multiple",
      options: ["Ignore them", "Talk to them and ask questions", "Take their product without asking"],
      correctAnswer: "Talk to them and ask questions"
    },
    {
      question: "Which of these can be a reason to network?",
      type: "multiple",
      options: ["Finding customers", "Getting advice", "Discovering opportunities", "All of the above"],
      correctAnswer: "All of the above"
    },
    {
      question: "True or False: Networking only works for big businesses.",
      type: "truefalse",
      options: ["True", "False"],
      correctAnswer: "False"
    },
    {
      question: "Cross-selling is when:",
      type: "multiple",
      options: ["You sell the same product twice", "One product helps sell another product", "You ignore customers"],
      correctAnswer: "One product helps sell another product"
    },
    {
      question: "True or False: Networking can help you discover new opportunities you didn't know about.",
      type: "truefalse",
      options: ["True", "False"],
      correctAnswer: "True"
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
                className={`w-full p-6 text-xl font-semibold rounded-2xl ${option === currentQuestion.correctAnswer
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

          <div className={`p-8 rounded-2xl shadow-lg ${isCorrect
            ? 'bg-gradient-to-r from-green-50 to-emerald-100'
            : 'bg-gradient-to-r from-red-50 to-rose-100'
            }`}>
            <h2 className={`text-3xl font-bold mb-4 ${isCorrect ? 'text-green-800' : 'text-red-800'
              }`}>
              {isCorrect ? 'Correct!' : 'Incorrect!'}
            </h2>
            <p className={`text-xl ${isCorrect ? 'text-green-700' : 'text-red-700'
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
              className={`w-full p-6 text-xl font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 ${selectedAnswer === option
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