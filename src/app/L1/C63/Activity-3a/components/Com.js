"use client";
import { useState } from "react";

export default function Com() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center">
        {/* Screen 1 */}
        <p className="text-2xl font-bold mb-6 text-center">
          To increase the number of buyers and boost sales, businesses have to innovate. They launch new products, add features to existing products or change the business model.
        </p>
        {/* Screen 2 */}
        {step >= 1 && (
          <div className="w-full">
            <p className="text-xl mb-6 text-blue-800 text-center">
              Example: Mia is in the business of selling customised t-shirts, but her sales are not increasing! She decides to have a series of Glow-in-the-dark T-shirts.
            </p>
          </div>
        )}
        {/* Screen 3 */}
        {step >= 2 && (
          <div className="w-full">
            <p className="text-xl mb-6 text-green-700 text-center">
              Of course, simply coming up with the idea is not enough! You have to convince your investors and/or managing board that your idea will work and it will boost sales. You have to create a business innovation proposal.
            </p>
          </div>
        )}
        {/* Next Button */}
        {step < 2 && (
          <button
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 text-xl mt-4"
            onClick={() => setStep(step + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}