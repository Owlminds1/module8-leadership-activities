"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const nextScreen = () => {
    if (currentScreen < 14) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 0:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-purple-800">Let&apos;s meet another entrepreneur Alex!</h1>
            <div className="flex justify-center mb-6">
              <Image src={s1} alt="Alex's ice cream shop" width={300} height={300} className="rounded-lg" />
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              He opened a small ice cream shop called Frosty Delights. Alex sells vanilla ice creams. But he isn&apos;t sure if he is making money or losing money.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Let&apos;s help Alex!
            </p>
          </div>
        );

      case 1:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Cost Per Ice Cream</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              To make one ice cream, Alex spends $3. So he must sell it for more than $3 to earn profit.
            </p>
            <div className="bg-blue-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <ul className="text-lg text-blue-800 space-y-2">
                <li>Ingredient = $1</li>
                <li>Cone = $1</li>
                <li>Advertisement = $1</li>
              </ul>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              If he sells it for $4, will Alex get profit or loss?
            </p>
          </div>
        );

      case 2:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Cost Per Ice Cream</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              To make one ice cream, Alex spends $3. So he must sell it for more than $3 to earn profit.
            </p>
            <div className="bg-blue-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <ul className="text-lg text-blue-800 space-y-2">
                <li>Ingredient = $1</li>
                <li>Cone = $1</li>
                <li>Advertisement = $1</li>
              </ul>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              If he sells it for $4, will Alex get profit or loss?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-green-800">
                He will get profit.
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-green-800">Selling Price & Profit</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              If Alex sells one ice cream, he makes $1 profit. If he sells 5 ice creams, how much extra money does Alex get?
            </p>
          </div>
        );

      case 4:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-green-800">Selling Price & Profit</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              If Alex sells one ice cream, he makes $1 profit. If he sells 5 ice creams, how much extra money does Alex get?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-2xl font-bold text-green-800">
                $5
              </p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-orange-800">Break-Even Day</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              One day, fewer people came to Alex&apos;s shop. Alex thought: &quot;Should I sell ice creams for less money? Maybe at $2&quot;
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              If he does this, will he make a profit or loss?
            </p>
          </div>
        );

      case 6:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-orange-800">Break-Even Day</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              One day, fewer people came to Alex&apos;s shop. Alex thought: &quot;Should I sell ice creams for less money? Maybe at $2&quot;
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              If he does this, will he make a profit or loss?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-red-800 mb-4">
                He will make a loss as the cost of making an ice cream is $3.
              </p>
              <p className="text-lg text-red-800 mb-4">
                He also did the same math that if he sells below his cost, he will make a loss.
              </p>
              <p className="text-lg text-red-800">
                So Alex decided to wait. By the end of the day, he sold the ice creams at $3 each, the same amount it cost him to make them.
              </p>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-orange-800">Break-Even Day</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              One day, fewer people came to Alex&apos;s shop. Alex thought: &quot;Should I sell ice creams for less money? Maybe at $2&quot;
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              If he does this, will he make a profit or loss?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-lg text-red-800 mb-4">
                He will make a loss as the cost of making an ice cream is $3.
              </p>
              <p className="text-lg text-red-800 mb-4">
                He also did the same math that if he sells below his cost, he will make a loss.
              </p>
              <p className="text-lg text-red-800">
                So Alex decided to wait. By the end of the day, he sold the ice creams at $3 each, the same amount it cost him to make them.
              </p>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Alex didn&apos;t earn extra money, but he also didn&apos;t lose money, he did break-even.
            </p>
          </div>
        );

      case 8:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-orange-800">Break-Even Day</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              One day, fewer people came to Alex&apos;s shop. Alex thought: &quot;Should I sell ice creams for less money? Maybe at $2&quot;
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              If he does this, will he make a profit or loss?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-lg text-red-800 mb-4">
                He will make a loss as the cost of making an ice cream is $3.
              </p>
              <p className="text-lg text-red-800 mb-4">
                He also did the same math that if he sells below his cost, he will make a loss.
              </p>
              <p className="text-lg text-red-800">
                So Alex decided to wait. By the end of the day, he sold the ice creams at $3 each, the same amount it cost him to make them.
              </p>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Alex didn&apos;t earn extra money, but he also didn&apos;t lose money, he did break-even.
            </p>
            <p className="text-2xl text-gray-700 font-semibold">
              Is it better to break-even or to sell at a loss?
            </p>
          </div>
        );

      case 9:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-orange-800">Break-Even Day</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              One day, fewer people came to Alex&apos;s shop. Alex thought: &quot;Should I sell ice creams for less money? Maybe at $2&quot;
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              If he does this, will he make a profit or loss?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-lg text-red-800 mb-4">
                He will make a loss as the cost of making an ice cream is $3.
              </p>
              <p className="text-lg text-red-800 mb-4">
                He also did the same math that if he sells below his cost, he will make a loss.
              </p>
              <p className="text-lg text-red-800">
                So Alex decided to wait. By the end of the day, he sold the ice creams at $3 each, the same amount it cost him to make them.
              </p>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Alex didn&apos;t earn extra money, but he also didn&apos;t lose money, he did break-even.
            </p>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              Is it better to break-even or to sell at a loss?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-green-800">
                Break-even is better because you don&apos;t lose money.
              </p>
            </div>
          </div>
        );

      case 10:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-orange-800">Break-Even Day</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              One day, fewer people came to Alex&apos;s shop. Alex thought: &quot;Should I sell ice creams for less money? Maybe at $2&quot;
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              If he does this, will he make a profit or loss?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-lg text-red-800 mb-4">
                He will make a loss as the cost of making an ice cream is $3.
              </p>
              <p className="text-lg text-red-800 mb-4">
                He also did the same math that if he sells below his cost, he will make a loss.
              </p>
              <p className="text-lg text-red-800">
                So Alex decided to wait. By the end of the day, he sold the ice creams at $3 each, the same amount it cost him to make them.
              </p>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Alex didn&apos;t earn extra money, but he also didn&apos;t lose money, he did break-even.
            </p>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              Is it better to break-even or to sell at a loss?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-xl font-bold text-green-800">
                Break-even is better because you don&apos;t lose money.
              </p>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Alex was smart to wait and break-even instead of losing money!
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              What else can Alex do to make sure he always makes money?
            </p>
          </div>
        );

      case 11:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-orange-800">Break-Even Day</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              One day, fewer people came to Alex&apos;s shop. Alex thought: &quot;Should I sell ice creams for less money? Maybe at $2&quot;
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              If he does this, will he make a profit or loss?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-lg text-red-800 mb-4">
                He will make a loss as the cost of making an ice cream is $3.
              </p>
              <p className="text-lg text-red-800 mb-4">
                He also did the same math that if he sells below his cost, he will make a loss.
              </p>
              <p className="text-lg text-red-800">
                So Alex decided to wait. By the end of the day, he sold the ice creams at $3 each, the same amount it cost him to make them.
              </p>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Alex didn&apos;t earn extra money, but he also didn&apos;t lose money, he did break-even.
            </p>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              Is it better to break-even or to sell at a loss?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-xl font-bold text-green-800">
                Break-even is better because you don&apos;t lose money.
              </p>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Alex was smart to wait and break-even instead of losing money!
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              What else can Alex do to make sure he always makes money?
            </p>
            <div className="bg-blue-100 p-6 rounded-lg max-w-2xl mx-auto">
              <ul className="text-lg text-blue-800 space-y-2 text-left">
                <li>• Sell ice creams only at $3 or higher</li>
                <li>• If people aren&apos;t buying, hold off making too many ice creams so he can avoid losses and wasted.</li>
                <li>• Try adding new flavors to attract more customers.</li>
                <li>• Spend less on advertisements</li>
              </ul>
            </div>
          </div>
        );

      case 12:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-orange-800">Break-Even Day</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              One day, fewer people came to Alex&apos;s shop. Alex thought: &quot;Should I sell ice creams for less money? Maybe at $2&quot;
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              If he does this, will he make a profit or loss?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-lg text-red-800 mb-4">
                He will make a loss as the cost of making an ice cream is $3.
              </p>
              <p className="text-lg text-red-800 mb-4">
                He also did the same math that if he sells below his cost, he will make a loss.
              </p>
              <p className="text-lg text-red-800">
                So Alex decided to wait. By the end of the day, he sold the ice creams at $3 each, the same amount it cost him to make them.
              </p>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Alex didn&apos;t earn extra money, but he also didn&apos;t lose money, he did break-even.
            </p>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              Is it better to break-even or to sell at a loss?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-xl font-bold text-green-800">
                Break-even is better because you don&apos;t lose money.
              </p>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Alex was smart to wait and break-even instead of losing money!
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              What else can Alex do to make sure he always makes money?
            </p>
            <div className="bg-blue-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <ul className="text-lg text-blue-800 space-y-2 text-left">
                <li>• Sell ice creams only at $3 or higher</li>
                <li>• If people aren&apos;t buying, hold off making too many ice creams so he can avoid losses and wasted.</li>
                <li>• Try adding new flavors to attract more customers.</li>
                <li>• Spend less on advertisements</li>
              </ul>
            </div>
            <p className="text-2xl text-gray-700 font-semibold">
              What rules should Alex follow to make sure he always earns money?
            </p>
          </div>
        );

      case 13:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-orange-800">Break-Even Day</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              One day, fewer people came to Alex&apos;s shop. Alex thought: &quot;Should I sell ice creams for less money? Maybe at $2&quot;
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              If he does this, will he make a profit or loss?
            </p>
            <div className="bg-red-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-lg text-red-800 mb-4">
                He will make a loss as the cost of making an ice cream is $3.
              </p>
              <p className="text-lg text-red-800 mb-4">
                He also did the same math that if he sells below his cost, he will make a loss.
              </p>
              <p className="text-lg text-red-800">
                So Alex decided to wait. By the end of the day, he sold the ice creams at $3 each, the same amount it cost him to make them.
              </p>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Alex didn&apos;t earn extra money, but he also didn&apos;t lose money, he did break-even.
            </p>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              Is it better to break-even or to sell at a loss?
            </p>
            <div className="bg-green-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <p className="text-xl font-bold text-green-800">
                Break-even is better because you don&apos;t lose money.
              </p>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Alex was smart to wait and break-even instead of losing money!
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              What else can Alex do to make sure he always makes money?
            </p>
            <div className="bg-blue-100 p-6 rounded-lg max-w-2xl mx-auto mb-6">
              <ul className="text-lg text-blue-800 space-y-2 text-left">
                <li>• Sell ice creams only at $3 or higher</li>
                <li>• If people aren&apos;t buying, hold off making too many ice creams so he can avoid losses and wasted.</li>
                <li>• Try adding new flavors to attract more customers.</li>
                <li>• Spend less on advertisements</li>
              </ul>
            </div>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              What rules should Alex follow to make sure he always earns money?
            </p>
            <div className="bg-purple-100 p-6 rounded-lg max-w-2xl mx-auto">
              <ul className="text-lg text-purple-800 space-y-2 text-left">
                <li>• Always sell above cost</li>
                <li>• Don&apos;t waste ice creams</li>
                <li>• Try new flavors to attract more buyers</li>
                <li>• Reduce costs if possible</li>
              </ul>
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
          
          {currentScreen < 13 && (
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