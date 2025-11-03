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

const items = [
  {
    id: 1,
    name: "Jio Hotstar",
    image: s1
  },
  {
    id: 2,
    name: "Domino’s Buy 1 Get 1 Free Offer",
    image: s2
  },
  {
    id: 3,
    name: "Nike Air Jordans",
    image: s3
  },
  {
    id: 4,
    name: "Youtube",
    image: s4
  },
  {
    id: 5,
    name: "Amazon Prime",
    image: s5
  },
  {
    id: 6,
    name: "Burger King 2 for $5 Whopper Deal",
    image: s6
  },
  {
    id: 7,
    name: "LEGO Collector’s Sets",
    image: s7
  }
];

const subscriptionOptions = [
  "Subscription",
  "Discount pricing strategy",
  "Premium Pricing",
  "Freemium",
];

const answerKey = {
  1: "Subscription", 
  2: "Discount pricing strategy", 
  3: "Premium Pricing", 
  4: "Freemium", 
  5: "Subscription", 
  6: "Discount pricing strategy",
  7: "Premium Pricing"
};

export default function Com() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState("");
  const [completed, setCompleted] = useState(false);

  const currentItem = items[currentIndex];
  const correctAnswer = answerKey[currentItem.id];

  const handleSelect = (option) => {
    setSelected(option);
    if (option === correctAnswer) {
      setFeedback("Correct!");
      setTimeout(() => {
        if (currentIndex < items.length - 1) {
          setCurrentIndex(currentIndex + 1);
          setSelected("");
          setFeedback("");
        } else {
          setCompleted(true);
        }
      }, 700);
    } else {
      setFeedback("Try again");
    }
  };

  const getButtonColor = (option) => {
    if (!selected) return "bg-white text-gray-700 border-gray-300";
    if (selected === option && feedback === "Correct!") return "bg-green-500 text-white border-green-500";
    if (selected === option && feedback === "Try again") return "bg-red-500 text-white border-red-500";
    return "bg-white text-gray-700 border-gray-300";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
      <div className="max-w-xl w-full mx-auto">
        {!completed ? (
          <div className="rounded-lg shadow-md p-6 bg-white flex flex-col items-center gap-6">
            <span className="text-xl font-semibold text-gray-800 text-center">{currentItem.name}</span>
            <Image src={currentItem.image} alt={currentItem.name} width={350} height={350} className="rounded-xl mb-4" />
            <div className="flex flex-wrap gap-4 justify-center w-full">
              {subscriptionOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  disabled={!!feedback && feedback === "Correct!"}
                  className={`px-4 py-2 rounded-lg border font-semibold transition-colors duration-150 min-w-[160px] text-center ${getButtonColor(option)}`}
                >
                  {option}
                </button>
              ))}
            </div>
            {selected && (
              <div className={`mt-6 text-lg font-bold ${feedback === "Correct!" ? "text-green-600" : "text-red-600"}`}>{feedback}</div>
            )}
          </div>
        ) : (
          <div className="text-3xl text-green-700 font-bold py-16 text-center">Great job!</div>
        )}
      </div>
    </div>
  );
}