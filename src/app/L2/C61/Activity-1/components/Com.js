"use client";
import { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";

const contentData = {
  screens: [
    {
      id: 0,
      title: "Arjun's Sweet Shop Journey",
      content: "Arjun loves baking and wanted to start his own sweet shop, but was stuck: he didn't know the best way to sell them. Should he give them to shops, open his own store, sell them online, or create a platform for other bakers too?",
      image: S1
    },
    {
      id: 1,
      title: "B2B (Business to Business)",
      content: "Arjun at first, he didn’t open a shop of his own. Instead, he sold his cupcakes to other shops. Those shops then sold the cupcakes to their customers.",
      image: S1,
      explanation: "This is called B2B,  Business to Business, because Arjun’s business is selling to another business, not directly to customers.",
      example: "Just like when a farmer sells mangoes to a grocery store, and the grocery store sells them to us."
    },
    {
      id: 2,
      title: "B2C (Business to Consumer)",
      content: "After some time, Arjun wanted to sell directly to people who love cupcakes. So he can make more profit. So, he opened a small cupcake shop and started selling straight to customers.",
      image: S1,
      explanation: "This is called B2C, Business to Consumer, because the seller is a business, and the buyer is a person or consumer.",
      example: "Just like when your parents order a pizza directly from Domino’s or Pizza Hut. You’re buying straight from the shop, not through another store.."
    },
    {
      id: 3,
      title: "B2C Online",
      content: "Then Arjun thought, ‘What if I sell online? People from all over can order my cupcakes!’ He started selling through his own website directly to customers.",
      image: S1,
      explanation: "This is still B2C, because Arjun is selling directly to consumers, but now it’s online.",
      example: "Like when you order LEGO sets from the LEGO online store or your favorite character toys from Disney’s online shop. You get them directly from the company."
    },
    {
      id: 4,
      title: "Aggregator / Marketplace",
      content: "Arjun got an even bigger idea. He thought: ‘If I let other bakers sell cakes, muffins, and cookies on my website too, customers will have more choices, and I’ll earn more money!’",
      image: S1,
      explanation: "This is called an Aggregator, because Arjun’s website now connects many sellers with buyers. His business is a platform that helps other businesses reach customers.",
      example: "Like Swiggy or Zomato, you don’t just order from one restaurant. You can choose pizza from Domino’s, Pizza Hut or any other pizza shop, ice cream from a local shop, or cupcakes from another bakery, all in the same app. Arjun’s cupcake website works the same way, but for desserts!"
    },
    {
      id: 5,
      title: "",
      content: "So, if you were Arjun, which way would you like to sell your cupcakes, B2B to shops, B2C in your own shop, B2C online, or as an Aggregator? Why?",
      image: S1
    }
  ]
};

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const nextScreen = () => {
    if (currentScreen < contentData.screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const currentData = contentData.screens[currentScreen];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
          {currentData.title}
        </h1>
        
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-lg mb-4 leading-relaxed">
              {currentData.content}
            </p>
            
            {currentData.explanation && (
              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <p className="font-semibold text-blue-800 mb-2">
                  {currentData.explanation}
                </p>
              </div>
            )}
            
            {currentData.example && (
              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <p className="font-semibold text-green-800 mb-2">Example:</p>
                <p className="text-green-700">{currentData.example}</p>
              </div>
            )}
            
          </div>
          
          {currentData.id === 0 && (
            <div className="flex-shrink-0">
              <Image 
                src={S1} 
                alt="Business model illustration" 
                width={300} 
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          )}
        </div>

        {currentScreen < contentData.screens.length - 1 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={nextScreen}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}