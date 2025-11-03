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

import Activity2b from "../../Activity-2b/components/Com"; // Import the matching activity

export default function Com() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-8xl w-full bg-white shadow-2xl rounded-3xl flex flex-col items-center">
        {step === 0 && (
          <div className="mt-8 mb-6 text-left max-w-4xl">
            <h1 className="text-3xl font-bold text-purple-800 mt-8 mb-8">
              Networking for Entrepreneurs
            </h1>
            <p className="text-xl mb-6 text-gray-800">
              Entrepreneurs can benefit from networking and connecting with others at events, fiestas and exhibitions focussed around their business. They can meet:
            </p>
            <ul className="list-disc ml-8 text-lg mb-6 text-gray-700">
              <li>Buyers who can buy, give suggestions to improve the product.</li>
              <li>Mentors who can advise or even invest in your idea.</li>
              <li>Other businesses who can supply what you need or become bulk buyers of your product.</li>
            </ul>
            <button
              className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow-lg hover:bg-purple-700 text-xl"
              onClick={() => setStep(1)}
            >
              Next
            </button>
          </div>
        )}
        {step === 1 && (
          <div className="mt-8 mb-6 max-w-4xl">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">
              Put on your detective hats!
              <br />
              <br />
              Match the business owner with the customers or other business owners such that they benefit from networking.
            </h2>
            <button
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 text-xl"
              onClick={() => setStep(2)}
            >
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div className="w-full">
            {/* Render the matching activity from Activity-2b */}
            <Activity2b />
          </div>
        )}
      </div>
    </div>
  );
}