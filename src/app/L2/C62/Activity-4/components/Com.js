"use client";
import { useState } from "react";
import Image from "next/image";
import LeoShop from "../assets/s1.png"; 

const screens = [
  {
    title: "Leo set up a shop in grandma’s garage.",
    content: (
      <>
        <p className="text-2xl mb-8">
          He added some new items for sale as well. But a new challenge awaits him!
        </p>
        <div className="flex justify-center mb-8">
          <Image src={LeoShop} alt="Leo's Shop" width={300} height={200} className="rounded-xl shadow-lg" />
        </div>
      </>
    ),
  },
  {
    title: "Challenge 1: High Demand",
    content: (
      <p className="text-2xl mb-6">What is high demand?</p>
    ),
    reveal: (
      <ul className="list-disc ml-8 text-xl text-blue-800">
        <li>Some products like bracelets and glow-in-the-dark bands quickly sold.</li>
        <li>He has to return back customers and miss on sales as these items run out of stock! This is known as high demand.</li>
      </ul>
    ),
  },
  {
    title: "How can Leo plan better for next week?",
    content: null,
    reveal: (
      <ul className="list-disc ml-8 text-xl text-blue-800">
        <li>Keep track of inventory available and their sales</li>
        <li>Keep buffer stock of fast moving items.</li>
      </ul>
    ),
  },
  {
    title: "Should Leo increase the price of popular items to reduce demand?",
    content: null,
    reveal: (
      <p className="text-xl text-blue-800">
        He may charge a little extra and keep it as an exclusive purchase or position it as a limited edition. But he cannot keep the price so high that his buyers find it too expensive.
      </p>
    ),
  },
  {
    title: "What is the risk if Leo decides to double the stock of all items?",
    content: null,
    reveal: (
      <p className="text-xl text-blue-800">
        He may have a lot of unsold items, wastage and will have to bear the losses.
      </p>
    ),
  },
  {
    title: "How can Leo manage the risk of waste?",
    content: null,
    reveal: (
      <>
        <p className="text-xl text-blue-800 mb-4">Planning ahead is the best way to minimise the risk. He can:</p>
        <ul className="list-disc ml-8 text-xl text-blue-800">
          <li>Take pre-orders to know exactly how many people want to buy each item.</li>
          <li>Look at previous items’ sales data to see which products were popular and which were not.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Challenge 2: Unsold Items",
    content: (
      <p className="text-2xl mb-6">
        The Sticker Packs and Mini Notebooks were left unsold. This led to some waste and less profit. This situation is known as Low Demand.
        <br /><br />
        Why did these items not sell much?
      </p>
    ),
    reveal: (
      <p className="text-xl text-blue-800">
        Maybe these items were not well-liked by all the customers, not really crafted or available at cheaper rates elsewhere.
      </p>
    ),
  },
  {
    title: "What happens when products don’t sell?",
    content: null,
    reveal: (
      <ul className="list-disc ml-8 text-xl text-blue-800">
        <li>Stocks take up storage space</li>
        <li>Run the risk of going waste</li>
        <li>The money spent on making those products is lost</li>
        <li>Overall profit goes down.</li>
      </ul>
    ),
  },
  {
    title: "How can Leo improve his sales next week?",
    content: null,
    reveal: (
      <ul className="list-disc ml-8 text-xl text-blue-800">
        <li>Minimise the stock for items that sell slowly</li>
        <li>Offer discounts to attract customers</li>
        <li>Create product bundles</li>
        <li>Improve the slow-moving items.</li>
      </ul>
    ),
  },
  {
    title: "Do you remember what a discount is?",
    content: null,
    reveal: (
      <p className="text-xl text-blue-800">
        A discount is when the price of an item is lowered to encourage buyers to make a purchase.
      </p>
    ),
  },
  {
    title: "Do you remember what a product bundle is?",
    content: null,
    reveal: (
      <p className="text-xl text-blue-800">
        A bundle is when two or more items are sold together as a set, so customers would get more value.
      </p>
    ),
  },
  {
    title: "Super!",
    content: (
      <p className="text-3xl text-green-700 font-bold text-center">
        You can take business decisions to manage changes of demand and keep customers happy.
      </p>
    ),
    reveal: null,
  },
];

export default function Com() {
  const [screen, setScreen] = useState(0);
  const [showReveal, setShowReveal] = useState(false);

  const current = screens[screen];

  const handleNext = () => {
    if (current.reveal && !showReveal) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
      setScreen((prev) => Math.min(prev + 1, screens.length - 1));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 p-8">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl p-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">{current.title}</h2>
        {current.content && (
          <div className="mb-8 w-full">{current.content}</div>
        )}
        {showReveal && current.reveal && (
          <div className="mb-8 w-full">{current.reveal}</div>
        )}
        {screen < screens.length - 1 && (
          <button
            onClick={handleNext}
            className="px-10 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105 text-2xl mt-4"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}