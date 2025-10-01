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
import s9 from "../assets/s9.png";
import s10 from "../assets/s10.png";
import s11 from "../assets/s11.png";
import s12 from "../assets/s12.png";
import s13 from "../assets/s13.png";
import s14 from "../assets/s14.png";


const comparisonData = [
  {
    id: 0,
    left: { text: "A pack of 12 pencils", image: s1 },
    right: { text: "A pack of 12 erasers", image: s2 }
  },
  {
    id: 1,
    left: { text: "A single balloon", image: s3 },
    right: { text: "A whole packet of balloons", image: s4 }
  },
  {
    id: 2,
    left: { text: "A pair of socks", image: s5 },
    right: { text: "A pair of shoes", image: s6 }
  },
  {
    id: 3,
    left: { text: "A school bag", image: s7 },
    right: { text: "A lunch box", image: s8 }
  },
  {
    id: 4,
    left: { text: "An ice cream cone", image: s9 },
    right: { text: "A whole cake", image: s10 }
  },
  {
    id: 5,
    left: { text: "A pack of 10 sketch pens", image: s11 },
    right: { text: "A pack of 10 regular pencils", image: s12 }
  },
  {
    id: 6,
    left: { text: "A plastic water bottle", image: s13 },
    right: { text: "A metal water bottle", image: s14 }
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