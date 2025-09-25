"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";
import s7 from "../assets/s7.jpg";
import s8 from "../assets/s8.jpg";
import s9 from "../assets/s9.jpg";
import s10 from "../assets/s10.jpg";
import s11 from "../assets/s11.jpg";
import s12 from "../assets/s12.jpg";
import s13 from "../assets/s13.jpg";
import s14 from "../assets/s14.jpg";

const comparisonData = [
  {
    id: 0,
    left: { text: "1 package of milk", image: s1 },
    right: { text: "1 pair of shoes", image: s2 }
  },
  {
    id: 1,
    left: { text: "1 toy car", image: s3 },
    right: { text: "1 smartwatch", image: s4 }
  },
  {
    id: 2,
    left: { text: "1 chocolate bar", image: s5 },
    right: { text: "1 pizza", image: s6 }
  },
  {
    id: 3,
    left: { text: "1 backpack", image: s7 },
    right: { text: "1 bicycle", image: s8 }
  },
  {
    id: 4,
    left: { text: "1 storybook", image: s9 },
    right: { text: "1 tablet", image: s10 }
  },
  {
    id: 5,
    left: { text: "1 sandwich", image: s11 },
    right: { text: "1 birthday cake", image: s12 }
  },
  {
    id: 6,
    left: { text: "1 pair of socks", image: s13 },
    right: { text: "1 winter jacket", image: s14 }
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
        
        <div className="flex justify-center">
          <button
            onClick={nextScreen}
            disabled={currentScreen === comparisonData.length - 1}
            className={`px-6 py-2 rounded-lg font-semibold ${
              currentScreen === comparisonData.length - 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}