"use client";
import { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";

const contentData = {
  screens: [
    {
      id: 0,
      title: "Sam's Sportswear Dream",
      content: (
        <>
          Sam loves sports, so he started a business to make sports wear. Let&apos;s help Sam to decide the smartest way to sell them.<br /><br />
          Should he:<br />
          Sell to his peers?<br />
          Set up a stall at the school or community fair?<br />
          Sell to gift stores?<br />
          Open his own store?<br />
          Sell online?<br />
          Create a platform for other sellers to sell?
        </>
      ),
      image: S1
    },
    {
      id: 1,
      title: "B2B (Business to Business)",
      content: (
        <>
          At first, Sam didn’t open a store. Instead, he sold his products to schools, gyms, and sports clubs. Those institutions then passed on or sold the bottles and gear to their members.<br /><br />
          This is called <span className="font-bold">B2B</span>, Business to Business, because a business sells to another business, but not directly to customers.<br /><br />
          Can you think of any other examples of B2B?<br />
        </>
      ),
      image: S1
    },
    {
      id: 2,
      title: "B2B (Business to Business)",
      content: (
        <>
          At first, Sam didn’t open a store. Instead, he sold his products to schools, gyms, and sports clubs. Those institutions then passed on or sold the bottles and gear to their members.<br /><br />
          This is called <span className="font-bold">B2B</span>, Business to Business, because a business sells to another business, but not directly to customers.<br /><br />
          Can you think of any other examples of B2B?<br />
          <div className="bg-green-100 p-3 rounded mt-3">
            A company prints notebooks and sells them to schools or offices. It doesn’t sell to students directly; instead the schools or offices distribute through their networks.
          </div>
        </>
      ),
      image: S1
    },
    {
      id: 2,
      title: "B2C (Business to Consumer)",
      content: (
        <>
          After some time, Sam thought, “Why not sell directly to people who love sports?” So, Sam opened a small sports store in his community. This way, any individual can walk in and buy sports gear directly from Sam’s shop.<br /><br />
          This is called <span className="font-bold">B2C</span>, Business to Consumer, because the seller is Sam’s business, and the buyers are individual consumers.<br /><br />
          Can you think of any other examples of B2C?<br />
        </>
      ),
      image: S1
    },
    {
      id: 4,
      title: "B2C (Business to Consumer)",
      content: (
        <>
          After some time, Sam thought, “Why not sell directly to people who love sports?” So, Sam opened a small sports store in his community. This way, any individual can walk in and buy sports gear directly from Sam’s shop.<br /><br />
          This is called <span className="font-bold">B2C</span>, Business to Consumer, because the seller is Sam’s business, and the buyers are individual consumers.<br /><br />
          Can you think of any other examples of B2C?<br />
          <div className="bg-green-100 p-3 rounded mt-3">
            Buying football from a local sports shop.
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
          Soon, Sam realized that only people nearby shop at his store. “What if someone in another city wants to buy my products?” So Sam created an online store for customers from all over to order sports gear. He figured he can get the products delivered to their homes.<br /><br />
          This is still <span className="font-bold">B2C</span> because Sam is selling directly to consumers but through the internet, he is able to reach a much wider audience.<br /><br />
          Can you think of an example of B2C online?<br />
        </>
      ),
      image: S1
    },
    {
      id: 6,
      title: "B2C Online",
      content: (
        <>
          Soon, Sam realized that only people nearby shop at his store. “What if someone in another city wants to buy my products?” So Sam created an online store for customers from all over to order sports gear. He figured he can get the products delivered to their homes.<br /><br />
          This is still <span className="font-bold">B2C</span> because Sam is selling directly to consumers but through the internet, he is able to reach a much wider audience.<br /><br />
          Can you think of an example of B2C online?<br />
          <div className="bg-green-100 p-3 rounded mt-3">
            The LEGO company sells their sets on their website. You can place an order and buy directly on the official LEGO website.
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
          Finally, Sam came up with an even bigger idea: “What if I allow other sports sellers to list their products on my website too?” Soon, Sam’s website became a hub where people can buy different sports items, from baseball bats and exercise mats to running shoes, all from various sellers. Sam earns a commission fee each time another seller makes a sale through the platform.<br /><br />
          This is called an <span className="font-bold">Aggregator Model</span> because Sam’s platform connects many sellers with many buyers, just like Flipkart, Amazon, or Decathlon Marketplace.<br /><br />
          Can you think of an example of an Aggregator?<br />
        </>
      ),
      image: S1
    },
    {
      id: 8,
      title: "Aggregator",
      content: (
        <>
          Finally, Sam came up with an even bigger idea: “What if I allow other sports sellers to list their products on my website too?” Soon, Sam’s website became a hub where people can buy different sports items, from baseball bats and exercise mats to running shoes, all from various sellers. Sam earns a commission fee each time another seller makes a sale through the platform.<br /><br />
          This is called an <span className="font-bold">Aggregator Model</span> because Sam’s platform connects many sellers with many buyers, just like Flipkart, Amazon, or Decathlon Marketplace.<br /><br />
          Can you think of an example of an Aggregator?<br />
          <div className="bg-green-100 p-3 rounded mt-3">
            Apps such as Door Dash let you choose from your favorite restaurants all in one app.
          </div>
        </>
      ),
      image: S1
    },
    {
      id: 9,
      title: "Market Place",
      content: (
        <>
          Sam wonders, What if I sell my sports wear on shopping website. I will have to pay a fee, but they can take care of getting buyers and delivery of my product!<br /><br />
          This is called <span className="font-bold">Market Place model</span> because it helps business to expand reach to customers, and provides delivery service to buyer.<br /><br />
          Can you think of an example of a market place?<br />
        </>
      ),
      image: S1
    },
    {
      id: 10,
      title: "Market Place",
      content: (
        <>
          Sam wonders, What if I sell my sports wear on shopping website. I will have to pay a fee, but they can take care of getting buyers and delivery of my product!<br /><br />
          This is called <span className="font-bold">Market Place model</span> because it helps business to expand reach to customers, and provides delivery service to buyer.<br /><br />
          Can you think of an example of a market place?<br />
          <div className="bg-green-100 p-3 rounded mt-3">
            Shopping portals such as ebay or Amazon, allow the sellers to sell their products and provides the buyers the convenience to shop and receive home delivery. Returns, exchanges and refunds are seamless and buyers can check the seller rating before making the purchase.
          </div>
        </>
      ),
      image: S1
    },
    {
      id: 11,
      title: "Which Model Would You Choose?",
      content: (
        <>
          If you were Sam, how would you like to sell your sports products? Why?<br /><br />
          <span className="font-bold">B2B to schools and gym</span><br />
          <span className="font-bold">B2C in your own shop</span><br />
          <span className="font-bold">B2C online</span><br />
          <span className="font-bold">an Aggregator</span>
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