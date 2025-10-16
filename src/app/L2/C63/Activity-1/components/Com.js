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
      name: "Leo",
      text: "runs a DIY Craft Stand. He tells Nina, \"I sell more when I bundle my crafts together. Maybe you can bundle slime colors too!\"",
      image: s2
    },
    {
      name: "Mia", 
      text: "loves slime and crafts. She's super excited and buys Nina's Glow-in-the-Dark Slime Kit.",
      image: s3
    },
    {
      name: "Arjun",
      text: "runs a small Lemonade Stall. He offers to let Nina display her slime near his stall. Together, kids can buy slime and lemonade as a fun combo.",
      image: s4
    },
    {
      name: "Sofia",
      text: "makes handmade bookmarks. She suggests, \"You should join our online group where many people share ideas about selling crafts!\"",
      image: s5
    }
  ];

  const renderScreen = () => {
    switch (step) {
      case 0:
        return (
          <div className="text-center max-w-5xl mx-auto">
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>Nina is a young girl who loves making Glow-in-the-Dark Slime Kits. They are gooey, squishy, and glow in the dark! But Nina has one small problem: she wants more people to enjoy her glowing slime.</p>
              <p>One sunny Saturday, Nina visits the Magic Market, a special place where everyone comes together to share their creations.</p>
              <p>At the market, Nina sees colorful stands with toys, lemonade, crafts, and books.</p>
            </div>
            <div className="mt-8">
              <Image src={s1} alt="Magic Market" width={500} height={300} className="mx-auto rounded-2xl shadow-lg" />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-8">
              Nina meets many people at the Magic Market:
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
              Nina meets many people at the Magic Market:
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
              Nina meets many people at the Magic Market:
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
              Nina meets many people at the Magic Market:
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
              By the end of the day, Nina is thrilled! She didn&apos;t just sell slime. She also made new friends, found customers, learned smart selling tips, and discovered new chances to grow her little business.
            </p>
          </div>
        );

      case 6:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-800 mb-8">
              Who became Nina&apos;s first customer at the Magic Market?
            </h2>
          </div>
        );

      case 7:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-800 mb-8">
              Who became Nina&apos;s first customer at the Magic Market?
            </h2>
            <div className="bg-green-100 p-8 rounded-2xl shadow-lg">
              <p className="text-2xl text-green-800 font-semibold">
                Mia bought her Glow-in-the-Dark Slime Kit.
              </p>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-8">
              How did Arjun, the lemonade seller, give Nina an opportunity?
            </h2>
          </div>
        );

      case 9:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-8">
              How did Arjun, the lemonade seller, give Nina an opportunity?
            </h2>
            <div className="bg-blue-100 p-8 rounded-2xl shadow-lg">
              <p className="text-2xl text-blue-800 font-semibold">
                He let her display slime near his stall so kids could buy both together.
              </p>
            </div>
          </div>
        );

      case 10:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-indigo-800 mb-8">
              What opportunity did Sofia share with Nina?
            </h2>
          </div>
        );

      case 11:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-indigo-800 mb-8">
              What opportunity did Sofia share with Nina?
            </h2>
            <div className="bg-purple-100 p-8 rounded-2xl shadow-lg">
              <p className="text-2xl text-purple-800 font-semibold">
                She invited Nina to join an online group to share and learn new ideas.
              </p>
            </div>
          </div>
        );

      case 12:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-8">
              What lesson did Nina learn from visiting the Magic Market?
            </h2>
          </div>
        );

      case 13:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-8">
              What lesson did Nina learn from visiting the Magic Market?
            </h2>
            <div className="bg-yellow-100 p-8 rounded-2xl shadow-lg">
              <p className="text-2xl text-yellow-800 font-semibold">
                Meeting new people helps you find customers, get advice, and discover opportunities.
              </p>
            </div>
          </div>
        );

      case 14:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-2xl text-gray-700 leading-relaxed">
              Just like Nina at the Magic Market, in real life when people run a business or even a small shop, they need to meet others. This is called networking.
            </p>
          </div>
        );

      case 15:
        return (
          <div className="text-center max-w-5xl mx-auto">
            <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
              Just like Nina at the Magic Market, in real life when people run a business or even a small shop, they need to meet others. This is called networking.
            </p>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-100 p-8 rounded-2xl shadow-lg text-left">
              <h3 className="text-2xl font-bold text-indigo-800 mb-6">Networking helps because:</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li>• We can find customers who want to buy what we offer.</li>
                <li>• We can get advice from people who know more than us.</li>
                <li>• We can discover new opportunities we never thought of before, like partnerships or groups.</li>
              </ul>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-purple-800 mb-4">Example:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• A baker might meet someone who wants to buy cupcakes for a party (customer).</li>
                  <li>• A shopkeeper might learn from another shop how to display items better (advice).</li>
                  <li>• A comics seller might team up with a toy seller so kids buy both (opportunities).</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 16:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-orange-800 mb-8">
              If you were at the Magic Market with something you made, maybe drawings, toys, or food, what kind of people would you like to meet?
              A customer, a friend who gives advice, or someone to collaborate with?
            </h2>
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
        
        {step < 16 && (
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