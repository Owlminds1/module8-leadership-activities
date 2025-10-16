"use client";
import Image from "next/image";
import s1 from "../assets/s1.png";

export default function Com() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8 text-left">

        <div className="space-y-6">

          <p className="text-xl leading-relaxed mb-8">
            Now Leo has learned how to start a business. He has decided to sell friendship bands, bag tags, and keychains at a school fair. He wants to check if people like his products, but he is unsure about:
          </p>


          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <ul className="list-disc list-inside space-y-4">
              <li className="text-xl leading-relaxed flex items-start">
                <span className="text-yellow-600 font-bold mr-3">1.</span>
                <span>What quantity should he prepare for a week?</span>
              </li>
              <li className="text-xl leading-relaxed flex items-start">
                <span className="text-yellow-600 font-bold mr-3">2.</span>
                <span>How much money will he require to start?</span>
              </li>
              <li className="text-xl leading-relaxed flex items-start">
                <span className="text-yellow-600 font-bold mr-3">3.</span>
                <span>How much should he charge for each product to make a profit?</span>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="flex justify-start mb-6">
              <Image src={s1} alt="Leo planning his business" width={400} height={400} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}