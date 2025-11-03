"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";

export default function Com() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  const characters = [
    {
      name: "Leena",
      text: "runs a DIY Gadget Stand. She tells Aaron: \"I sell more when I bundle gadgets together. Maybe you can bundle your mini cars with small solar kits too!\"",
      image: s2
    },
    {
      name: "Rohan",
      text: "loves science and gadgets. He's super excited and becomes Aaron's first customer, buying a solar-powered mini car and giving him feedback.",
      image: s3
    },
    {
      name: "Priya",
      text: "manages an online maker's community. She says: \"Join our group and share your ideas. You'll get advice from other young inventors and find more customers.\"",
      image: s4
    },
    {
      name: "Rahul",
      text: "a student who loves robotics. He notices Aaron's cars and suggests: \"If we combine your solar cars with my programmable tracks, we can create a mini race game. More kids will come and play!\"",
      image: s5
    }
  ];

  const renderScreen = () => {
    switch (step) {
      case 0:
        return (
          <div className="text-center max-w-5xl mx-auto">
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>Aaron loves building solar-powered mini cars, and tiny, eco-friendly cars that run using sunlight. He dreams of sharing his creations with more kids and showing how useful solar energy can be!</p>
              <p>Aaron decides to visit the Creative Market, a bustling place where young creators sell their unique products and share ideas.</p>
              <p>At the market, Aaron sees colorful stands bustling with toys, gadgets, food, crafts, and innovative projects.</p>
            </div>
            <div className="mt-8">
              <Image src={s1} alt="Creative Market" width={500} height={300} className="mx-auto rounded-2xl shadow-lg" />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-8">
              Aaron meets many people at the Creative Market:
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <Image src={characters[0].image} alt={characters[0].name} width={250} className="rounded-lg" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{characters[0].name}:</h3>
                  <p className="text-gray-700">{characters[0].text}</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-8">
              Aaron meets many people at the Creative Market:
            </h2>
            <div className="space-y-6">
              {characters.slice(0, 2).map((character, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-6">
                    <div className="flex-shrink-0">
                      <Image src={character.image} alt={character.name} width={250} className="rounded-lg" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-blue-800 mb-2">{character.name}:</h3>
                      <p className="text-gray-700">{character.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-8">
              Aaron meets many people at the Creative Market:
            </h2>
            <div className="space-y-6">
              {characters.slice(0, 3).map((character, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-6">
                    <div className="flex-shrink-0">
                      <Image src={character.image} alt={character.name} width={250} className="rounded-lg" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-blue-800 mb-2">{character.name}:</h3>
                      <p className="text-gray-700">{character.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-8">
              Aaron meets many people at the Creative Market:
            </h2>
            <div className="space-y-6">
              {characters.map((character, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-6">
                    <div className="flex-shrink-0">
                      <Image src={character.image} alt={character.name} width={250} className="rounded-lg" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-blue-800 mb-2">{character.name}:</h3>
                      <p className="text-gray-700">{character.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-2xl text-gray-700 leading-relaxed">
              By the end of the day, Aaron is thrilled! He didn&apos;t just sell his cars, he:
            </p>
            <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg text-left">
              <ul className="space-y-4 text-lg text-gray-700">
                <li>• Made new friends</li>
                <li>• Found his first customers</li>
                <li>• Learned tips to sell better</li>
                <li>• Discovered opportunities to collaborate</li>
              </ul>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-800 mb-8">
              Who became Aaron&apos;s first customer at the Creative Market?
            </h2>
          </div>
        );

      case 7:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-800 mb-8">
              Who became Aaron&apos;s first customer at the Creative Market?
            </h2>
            <div className="bg-green-100 p-8 rounded-2xl shadow-lg">
              <p className="text-2xl text-green-800 font-semibold">
                Rohan bought his solar-powered mini car.
              </p>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-8">
              How did Tina, the refreshment seller, give Aaron an opportunity?
            </h2>
          </div>
        );

      case 9:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-8">
              How did Tina, the refreshment seller, give Aaron an opportunity?
            </h2>
            <div className="bg-blue-100 p-8 rounded-2xl shadow-lg">
              <p className="text-2xl text-blue-800 font-semibold">
                She offered space near her stand so kids can buy cars and smoothies.
              </p>
            </div>
          </div>
        );

      case 10:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-indigo-800 mb-8">
              What opportunity did Priya share with Aaron?
            </h2>
          </div>
        );

      case 11:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-indigo-800 mb-8">
              What opportunity did Priya share with Aaron?
            </h2>
            <div className="bg-purple-100 p-8 rounded-2xl shadow-lg">
              <p className="text-2xl text-purple-800 font-semibold">
                She invited him to join an online community to learn ideas and reach more customers.
              </p>
            </div>
          </div>
        );

      case 12:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-8">
              How did Rahul help Aaron discover collaboration opportunities?
            </h2>
          </div>
        );

      case 13:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-8">
              How did Rahul help Aaron discover collaboration opportunities?
            </h2>
            <div className="bg-yellow-100 p-8 rounded-2xl shadow-lg">
              <p className="text-2xl text-yellow-800 font-semibold">
                By suggesting how to combine solar cars with programmable tracks for a mini race game.
              </p>
            </div>
          </div>
        );

      case 14:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-8">
              What lesson did Aaron learn from visiting the Creative Market?
            </h2>
          </div>
        );

      case 15:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-8">
              What lesson did Aaron learn from visiting the Creative Market?
            </h2>
            <div className="bg-yellow-100 p-8 rounded-2xl shadow-lg">
              <p className="text-2xl text-yellow-800 font-semibold">
                Networking helps find customers, gain advice, and discover new opportunities for growth.
              </p>
            </div>
          </div>
        );

      case 16:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-2xl text-gray-700 leading-relaxed">
              Just like Aaron at the Creative Market, in real life people who run a business or even a small shop, need to meet others to advance their work. This is called networking.
            </p>
          </div>
        );

      case 17:
        return (
          <div className="text-center max-w-5xl mx-auto">
            <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
              How does networking help?
            </p>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-100 p-8 rounded-2xl shadow-lg text-left">
              <h3 className="text-2xl font-bold text-indigo-800 mb-6">Networking is important because:</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li>• We can find customers who want to buy what we offer.</li>
                <li>• We can get advice from people who know more.</li>
                <li>• We can discover new opportunities we never thought of before, like partnerships or groups.</li>
              </ul>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-purple-800 mb-4">Examples:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• A baker might meet someone who wants to buy cupcakes for a party (customer).</li>
                  <li>• We can get advice from people who can share their knowledge and expertise.</li>
                  <li>• A gadget maker teams up with a robotics student to create a new mini race game.</li>
                  <li>• A comics seller might team up with a toy seller so kids buy diverse sets (opportunities).</li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-6">
      <div className="max-w-7xl bg-white shadow-2xl rounded-3xl p-12">
        {renderScreen()}

        {step < 17 && (
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