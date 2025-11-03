"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";

export default function Com() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  const renderScreen = () => {
    switch (step) {
      case 0:
        return (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-6">Max is not the only one selling burgers in town. There are other shops too!</h1>
            <p className="text-lg mb-6">Let&apos;s check their prices:</p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <Image src={s1} alt="s1" width={300} height={300} />
                <p className="font-semibold mt-2 text-lg">Sunny&apos;s Snack Shack</p>
                <p className="text-green-600 font-bold">$8</p>
              </div>
              <div className="text-center">
                <Image src={s2} alt="s2" width={300} height={300} />
                <p className="font-semibold mt-2 text-lg">Penny&apos;s Patty Place</p>
                <p className="text-green-600 font-bold">$4</p>
              </div>
              <div className="text-center">
                <Image src={s3} alt="s3" width={300} height={300} />
                <p className="font-semibold mt-2 text-lg">Bobby&apos;s Burger Barn</p>
                <p className="text-green-600 font-bold">$7</p>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Price Dilemma</h2>
            <p className="text-lg mb-4">If Max sets his burger price too high, people might think it’s too expensive and prefer other shops.</p>
            <p className="text-lg">If Max sets his price too low, he will lose money.</p>
          </div>
        );

      case 2:
        return (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-6">Which store do you think will have the highest number of visitors?</h2>
          </div>
        );

      case 3:
        return (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-6">Which store do you think will have the highest number of visitors?</h2>
            <div className="bg-green-100 p-4 rounded-lg">
              <div className="flex justify-center mb-4">
                <Image src={s2} alt="s2" width={300} height={300} />
              </div>
              <p className="text-lg font-semibold text-green-800">Penny’s Patty Place  because it is least expensive</p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-6">Which store makes the highest profit per burger?</h2>
          </div>
        );

      case 5:
        return (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-6">Which store makes the highest profit per burger?</h2>
            <div className="bg-green-100 p-4 rounded-lg">
              <div className="flex justify-center mb-4">
                <Image src={s1} alt="s1" width={300} height={300} />
              </div>
              <p className="text-lg font-semibold text-green-800">Sunny’s Snack Shack. His burgers have same ingredients as Max and yet he sells it at $8, making a profit of $3 for each burger.</p>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-6">Would you pick a price that gets more people to buy?</h2>
            <h2 className="text-xl font-bold mb-6">OR</h2>
            <h2 className="text-xl font-bold mb-6">A price that gives you more profit per burger? Why?</h2>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-6">
      <div className="max-w-6xl bg-white shadow-lg rounded-2xl p-8">
        {renderScreen()}

        {step < 6 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={nextStep}
              className="px-8 py-3 bg-yellow-500 text-white font-semibold rounded-xl shadow hover:bg-yellow-600 transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}