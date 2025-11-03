"use client";
import React, { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";

const screens = [
  {
    id: 0,
    type: "intro",
    content: (
      <div>
        <div className="flex justify-center mb-8">
          <Image src={s1} alt="Mia" width={350} height={350} className="rounded-xl" />
        </div>
        <p className="text-3xl font-bold text-blue-700 mb-4">Mia wonders,</p>
        <p className="text-2xl mb-4">
          “Should I always keep the same price? Or
          <br />
          Should I change my price based on the situation?”
        </p>
      </div>
    ),
    stacked: [
      <p key="s1" className="text-xl mt-8 font-semibold text-purple-700">
        Is this question important?
      </p>,
      <p key="s2" className="text-xl mt-4 text-gray-700">
        Yes, Businesses don’t always use just a set price. They use different pricing strategies to fit different
        situations.
      </p>,
    ],
  },
  {
    id: 1,
    type: "strategy-intro",
    content: (
      <div>
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Pricing Strategy</h2>
        <p className="text-2xl mb-4 font-semibold">Step 1: What is your chief objective?</p>
        <ul className="list-decimal list-inside ml-6 text-xl">
          <li>Sell products really fast.</li>
          <li>Position product as special or exclusive.</li>
          <li>Match price of other competitors.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    type: "discount",
    content: (
      <div>
        <p className="text-2xl mb-4 font-semibold">
          Step 2: Select a pricing strategy that matches your objective
        </p>
        <h3 className="text-2xl font-bold text-blue-700 mb-4">Discount Pricing</h3>
        <ul className="list-disc list-inside ml-6 text-xl mb-4">
          <li>Sell fast with Discount Pricing</li>
          <li>Lowering the price so more people hurry to buy.</li>
        </ul>
        <p className="italic text-xl text-gray-700">
          Example: “Mia can offer lunchboxes at discounted prices on the stayback day to boost her sales.”
        </p>
      </div>
    ),
  },
  {
    id: 3,
    type: "premium",
    content: (
      <div>
        <h3 className="text-2xl font-bold text-purple-700 mb-4">Premium Pricing</h3>
        <ul className="list-disc list-inside ml-6 text-xl mb-4">
          <li>Position the product as special or exclusive with Premium Pricing.</li>
          <li>Increasing the price so that people buy to get unique value.</li>
        </ul>
        <div className="flex items-center gap-4 mt-2">
          <p className="italic text-xl text-gray-700 mb-0">
            Example: “Mia can turn the lunchbox containers into collectibles like sci-fi gadgets.”
          </p>
          <Image src={s2} alt="Premium Pricing Example" width={100} height={100} className="rounded-xl" />
        </div>
      </div>
    ),
  },
  {
    id: 4,
    type: "competitive",
    content: (
      <div>
        <h3 className="text-2xl font-bold text-green-700 mb-4">Competitive Pricing</h3>
        <ul className="list-disc list-inside ml-6 text-xl mb-4">
          <li>Setting prices close to other sellers to ensure that you remain in business.</li>
        </ul>
        <p className="italic text-xl text-gray-700">
          Example: Mia can not charge way more than other stalls to ensure buyers keep coming to her.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    type: "smart-shopper",
    content: (
      <div>
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Smart Shopper</h2>
        <p className="text-2xl">Why do shops and websites offer SALE?</p>
      </div>
    ),
  },
  {
    id: 6,
    type: "glitter-pens",
    content: (
      <div>
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Smart Shopper</h2>
        <p className="text-2xl">Why do glitter pens or fancy pencil boxes cost more than plain ones?</p>
      </div>
    ),
  },
  {
    id: 7,
    type: "compare-prices",
    content: (
      <div>
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Smart Shopper</h2>
        <p className="text-2xl">Why do we check prices at different shops or websites?</p>
      </div>
    ),
  },
];

export default function Com() {
  const [step, setStep] = useState(0);
  const [stacked, setStacked] = useState(0);

  const currentScreen = screens[step];

  const handleNext = () => {
    if (step === 0 && stacked < (currentScreen.stacked?.length ?? 0)) {
      setStacked((prev) => prev + 1);
    } else {
      setStep((prev) => prev + 1);
      setStacked(0);
    }
  };

  const isLastScreen = step === screens.length - 1 && stacked === 0;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-10">
        {currentScreen.content}
        {step === 0 && currentScreen.stacked && (
          <div>
            {currentScreen.stacked.slice(0, stacked).map((item) => item)}
          </div>
        )}
        <div className="flex justify-end mt-10">
          {!isLastScreen && (
            <button
              onClick={handleNext}
              className="px-8 py-3 rounded-xl font-bold shadow bg-blue-500 text-white text-xl hover:bg-blue-600"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
