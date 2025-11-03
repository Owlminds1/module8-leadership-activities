"use client";
import jsPDF from "jspdf";
import { useState } from "react";

export default function Com() {
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Elevator Pitch", 20, 20);
    doc.setFontSize(12);
    doc.text("1. Start with your name and idea:", 20, 35);
    doc.text(inputs.nameIdea || "-", 20, 42);
    doc.text("2. Explain what your idea does:", 20, 55);
    doc.text(inputs.whatDoes || "-", 20, 62);
    doc.text("3. State the problem:", 20, 75);
    doc.text(inputs.problem || "-", 20, 82);
    doc.text("4. Show your solution:", 20, 95);
    doc.text(inputs.solution || "-", 20, 102);
    doc.text("5. End with the benefit or goal and what you seek:", 20, 115);
    doc.text(inputs.benefit || "-", 20, 122);
    doc.save("elevator-pitch.pdf");
  };
  const [step, setStep] = useState(0);
  const [inputs, setInputs] = useState({
    nameIdea: "",
    whatDoes: "",
    problem: "",
    solution: "",
    benefit: "",
  });

  const handleChange = (field, value) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center">
        {/* Slide 1 */}
        {step === 0 && (
          <>
            <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">
              What is an elevator pitch?
            </h1>
            <button
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 text-xl"
              onClick={() => setStep(1)}
            >
              Next
            </button>
          </>
        )}
        {/* Slide 2 */}
        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
              An elevator pitch is a concise way to share your idea in the same amount of time it takes to use an elevator (about 30 seconds)!
              <br />
              <br />
              It’s like giving someone a glimpse of your idea to make them want to know more.
            </h2>
            <button
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 text-xl"
              onClick={() => setStep(2)}
            >
              Next
            </button>
          </>
        )}
        {/* Slide 3 */}
        {step === 2 && (
          <>
            <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center italic">Example:</h2>
            <div className="bg-blue-50 rounded-lg p-4 mb-6 text-xl text-gray-800">
              Hi, I’m Joe and my business is Sock Star. We design fun, colorful socks with emojis, cartoons and grip. Everyone wears socks — so why not make them exciting? We sell them at school fairs and take bulk orders for sports teams. They’re affordable, comfortable, and make people stand out! I want to set up an online store!
            </div>
            <button
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 text-xl"
              onClick={() => setStep(3)}
            >
              Next
            </button>
          </>
        )}
        {/* Slide 4 */}
        {step === 3 && (
          <>
            <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center italic">Example:</h2>
            <div className="bg-purple-50 rounded-lg p-4 mb-6 text-xl text-gray-800">
              I’m Eva, and my idea is Balloon Magic. We decorate birthday parties and school events with colorful balloons — arches, photo walls, and even glowing balloon designs! We use biodegradable balloons to protect the environment. Everyone loves parties, and we make them extra special. I want to set up a Balloon art shop.
            </div>
            <button
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 text-xl"
              onClick={() => setStep(4)}
            >
              Next
            </button>
          </>
        )}
        {/* Slide 5: Create Elevator Pitch */}
        {step === 4 && (
          <div className="w-full">
            <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
              Create an elevator pitch for your business idea
            </h2>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">
                1. Start with your name and idea
                <span className="block text-gray-600 font-normal text-base italic">
                  “Hi! I’m [Name], and my idea is [Business Name].”
                </span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-400 rounded-lg px-4 py-3 text-lg mb-2"
                placeholder="Write your sentence..."
                value={inputs.nameIdea}
                onChange={(e) => handleChange("nameIdea", e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">
                2. Explain what your idea does
                <span className="block text-gray-600 font-normal text-base italic">
                  “We make/sell/do [what your business offers].”
                </span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-400 rounded-lg px-4 py-3 text-lg mb-2"
                placeholder="Write your sentence..."
                value={inputs.whatDoes}
                onChange={(e) => handleChange("whatDoes", e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">
                3. State the problem
                <span className="block text-gray-600 font-normal text-base italic">
                  “Many people face [the problem].”
                </span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-400 rounded-lg px-4 py-3 text-lg mb-2"
                placeholder="Write your sentence..."
                value={inputs.problem}
                onChange={(e) => handleChange("problem", e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">
                4. Show your solution
                <span className="block text-gray-600 font-normal text-base italic">
                  “Our product helps by [how it solves the problem].”
                </span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-400 rounded-lg px-4 py-3 text-lg mb-2"
                placeholder="Write your sentence..."
                value={inputs.solution}
                onChange={(e) => handleChange("solution", e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">
                5. End with the benefit or goal and what you seek
                <span className="block text-gray-600 font-normal text-base italic">
                  “Our goal is to [positive impact / reason it matters].”<br />
                  “I want to [action that will follow soon].”
                </span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-400 rounded-lg px-4 py-3 text-lg mb-2"
                placeholder="Write your sentence..."
                value={inputs.benefit}
                onChange={(e) => handleChange("benefit", e.target.value)}
              />
            </div>
            <button
              className="px-8 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 text-xl mt-4"
              onClick={downloadPDF}
            >
              Submit
            </button>
          </div>
        )}
        
      </div>
    </div>
  );
}