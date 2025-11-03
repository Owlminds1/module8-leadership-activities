"use client";
import React, { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";

const screens = [
  {
    id: 0,
    title: "Business Models",
    main: (
      <div key="main-0">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Subscription</h2>
        <p className="text-xl mb-4">
          A subscription is when a customer pays a fixed amount regularly to get
          a product on a regular basis over time.
        </p>
      </div>
    ),
    stacked: [
      <div key="stack-0-1">
        <h3 className="text-2xl font-semibold text-blue-600 mb-2">Examples</h3>
        <ul className="list-disc list-inside text-lg mb-4 ml-6">
          <li>
            Get an annual subscription to Amazon Prime and get free delivery for
            a year.
          </li>
          <li>
            Subscribe to YouTube Premium and watch ad free.
          </li>
          <li>
            Get cloud storage space and use that space for that duration.
          </li>
        </ul>
        <div className="flex justify-center">
          <Image
            src={s1}
            alt="Subscription Example"
            width={350}
            height={350}
            className="rounded-xl"
          />
        </div>
      </div>,
    ],
  },
  {
    id: 1,
    title: "Business Models",
    main: (
      <div key="main-1">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">
          Freemium Model
        </h2>
        <p className="text-xl mb-4">
          Many online platforms offer a basic version for free, but charge for
          full access and/or additional features such as no ads. This way, the
          company attracts lots of users. In some cases, they take the payment
          details upfront. As users continue to use the product, all it takes is
          a single click to upgrade!
          <br />
          <br />
          Think of it like playing a mobile game. You can play for free, but to
          get special powers or skip waiting times, you need to buy the premium
          version.
        </p>
      </div>
    ),
    stacked: [
      <div key="stack-1-1">
        <h3 className="text-2xl font-semibold text-purple-600 mb-2">
          Examples
        </h3>
        <ul className="list-disc list-inside text-lg mb-4 ml-6">
          <li>
            Watch a match for free. The first 20 mins are free! Upgrade to
            continue watching.
          </li>
          <li>Get 5 worksheets for free. Upgrade to continue learning!</li>
        </ul>
      </div>,
    ],
  },
  {
    id: 2,
    title: "Business Models",
    main: (
      <div key="main-2">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Discount Pricing
        </h2>
        <p className="text-xl mb-4">
          Some sellers offer combo deals or discounts such as ‘Buy 1, Get 1
          Free’ or ‘Buy 2, Get 1 Free’. These deals make customers feel like
          they’re getting more value for less money. They end up buying more
          than they initially planned, so the shop owner earns more overall.
        </p>
      </div>
    ),
    stacked: [
      <div key="stack-2-1">
        <h3 className="text-2xl font-semibold text-green-600 mb-2">
          Examples
        </h3>
        <ul className="list-disc list-inside text-lg mb-4 ml-6">
          <li>Wednesday special - pay for 1, get 2</li>
          <li>
            Shop for Rs. 1000/- and get a gift card of Rs. 200/-. Use this card
            for your next purchase.
          </li>
        </ul>
      </div>,
    ],
  },
  {
    id: 3,
    title: "Business Models",
    main: (
      <div key="main-3">
        <h2 className="text-3xl font-bold text-pink-700 mb-4">
          Premium Pricing
        </h2>
        <p className="text-xl mb-4">
          Premium pricing means selling something at a higher price because it’s
          seen as special, better, or luxurious. The high price makes the
          product feel exclusive and high-quality.
        </p>
      </div>
    ),
    stacked: [
      <div key="stack-3-1">
        <h3 className="text-2xl font-semibold text-pink-600 mb-2">
          Examples
        </h3>
        <ul className="list-disc list-inside text-lg mb-4 ml-6">
          <li>
            Nike’s Jordan shoes, Apple’s iPhone and Starbucks coffee — use
            premium pricing because their brand feels high-end. They charge
            higher prices to show higher quality, exclusivity, and luxury.
          </li>
        </ul>
        <div className="flex justify-center">
          <Image
            src={s2}
            alt="Premium Pricing Example"
            width={350}
            height={350}
            className="rounded-xl"
          />
        </div>
      </div>,
    ],
  },
];

export default function Com() {
  const [step, setStep] = useState(0);
  const [stacked, setStacked] = useState(0);

  const currentScreen = screens[step];

  const handleNext = () => {
    if (stacked < currentScreen.stacked?.length) {
      setStacked(stacked + 1);
    } else {
      setStep(step + 1);
      setStacked(0);
    }
  };

  const isLastScreen =
    step === screens.length - 1 && stacked === currentScreen.stacked?.length;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-10">
        <h1 className="text-3xl font-bold mb-8 text-blue-700 text-center">
          {currentScreen.title}
        </h1>
        {currentScreen.main}
        {currentScreen.stacked && (
          <div>
            {currentScreen.stacked.slice(0, stacked).map((item, idx) =>
              React.isValidElement(item)
                ? React.cloneElement(item, { key: `${step}-${idx}` })
                : (
                  <div key={`${step}-${idx}`}>{item}</div>
                )
            )}
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
