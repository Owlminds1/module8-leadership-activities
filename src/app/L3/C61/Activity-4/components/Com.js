"use client";
import { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";
import S3 from "../assets/s3.png";

const screenData = [
  {
    id: 0,
    question: "Do you know what Netflix used to do before it became the streaming giant we know today?",
    showOriginalModel: false,
    showTransformation: false,
    originalModel: "Original Model:",
    originalContent: "Netflix started as a DVD rental service, where customers ordered movies online and received DVDs by mail.",
    transformation: "Transformation:",
    transformationContent: "Netflix switched to online streaming, letting subscribers watch movies and shows instantly on their devices."
  },
  {
    id: 1,
    question: "What do you think was good about switching to streaming?",
    answer: "Customers can watch movies anytime, anywhere. No need to wait for DVDs in the mail. Netflix can reach more people worldwide."
  },
  {
    id: 2,
    question: "What challenges might Netflix face when moving online?",
    answer: "High cost to build streaming technology, need to buy or produce lots of movies and shows, more competition from other streaming platforms."
  },
  {
    id: 3,
    pros: [
      "Global reach: People from many countries can subscribe.",
      "Lower operational costs: No more printing, storing, or shipping DVDs.",
      "Convenience for users: Watch anytime, anywhere on different devices."
    ],
    cons: [
      "High initial investment: Streaming platforms and servers are expensive.",
      "Competition: Needs to spend more on marketing, because of other streaming platforms like Amazon Prime.",
      "Content costs: It takes a lot of money for creating original movies and shows."
    ]
  },
  {
    id: 4,
    lesson: "Lesson: Adapting to technology and customer habits is key to long-term success."
  },
  {
    id: 5,
    question: "Do you know what Amazon used to sell before?",
    showOriginalModel: false,
    showTransformation: false,
    originalModel: "Original Model:",
    originalContent: "Amazon started as an online bookstore, offering a vast selection of books to customers.",
    transformation: "Transformation:",
    transformationContent: "Expanded to electronics, clothing, and a marketplace for third-party sellers."
  },
  {
    id: 6,
    question: "Why would Amazon want to sell more than just books?",
    answer: "To earn more money, attract more customers, and not depend on just one product."
  },
  {
    id: 7,
    question: "Now let's discuss the pros and cons of this switch",
    pros: [
      "Diversified revenue: Money comes from many products, not just books.",
      "Global presence: Customers worldwide can buy from Amazon.",
      "Marketplace model: Other sellers bring more variety to customers."
    ],
    cons: [
      "Complex logistics: Managing warehouses and shipping globally is hard.",
      "Legal challenges: Different countries have different rules.",
      "Competition: Other e-commerce platforms like eBay, Alibaba and Flipkart give great competition.",
      "Customer service issues: More products can mean more complaints."
    ]
  },
  {
    id: 8,
    lesson: "Lesson: Diversifying products and innovating services help businesses grow."
  },
  {
    id: 9,
    question: "Do you know what IKEA used to sell before?",
    showOriginalModel: false,
    showTransformation: false,
    originalModel: "Original Model:",
    originalContent: "IKEA operated through large physical stores, offering a wide range of home furnishings.",
    transformation: "Transformation:",
    transformationContent: "IKEA integrated digital technologies, launching an online store, mobile apps, and augmented reality tools to enhance the shopping experience."
  },
  {
    id: 10,
    question: "How does shopping online make things easier for customers?",
    answer: "Customers can browse and buy from home, see products in their rooms using AR, and avoid long store visits."
  },
  {
    id: 11,
    question: "What challenges might IKEA face in keeping the in-store experience online?",
    answer: "Customers cannot touch or feel furniture online; delivery logistics may be tricky."
  },
  {
    id: 12,
    question: "Now let's discuss the pros and cons of this switch",
    pros: [
      "Customer convenience: Shop from home anytime.",
      "Engagement: Apps and AR tools make shopping fun.",
      "Reaching new customers: People far from physical stores can buy."
    ],
    cons: [
      "Hard to replicate in-store feel: Customers miss trying products physically.",
      "Competition: Other online furniture sellers.",
      "Tech investment: Online tools and apps require money and maintenance."
    ]
  }
];

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showOriginalModel, setShowOriginalModel] = useState(false);
  const [showTransformation, setShowTransformation] = useState(false);

  const nextScreen = () => {
    if (currentScreen === 0 || currentScreen === 5 || currentScreen === 9) {
      if (!showOriginalModel) {
        setShowOriginalModel(true);
      } else if (!showTransformation) {
        setShowTransformation(true);
      } else if (currentScreen < screenData.length - 1) {
        setCurrentScreen(currentScreen + 1);
        setShowAnswer(false);
        setShowOriginalModel(false);
        setShowTransformation(false);
      }
    } else if (currentData.question && !showAnswer) {
      setShowAnswer(true);
    } else if (currentScreen < screenData.length - 1) {
      setCurrentScreen(currentScreen + 1);
      setShowAnswer(false);
    }
  };

  const currentData = screenData[currentScreen];

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Image 
              src={currentScreen < 5 ? S1 : currentScreen < 9 ? S2 : S3} 
              alt={currentScreen < 5 ? "Netflix Logo" : currentScreen < 9 ? "Amazon Logo" : "IKEA Logo"} 
              width={130} 
              height={130}
              className="rounded-full shadow-md"
            />
            <h1 className="text-2xl font-bold text-blue-800">
              {currentScreen < 5 
                ? "Netflix: From DVD Rentals to Streaming Giant"
                : currentScreen < 9
                ? "Amazon: From Online Bookstore to E-commerce Ecosystem"
                : "IKEA: Embracing Digital Transformation"
              }
            </h1>
          </div>

          {currentData.question && (
            <div className="mb-8">
              <div className="bg-blue-100 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-blue-800 mb-4">Question:</h2>
                <p className="text-xl text-blue-700">{currentData.question}</p>
              </div>
            </div>
          )}

          {(currentScreen === 0 || currentScreen === 5 || currentScreen === 9) && showOriginalModel && (
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{currentData.originalModel}</h3>
              <p className="text-lg text-gray-700 mb-4">{currentData.originalContent}</p>
            </div>
          )}

          {(currentScreen === 0 || currentScreen === 5 || currentScreen === 9) && showTransformation && (
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{currentData.transformation}</h3>
              <p className="text-lg text-gray-700 mb-4">{currentData.transformationContent}</p>
            </div>
          )}

          {showAnswer && currentData.answer && (
            <div className="mb-8">
              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Answer:</h3>
                <p className="text-xl text-green-700">{currentData.answer}</p>
              </div>
            </div>
          )}

          {currentData.pros && (
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Pros:</h3>
              <ul className="list-disc list-inside space-y-2">
                {currentData.pros.map((pro, index) => (
                  <li key={index} className="text-lg text-green-700">{pro}</li>
                ))}
              </ul>
            </div>
          )}

          {currentData.cons && (
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-red-800 mb-4">Cons:</h3>
              <ul className="list-disc list-inside space-y-2">
                {currentData.cons.map((con, index) => (
                  <li key={index} className="text-lg text-red-700">{con}</li>
                ))}
              </ul>
            </div>
          )}

          {currentData.lesson && (
            <div className="mb-8">
              <div className="bg-yellow-100 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-yellow-800 mb-4">Key Takeaway:</h3>
                <p className="text-xl text-yellow-700">{currentData.lesson}</p>
              </div>
            </div>
          )}

          {currentScreen < screenData.length - 1 && (
            <div className="flex justify-center">
              <button
                onClick={nextScreen}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105 text-lg"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}