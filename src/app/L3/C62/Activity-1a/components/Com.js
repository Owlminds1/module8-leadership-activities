"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";

// Content data structure
const contentData = {
  steps: [
    {
      id: 0,
      type: "intro",
      title: "",
      description: "Maya designs custom T-shirts with names and cartoon prints.  She began by making printed & hand-designed T-shirts for her friends at school. Her friends loved the t-shirts and the design. Encouraged by the positive response, Maya thinks, “I should test my product by setting up a stall at one of the city’s upcoming festivals.”",
      image: s1,
      festivals: ["SparkFest", "City Carnival"]
    },
    {
      id: 1,
      type: "question",
      title: "Festival Choice",
      description: "These are one-day festivals held monthly. She has a limited budget, so she can’t have a stall at both the festivals!  She is unsure about where to sell her product. Which festival would be the best place to do so?",
      note: "Maya wants to make a smart decision using business logic and data to choose the best place."
    },
    {
      id: 2,
      type: "cousin_advice",
      title: "Emma's Advice",
      description: "Maya calls her cousin Emma, who runs a sneaker shop business.",
      advice: "Emma suggests checking the Total Addressable Market (TAM)  and Serviceable Available Market (SAM).",
      image: s2
    },
    {
      id: 3,
      type: "concept",
      title: "Total Addressable Market (TAM)",
      definition: "TAM as the biggest possible group of people who might want your product or service. It includes everyone who could possibly buy your product. It’s the total opportunity — if your product could reach everyone, everywhere.",
      example: "So if there are 1 billion teens in the world who use T-shirts,  TAM = 1 billion teens."
    },
    {
      id: 4,
      type: "concept",
      title: "Serviceable Available Market (SAM)",
      definition: "This is the smaller group of people you can actually actually access, based on country or region. SAM is the part of the TAM that you can actually reach or serve right now.",
      example: "Mia could sell T-shirts all over the country or her city. If there are 2 million teens in his city, then SAM = 2 million teens."
    },
    {
      id: 5,
      type: "concept",
      title: "Serviceable Obtainable Market (SOM)",
      definition: "Is part of your SAM that you can realistically win or sell to in the beginning. They are the first customers to win and are mostly in your immediate reach.",
      example: "If there are 20,000 teens in his neighbourhood, the SOM = 20000."
    },
    {
      id: 6,
      type:"sumUpConcepts",
      heading: "Here is a visual representation of TAM, SAM and SOM.",
      bulletPoints: [
        "Big circle (TAM): Everyone who could buy.",
        "Middle circle (SAM): People you can reach.",
        "Small circle (SOM): People you’ll actually win first.",
      ],
      image: s3
    },
    {
      id: 7,
      type: "calculation_methods",
      title: "How to estimate TAM, SAM and SOM",
      methods: [
        {
          title: "Market reports",
          description: "These are reports made by companies or research groups (like Statista) that show how big a market is. For example, “The global T-shirt market is worth $80 billion.” We can use the global or national figure as TAM. We can narrow down by country, age group, or interests to find SAM and estimate the starting share (for example, 1% of SAM) to get SOM."
        },
        {
          title: "Local population data",
          description: "Use population data from your city, neighborhood, or target area. This tells you how many potential customers live nearby. This tells you how many people live in or visit an area. If more people lived near the shop, then more people would buy from it."
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
              {stepData.festivals.map((festival, index) => {
                const colorStyles = [
                  {
                    card: "text-pink-700"
                  },
                  {
                    card: "text-purple-700"
                  }
                ];
                const style = colorStyles[index % colorStyles.length];
                return (
                  <div
                    key={index}
                    className={`px-8 py-4 rounded-2xl font-semibold text-lg italic flex items-center justify-center ${style.card}`}
                    style={{ minWidth: 160 }}
                  >
                    {festival}
                  </div>
                );
              })}
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
    case "sumUpConcepts":
      return (
        <div>
          <h2 className="text-3xl font-bold mb-6 text-pink-600">{stepData.heading}</h2>
          <ul className="mb-6 text-left max-w-xl mx-auto">
            {stepData.bulletPoints.map((point, idx) => (
              <li key={idx} className="mb-3 text-lg flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-pink-400 mr-3"></span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-center mb-4">
            <Image src={stepData.image} alt="TAM SAM SOM visual" width={400} height={400} />
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