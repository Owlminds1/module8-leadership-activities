"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";

const screens = [
  {
    label: "Fruit Seller",
    img: s1,
  },
  {
    label: "Cake Factory",
    img: s2,
  },
  {
    label: "Stationery Factory",
    img: s3,
  },
  {
    label: "Amazon",
    img: s4,
  },
];

export default function Com() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < screens.length - 1) {
      setStep(step + 1);
    }
  };

  const current = screens[step];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-purple-50 p-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-10 text-center">
        <h1 className="text-3xl font-bold mb-8 text-purple-700">{current.label}</h1>
        <div className="flex justify-center mb-8">
          <Image
            src={current.img}
            alt={current.label}
            width={400}
            height={400}
            className="rounded-xl"
          />
        </div>
        {step < screens.length - 1 && (
          <button
            onClick={handleNext}
            className="px-8 py-3 rounded-xl font-bold shadow bg-purple-500 text-white text-xl hover:bg-purple-600"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}