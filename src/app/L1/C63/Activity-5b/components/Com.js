"use client";
import { useState } from "react";

const slides = [
  {
    title: "Etiquettes of Elevator Pitch",
    content: (
      <>
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">1. Be Polite and Confident</h2>
        <ul className="list-disc ml-8 text-lg mb-6">
          <li>Start with a smile! Greet politely.</li>
          <li>Speak clearly and not too fast.</li>
          <li>Confidence shows that you believe in your idea.</li>
        </ul>
      </>
    ),
  },
  {
    content: (
      <>
        <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">2. Keep It Brief and Simple</h2>
        <p className="text-lg mb-6 text-center">You have less than a minute!</p>
      </>
    ),
  },
  {
    content: (
      <>
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">3. Use Positive Energy</h2>
        <p className="text-lg mb-6 text-center">Show enthusiasm! If you’re excited about your idea, others will be too.</p>
      </>
    ),
  },
  {
    content: (
      <>
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">4. Make Some Eye Contact</h2>
        <p className="text-lg mb-6 text-center">See the person when you speak as it shows confidence and respect.</p>
      </>
    ),
  },
  {
    content: (
      <>
        <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">5. Mind Your Body Language</h2>
        <ul className="list-disc ml-8 text-lg mb-6">
          <li>Stand tall, don’t slouch.</li>
          <li>Use small, natural hand gestures.</li>
          <li>Avoid fidgeting.</li>
        </ul>
      </>
    ),
  },
  {
    content: (
      <>
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">6. Don’t Memorize Like a Robot</h2>
        <p className="text-lg mb-6 text-center">
          Practice your pitch, but make it sound like you’re telling a story to a friend.
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">7. End with Gratitude</h2>
        <ul className="list-disc ml-8 text-lg mb-6">
          <li>Say “Thank you for listening!”</li>
          <li>You can add: “Would you like to know more?” or “Can I show you how it works?”</li>
        </ul>
      </>
    ),
  },
  {
    content: (
      <>
        <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Practice, Practice, Practice!</h2>
        <p className="text-lg mb-6 text-center">
          Rehearse your pitch with a parent, a teacher, or a friend. The more you practice, the more confident you’ll become!
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Record Your Pitch</h2>
        <p className="text-lg mb-6 text-center">
          <a
            href="https://module1-leadership-activities.vercel.app/L1/T/Activity-3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline font-semibold"
          >
            Click here to record your elevator pitch!
          </a>
        </p>
      </>
    ),
  },
];

export default function Com() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center">
        {step < slides.length - 1 && (
          <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">Etiquettes of Elevator Pitch</h1>
        )}
        {slides[step].content}
        {step < slides.length - 1 && (
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