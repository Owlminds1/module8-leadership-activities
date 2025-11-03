"use client";
import { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";

const contentData = {
  screens: [
    {
      id: 0,
      title: "Nick's Bakery Dream",
      content: (
        <>
          Nick loves baking and wants to start his own bakery shop. But he doesn&apos;t know the best way to sell them.<br /><br />
          Should he give them to shops?<br />
          Should he open his own store?<br />
          Should he sell online through vendors like Ferns and Petals?<br />
          Should he create a platform to sell online along with other bakers?
        </>
      ),
      image: S1
    },
    {
      id: 1,
      title: "Business Models",
      content: (
        <>
          <span className="font-bold">B2B (Business to Business)</span><br />
          He doesn’t open a shop of his own to begin with. Instead, he sells his cupcakes to other shops. Those shops package it, add their own labels and then sell the cupcakes to their customers.<br /><br />
          This is called <span className="font-bold">B2B</span>, Business to Business, because a business sells to another business, but not directly to customers.<br /><br />
          Can you think of any other examples of B2B?
        </>
      ),
      image: S1
    },
    {
      id: 2,
      title: "Business Models",
      content: (
        <>
          <span className="font-bold">B2B (Business to Business)</span><br />
          He doesn’t open a shop of his own to begin with. Instead, he sells his cupcakes to other shops. Those shops package it, add their own labels and then sell the cupcakes to their customers.<br /><br />
          This is called <span className="font-bold">B2B</span>, Business to Business, because a business sells to another business, but not directly to customers.<br /><br />
          Can you think of any other examples of B2B?
          <div className="bg-green-100 p-3 rounded mt-3">
            A farmer sells produce such as mangoes to a grocery store, and the grocery store sells the produce to us.
          </div>
        </>
      ),
      image: S1
    },
    {
      id: 3,
      title: "B2C (Business to Consumer)",
      content: (
        <>
          After some time, Nick wants to sell directly to the buyers who eat his cupcakes. He thinks this can let him make more profit. So he opens a shop to directly sell to the customers.<br /><br />
          This is called <span className="font-bold">B2C</span>, Business to Consumer, because the seller is a business, and the buyer is a consumer.<br /><br />
          Can you think of any other example of B2C?
        </>
      ),
      image: S1
    },
    {
      id: 4,
      title: "B2C (Business to Consumer)",
      content: (
        <>
          After some time, Nick wants to sell directly to the buyers who eat his cupcakes. He thinks this can let him make more profit. So he opens a shop to directly sell to the customers.<br /><br />
          This is called <span className="font-bold">B2C</span>, Business to Consumer, because the seller is a business, and the buyer is a consumer.<br /><br />
          Can you think of any other example of B2C?
          <div className="bg-green-100 p-3 rounded mt-3">
            When you buy pizza from a store such as Domino’s or Pizza Hut.
          </div>
        </>
      ),
      image: S1
    },    
    {
      id: 5,
      title: "B2C Online",
      content: (
        <>
          Then Nick thinks, ‘What if I sell online? People from far away places can order my cupcakes!’ He creates his website and starts directly selling to customers.<br /><br />
          This is still B2C because Nick is selling directly to consumers, only now it’s online.<br /><br />
          Can you think of an example of B2C online?
        </>
      ),
      image: S1
    },
    {
      id: 6,
      title: "B2B Online",
      content: (
        <>
          Nick wonders, ‘How about selling on a quick commerce website? I can partner with such platforms. They can take orders and deliver my cupcakes directly to their consumer’s doorstep. I do not have to invest in creating my website!’<br /><br />
          Can you think of an example of B2B online?
          <div className="bg-green-100 p-3 rounded mt-3">
            An ice cream company can sell their milkshakes on platforms such as DoorDash/Grab/Zomato/UberEats. People can place an order on these platforms to get it delivered right at their doorstep!
          </div>
        </>
      ),
      image: S1
    },
    {
      id: 7,
      title: "Aggregator",
      content: (
        <>
          Nick thinks of an even bigger idea. He wonders, “How about I stop making cakes by myself. My business should connect bakers to buyers. This way, customers will have more choices and I can charge bakers a small fee for using my platform.”<br /><br />
          This is called an <span className="font-bold">Aggregator</span> because Nick’s business now connects sellers to buyers.<br /><br />
          Can you think of an example of an Aggregator?
        </>
      ),
      image: S1
    },
    {
      id: 8,
      title: "Aggregator",
      content: (
        <>
          Nick thinks of an even bigger idea. He wonders, “How about I stop making cakes by myself. My business should connect bakers to buyers. This way, customers will have more choices and I can charge bakers a small fee for using my platform.”<br /><br />
          This is called an <span className="font-bold">Aggregator</span> because Nick’s business now connects sellers to buyers.<br /><br />
          Can you think of an example of an Aggregator?
          <div className="bg-green-100 p-3 rounded mt-3">
            Companies such as Uber and Grab connect cab drivers to people who use cab services.
          </div>
        </>
      ),
      image: S1
    },    
    {
      id: 9,
      title: "Which Model Would You Choose?",
      content: (
        <>
          If you were Nick, which business model would you select? Why?
        </>
      ),
      image: S1
    }
  ]
};

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const nextScreen = () => {
    if (currentScreen < contentData.screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const currentData = contentData.screens[currentScreen];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
          {currentData.title}
        </h1>
        
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="text-lg mb-4 leading-relaxed">{currentData.content}</div>
          </div>
          
          {currentData.id === 0 && (
            <div className="flex-shrink-0">
              <Image 
                src={S1} 
                alt="Business model illustration" 
                width={300} 
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          )}
        </div>

        {currentScreen < contentData.screens.length - 1 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={nextScreen}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}