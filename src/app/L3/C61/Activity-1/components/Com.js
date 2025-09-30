"use client";
import { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";

const contentData = {
  screens: [
    {
      id: 0,
      title: "Sam's Sports Business Journey",
      content: "Sam loves sports and started a small business making eco-friendly water bottles and sports gear. But he didn&apos;t know the best way to sell them. Should he sell to schools and gyms, open his own store, sell online, or create a platform for other sellers too?",
      image: S1
    },
    {
      id: 1,
      title: "B2B (Business to Business)",
      content: "At first, Sam didn&apos;t open a store. Instead, he sold his products to schools, gyms, and sports clubs. Those organizations then gave or sold the bottles and gear to their members.",
      image: S1,
      explanation: "This is called B2B – Business to Business, because Sam&apos;s business sells to another business, not directly to individual customers.",
      example: "Just like when a factory makes notebooks and sells them to schools or offices. The factory doesn&apos;t sell to students directly; schools or offices distribute them."
    },
    {
      id: 2,
      title: "B2C (Business to Consumer)",
      content: "After some time, Sam thought, \"Why not sell directly to people who love sports?\" So, Sam opened a small sports store in his neighborhood. Now, anyone could walk in and buy water bottles, skipping ropes, or footballs directly from Sam&apos;s shop.",
      image: S1,
      explanation: "This is called B2C – Business to Consumer, because the seller is Sam&apos;s business, and the buyers are individual customers.",
      example: "Just like when you buy a football directly from Decathlon or a water bottle from a local sports shop. You&apos;re buying straight from the shop."
    },
    {
      id: 3,
      title: "B2C Online",
      content: "Soon, Sam realized that only people nearby could shop at his store. \"What if someone in another city wants my products?\" Sam created an online store where customers from all over could order water bottles and gear and get them delivered to their homes.",
      image: S1,
      explanation: "This is still B2C, because Sam is selling directly to consumers, but now through the internet, reaching a much wider audience.",
      example: "Like when you order LEGO sets from the LEGO online store or your favorite toys from Disney&apos;s online shop. You get them directly from the company."
    },
    {
      id: 4,
      title: "Aggregator / Marketplace",
      content: "Finally, Sam had an even bigger idea: \"What if I allow other sports sellers to list their products on my website too?\" Soon, Sam&apos;s website became a hub where people could buy different sports items, from cricket bats and yoga mats to running shoes, all from different sellers. Sam earned a commission fee each time another seller made a sale through the platform.",
      image: S1,
      explanation: "This is called an Aggregator Model, because Sam&apos;s platform connects many sellers with many buyers, just like Flipkart, Amazon, or Decathlon Marketplace.",
      example: "Just like Swiggy or Zomato: you don&apos;t order from just one restaurant. You can choose pizza from Domino&apos;s, ice cream from a local shop, or cupcakes from another bakery, all in one app."
    },
    {
      id: 5,
      title: "",
      content: "So, if you were Sam, which way would you like to sell your sports products? B2B to schools and gyms, B2C in your own shop, B2C online, or as an Aggregator? Why?",
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