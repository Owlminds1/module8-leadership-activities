"use client";
import { useState } from "react";

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const nextScreen = () => {
    if (currentScreen < 6) {
      setCurrentScreen(currentScreen + 1);
      setShowAnswer(false);
      setSelectedAnswer(null);
    }
  };

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowAnswer(true);
  };

  const isAnswerCorrect = (selectedAnswer) => {
    return selectedAnswer === currentScenario.correctAnswer;
  };

  const scenarios = [
    {
      id: 0,
      scenario: "Maya sells bananas for $2 when they cost $1",
      correctAnswer: "Smart decision",
      explanation: "She makes more money than she spent, so her shop grows stronger."
    },
    {
      id: 1,
      scenario: "Lina makes a fruit basket and sells it with juice for more money.",
      correctAnswer: "Smart decision",
      explanation: "She adds extra items together, and customers are happy to pay more."
    },
    {
      id: 2,
      scenario: "Alex makes too many ice creams and have to throw them as a lot of ice remained unsold.",
      correctAnswer: "No So Smart decision",
      explanation: "He spent money to make them, but now it's all wasted."
    },
    {
      id: 3,
      scenario: "Sophia increases pizza price too much, customers stop buying",
      correctAnswer: "No So Smart decision",
      explanation: "If it's too expensive, people do not buy from here and sales drop."
    },
    {
      id: 4,
      scenario: "Emma lowers the price of yogurt before it goes bad",
      correctAnswer: "Smart decision",
      explanation: "She sells it in time, so nothing gets thrown away and money is saved."
    },
    {
      id: 5,
      scenario: "Olivia ignores new competition and does nothing to improve her shop",
      correctAnswer: "No So Smart decision",
      explanation: "Other shops get better, and her shop loses customers."
    },
    {
      id: 6,
      scenario: "Ava gives a free small juice box, and the customer later buys a big one",
      correctAnswer: "Smart decision",
      explanation: "She gives a tiny gift now, and later earns more money from happy customers."
    }
  ];

  const currentScenario = scenarios[currentScreen];

  const renderScreen = () => {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Scenario {currentScreen + 1}</h2>
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          {currentScenario.scenario}
        </p>

        {!showAnswer ? (
          <div className="flex justify-center space-x-6">
            <button
              onClick={() => handleAnswer("Smart decision")}
              className="px-8 py-4 bg-green-600 text-white font-bold rounded-2xl shadow-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 text-xl"
            >
              Smart decision
            </button>
            <button
              onClick={() => handleAnswer("No So Smart decision")}
              className="px-8 py-4 bg-red-600 text-white font-bold rounded-2xl shadow-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 text-xl"
            >
              No So Smart decision
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <p className={`text-xl font-bold mb-2 ${isAnswerCorrect(selectedAnswer) ? 'text-green-800' : 'text-red-800'}`}>
              {isAnswerCorrect(selectedAnswer) ? 'CORRECT!' : 'INCORRECT!'}
            </p>

            <div className={`p-6 rounded-lg max-w-2xl mx-auto ${isAnswerCorrect(selectedAnswer) ? 'bg-green-100' : 'bg-red-100'}`}>
              <p className={`text-lg mb-2 ${isAnswerCorrect(selectedAnswer) ? 'text-green-800' : 'text-red-800'}`}>
                It's a {currentScenario.correctAnswer}
              </p>
              <p className={`text-lg ${isAnswerCorrect(selectedAnswer) ? 'text-green-800' : 'text-red-800'}`}>
                {currentScenario.explanation}
              </p>
            </div>
            {currentScreen < 6 && (
              <button
                onClick={nextScreen}
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-xl"
              >
                Next
              </button>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl p-8">
          {renderScreen()}
        </div>
      </div>
    </div>
  );
}