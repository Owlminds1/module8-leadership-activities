"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png"
import s2 from "../assets/s2.png"
import s3 from "../assets/s3.png"
import s4 from "../assets/s4.png"

export default function Com() {
  const caseStudies = [
    {
      id: 1,
      title: "Case Study 1: Netflix (Subscriptions)",
      image: s1, 
      description: `Netflix doesn’t sell movies one by one. Instead, it uses a subscription model, you pay monthly or yearly to watch unlimited shows. 
It’s like buying a ticket to an amusement park. You don’t pay for each ride separately. One ticket lets you go on as many rides as you want all day.`,
      benefits: ["Steady money for Netflix", "Lots of shows for the customer"],
    },
    {
      id: 2,
      title: "Case Study 2: Education platforms (Freemium Model)",
      image: s2,
      description: `Many online learning platforms, like Duolingo, or Khan Academy, use something called the freemium model. That means you get the basic version free, but if you want extra features: like no ads or bonus lessons and activities you need to pay. 
Think of it like playing a mobile game. You can play for free, but to get special powers or skip waiting times, you need to buy the premium version.`,
      benefits: [
        "Attracts lots of free users",
        "Makes money from premium upgrades",
      ],
    },
    {
      id: 3,
      title: "Case Study 3: McDonald’s (Discount Pricing)",
      image: s3,
      description: `McDonald’s often uses combo deals or discounts: like ‘Buy 1 Get 1 Free’ or ‘Happy Meal’ packs. These make customers feel they’re getting more value for less money. 
Think about when a shop says: ‘If you buy fries + burger together, it’s less expensive than buying them separately.`,
      benefits: [
        "Encourages customers to buy more",
        "Shop earns more overall",
      ],
    },
    {
      id: 4,
      title: "Case Study 4: Apple iPhone (Premium Pricing)",
      image: s4, 
      description: `Apple prices its iPhones much higher than many other phones. Because it uses premium pricing, people pay more for brand, design, and quality. 
Imagine two water bottles: one plain, one fancy with a cool logo and design. Even if both hold water, people pay extra for the one that feels more special. Apple does the same with its products.`,
      benefits: [
        "Premium feel increases value",
        "Business earns more per sale",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < caseStudies.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const study = caseStudies[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-xl w-full text-center">
        <h2 className="text-2xl font-bold mb-4">{study.title}</h2>

        {study.image && (
           <div className="flex justify-center">
          <Image
            src={study.image}
            alt={study.title}
            width={300}
            height={300}
            className="object-cover rounded-xl mb-4"
          />
          </div>
        )}

        <p className="text-gray-700 mb-4 whitespace-pre-line">
          {study.description}
        </p>

        {study.benefits && study.benefits.length > 0 && (
          <div className="text-left">
            <h3 className="font-semibold mb-2">Benefits:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {study.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        )}

        {currentIndex < caseStudies.length - 1 && (
          <button
            onClick={handleNext}
            className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
