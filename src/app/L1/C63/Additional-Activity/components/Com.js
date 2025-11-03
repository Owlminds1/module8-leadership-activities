"use client";
import { useState } from "react";
import VideoRec from "./videoRec";

export default function Com() {
  const [step, setStep] = useState(0);
  const [inputs, setInputs] = useState({
    hook: "",
    pitch: "",
    action: "",
  });

  const handleChange = (field, value) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-yellow-50 p-6">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Make a reel for your business
        </h1>
        {/* Step 1: Hook */}
        {step === 0 && (
          <div className="w-full">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">1. Establish a hook (beginning)</h2>
            <p className="text-lg mb-2">
              <span className="font-semibold">Goal:</span> Grab attention in the first 2–3 seconds!
            </p>
            <p className="text-lg mb-2">
              Tell or show something exciting that makes people want to watch more.
            </p>
            <p className="text-base italic mb-4">
              Example: “It’s so hot outside! I have the coolest drink ever!”
            </p>
            <input
              type="text"
              className="w-full border border-gray-400 rounded-lg px-4 py-3 text-lg mb-4"
              placeholder="Write your hook..."
              value={inputs.hook}
              onChange={(e) => handleChange("hook", e.target.value)}
            />
            <button
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 text-xl"
              onClick={() => setStep(1)}
            >
              Next
            </button>
          </div>
        )}
        {/* Step 2: Persuasive Pitch */}
        {step === 1 && (
          <div className="w-full">
            <h2 className="text-2xl font-bold text-green-700 mb-4">2. Persuasive Pitch (Middle)</h2>
            <p className="text-lg mb-2">
              <span className="font-semibold">Goal:</span> Tell your audience why your idea or product is awesome.
            </p>
            <p className="text-lg mb-2">
              Use short, clear sentences that explain the benefit.
            </p>
            <p className="text-base italic mb-4">
              Example: “It’s made with real lemons and no artificial sugar.”
            </p>
            <input
              type="text"
              className="w-full border border-gray-400 rounded-lg px-4 py-3 text-lg mb-4"
              placeholder="Write your pitch..."
              value={inputs.pitch}
              onChange={(e) => handleChange("pitch", e.target.value)}
            />
            <button
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 text-xl"
              onClick={() => setStep(2)}
            >
              Next
            </button>
          </div>
        )}
        {/* Step 3: Call to Action */}
        {step === 2 && (
          <div className="w-full">
            <h2 className="text-2xl font-bold text-yellow-700 mb-4">3. Call to Action (End)</h2>
            <p className="text-lg mb-2">
              <span className="font-semibold">Goal:</span> Tell people what to do next!
            </p>
            <p className="text-base italic mb-4">
              Example: “Come try my lemonade today!”
            </p>
            <input
              type="text"
              className="w-full border border-gray-400 rounded-lg px-4 py-3 text-lg mb-4"
              placeholder="Write your call to action..."
              value={inputs.action}
              onChange={(e) => handleChange("action", e.target.value)}
            />
            <button
              className="px-8 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 text-xl"
              onClick={() => setStep(3)}
            >
              Next
            </button>
          </div>
        )}
        {/* Step 4: Recording Link */}
        {step === 3 && (
          <div className="w-full flex flex-col items-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Your Reel Script</h2>
            <div className="bg-blue-50 rounded-lg p-6 mb-6 w-full text-lg text-gray-800">
              <p className="mb-2">{inputs.hook}</p>
              <p className="mb-2">{inputs.pitch}</p>
              <p className="mb-2">{inputs.action}</p>
            </div>
            <VideoRec />
            
          </div>
        )}
      </div>
    </div>
  );
}