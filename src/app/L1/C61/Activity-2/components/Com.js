"use client";
import { useState } from "react";

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const nextScreen = () => {
    if (currentScreen < 29) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 0:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-purple-800">Apple Waiting Story</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Maya bought apples at $3 and wanted to sell at $4. No one bought them for 2 days. On the 3rd day, she sold all at $4.
            </p>
          </div>
        );

      case 1:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-purple-800">Apple Waiting Story</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Maya bought apples at $3 and wanted to sell at $4. No one bought them for 2 days. On the 3rd day, she sold all at $4.
            </p>
            <p className="text-2xl text-gray-700 font-semibold">
              So waiting was a good decision?
            </p>
          </div>
        );

      case 2:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-purple-800">Apple Waiting Story</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Maya bought apples at $3 and wanted to sell at $4. No one bought them for 2 days. On the 3rd day, she sold all at $4.
            </p>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              So waiting was a good decision?
            </p>
            <div className="bg-green-100 p-8 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-green-800">
                Yes, she made a profit by waiting a bit.
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-orange-800">Mango Break-Even Story</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Maya bought mangoes for $3. They were going rotten, so she sold them for $3.
            </p>
          </div>
        );

      case 4:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-orange-800">Mango Break-Even Story</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Maya bought mangoes for $3. They were going rotten, so she sold them for $3.
            </p>
            <p className="text-2xl text-gray-700 font-semibold">
              Did she make a good decision?
            </p>
          </div>
        );

      case 5:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-orange-800">Mango Break-Even Story</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Maya bought mangoes for $3. They were going rotten, so she sold them for $3.
            </p>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              Did she make a good decision?
            </p>
            <div className="bg-orange-100 p-8 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-orange-800">
                Yes, she avoided loss. Break-even is better than losing it all.
              </p>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-green-800">Quick Sale Profit Story</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Maya bought bananas for $1 and sold them immediately at $2.
            </p>
          </div>
        );

      case 7:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-green-800">Quick Sale Profit Story</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Maya bought bananas for $1 and sold them immediately at $2.
            </p>
            <p className="text-2xl text-gray-700 font-semibold">
              Did she make a good decision?
            </p>
          </div>
        );

      case 8:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-green-800">Quick Sale Profit Story</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Maya bought bananas for $1 and sold them immediately at $2.
            </p>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              Did she make a good decision?
            </p>
            <div className="bg-green-100 p-8 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-green-800">
                Yes, she made a quick profit.
              </p>
            </div>
          </div>
        );

      case 9:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-red-800">Waiting Too Long Story</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Maya bought grapes for $2 and waited 5 days to sell at $3, but they got spoiled. She could only sell at $1.
            </p>
          </div>
        );

      case 10:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-red-800">Waiting Too Long Story</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Maya bought grapes for $2 and waited 5 days to sell at $3, but they got spoiled. She could only sell at $1.
            </p>
            <p className="text-2xl text-gray-700 font-semibold">
              Did she make a good decision?
            </p>
          </div>
        );

      case 11:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-red-800">Waiting Too Long Story</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Maya bought grapes for $2 and waited 5 days to sell at $3, but they got spoiled. She could only sell at $1.
            </p>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              Did she make a good decision?
            </p>
            <div className="bg-red-100 p-8 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-red-800">
                No, waiting too long caused a bigger loss.
              </p>
            </div>
          </div>
        );

      case 12:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-blue-800">Perishable Item Quick Sale</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Maya bought yogurt for $3 and by night nobody purchased it so she reduced the price to $2 and it got sold.
            </p>
          </div>
        );

      case 13:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-blue-800">Perishable Item Quick Sale</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Maya bought yogurt for $3 and by night nobody purchased it so she reduced the price to $2 and it got sold.
            </p>
            <p className="text-2xl text-gray-700 font-semibold">
              Did she make a good decision?
            </p>
          </div>
        );

      case 14:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-blue-800">Perishable Item Quick Sale</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Maya bought yogurt for $3 and by night nobody purchased it so she reduced the price to $2 and it got sold.
            </p>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              Did she make a good decision?
            </p>
            <div className="bg-blue-100 p-8 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-blue-800">
                Yes, the Perishable Item can get bad faster hence its good decision to avoid bigger loss.
              </p>
            </div>
          </div>
        );

      case 15:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-indigo-800">Small Profit First Story</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Maya sold a small juice box for $1 even though it cost $1. Later, the customer bought a bigger pack too.
            </p>
          </div>
        );

      case 16:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-indigo-800">Small Profit First Story</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Maya sold a small juice box for $1 even though it cost $1. Later, the customer bought a bigger pack too.
            </p>
            <p className="text-2xl text-gray-700 font-semibold">
              Did she make a good decision?
            </p>
          </div>
        );

      case 17:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-indigo-800">Small Profit First Story</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Maya sold a small juice box for $1 even though it cost $1. Later, the customer bought a bigger pack too.
            </p>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              Did she make a good decision?
            </p>
            <div className="bg-indigo-100 p-8 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-indigo-800">
                Yes, sometimes selling small first on cost to cost can lead to more and big sales.
              </p>
            </div>
          </div>
        );

      case 18:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-pink-800">Price Too High Story</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Maya made apple juice which cost her for $2. She tried selling at $4 for 3 days but no one bought. She reduced the price to $3.
            </p>
          </div>
        );

      case 19:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-pink-800">Price Too High Story</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Maya made apple juice which cost her for $2. She tried selling at $4 for 3 days but no one bought. She reduced the price to $3.
            </p>
            <p className="text-2xl text-gray-700 font-semibold">
              Did she make a good decision?
            </p>
          </div>
        );

      case 20:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-pink-800">Price Too High Story</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Maya made apple juice which cost her for $2. She tried selling at $4 for 3 days but no one bought. She reduced the price to $3.
            </p>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              Did she make a good decision?
            </p>
            <div className="bg-pink-100 p-8 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-pink-800">
                Yes, she made some profit instead of waiting too long.
              </p>
            </div>
          </div>
        );

      case 21:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-yellow-800">Big Bundle Profit Story</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Maya made a fruit basket for $5 and sold it as a combo with juice for $8.
            </p>
          </div>
        );

      case 22:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-yellow-800">Big Bundle Profit Story</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Maya made a fruit basket for $5 and sold it as a combo with juice for $8.
            </p>
            <p className="text-2xl text-gray-700 font-semibold">
              Did she make a good decision?
            </p>
          </div>
        );

      case 23:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-yellow-800">Big Bundle Profit Story</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Maya made a fruit basket for $5 and sold it as a combo with juice for $8.
            </p>
            <p className="text-2xl text-gray-700 font-semibold mb-6">
              Did she make a good decision?
            </p>
            <div className="bg-yellow-100 p-8 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-yellow-800">
                Yes, bundling items can increase profit.
              </p>
            </div>
          </div>
        );

      case 24:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-teal-800">When is it better to sell at break-even or small loss?</h1>
          </div>
        );

      case 25:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-teal-800">When is it better to sell at break-even or small loss?</h1>
            <div className="bg-teal-100 p-8 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-teal-800">
                When items are perishable or waiting too long could cause bigger loss.
              </p>
            </div>
          </div>
        );

      case 26:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-cyan-800">Why is it a good idea to sell items together as a bundle?</h1>
          </div>
        );

      case 27:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-cyan-800">Why is it a good idea to sell items together as a bundle?</h1>
            <div className="bg-cyan-100 p-8 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-cyan-800">
                Bundling encourages customers to buy more, makes shopping easier, and can increase total profit.
              </p>
            </div>
          </div>
        );

      case 28:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-rose-800">What happens if you wait too long for a higher price?</h1>
          </div>
        );

      case 29:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-rose-800">What happens if you wait too long for a higher price?</h1>
            <div className="bg-rose-100 p-8 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold text-rose-800">
                Items could spoil, and you might make a bigger loss.
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
          
          {currentScreen < 29 && (
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