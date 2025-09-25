"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";

const contentData = {
  screen1: {
    texts: [
      "Max's burger shop is doing great, and his customers love his burgers. But he wants to make sure they keep coming back and don't get tempted by other burger shops.",
      "How can Max show his customers he appreciates them and encourage them to choose his shop again and again?",
      {
        title: "He can build customer loyalty.",
        subtitle: "Customer loyalty means: Max can build a special connection with his customers so they always choose his shop.",
        description: "Think of it like this: If you always buy chocolates from the same shop, and the shopkeeper gives you one extra chocolate for free each time, wouldn't you want to go back to that shop again and again? Max has to do something similar!"
      }
    ]
  },
  screen2: {
    question: "Can you think of ways Max could make his customers feel special so they keep coming back?",
    loyaltyIdeas: [
      "A \"Buy 5, Get 1 Free\" card: Max can give customers a card and punch a hole in it every time they buy a burger. After five punches, they get their sixth burger for free!",
      "A small free treat: Maybe a small, free drink or a few french fries with every burger.",
      "A \"Customer of the Month\" award: Max could put a picture of a regular customer on the wall and give them a prize.",
      "A birthday freebie: A free burger if it's your birthday month.",
      "A thank-you note: Handwritten cards to regular customers."
    ],
    cardColors: [
      "bg-blue-50 border-blue-200",
      "bg-green-50 border-green-200", 
      "bg-yellow-50 border-yellow-200",
      "bg-pink-50 border-pink-200",
      "bg-purple-50 border-purple-200"
    ],
    additionalTexts: {
      pickIdeas: "Pick 2 loyalty ideas you think will work best.",
      explainIdeas: "Tell me why customers will like these ideas.",
      finalQuestion: "Do you think these ideas help Max:",
      makeMoney: "Make more money (because customers come back)",
      loseMoney: "Make him lose money (because he's giving too much for free)?"
    }
  },
  styling: {
    cardClasses: "p-6 rounded-xl border-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1",
    textClasses: "text-lg font-medium text-gray-700 leading-relaxed",
    questionClasses: "mb-8 text-2xl font-semibold text-gray-800",
    buttonClasses: "px-6 py-3 bg-yellow-500 text-white font-semibold rounded-xl shadow-lg hover:bg-yellow-600 transition-colors"
  }
};

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [currentText, setCurrentText] = useState(0);

  const nextStep = () => {
    if (currentScreen === 1) {
      if (currentText === 0) {
        setCurrentText(1);
      } else if (currentText === 1) {
        setCurrentText(2);
      } else if (currentText === 2) {
        setCurrentScreen(2);
        setCurrentText(0);
      }
    } else if (currentScreen === 2) {
      if (currentText === 0) {
        setCurrentText(1);
      } else if (currentText === 1) {
        setCurrentText(2);
      } else if (currentText === 2) {
        setCurrentText(3);
      } else if (currentText === 3) {
        setCurrentText(4);
      } else if (currentText === 4) {
        setCurrentText(5);
      }
    }
  };

  const renderScreen1 = () => {
    const currentTextData = contentData.screen1.texts[currentText];
    
    return (
      <div className="flex items-center justify-center min-h-screen bg-yellow-50 p-6">
        <div className="max-w-6xl bg-white shadow-lg rounded-2xl p-8">
          <div className="flex items-center gap-8">
            <div className="flex-1">
              <Image src={s1} alt="Max's burger shop" width={400} height={400} className="rounded-lg" />
            </div>
            <div className="flex-1 text-xl">
              {typeof currentTextData === 'string' ? (
                <p>{currentTextData}</p>
              ) : (
                <div>
                  <p className="mb-4">{currentTextData.title}</p>
                  <p className="mb-4">{currentTextData.subtitle}</p>
                  <p>{currentTextData.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderScreen2 = () => {
    const { loyaltyIdeas, cardColors, question, additionalTexts } = contentData.screen2;
    const { cardClasses, textClasses, questionClasses } = contentData.styling;

    return (
      <div className="flex items-center justify-center min-h-screen bg-yellow-50 p-6">
        <div className="max-w-6xl bg-white shadow-lg rounded-2xl p-8">
          <div className="text-xl">
            {currentText === 0 && (
              <p>{question}</p>
            )}
            {currentText === 1 && (
              <div>
                <p className={questionClasses}>{question}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {loyaltyIdeas.map((idea, index) => (
                    <div key={index} className={`${cardColors[index]} ${cardClasses}`}>
                      <p className={textClasses}>{idea}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {currentText === 2 && (
              <div>
                <p className={questionClasses}>{question}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {loyaltyIdeas.map((idea, index) => (
                    <div key={index} className={`${cardColors[index]} ${cardClasses}`}>
                      <p className={textClasses}>{idea}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xl font-semibold text-gray-800">{additionalTexts.pickIdeas}</p>
              </div>
            )}
            {currentText === 3 && (
              <div>
                <p className={questionClasses}>{question}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {loyaltyIdeas.map((idea, index) => (
                    <div key={index} className={`${cardColors[index]} ${cardClasses}`}>
                      <p className={textClasses}>{idea}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xl font-semibold text-gray-800">{additionalTexts.explainIdeas}</p>
              </div>
            )}
            {currentText === 4 && (
              <div>
                <p className={questionClasses}>{question}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {loyaltyIdeas.map((idea, index) => (
                    <div key={index} className={`${cardColors[index]} ${cardClasses}`}>
                      <p className={textClasses}>{idea}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-200">
                  <div className="text-center">
                    <p className="mb-4 text-xl font-semibold text-gray-800">{additionalTexts.finalQuestion}</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <div className="bg-green-100 px-6 py-3 rounded-lg border-2 border-green-300">
                        <p className="text-lg font-medium text-green-800">{additionalTexts.makeMoney}</p>
                      </div>
                      <p className="text-xl font-bold text-gray-600">OR</p>
                      <div className="bg-red-100 px-6 py-3 rounded-lg border-2 border-red-300">
                        <p className="text-lg font-medium text-red-800">{additionalTexts.loseMoney}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {currentScreen === 1 && renderScreen1()}
      {currentScreen === 2 && renderScreen2()}
      
      {!(currentScreen === 2 && currentText === 4) && (
        <div className="fixed bottom-8 right-8">
          <button
            onClick={nextStep}
            className={contentData.styling.buttonClasses}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}