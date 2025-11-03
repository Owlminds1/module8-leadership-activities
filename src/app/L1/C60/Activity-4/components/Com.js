"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";

const contentData = {
  screen1: {
    texts: [
  "Max's burger shop is doing great, and his customers love his burgers. But he wants to make sure they keep coming and don't get tempted by other burger shops.",
  "How can Max show appreciation to his customers and encourage them to choose his shop on a regular basis?",
  { type: "loyalty-question", title: "What is customer loyalty?" },
  { type: "loyalty-definition", content: "Customer loyalty means building a special connection with his customers so they always choose his shop." },
  { type: "loyalty-analogy", content: "Think of it like this: If you always buy apples from the same shop, and the shopkeeper gives you one extra apple for free each time, wouldn’t you want to go to that shop all the time? Max has to do something similar!" }
    ]
  },
  screen2: {
    question: "Select the customer loyalty program that will help Max build a connection with his buyers as well as increase his business. Give reasons for your choice.",
    loyaltyIdeas: [
      "Build emotional connection with customers: Share how Chef Max came up with the idea of burgers, so that everyone get connected to his mission.",
      "Issue points: Collect points with every purchase and use these points to get a free burger. Max can give customers a card and punch a hole in it every time they buy a burger. After five punches, they get their sixth burger for free!",
      "Free coupon: Maybe a coupon offering a free drink or a pack of french fries with every fifth burger.",
      "Birthday rewards: A free burger along with fries on your birthday.",
      "Party reward: Book a table for ten and get a free drink for all the guests.",
      "Referral reward: Bring a friend and you both get free fries.",
      "Wall of fame: Come every day for a month and get featured in the wall of fame at the shop!"
    ],
    cardColors: [
      "bg-blue-50 border-blue-200",
      "bg-green-50 border-green-200", 
      "bg-yellow-50 border-yellow-200",
      "bg-pink-50 border-pink-200",
      "bg-purple-50 border-purple-200",
      "bg-orange-50 border-orange-200",
      "bg-gray-50 border-gray-200"
    ],
    additionalTexts: {
      pickExplain: "Pick 2 loyalty ideas you think will work best and give reasons for your choice.",
      finalQuestion: "Do you think these ideas help Max:",
      makeMoney: "He will make more money (because customers regularly visit the shop)",
      loseMoney: "He might lose money (because he’s giving too much for free)?"
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
      if (currentText < contentData.screen1.texts.length - 1) {
        setCurrentText(currentText + 1);
      } else {
        setCurrentScreen(2);
        setCurrentText(0);
      }
    } else if (currentScreen === 2) {
      // screen2 states: 0 = options, 1 = pickExplain, 2 = finalQuestion
      if (currentText < 2) {
        setCurrentText(currentText + 1);
      }
    }
  };

  const renderScreen1 = () => {
    const currentTextData = contentData.screen1.texts[currentText];
    
    // Loyalty question/definition/analogy split logic
    if (currentTextData && currentTextData.type === "loyalty-question") {
      return (
        <div className="flex items-center justify-center min-h-screen bg-yellow-50 p-6">
          <div className="max-w-6xl bg-white shadow-lg rounded-2xl p-8">
            <div className="flex items-center gap-8">
              <div className="flex-1">
                <Image src={s1} alt="Max's burger shop" width={400} height={400} className="rounded-lg" />
              </div>
              <div className="flex-1 text-xl">
                <p className="mb-4 font-bold">{currentTextData.title}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (currentTextData && currentTextData.type === "loyalty-definition") {
      return (
        <div className="flex items-center justify-center min-h-screen bg-yellow-50 p-6">
          <div className="max-w-6xl bg-white shadow-lg rounded-2xl p-8">
            <div className="flex items-center gap-8">
              <div className="flex-1">
                <Image src={s1} alt="Max's burger shop" width={400} height={400} className="rounded-lg" />
              </div>
              <div className="flex-1 text-xl">
                <p className="mb-4 font-bold">What is customer loyalty?</p>
                <p>{currentTextData.content}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (currentTextData && currentTextData.type === "loyalty-analogy") {
      return (
        <div className="flex items-center justify-center min-h-screen bg-yellow-50 p-6">
          <div className="max-w-6xl bg-white shadow-lg rounded-2xl p-8">
            <div className="flex items-center gap-8">
              <div className="flex-1">
                <Image src={s1} alt="Max's burger shop" width={400} height={400} className="rounded-lg" />
              </div>
              <div className="flex-1 text-xl">
                <p className="mb-4 font-bold">What is customer loyalty?</p>
                <p className="mb-4">Customer loyalty means building a special connection with his customers so they always choose his shop.</p>
                <p>{currentTextData.content}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    // Default rendering for other steps
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
            {currentText === 1 && (
              <div>
                <p className="text-xl font-semibold text-gray-800">{additionalTexts.pickExplain}</p>
              </div>
            )}
            {currentText === 2 && (
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
      {/* Hide Next button on last screen (final question) */}
      {!(currentScreen === 2 && currentText === 2) && (
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