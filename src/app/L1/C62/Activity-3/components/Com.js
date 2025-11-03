"use client";
// ...existing code...
import Image from "next/image";
import s1 from "../assets/s1.png";

const contentData = {
  steps: [
    {
      id: 0,
      type: "intro",
      title: "",
      description: "Many customers came but left empty-handed because Ron ran out of sandwiches.",
      image: s1
    },
    {
      id: 1,
      type: "progressive",
      content: "Why did Ron run out of sandwiches so quickly?",
      isBold: true
    },
    {
      id: 2,
      type: "progressive",
      content: "Why did Ron run out of sandwiches so quickly?",
      isBold: true,
      answer: "There was a gap between his estimate of how many buyers would come and the actual number of customers that turned up."
    },
    {
      id: 3,
      type: "interactive",
      content: "If this were to happen every day, how would it impact Ron’s business?",
      options: [
        "Some customers might feel sad or disappointed because they didn’t get a sandwich.",
        "Ron should stop making sandwiches altogether to avoid running out.",
        "If this were to happen often, some customers might stop coming the next time, thinking that he would run out of sandwiches.",
        "Ron might lose money by not estimating the correct quantity. He would sell more sandwiches by preparing enough for everyone.",
        "The sandwich table might get a bad reputation, and people might feel unhappy or not want to come again.",
        "The customers should have brought their own sandwiches instead.",
        "Selling out early means Ron should raise prices very high so fewer people buy."
      ],
      correctOptions:[
        "Some customers might feel sad or disappointed because they didn’t get a sandwich.",
        "If this were to happen often, some customers might stop coming the next time, thinking that he would run out of sandwiches.",
        "Ron might lose money by not estimating the correct quantity. He would sell more sandwiches by preparing enough for everyone.",
        "The sandwich table might get a bad reputation, and people might feel unhappy or not want to come again."
      ],
      answer: [0,2,3,4]
    },
    {
      id: 4,
      type: "interactive",
      content: "How can Ron plan better next week?",
      options: [
        "Make more sandwiches than the last time so he has enough for all his customers.",
        "Buy ingredients in bigger packs to save money and make sure nothing runs out.",
        "Ask known customers in advance if they want sandwiches. This is called pre-ordering.",
        "Prepare a buffer for unexpected visitors, so no one has to leave empty-handed.",
        "Reduce the number of sandwiches made so they sell out even faster.",
        "Only make sandwiches for his friends instead of all customers."
      ],
      correctOptions: [
        "Make more sandwiches than the last time so he has enough for all his customers.",
        "Buy ingredients in bigger packs to save money and make sure nothing runs out.",
        "Ask known customers in advance if they want sandwiches. This is called pre-ordering.",
        "Prepare a buffer for unexpected visitors, so no one has to leave empty-handed."
      ],
      answer: [0,1,2,3],
      answerTitle: "Here are few actions he can consider:"
    },
    {
      id: 5,
      type: "progressive",
      content: "What if Ron wants to make just the right amount?",
      isBold: true
    },
    {
      id: 6,
      type: "progressive",
      content: "What if Ron wants to make just the right amount?",
      isBold: true,
      answer: {
        title: "",
        items: [
          "Pre-order system: Customers can pre-book their sandwiches in advance [just like one pre books a meal for flight travel]. That way, Ron would know exactly how many to make.",
          "Use the previous day's information: Look at the past days or fairs to see how many sandwiches were sold, then plan how many to make next time.",
          "Keep a buffer: Always make a few more sandwiches than expected so that unexpected customers don't go without any."
        ]
      }
    },
    {
      id: 7,
      type: "progressive",
      content: "What might happen if Ron makes too many sandwiches?",
      isBold: true
    },
    {
      id: 8,
      type: "progressive",
      content: "What might happen if Ron makes too many sandwiches?",
      isBold: true,
      answer: {
        title: "Consequences of making too many sandwiches:",
        items: [
          "Sometimes, a few sandwiches might not get sold.",
          "Ingredients like bread, peanut butter, and napkins would go to waste.",
          "Ron would have spent additional money on things he won't use, which means he would make less profit."
        ]
      }
    },
    {
      id: 9,
      type: "progressive",
      content: "Ron’s experiences helped us learn:",
      isBold: true,
      answer: {
        title: "",
        items: [
          "Sometimes a lot of people want your product, so it will quickly sell out.",
          "Sometimes fewer people come, so you might have leftovers.",
          "Planning ahead helps make sure that the customers are happy and we don’t lose money or waste ingredients."
        ]
      }
    }
  ]
};

