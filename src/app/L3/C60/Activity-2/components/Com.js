"use client";
import { useState } from "react";

const contentData = {
  steps: [
    {
      id: 0,
      type: "intro",
      title: "Price Tag Pressure",
      description: "Prices of items change because of changes in supply, demand, or even the weather!"
    },
    {
      id: 1,
      type: "section",
      title: "What does supply mean?",
      content: ""
    },
    {
      id: 2,
      type: "section",
      title: "What does supply mean?",
      content: "Supply means how much of something is available for people to buy. If Rohan makes lots of mugs, supply is high. If he makes only a few, supply is low."
    },
    {
      id: 3,
      type: "section",
      title: "What does demand mean?",
      content: ""
    },
    {
      id: 4,
      type: "section",
      title: "What does demand mean?",
      content: "Demand means how much people want something. If lots of buyers want Rohan’s mugs, the demand is high. If nobody wants them, the demand is low."
    },
    {
      id: 5,
      type: "section",
      title: "Let’s see a few scenarios where prices vary due to Demand and Supply",
      content: "What happens when demand is high?"
    },
    {
      id: 6,
      type: "progressive",
      content: "The price goes up because many people want the same item. As there aren’t enough items for all, the sellers charge more since people are willing to pay more.",
      additionalContent: {
        title: "Example:",
        items: [
          "When a new premium phone launches, the supply is limited but the demand is huge. The price often goes higher than the original quote because everyone wants it."
        ]
      }
    },
    {
      id: 7,
      type: "section",
      title: "Why do food delivery or cab ride apps sometimes cost more at particular times?",
      content: ""
    },
    {
      id: 8,
      type: "section",
      title: "Why do food delivery or cab ride apps sometimes cost more at particular times?",
      content: "The app increases the price because many people order at the same time. As fewer drivers drive at such a time, the app introduces surge pricing."
    },
    {
      id: 9,
      type: "progressive",
      content: "Example: Cab prices hike up when it’s raining, late at night, or during traffic hours. Food delivery fees go up during the rainy season or festivals."
    },
    {
      id: 10,
      type: "section",
      title: "What if a shop carries a large number of stocked items that people don’t really want?",
      content: ""
    },
    {
      id: 11,
      type: "section",
      title: "What if a shop carries a large number of stocked items that people don’t really want?",
      content: "The price goes down because shops have too many items in stock and not enough buyers. They lower the prices to get more people to buy and thus avoid waste and clear space."
    },
    {
      id: 12,
      type: "section",
      title: "Let’s see how this supply and demand knowledge can be applied to Rohan’s shop.",
      content: ""
    },
    {
      id: 13,
      type: "section",
      title: "Scenario 1: Everyone at school suddenly wants customized mugs, but he has only 10 mugs to sell. How will pricing change?",
      content: ""
    },
    {
      id: 14,
      type: "section",
      title: "Scenario 1: Everyone at school suddenly wants customized mugs, but he has only 10 mugs to sell. How will pricing change?",
      content: "The price can rise as the demand is huge with a tiny supply of items. Students may even compete to get a mug."
    },
    {
      id: 15,
      type: "section",
      title: "Scenario 2: Rohan made 200 mugs but very few buyers show up. How will pricing change?",
      content: ""
    },
{
      id: 16,
      type: "section",
      title: "Scenario 2: Rohan made 200 mugs but very few buyers show up. How will pricing change?",
      content: "The price can drop because he has too many mugs and doesn’t want them to go unsold. So lowering the price would attract more buyers."
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
  const isComplete = step >= contentData.steps.length - 1;
  const currentStepData = contentData.steps[step];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-6 text-center">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8 text-2xl leading-relaxed">
        {renderStep(currentStepData)}

        {!isComplete && (
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
