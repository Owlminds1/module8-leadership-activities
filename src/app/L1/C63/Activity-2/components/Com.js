"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";

const screens = [
  {
    content: (
      <div>
        <p className="text-xl mb-4">
          To remain in business, you have to remain up to date with market situations. You should know what your buyers like, when they are likely to make purchases.
        </p>
        <p className="text-xl mb-4">
          How can you estimate <span className="font-semibold">[guess]</span> the number of buyers or users? Will these numbers grow every month?
        </p>
        <p className="text-xl mb-4">
          Are there special weeks or months when the demand of your product or service can suddenly <span className="font-semibold">spike [increase]</span>?
        </p>
      </div>
    ),
    reveal: (
      <div>
        <p className="text-xl mb-4">
          For example, at the start of the month, when everyone gets their pocket expenses, buyers are more likely to make a purchase.
        </p>
        <p className="text-xl mb-4">
          Are there weeks or months when the demand of your product or service might suddenly spike [increase]?
        </p>
      </div>
    ),
  },
  {
    content: (
      <div>
        <p className="text-xl mb-4">
          If your product is likely to be used during festivals or vacations, then the sale peaks around that time.
        </p>
        <p className="text-xl mb-4">
          As the numbers of users increase and decrease, the business will continue to grow or not.
        </p>
        <p className="text-xl mb-4">
          Let’s see how we can represent this with an image.
        </p>
      </div>
    ),
  },
  {
    content: (
      <div>
        <p className="text-2xl font-bold mb-4">Here is a record of the number of users every week.</p>
        <Image src={s1} alt="Weekly Users" width={600} className="rounded-xl shadow mb-4" />
      </div>
    ),
  },
  {
    content: (
      <div className="flex flex-col items-center justify-center w-full">
        <p className="text-2xl font-bold mb-4 text-center">Which week has the highest number of users or buyers?</p>
        <Image src={s1} alt="Weekly Users" width={600} className="rounded-xl shadow mb-4" />
      </div>
    ),
    reveal: (
      <div>
        <p className="text-xl font-semibold text-green-700 text-center">Week 1</p>
      </div>
    ),
  },
  {
    content: (
      <div>
        <p className="text-2xl mb-4 font-bold">Which week has the least number of users or buyers?</p>
        <Image src={s1} alt="Weekly Users" width={600} className="rounded-xl shadow mb-4" />
      </div>
    ),
    reveal: (
      <div>
        <p className="text-xl font-semibold text-red-700 text-center">Week 3</p>
      </div>
    ),
  },
  {
    content: (
      <div className="flex flex-col items-center justify-center w-full">
        <p className="text-2xl font-bold mb-4 text-center">What business decision will you take to increase the number of users or buyers in the week that’s slow?</p>
        <Image src={s1} alt="Weekly Users" width={600} className="rounded-xl shadow mb-4" />
      </div>
    ),
    reveal: (
      <div>
        <p className="text-xl font-semibold text-blue-700 text-center">Offer discounts, coupons.</p>
      </div>
    ),
  },
  {
    content: (
      <div>
        <p className="text-2xl font-bold mb-4">Here is a record of earnings every week</p>
        <Image src={s2} alt="Weekly Earnings" width={600} className="rounded-xl shadow mb-4" />
      </div>
    ),
  },
  {
    content: (
      <div>
        <p className="text-2xl font-bold mb-4">Which month has the highest earnings?</p>
        <Image src={s2} alt="Monthly Earnings" width={600} className="rounded-xl shadow mb-4" />
      </div>
    ),
    reveal: (
      <div>
        <p className="text-xl font-semibold text-green-700 text-center">Suggested response: Month 4</p>
      </div>
    ),
  },
  {
    content: (
      <div>
        <p className="text-2xl font-bold mb-4">Which month has the lowest earnings?</p>
        <Image src={s2} alt="Monthly Earnings" width={600} className="rounded-xl shadow mb-4" />
      </div>
    ),
    reveal: (
      <div>
        <p className="text-xl font-semibold text-red-700 text-center">Suggested response: Month 1</p>
      </div>
    ),
  },
  {
    content: (
      <div className="flex flex-col items-center justify-center w-full">
        <p className="text-2xl font-bold mb-4 text-center">What business decision will you take to increase your earnings in the month with the lowest earnings?</p>
        <Image src={s2} alt="Weekly Users" width={600} className="rounded-xl shadow mb-4" />
      </div>
    ),
    reveal: (
      <div>
        <p className="text-xl font-semibold text-blue-700 text-center">Suggested response: Bundle sales, discounts</p>
      </div>
    ),
  },
  {
    content: (
      <div>
        <p className="text-xl mb-4 font-semibold text-green-700">
          Wow, that’s a creative idea! Let’s add this to our business plan.
        </p>
        <p className="text-xl mb-2 font-bold">Business Plan</p>
        <p className="text-lg mb-2">
          A business plan is like a roadmap. It helps us to think and explain the product in a better way. Even big companies make business plans before launching something new!
        </p>
      </div>
    ),
  },
  {
    content: (
      <div className="w-full flex flex-col items-start justify-start">
        <p className="text-xl mb-4 font-bold">Making a business plan can allow us to:</p>
        <ul className="list-disc ml-8 text-lg mb-4">
          <li>Understand what we are creating.</li>
          <li>Decide who will use it.</li>
          <li>Think about how it will help people.</li>
          <li>Know what we need to make it work.</li>
        </ul>
      </div>
    ),
  },
];

export default function Com() {
  const [screen, setScreen] = useState(0);
  const [showReveal, setShowReveal] = useState(false);

  const current = screens[screen];

  const handleNext = () => {
    if (current.reveal && !showReveal) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
      setScreen((prev) => Math.min(prev + 1, screens.length - 1));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center">
        {current.content}
        {showReveal && current.reveal && (
          <div className="mt-6 w-full">{current.reveal}</div>
        )}
        {screen < screens.length - 1 && (
          <button
            onClick={handleNext}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105 text-xl mt-8"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}