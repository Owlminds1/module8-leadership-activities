"use client";
import { useState } from "react";
import Image from "next/image";
import bikeImg from "../assets/s1.png"; 
import watchImg from "../assets/s2.png"; 

export default function Com() {
  const [step, setStep] = useState(0);

  const tips = [
    {
      title: "Know Your Budget",
      text: "Always decide the maximum you can spend before you start. This keeps you away from paying more than you can afford.",
    },
    {
      title: "Start Lower",
      text: "Don’t offer your maximum budget right away. Start with a smaller amount so you have space to move up if needed.",
    },
    {
      title: "Give Reasons",
      text: "Don’t just say a random number, explain why you want to pay less. Sellers listen more when you give a good reason.",
    },
    {
      title: "Ask for Extras",
      text: "If the seller won’t lower the price, ask for something extra (like a helmet or lock). It’s another smart way to make the deal better.",
    },
    {
      title: "Stay Polite",
      text: "Always be kind and respectful. Polite negotiators are more likely to get good deals than rude ones.",
    },
    {
      title: "Be Ready to Walk Away",
      text: "Sometimes the best choice is to leave if the price doesn’t fit. Walking away can even make the seller call you back with a lower price!",
    },
  ];

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-2xl w-full text-center">
        {/* Screen 1 */}
        {step === 0 && (
          <>
            <h2 className="text-3xl font-bold mb-6">Negotiation</h2>
            <p className="text-gray-700 text-lg mb-4">
              Negotiation happens when two people want to make a deal but have
              different ideas about the price.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              For example, when buying a bicycle, the seller wants a higher
              price, and the buyer wants to spend less.
            </p>
          </>
        )}

        {/* Negotiation Tips */}
        {step > 0 && step <= tips.length && (
          <>
            <h2 className="text-3xl font-bold mb-6">Thumb Rules of Negotiation</h2>
            {tips.slice(0, step).map((tip, i) => (
              <div
                key={i}
                className="text-left bg-gray-50 p-4 rounded-lg mb-4 shadow-sm"
              >
                <h3 className="font-semibold text-xl mb-1">{tip.title}</h3>
                <p className="text-gray-700 text-lg">{tip.text}</p>
              </div>
            ))}
          </>
        )}

        {/* Role-Play Round 1 */}
        {step === tips.length + 1 && (
          <>
            <h2 className="text-3xl font-bold mb-6">Role-Play Round 1</h2>
            <Image
              src={bikeImg}
              alt="Bicycle"
              width={320}
              height={220}
              className="mx-auto mb-4 rounded-lg"
            />
            <p className="text-gray-700 text-lg">
              Imagine you really want this brand-new bicycle. I’m the seller,
              and I say the bike costs <strong>$120</strong>. But your budget is
              only <strong>$90</strong>. You need to convince me to sell it to
              you for your budget or close to it. Remember the thumb rules while
              you negotiate.
            </p>
          </>
        )}

        {/* Role-Play Round 2 */}
        {step === tips.length + 2 && (
          <>
            <h2 className="text-3xl font-bold mb-6">Role-Play Round 2</h2>
            <Image
              src={watchImg}
              alt="Smartwatch"
              width={320}
              height={220}
              className="mx-auto mb-4 rounded-lg"
            />
            <p className="text-gray-700 text-lg">
              You are the seller, and I’m the buyer. You have a small gadget
              shop, and one of your most popular items is a smartwatch. The
              price of it is <strong>$50</strong>, and I only have{" "}
              <strong>$35</strong>. You need to decide if you’ll lower your
              price, give me extras, or stick to your price and explain why.
            </p>
          </>
        )}

        {/* Next Button */}
        {step < tips.length + 2 && (
          <button
            onClick={handleNext}
            className="mt-8 px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
