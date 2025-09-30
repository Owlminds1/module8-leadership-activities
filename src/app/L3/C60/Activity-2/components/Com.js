"use client";
import { useState } from "react";

const contentData = {
  steps: [
    {
      id: 0,
      type: "question",
      content: "Do you know what supply means?"
    },
    {
      id: 1,
      type: "progressive",
      content: "Do you know what supply means?",
      additionalContent: {
        title: "",
        items: ["Supply is how many products are available."]
      }
    },
    {
      id: 2,
      type: "question",
      content: "Do you know what demand means?"
    },
    {
      id: 3,
      type: "progressive",
      content: "Do you know what demand means?",
      additionalContent: {
        title: "",
        items: ["Demand is how many people want them."]
      }
    },
    {
      id: 4,
      type: "question",
      content: "Case 1: What happens if there are only a few products but many people want them?"
    },
    {
      id: 5,
      type: "progressive",
      content: "Case 1: What happens if there are only a few products but many people want them?",
      additionalContent: {
        title: "",
        items: [
          "The price goes up because many people want the same item, but there aren&apos;t enough for everyone. To decide who gets it, sellers charge more since people are willing to pay extra.",
          "Example: When a new PlayStation or iPhone launches, supply is limited but demand is huge. The price often goes higher than the original tag because everyone wants it."
        ]
      }
    },
    {
      id: 6,
      type: "question",
      content: "Case 2: Why do cab rides or food delivery apps sometimes cost more during bad weather or rush hour?"
    },
    {
      id: 7,
      type: "progressive",
      content: "Case 2: Why do cab rides or food delivery apps sometimes cost more during bad weather or rush hour?",
      additionalContent: {
        title: "",
        items: [
          "The app increases the price because many people are ordering at the same time, but fewer drivers are available. This is called surge pricing.",
          "Example: Cab prices jump up when it&apos;s raining, late at night, or during traffic peaks. Food delivery fees go up during heavy rain or festivals."
        ]
      }
    },
    {
      id: 8,
      type: "question",
      content: "Case 3: What if a shop has too much stock of something, but people don&apos;t really want it?"
    },
    {
      id: 9,
      type: "progressive",
      content: "Case 3: What if a shop has too much stock of something, but people don&apos;t really want it?",
      additionalContent: {
        title: "",
        items: ["The price goes down because shops have too much stock and not enough buyers. To avoid waste and clear space, they lower prices so more people will buy."]
      }
    },
    {
      id: 10,
      type: "question",
      content: "If everyone in school suddenly wants one but he has only 10 mugs left what will happen?"
    },
    {
      id: 11,
      type: "progressive",
      content: "If everyone in school suddenly wants one but he has only 10 mugs left what will happen?",
      additionalContent: {
        title: "",
        items: ["The price can rise because the demand is huge but the supply is tiny. Students may even compete to get a mug."]
      }
    },
    {
      id: 12,
      type: "question",
      content: "If he has made 200 mugs but very few buyers show up"
    },
    {
      id: 13,
      type: "progressive",
      content: "If he has made 200 mugs but very few buyers show up",
      additionalContent: {
        title: "",
        items: ["The price can drop because he has too many mugs and doesn&apos;t want them to go unsold, so lowering the price attracts more buyers."]
      }
    }
  ]
};

const renderStep = (stepData) => {
  switch (stepData.type) {
    case "intro":
      return (
        <>
          <h1 className="text-4xl font-bold mb-6">{stepData.title}</h1>
          <p className="text-2xl mb-6">{stepData.description}</p>
        </>
      );
    
    case "question":
      return <p className="text-2xl">{stepData.content}</p>;
    
    case "section":
      return (
        <p className="text-2xl">
          <span className="font-bold">{stepData.title}</span>
          <br />
          {stepData.content}
        </p>
      );
    
    case "progressive":
      return (
        <div className="text-2xl">
          {stepData.title && (
            <p>
              <span className="font-bold">{stepData.title}</span>
              <br />
              {stepData.content}
            </p>
          )}
          {!stepData.title && (
            <p>
              {stepData.isBold ? (
                <span className="font-bold">{stepData.content}</span>
              ) : (
                stepData.content
              )}
            </p>
          )}
          
          {stepData.additionalContent && (
            <div className="mt-4">
              {stepData.additionalContent.title && (
                <p className="font-bold">{stepData.additionalContent.title}</p>
              )}
              {stepData.additionalContent.items.map((item, index) => (
                <p key={index} className="mt-2">{item}</p>
              ))}
            </div>
          )}
          
          {stepData.finalContent && (
            <p className="mt-4">
              <span className="font-bold">{stepData.finalContent.title}</span> {stepData.finalContent.description} <span className="font-bold">{stepData.finalContent.result}</span>.
            </p>
          )}
          
          {stepData.answer && typeof stepData.answer === "string" && (
            <p className="mt-4">{stepData.answer}</p>
          )}
          
          {stepData.answer && typeof stepData.answer === "object" && (
            <p className="mt-4">
              <span className="font-bold">{stepData.answer.title}</span>
              <br />
              {stepData.answer.items.map((item, index) => (
                <span key={index}>
                  • {item}
                  {index < stepData.answer.items.length - 1 && <br />}
                </span>
              ))}
            </p>
          )}
          
          {stepData.decision && (
            <p className="mt-6">{stepData.decision}</p>
          )}
        </div>
      );
    
    case "calculation":
      return (
        <p className="text-2xl">
          {stepData.content} <br />
          <span>{stepData.calculation}</span>
        </p>
      );
    
    default:
      return <p className="text-2xl">{stepData.content}</p>;
  }
};

export default function Com() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  const currentStepData = contentData.steps[step];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-6 text-center">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8 text-2xl leading-relaxed">
        {renderStep(currentStepData)}

        {step !== 13 && (
          <button
            onClick={nextStep}
            className="mt-8 px-8 py-3 bg-yellow-500 text-white font-semibold rounded-xl shadow hover:bg-yellow-600 text-xl"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
