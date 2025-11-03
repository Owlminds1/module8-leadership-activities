"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const nextScreen = () => {
    if (currentScreen < 25) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 0:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-purple-800">Let&apos;s meet another entrepreneur Lina!</h1>
            <div className="flex justify-center mb-6">
              <Image src={s1} alt="pizza shop" width={400} height={400} className="rounded-lg" />
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Lina is an entrepreneur who has opened a small pizza shop. Some days she makes money, but some others she doesn’t make much. She needs to understand why. Today, you are going to be a Customer Detective to assist Lina figure it out!
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Let&apos;s look at the sales data to solve the mystery behind making profit and losing money.
            </p>
          </div>
        );

      case 1:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Day 1 Rainy Day:</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed">
              Did the business make a profit or lose money?
            </p>
          </div>
        );

      case 2:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Day 1 Rainy Day:</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Did the business make a profit or lose money?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-red-800 mb-4">They lost money.</p>
              <p className="text-lg text-red-700">
                It rained all day. Very few people came out of their houses. So Lina’s sales went down. This led to wasted food i.e. lost money.
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Day 1 Rainy Day:</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Did the business make a profit or lose money?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-xl font-bold text-red-800 mb-4">They lost money.</p>
              <p className="text-lg text-red-700">
                It rained all day. Very few people came out of their houses. So Lina’s sales went down. This led to wasted food i.e. lost money.
              </p>
            </div>
            <br />
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What does this tell us about customer behavior?
            </p>
          </div>
        );

      case 4:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Day 1 Rainy Day:</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Did the business make a profit or lose money?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-xl font-bold text-red-800 mb-4">They lost money.</p>
              <p className="text-lg text-red-700">
                It rained all day. Very few people came out of their houses. So Lina’s sales went down. This led to wasted food i.e. lost money.
              </p>
            </div>
            <br />
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What does this tell us about customer behavior?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-green-800 space-y-2">Weather is one of the many factors that causes fluctuations in demand and supply. Customers prefer convenience, service, and comfort to fulfill their purchasing needs.</p>
            </div>
          </div>
        );


      case 5:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Day 1 Rainy Day:</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Did the business make a profit or lose money?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-xl font-bold text-red-800 mb-4">They lost money.</p>
              <p className="text-lg text-red-700">
                It rained all day. Very few people came out of their houses. So Lina’s sales went down. This led to wasted food i.e. lost money.
              </p>
            </div>
            <br />
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What does this tell us about customer behavior?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-green-800 space-y-2">Weather is one of the many factors that causes fluctuations in demand and supply. Customers prefer convenience, service, and comfort to fulfill their purchasing needs.</p>
            </div>
            <br />
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What could Lina do better?
            </p>
          </div>
        );


      case 6:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Day 1 Rainy Day:</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Did the business make a profit or lose money?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-xl font-bold text-red-800 mb-4">They lost money.</p>
              <p className="text-lg text-red-700">
                It rained all day. Very few people came out of their houses. So Lina’s sales went down. This led to wasted food i.e. lost money.
              </p>
            </div>
            <br />
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What does this tell us about customer behavior?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-green-800 space-y-2">Weather is one of the many factors that causes fluctuations in demand and supply. Customers prefer convenience, service, and comfort to fulfill their purchasing needs.</p>
            </div>
            <br />
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What could Lina do better?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <ul className="text-lg text-green-800 space-y-2">
                <li>• Offer free or low-cost home delivery for regular customers</li>
                <li>• Partner with a delivery service for minimal cost but ensure that sales continue to move.</li>
              </ul>
            </div>
          </div>
        );


      case 6:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-orange-800">Day 2 : Price Increase</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed">
              Did the business make a profit or lose money?
            </p>
          </div>
        );

      case 7:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-orange-800">Day 2 : Price Increase</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Did the business make a profit or lose money?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-red-800 mb-4">They lost money.</p>
              <p className="text-lg text-red-700">
                Lina raised the price of her pizza by $2. Afterwards, the customers said it was too expensive, so fewer people bought.
              </p>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-orange-800">Day 2 : Price Increase</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Did the business make a profit or lose money?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-xl font-bold text-red-800 mb-4">They lost money.</p>
              <p className="text-lg text-red-700">
                Lina raised the price of her pizza by $2. Afterwards, the customers said it was too expensive, so fewer people bought.
              </p>
            </div>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What does this tell us about customer behavior?
            </p>
          </div>
        );

      case 9:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-orange-800">Day 2 : Price Increase</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Did the business make a profit or lose money?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-xl font-bold text-red-800 mb-4">They lost money.</p>
              <p className="text-lg text-red-700">
                Lina raised the price of her pizza by $2. Afterwards, the customers said it was too expensive, so fewer people bought.
              </p>
            </div>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What does this tell us about customer behavior?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-green-800 space-y-2">Regular customers tend to be loyal to their sellers because of the many factors that influence their regular purchasing habits. If the sellers try to change the said dynamic, the customers may feel like they are being taken advantage of.</p>
            </div>
          </div>
        );

      case 10:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-orange-800">Day 2 : Price Increase</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Did the business make a profit or lose money?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-xl font-bold text-red-800 mb-4">They lost money.</p>
              <p className="text-lg text-red-700">
                Lina raised the price of her pizza by $2. Afterwards, the customers said it was too expensive, so fewer people bought.
              </p>
            </div>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What does this tell us about customer behavior?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-green-800 space-y-2">Regular customers tend to be loyal to their sellers because of the many factors that influence their regular purchasing habits. If the sellers try to change the said dynamic, the customers may feel like they are being taken advantage of.</p>
            </div>
            <br />
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What could Lina do better?
            </p>
          </div>
        );

      case 11:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-orange-800">Day 2 : Price Increase</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Did the business make a profit or lose money?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-xl font-bold text-red-800 mb-4">They lost money.</p>
              <p className="text-lg text-red-700">
                Lina raised the price of her pizza by $2. Afterwards, the customers said it was too expensive, so fewer people bought.
              </p>
            </div>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What does this tell us about customer behavior?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-green-800 space-y-2">Regular customers tend to be loyal to their sellers because of the many factors that influence their regular purchasing habits. If the sellers try to change the said dynamic, the customers may feel like they are being taken advantage of.</p>
            </div>
            <br />
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What could Lina do better?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <ul className="text-lg text-green-800 space-y-2">
                <li>• Add extra toppings or larger sizes to match the higher price</li>
                <li>• Create ‘value deals’ like Buy 1 Get 1 Free, or family combos</li>
                <li>• Have discount coupons for regular clients</li>
              </ul>
            </div>

          </div>
        );

      case 12:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-green-800">Day 3 – New Cheesy Burst Pizza</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed">
              Did the business make a profit or lose money?
            </p>
          </div>
        );

      case 13:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-green-800">Day 3 – New Cheesy Burst Pizza</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Did the business make a profit or lose money?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-green-800 mb-4">They made a good profit.</p>
              <p className="text-lg text-green-700">
                Lina added a new ‘Cheesy’ pizza. Customers loved it, so the sales went up.
              </p>
            </div>
          </div>
        );


      case 14:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-green-800">Day 3 – New Cheesy Burst Pizza</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Did the business make a profit or lose money?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-green-800 mb-4">They made a good profit.</p>
              <p className="text-lg text-green-700">
                Lina added a new ‘Cheesy’ pizza. Customers loved it, so the sales went up.
              </p>
            </div>
            <br />
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What does this tell us about customer behavior?
            </p>
          </div>
        );


      case 15:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-green-800">Day 3 – New Cheesy Burst Pizza</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Did the business make a profit or lose money?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-green-800 mb-4">They made a good profit.</p>
              <p className="text-lg text-green-700">
                Lina added a new ‘Cheesy’ pizza. Customers loved it, so the sales went up.
              </p>
            </div>
            <br />
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What does this tell us about customer behavior?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-green-800 space-y-2">Innovation is what distinguishes one product from another. Customers appreciate the creative efforts of sellers, especially when the results are delicious!</p>
            </div>
          </div>
        );


      case 16:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-green-800">Day 3 – New Cheesy Burst Pizza</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Did the business make a profit or lose money?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-green-800 mb-4">They made a good profit.</p>
              <p className="text-lg text-green-700">
                Lina added a new ‘Cheesy’ pizza. Customers loved it, so the sales went up.
              </p>
            </div>
            <br />
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What does this tell us about customer behavior?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-green-800 space-y-2">Innovation is what distinguishes one product from another. Customers appreciate the creative efforts of sellers, especially when the results are delicious!</p>
            </div>
            <br />
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What do you think is the reason?
            </p>
          </div>
        );


      case 17:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-green-800">Day 3 – New Cheesy Burst Pizza</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Did the business make a profit or lose money?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-green-800 mb-4">They made a good profit.</p>
              <p className="text-lg text-green-700">
                Lina added a new ‘Cheesy’ pizza. Customers loved it, so the sales went up.
              </p>
            </div>
            <br />
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What does this tell us about customer behavior?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-green-800 space-y-2">Innovation is what distinguishes one product from another. Customers appreciate the creative efforts of sellers, especially when the results are delicious!</p>
            </div>
            <br />
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What do you think is the reason?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-green-800 space-y-2">The new pizza was exciting and tasty, so more people bought it.</p>
            </div>
          </div>
        );


      case 18:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-red-800">Day 4 – Competition Nearby</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              A new pizza shop opened across the street selling at lower prices. So many customers went to this shop instead, causing Lina’s sales to go down.
            </p>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What does this tell us about customer behavior?
            </p>
          </div>
        );

      case 19:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-red-800">Day 4 – Competition Nearby</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              A new pizza shop opened across the street selling at lower prices. So many customers went to this shop instead, causing Lina’s sales to go down.
            </p>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What does this tell us about customer behavior?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-green-800 space-y-2">Pricing is one of the essential factors that impacts customer behavior. Based on the budget, the less expensive item will usually attract many customers. That said, a good percentage of customers still go for quality over pricing, especially when there’s brand loyalty. </p>
            </div>
          </div>
        );


      case 20:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-red-800">Day 4 – Competition Nearby</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              A new pizza shop opened across the street selling at lower prices. So many customers went to this shop instead, causing Lina’s sales to go down.
            </p>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What does this tell us about customer behavior?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-green-800 space-y-2">Pricing is one of the essential factors that impacts customer behavior. Based on the budget, the less expensive item will usually attract many customers. That said, a good percentage of customers still go for quality over pricing, especially when there’s brand loyalty. </p>
            </div>
            <br />
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What can Lina do to make sure her pizza shop stays relevant and people do buy from her?
            </p>
          </div>
        );

      case 21:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-red-800">Day 4 – Competition Nearby</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              A new pizza shop opened across the street selling at lower prices. So many customers went to this shop instead, causing Lina’s sales to go down.
            </p>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What does this tell us about customer behavior?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-green-800 space-y-2">Pricing is one of the essential factors that impacts customer behavior. Based on the budget, the less expensive item will usually attract many customers. That said, a good percentage of customers still go for quality over pricing, especially when there’s brand loyalty. </p>
            </div>
            <br />
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What can Lina do to make sure her pizza shop stays relevant and people do buy from her?
            </p>
            <div className="bg-yellow-100 p-6 rounded-lg max-w-2xl mx-auto">
              <ul className="text-lg text-yellow-800 space-y-2">
                <li>• Focus on quality, taste, and friendly service</li>
                <li>• Run promotions (like Wednesday Specials)</li>
                <li>• Give loyalty cards to keep regular customers</li>
              </ul>
            </div>

          </div>
        );

      case 22:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-purple-800">Day 5 – Holiday Crowd</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              It was a public holiday. Families went out for food, and Lina’s shop was full of hungry customers. So her sales went up.
            </p>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What does this tell us about customer behavior?
            </p>
          </div>
        );

      case 23:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-purple-800">Day 5 – Holiday Crowd</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              It was a public holiday. Families went out for food, and Lina’s shop was full of hungry customers. So her sales went up.
            </p>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What does this tell us about customer behavior?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-green-800 space-y-2">Holidays are a time of togetherness. Customers enjoy family time outside, to do activities together. Shopping and eating out are popular bonding activities that connect parents with their kids, siblings with each other, friends, peers, and colleagues alike. </p>
            </div>
          </div>
        );

      case 24:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-purple-800">Day 5 – Holiday Crowd</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              It was a public holiday. Families went out for food, and Lina’s shop was full of hungry customers. So her sales went up.
            </p>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What does this tell us about customer behavior?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-green-800 space-y-2">Holidays are a time of togetherness. Customers enjoy family time outside, to do activities together. Shopping and eating out are popular bonding activities that connect parents with their kids, siblings with each other, friends, peers, and colleagues alike. </p>
            </div>
            <br />
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What do you think is the reason?
            </p>
          </div>
        );

      case 25:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-purple-800">Day 5 – Holiday Crowd</h2>
            <br />
            <div className="flex justify-center mb-6">
              <Image src={s2} alt="s2" width={650} height={650} className="rounded-lg" />
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              It was a public holiday. Families went out for food, and Lina’s shop was full of hungry customers. So her sales went up.
            </p>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What does this tell us about customer behavior?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-green-800 space-y-2">Holidays are a time of togetherness. Customers enjoy family time outside, to do activities together. Shopping and eating out are popular bonding activities that connect parents with their kids, siblings with each other, friends, peers, and colleagues alike. </p>
            </div>
            <br />
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What do you think is the reason?
            </p>
            <div className="bg-purple-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-purple-800">
                Because more families were outside to eat together.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl p-8">
          {renderScreen()}

          {currentScreen < 25 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={nextScreen}
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-xl"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}