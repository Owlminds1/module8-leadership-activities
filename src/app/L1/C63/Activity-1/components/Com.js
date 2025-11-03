"use client";
import { useState } from "react";
import jsPDF from "jspdf";

// For PDF download
const downloadPDF = (answers) => {
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text("Business Idea Worksheet", 20, 20);

  doc.setFontSize(12);
  doc.text(`1. What’s my business idea? What will I sell and why?`, 20, 35);
  doc.text(answers.idea || "-", 20, 42);

  doc.text(`2. My product/service: Describe the product/service`, 20, 55);
  doc.text(answers.description || "-", 20, 62);

  doc.text(`3. What makes my product/service unique? Why will others buy or use it?`, 20, 75);
  doc.text(answers.unique || "-", 20, 82);

  doc.text(`4. Who will buy it? Who are the users? Estimate how many buyers or users you will have per month`, 20, 95);
  doc.text(answers.buyers || "-", 20, 102);

  doc.text(`5. How much can I charge for this product or service? Estimate the cost incurred in creating the product or service by studying market competition`, 20, 115);
  doc.text(answers.price || "-", 20, 122);

  doc.save("business-idea.pdf");
};

export default function Com() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    idea: "",
    description: "",
    unique: "",
    buyers: "",
    price: "",
  });

  const handleChange = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center">
        {/* Screen 1 */}
        {step === 0 && (
          <>
            <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">
              How can you turn this into a business idea?
            </h1>
            <p className="text-xl mb-10 text-gray-800 text-center">
              You see that anything can be turned into a business idea. You only need the right mindset and zeal to see things through.
            </p>
            <button
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 text-xl"
              onClick={() => setStep(1)}
            >
              Next
            </button>
          </>
        )}

        {/* Screen 2 */}
        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
              Is there any product idea that inspires you?
            </h2>
            <p className="text-lg mb-4 text-gray-700 text-center">
              It can be a product such as a tag or a sound book. It can even be a service like assistance to complete school projects.
            </p>
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <span className="font-semibold text-blue-700">Example:</span> Lea has this idea of a cool, robot friend who can talk, learn, and even play games! She pitches the robot as a companion that reminds Lea of important tasks.
            </div>
            <button
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 text-xl"
              onClick={() => setStep(2)}
            >
              Next
            </button>
          </>
        )}

        {/* Screen 3 */}
        {step === 2 && (
          <>
            <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
              What’s your big idea?
            </h2>
            <p className="text-lg mb-4 text-gray-700 text-center">
              Let’s apply the business plan template to create a plan for your product or service.
            </p>
            <button
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 text-xl"
              onClick={() => setStep(3)}
            >
              Next
            </button>
          </>
        )}

        {/* Business Plan Questions */}
        {step >= 3 && (
          <div className="w-full">
            {/* Q1 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                What’s my business idea? What will I sell and why?
              </h3>
              <input
                type="text"
                className="w-full border border-gray-400 rounded-lg px-4 py-3 text-lg mb-2"
                placeholder="Describe your business idea..."
                value={answers.idea}
                onChange={(e) => handleChange("idea", e.target.value)}
              />
            </div>
            {/* Q2 */}
            {step >= 4 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  My product/service: Describe the product/service
                </h3>
                <input
                  type="text"
                  className="w-full border border-gray-400 rounded-lg px-4 py-3 text-lg mb-2"
                  placeholder="Describe your product or service..."
                  value={answers.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                />
              </div>
            )}
            {/* Q3 */}
            {step >= 5 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  What makes my product/service unique? Why will others buy or use it?
                </h3>
                <input
                  type="text"
                  className="w-full border border-gray-400 rounded-lg px-4 py-3 text-lg mb-2"
                  placeholder="What makes it unique?"
                  value={answers.unique}
                  onChange={(e) => handleChange("unique", e.target.value)}
                />
              </div>
            )}
            {/* Q4 */}
            {step >= 6 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  Who will buy it? Who are the users? Estimate how many buyers or users you will have per month
                </h3>
                <input
                  type="text"
                  className="w-full border border-gray-400 rounded-lg px-4 py-3 text-lg mb-2"
                  placeholder="Who are your buyers/users?"
                  value={answers.buyers}
                  onChange={(e) => handleChange("buyers", e.target.value)}
                />
              </div>
            )}
            {/* Q5 */}
            {step >= 7 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  How much can I charge for this product or service? Estimate the cost incurred in creating the product or service by studying market competition
                </h3>
                <input
                  type="text"
                  className="w-full border border-gray-400 rounded-lg px-4 py-3 text-lg mb-2"
                  placeholder="How much will you charge?"
                  value={answers.price}
                  onChange={(e) => handleChange("price", e.target.value)}
                />
              </div>
            )}

            {/* Next/Submit Buttons */}
            {step < 7 ? (
              <button
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 text-xl"
                onClick={() => setStep(step + 1)}
              >
                Next
              </button>
            ) : (
              <button
                className="px-8 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 text-xl"
                onClick={() => downloadPDF(answers)}
              >
                Submit
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}