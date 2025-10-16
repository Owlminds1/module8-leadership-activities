"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";

// Content data structure
const contentData = {
  steps: [
    {
      id: 0,
      type: "intro",
      title: "",
      description: "Maya is a young girl who designs custom T-shirts with names and cartoon prints. She began by making printed & hand-designed T-shirts for her friends at school. Her friends loved the t-shirts and the design. Encouraged by the positive response, Maya feels uplifted and thinks, \"I should test my product by setting up a stall at one of the city's upcoming festivals.\"",
      image: s1,
      festivals: ["SparkFest", "City Carnival"]
    },
    {
      id: 1,
      type: "question",
      title: "Festival Choice",
      description: "These are one-day festivals held monthly. However, Maya only has $1000. She is unsure about where to sell her product. Which festival would be the best place to do so?",
      note: "Maya wants to make a smart decision. She doesn't want to guess; she wants to use business logic and data to choose the best place."
    },
    {
      id: 2,
      type: "cousin_advice",
      title: "Emma's Advice",
      description: "So she calls her cousin Emma, who runs a sneaker shop business.",
      advice: "Emma suggests using business concepts such as TAM: Total Addressable Market and SAM: Serviceable Available Market. Applying this strategy would help make a decision about where to open the shop.",
      image: s2
    },
    {
      id: 3,
      type: "concept",
      title: "Total Addressable Market (TAM)",
      definition: "The total number of people who would buy your product if everyone knew about it.",
      example: "Leo sells cool printed T-shirts. If he were to sell his T-shirts to everyone in the country who likes printed shirts, that would be his TAM. If 10 million people in the country wear printed T-shirts, then TAM = 10 million potential customers i.e the number of customers you can actually reach based on your location, price, and capacity."
    },
    {
      id: 4,
      type: "concept",
      title: "Serviceable Available Market (SAM)",
      definition: "This is the smaller group of people you can actually reach right now, based on where you sell and how big your business is.",
      example: "Since Leo sells T-shirts only in his city at a specified location, he won't reach the whole country just yet. He would only reach people near him. If 200,000 people in his city buy printed T-shirts, then SAM = 200,000 potential customers he can actually sell to."
    },
    {
      id: 5,
      type: "calculation_methods",
      title: "How to Calculate TAM & SAM",
      methods: [
        {
          title: "Market reports",
          description: "These are reports made by companies or research groups that show how big a market is."
        },
        {
          title: "Local population data",
          description: "This tells you how many people live in or visit an area. If more people lived near the shop, then more people would buy from it."
        },
        {
          title: "Customer interest or trends",
          description: "Businesses check what people like or are talking about. For example, if custom printed clothing is popular on social media, demand will be higher."
        },
        {
          title: "Foot traffic near shop location",
          description: "Foot traffic means how many people walk past a location daily or weekly. More people walking past a shop means more chances of getting customers."
        }
      ]
    }
  ]
};

// Helper functions to render different step types
const renderStep = (stepData) => {
  switch (stepData.type) {
    case "intro":
      return (
        <>
          <h1 className="text-4xl font-bold mb-6 text-purple-600">{stepData.title}</h1>
          <p className="mb-6 text-xl leading-relaxed text-gray-700">{stepData.description}</p>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Available Festivals:</h3>
            <div className="flex justify-center gap-8 mb-6">
              {stepData.festivals.map((festival, index) => (
                <div key={index} className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold text-lg shadow-lg">
                  {festival}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <Image src={stepData.image} alt="Maya with T-shirts" width={400} height={400} />
          </div>
        </>
      );
    
    case "question":
      return (
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-600">{stepData.title}</h2>
          <p className="text-xl leading-relaxed mb-4 text-gray-700">{stepData.description}</p>
          <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
            <p className="text-xl font-semibold text-yellow-800">{stepData.note}</p>
          </div>
        </div>
      );
    
    case "cousin_advice":
      return (
        <div>
          <h2 className="text-3xl font-bold mb-6 text-green-600">{stepData.title}</h2>
          <p className="text-xl leading-relaxed mb-4 text-gray-700">{stepData.description}</p>
          <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400 mb-6">
            <p className="text-xl font-semibold text-green-800">{stepData.advice}</p>
          </div>
          <div className="flex justify-center mb-4">
            <Image src={stepData.image} alt="Emma giving advice" width={400} height={400} />
          </div>
        </div>
      );
    
    case "concept":
      return (
        <div>
          <h2 className="text-3xl font-bold mb-6 text-purple-600">{stepData.title}</h2>
          <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-400 mb-6">
            <p className="text-xl font-semibold text-purple-800 mb-4">{stepData.definition}</p>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-lg text-gray-700">{stepData.example}</p>
            </div>
          </div>
        </div>
      );
    
    case "calculation_methods":
      return (
        <div>
          <h2 className="text-3xl font-bold mb-6 text-indigo-600">{stepData.title}</h2>
          <div className="space-y-4">
            {stepData.methods.map((method, index) => (
              <div key={index} className="bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-400">
                <h3 className="text-xl font-semibold text-indigo-800 mb-2">{method.title}</h3>
                <p className="text-lg text-gray-700">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    
    default:
      return <p className="text-xl">{stepData.content}</p>;
  }
};

export default function Com() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  const currentStepData = contentData.steps[step];
  const isLastStep = step === contentData.steps.length - 1;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8 text-center">
        {renderStep(currentStepData)}

        {!isLastStep && (
          <button
            onClick={nextStep}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-xl rounded-xl shadow-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200"
          >
            Next
          </button>
        )}
        
      </div>
    </div>
  );
}