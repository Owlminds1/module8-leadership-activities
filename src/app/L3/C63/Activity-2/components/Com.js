"use client";
import { useState } from "react";
import Activity2 from "../../Activity-2b/components/Com";

export default function Com() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  const renderScreen = () => {
    return (
      <div className="w-full text-center">
        {step === 0 && (
          <div className="space-y-8">
            <p className="text-2xl text-gray-800 font-semibold bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg text-center">
              Aaron met diverse people at the Creative Market: customers, assistants, and friends who gave advice. Such connections helped him sell more cars and discover new opportunities.
            </p>
          </div>
        )}
        {step === 1 && (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-blue-800 mb-4 text-center">Now it’s your turn!</h1>
            <p className="text-xl text-gray-700 text-center">You’re going to become a Networking Detective to figure out who should connect with whom at the Creative Market.</p>
            <p className="text-xl text-gray-700 text-center">But this time the Creative Market has gotten even bigger! Now it’s not just about individual connections, but about a network of connections.</p>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-blue-800 mb-4 text-center">Networking helps businesses grow:</h1>
            <p className="text-xl text-gray-800 text-center">One business can become a supplier for another business</p>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg text-center">
              <h2 className="text-xl font-bold text-green-800 mb-2 text-center">Example:</h2>
              <p className="text-xl text-gray-700 text-center">A business sells flour, sugar, and eggs. These ingredients become the raw materials for another business that makes cupcakes. Those cupcakes aren’t just tasty treats, but they become an important item for a party planner’s event.</p>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-blue-800 mb-4 text-center">One business sells products of another business too as the extra product goes well together with the main product.</h1>
            <p className="text-xl text-gray-800 text-center">This is called cross-selling. It is like saying, “Since you’re buying this, you might also like that!”</p>
          </div>
        )}
        {step === 4 && (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-blue-800 mb-4 text-center">One business sells products of another business too as the extra product goes well together with the main product.</h1>
            <p className="text-xl text-gray-800 text-center">This is called cross-selling. It is like saying, “Since you’re buying this, you might also like that!”</p>
            <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-8 rounded-2xl shadow-lg text-center">
              <h2 className="text-xl font-bold text-orange-800 mb-2 text-center">Example:</h2>
              <p className="text-xl text-gray-700 text-center">A toy shop sells comic books. If they also display slime kits next to the comics, kids who buy the comics might also buy the slime. This way, a product helps sell another!</p>
              <p className="text-xl text-gray-700 mt-4 text-center">It’s like a chain reaction, when businesses connect, they don’t just trade; they build each other up!</p>
            </div>
          </div>
        )}
        {step === 5 && (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-purple-800 mb-4 text-center">Now put on your Master Detective Hats!</h1>
            <p className="text-xl text-gray-700 text-center">You’ll figure out who should connect with whom</p>
            <p className="text-xl text-gray-700 text-center">This time, each person might connect to more than a business or a customer</p>
            <p className="text-xl text-gray-700 text-center">The connections would allow space to create exciting opportunities for networking and cross-selling.</p>
          </div>
        )}
        {step === 6 && (
          <div className="space-y-8 text-center">
            <Activity2 />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-8xl w-full p-2 flex flex-col items-center bg-white text-center">
        {renderScreen()}
        {step < 6 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={nextStep}
              className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}