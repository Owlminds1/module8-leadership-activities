"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";
import s7 from "../assets/s7.png";
import s8 from "../assets/s8.png";

const comparisonData = [
  {
    id: 0,
    left: { text: "Sand toys near the beach", image: s1 },
    right: { text: "A sand toy in a small town store", image: s2 }
  },
  {
    id: 1,
    left: { text: "A water bottle at an airport", image: s3 },
    right: { text: "A water bottle at a local grocery store", image: s4 }
  },
  {
    id: 2,
    left: { text: "Pizza at a local restaurant", image: s5 },
    right: { text: "Pizza at a famous theme park", image: s6 }
  },
  {
    id: 3,
    left: { text: "A movie ticket for a regular weekday", image: s7 },
    right: { text: "A movie ticket on a holiday weekend", image: s8 }
  }
];

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const nextScreen = () => {
    if (currentScreen < comparisonData.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const currentData = comparisonData[currentScreen];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center flex flex-col justify-center">
            <div className="text-6xl mb-4 flex justify-center items-center"><Image src={currentData.left.image} alt="left" width={300} height={300} /></div>
            <div className="text-xl font-semibold text-gray-800">{currentData.left.text}</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center flex flex-col justify-center">
            <div className="text-6xl mb-4 flex justify-center items-center"><Image src={currentData.right.image} alt="right" width={300} height={300} /></div>
            <div className="text-xl font-semibold text-gray-800">{currentData.right.text}</div>
          </div>
        </div>
        
        {currentScreen < comparisonData.length - 1 && (
          <div className="flex justify-center">
            <button
              onClick={nextScreen}
              className="px-6 py-2 rounded-lg font-semibold bg-blue-500 text-white hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}