// Helper functions to render different step types
import { useState } from "react";
const renderStep = (stepData, interactiveState, setInteractiveState, interactiveError) => {
  switch (stepData.type) {
    case "intro":
      return (
        <>
          <h1 className="text-4xl font-bold mb-6 text-blue-600">{stepData.title}</h1>
          <div className="mb-6 text-xl leading-relaxed">
            <p className="mb-4">Delighted at the success of the school fair stall, Ron decided to start a sandwich shop. </p>
            <p className="mb-4 font-semibold text-green-600">On the first day:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>All the sandwiches were quickly sold!</li>
              <li>Many customers came but left empty-handed because Ron sold all the sandwiches.</li>
            </ul>
            <p className="mb-4 font-semibold text-blue-600">Rohan wondered:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Why did this happen?</li>
              <li>How can I make sure it doesn’t happen again?</li>
            </ul>
          </div>
          <div className="flex justify-start mb-6">
            <Image src={stepData.image} alt="Rohan's sandwich shop" width={400} height={400} />
          </div>
        </>
      );

    case "progressive":
      return (
        <div>
          <p className="text-xl leading-relaxed mb-6">
            {stepData.isBold ? (
              <span className="font-bold text-green-600">{stepData.content}</span>
            ) : (
              stepData.content
            )}
          </p>
          {stepData.answer && typeof stepData.answer === "string" && (
            <div className="mt-4 p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <p className="text-xl">{stepData.answer}</p>
            </div>
          )}
          {stepData.answer && typeof stepData.answer === "object" && (
            <div className="mt-4 p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              {stepData.answer.title && (
                <p className="font-bold text-xl mb-4">{stepData.answer.title}</p>
              )}
              <ul className="list-disc list-inside space-y-3 ml-4">
                {stepData.answer.items.map((item, index) => (
                  <li key={index} className="text-xl leading-relaxed flex items-start">
                    <span className="text-yellow-600 font-bold mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );

    case "interactive":
      return (
        <div>
          <p className="text-xl leading-relaxed mb-6 font-bold text-green-600">{stepData.content}</p>
          <form className="mb-6">
            {stepData.options.map((option, idx) => (
              <label key={idx} className="block mb-4 text-lg">
                <input
                  type="checkbox"
                  checked={interactiveState.includes(idx)}
                  onChange={() => {
                    if (interactiveState.includes(idx)) {
                      setInteractiveState(interactiveState.filter(i => i !== idx));
                    } else {
                      setInteractiveState([...interactiveState, idx]);
                    }
                  }}
                  className="mr-3 accent-blue-600 scale-125"
                />
                {option}
              </label>
            ))}
          </form>
          {interactiveError && (
            <div className="mb-4 text-red-600 font-semibold">Incorrect selection. Please try again!</div>
          )}
         
        </div>
      );

    default:
      return <p className="text-xl">{stepData.content}</p>;
  }
};

export default function Com() {
  const [step, setStep] = useState(0);
  // For interactive steps, track selected options
  const [interactiveState, setInteractiveState] = useState([]);
  const [interactiveError, setInteractiveError] = useState(null); // null | false | true

  const currentStepData = contentData.steps[step];
  const isLastStep = step === contentData.steps.length - 1;

  const isInteractive = currentStepData.type === "interactive";

  const validateInteractive = () => {
    // Only allow next if all correct options are selected and no extra
    const correctIdxs = currentStepData.answer;
    const selected = interactiveState;
    const isCorrect =
      correctIdxs.length === selected.length &&
      correctIdxs.every(idx => selected.includes(idx));
    if (isCorrect) {
      setInteractiveError(false);
      setTimeout(() => {
        setStep((prev) => prev + 1);
        setInteractiveState([]);
        setInteractiveError(null);
      }, 500);
    } else {
      setInteractiveError(true);
    }
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
    setInteractiveState([]);
    setInteractiveError(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8 text-left">
        {renderStep(currentStepData, interactiveState, setInteractiveState, interactiveError)}

        {!isLastStep && (
          <div className="text-center">
            {isInteractive ? (
              <button
                onClick={validateInteractive}
                className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold text-xl rounded-xl shadow-lg hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-200"
              >
                Next
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold text-xl rounded-xl shadow-lg hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-200"
              >
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}