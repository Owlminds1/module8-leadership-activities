"use client";
import { useState } from "react";

import Image from "next/image";
import S1 from '../assets/s1.png';
import S2 from '../assets/s2.png';
import S3 from '../assets/s3.png';
import S4 from '../assets/s4.png';
import S5 from '../assets/s5.png';
import S6 from '../assets/s6.png';
import S7 from '../assets/s7.png';
import S8 from '../assets/s8.png';
import S9 from '../assets/s9.png';
import S10 from '../assets/s10.png';
import S11 from '../assets/s11.png';
import S12 from '../assets/s12.png';
import S13 from '../assets/s13.png';
import S14 from '../assets/s14.png';
export default function Com() {
  const answers = [
    "right", 
    "left", 
    "left", 
    "right", 
    "right", 
    "left", 
    "right"    
  ];
  const comparisons = [
    {
      left: { name: "A small set of lego", price: 200, img: S1 },
      right: { name: "A big set of lego", price: 1200, img: S2 },
      bg: "bg-blue-50"
    },
    {
      left: { name: "Cap", price: 150, img: S3 },
      right: { name: "Sleeping tent", price: 800, img: S4 },
      bg: "bg-green-50"
    },
    {
      left: { name: "Fruit", price: 50, img: S5 },
      right: { name: "Can of juice", price: 80, img: S6 },
      bg: "bg-yellow-50"
    },
    {
      left: { name: "Amusement park full day pass", price: 900, img: S8 },
      right: { name: "Amusement park 4 hour pass", price: 400, img: S7 },
      bg: "bg-purple-50"
    },
    {
      left: { name: "Backpack", price: 600, img: S10 },
      right: { name: "Water bottle", price: 100, img: S9 },
      bg: "bg-red-50"
    },
    {
      left: { name: "Roller skates", price: 1200, img: S11 },
      right: { name: "Cycle", price: 2500, img: S12 },
      bg: "bg-indigo-50"
    },
    {
      left: { name: "Flight ticket", price: 5000, img: S13 },
      right: { name: "Train ticket", price: 1200, img: S14 },
      bg: "bg-pink-50"
    }
  ];

  const [currentScreen, setCurrentScreen] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [showCongo, setShowCongo] = useState(false);
  // Removed showCongo state

  const handleClick = (side) => {
    const correct = answers[currentScreen];
    if (side === correct) {
      setFeedback("");
      if (currentScreen < comparisons.length - 1) {
        setCurrentScreen(currentScreen + 1);
      } else {
        setShowCongo(true);
      }
    } else {
      setFeedback("Try again!");
    }
  };

  const renderComparison = () => {
    const comp = comparisons[currentScreen];
    return (
      <div className={`min-h-screen ${comp.bg} flex items-center justify-center p-8`}>
        <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-8 w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Compare and click the item that is more expensive
            </h1>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button
              onClick={() => handleClick("left")}
              className="w-80 h-80 bg-blue-100 rounded-xl shadow-lg text-xl font-semibold text-gray-700 hover:bg-blue-200 transition-colors border-2 border-transparent hover:border-blue-400 flex flex-col items-center justify-center"
            >
              <div className="relative w-72 h-72 mb-2">
                <Image src={comp.left.img} alt={comp.left.name} fill className="object-contain" />
              </div>
              {comp.left.name}
            </button>
            <span className="text-2xl font-bold text-gray-600">vs</span>
            <button
              onClick={() => handleClick("right")}
              className="w-80 h-80 bg-green-100 rounded-xl shadow-lg text-xl font-semibold text-gray-700 hover:bg-green-200 transition-colors border-2 border-transparent hover:border-green-400 flex flex-col items-center justify-center"
            >
              <div className="relative w-72 h-72 mb-2">
                <Image src={comp.right.img} alt={comp.right.name} fill className="object-contain" />
              </div>
              {comp.right.name}
            </button>
          </div>
          {feedback && (
            <div className="mt-6 text-red-600 font-semibold text-lg">{feedback}</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      {showCongo ? (
        <div className="min-h-screen bg-green-100 flex items-center justify-center p-8">
          <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-green-700 mb-8">Congratulations! You have completed the acitivty</h1>
            </div>
          </div>
        </div>
      ) : currentScreen < comparisons.length ? (
        renderComparison()
      ) : null}
    </div>
  );
}