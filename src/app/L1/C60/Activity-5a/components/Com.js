"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";

const contentData = {
  screen1: {
    steps: [
      { type: "question", text: "How is Chef Max selling burgers?" },
      { type: "flow", question: "How is Chef Max selling burgers?", flow: "Customers drop in >>> Order >>> Pay >>> Eat >>> Leave" }
    ]
  },
  screen2: {
    title: "Another way to sell",
    explanation: "Max wonders: ‘Hey! Pay me once a month, and take a burger every day! Get an extra burger every Sunday!",
    definition: "This way of selling is called a subscription. A subscription is when a customer pays a fixed amount upfront to get a product on a regular basis."
  },
  screen3: {
    title: "Examples of some products sold on subscription:",
    examples: [
      { icon: "", text: "Newspapers" },
      { icon: "", text: "Milk" },
      { icon: "", text: "Dairy products" },
      { icon: "", text: "Internet" }
    ]
  },
  screen4: {
    title: "Benefits of subscriptions:",
    benefits: [
      {
        text: "Regular money comes in: The seller is assured of sales and getting money.",
        example: "Max gets a fixed amount of money every month."
      },
      {
        text: "Calm Business: Because customers have already paid, the seller does not have to worry about getting buyers every day!",
        example: "Max doesn’t have to think about whether people will come or not."
      },
      {
        text: "Better Strategy: With subscription money, the seller can invest it back in business.",
        example: "Chef Max can buy some ingredients in bulk and save money."
      },
      {
        text: "Smart Offers: Customers enjoy discounts or special offers. As customers stick around, the seller can offer these discounts and yet make profit margins.",
        example: "Max offers a free burger every Sunday, yet he does not incur losses."
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
  const [screen1Step, setScreen1Step] = useState(0);

  const nextStep = () => {
    if (currentScreen === 1) {
      if (screen1Step === 0) {
        setScreen1Step(1);
      } else {
        setCurrentScreen(2);
      }
    } else if (currentScreen < 4) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const renderScreen1 = () => {
    const { steps } = contentData.screen1;
    const { questionClasses } = contentData.styling;
    const stepData = steps[screen1Step];
    return (
      <div className="flex items-center justify-center min-h-screen bg-yellow-50 p-6">
        <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8">
          <div className="text-center">
            <div className="mb-8">
              <Image src={s1} alt="Max's burger shop" width={300} height={300} className="rounded-lg mx-auto" />
            </div>
            {stepData.type === "question" && (
              <p className={questionClasses}>{stepData.text}</p>
            )}
            {stepData.type === "flow" && (
              <>
                <p className={questionClasses}>{stepData.question}</p>
                <p className="text-xl mt-6 text-gray-700 font-semibold">{stepData.flow}</p>
              </>
            )}
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
              <p className="text-xl font-semibold text-gray-800 leading-relaxed">{title}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{explanation}</p>
              <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                <p className="text-lg font-semibold text-blue-800"> {definition}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderScreen3 = () => {
    const { title, examples } = contentData.screen3;
    const { titleClasses, cardClasses, textClasses, cardColors } = contentData.styling;
    return (
      <div className="flex items-center justify-center min-h-screen bg-yellow-50 p-6">
        <div className="max-w-6xl bg-white shadow-lg rounded-2xl p-8">
          <div className="text-center">
            <h2 className={titleClasses}>{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {examples.map((example, index) => (
                <div key={index} className={`${cardColors[index % cardColors.length]} ${cardClasses}`}>
                  <div className="flex items-start gap-4">
                    {/* No icon, emoji removed */}
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

  const renderScreen4 = () => {
    const { title, benefits } = contentData.screen4;
    const { titleClasses, cardClasses, textClasses, cardColors } = contentData.styling;
    return (
      <div className="flex items-center justify-center min-h-screen bg-yellow-50 p-6">
        <div className="max-w-6xl bg-white shadow-lg rounded-2xl p-8">
          <div className="text-center">
            <h2 className={titleClasses}>{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className={`${cardColors[index % cardColors.length]} ${cardClasses}`}>
                  <div className="flex flex-col items-start gap-2">
                    <p className={textClasses}><span className="font-semibold">{benefit.text}</span></p>
                    <p className="text-base text-gray-600 italic">{benefit.example}</p>
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
                        {/* No icon, emoji removed */}
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
      default:
        return renderScreen1();
    }
  };

  return (
    <div>
      {renderCurrentScreen()}
      
      {((currentScreen === 1 && screen1Step === 0) ||
        (currentScreen === 1 && screen1Step === 1) ||
        (currentScreen < 4 && currentScreen !== 1)) && (
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