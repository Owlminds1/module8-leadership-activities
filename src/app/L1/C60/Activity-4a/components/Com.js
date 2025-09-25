"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";

const contentData = {
  screen1: {
    question: "Customers come in, order a burger, pay once, eat it, and leave. That's the normal way we buy things. But, can you think of another way Max can sell burgers?"
  },
  screen2: {
    title: "Imagine Max says: 'Hey! If you want, you can pay me once a month, and I'll give you a burger every Friday!'",
    explanation: "That way, the customer doesn't have to pay every single time. This special way of selling is called a subscription.",
    definition: "A subscription is when a customer pays a fixed amount regularly to get a product again and again over time."
  },
  screen3: {
    title: "Benefits of subscriptions:",
    benefits: [
      {
        text: "Regular money comes in: Max knows he will get money every week or month, even before selling each burger."
      },
      {
        text: "Less worry: Because customers already paid, Max doesn't have to worry if people will come or not."
      },
      {
        text: "Better planning: With subscription money, Max can buy just the right amount of ingredients. He saves money by not buying too much or too little."
      },
      {
        text: "Discounts are smart: Even if Max gives a small discount, he still earns more in the long run because customers stay with him longer."
      }
    ]
  },
  screen4: {
    title: "Subscriptions are all around us!",
    examples: [
      {
        icon: "🥛",
        text: "Milk delivered every morning: Families pay once, and milk arrives daily without paying each time."
      },
      {
        icon: "🍱",
        text: "School lunch or canteen meal plans: Parents pay at the start, and kids get lunch every day without carrying money."
      }
    ]
  },
  screen5: {
    question: "Do all the products in the world can be sold on subscriptions?",
    answer: "No, not all products can be sold as a subscription. Because some things you don't need all the time. You just buy them once and you're done!",
    examples: [
      {
        icon: "🎂",
        text: "Birthday Cakes: You don't celebrate your birthday every week!"
      },
      {
        icon: "🎒",
        text: "School Bags: You only buy one and it lasts a long time."
      }
    ]
  },
  styling: {
    cardClasses: "p-6 rounded-xl border-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1",
    textClasses: "text-lg font-medium text-gray-700 leading-relaxed",
    questionClasses: "mb-8 text-2xl font-semibold text-gray-800",
    buttonClasses: "px-6 py-3 bg-yellow-500 text-white font-semibold rounded-xl shadow-lg hover:bg-yellow-600 transition-colors",
    titleClasses: "text-2xl font-bold text-gray-800 mb-6",
    cardColors: [
      "bg-blue-50 border-blue-200",
      "bg-green-50 border-green-200", 
      "bg-yellow-50 border-yellow-200",
      "bg-pink-50 border-pink-200",
      "bg-purple-50 border-purple-200"
    ]
  }
};

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextStep = () => {
    if (currentScreen < 5) {
      setCurrentScreen(currentScreen + 1);
    } else if (currentScreen === 5 && !showAnswer) {
      setShowAnswer(true);
    }
  };

  const renderScreen1 = () => {
    const { question } = contentData.screen1;
    const { questionClasses } = contentData.styling;
    
    return (
      <div className="flex items-center justify-center min-h-screen bg-yellow-50 p-6">
        <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8">
          <div className="text-center">
            <div className="mb-8">
              <Image src={s1} alt="Max's burger shop" width={300} height={300} className="rounded-lg mx-auto" />
            </div>
            <p className={questionClasses}>{question}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderScreen2 = () => {
    const { title, explanation, definition } = contentData.screen2;
    const { titleClasses, textClasses } = contentData.styling;
    
    return (
      <div className="flex items-center justify-center min-h-screen bg-yellow-50 p-6">
        <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8">
          <div className="text-center">
            <div className="mb-8">
              <Image src={s1} alt="Max's burger shop" width={300} height={300} className="rounded-lg mx-auto" />
            </div>
            <div className="text-left space-y-6">
              <p className="text-xl font-semibold text-gray-800 leading-relaxed">💭 {title}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{explanation}</p>
              <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                <p className="text-lg font-semibold text-blue-800">📋 {definition}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderScreen3 = () => {
    const { title, benefits } = contentData.screen3;
    const { titleClasses, cardClasses, textClasses, cardColors } = contentData.styling;
    
    return (
      <div className="flex items-center justify-center min-h-screen bg-yellow-50 p-6">
        <div className="max-w-6xl bg-white shadow-lg rounded-2xl p-8">
          <div className="text-center">
            <h2 className={titleClasses}>✨ {title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className={`${cardColors[index]} ${cardClasses}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{benefit.icon}</div>
                    <p className={textClasses}>{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderScreen4 = () => {
    const { title, examples } = contentData.screen4;
    const { titleClasses, cardClasses, textClasses, cardColors } = contentData.styling;
    
    return (
      <div className="flex items-center justify-center min-h-screen bg-yellow-50 p-6">
        <div className="max-w-6xl bg-white shadow-lg rounded-2xl p-8">
          <div className="text-center">
            <h2 className={titleClasses}>�� {title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {examples.map((example, index) => (
                <div key={index} className={`${cardColors[index]} ${cardClasses}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{example.icon}</div>
                    <p className={textClasses}>{example.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderScreen5 = () => {
    const { question, answer, examples } = contentData.screen5;
    const { questionClasses, cardClasses, textClasses, cardColors } = contentData.styling;
    
    return (
      <div className="flex items-center justify-center min-h-screen bg-yellow-50 p-6">
        <div className="max-w-6xl bg-white shadow-lg rounded-2xl p-8">
          <div className="text-center">
            <p className={questionClasses}>{question}</p>
            {showAnswer && (
              <div className="mt-8">
                <p className="text-xl font-semibold text-gray-800 mb-6">{answer}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {examples.map((example, index) => (
                    <div key={index} className={`${cardColors[index]} ${cardClasses}`}>
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{example.icon}</div>
                        <p className={textClasses}>{example.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 1:
        return renderScreen1();
      case 2:
        return renderScreen2();
      case 3:
        return renderScreen3();
      case 4:
        return renderScreen4();
      case 5:
        return renderScreen5();
      default:
        return renderScreen1();
    }
  };

  return (
    <div>
      {renderCurrentScreen()}
      
      {(currentScreen < 5 || (currentScreen === 5 && !showAnswer)) && (
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