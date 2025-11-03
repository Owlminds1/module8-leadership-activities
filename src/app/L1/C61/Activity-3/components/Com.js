"use client";
import { useState } from "react";

export default function Com() {
  // Sellers and items data
  const sellers = [
    {
      name: "Damian",
      items: [
        { name: "Strawberries", price: 5 },
        { name: "Deli Ham Slice", price: 4 },
        { name: "Lettuce", price: 5 }
      ],
      reasons: ["High Quality", "Fresh", "Imported"]
    },
    {
      name: "Tina",
      items: [
        { name: "Apple", price: 4 },
        { name: "Banana", price: 1 },
        { name: "Eggs", price: 4 }
      ],
      reasons: ["Imported", "High Quality", "Organic"]
    },
    {
      name: "Felicia",
      items: [
        { name: "Watermelon", price: 2 },
        { name: "Baby Spinach", price: 4 },
        { name: "Yoghurt", price: 3 }
      ],
      reasons: ["Local", "Rare", "High Quality"]
    }
  ];

  const buyerReasons = [
    "Pricing",
    "Quality",
    "Appearance",
    "Personal Preference",
    "Veganism or Vegetarianism",
    "Local sourcing",
    "Import quality",
    "Trying something new"
  ];

  // Section B state
  const [choices, setChoices] = useState([null, null, null]);
  const [reasons, setReasons] = useState([[], [], []]);

  // Section C state
  const [bundles, setBundles] = useState([
    { addon: null, bundledPrice: '', promo: '' },
    { addon: null, bundledPrice: '', promo: '' },
    { addon: null, bundledPrice: '', promo: '' }
  ]);

  // Handlers
  const handleChoice = (sellerIdx, itemIdx) => {
    const newChoices = [...choices];
    newChoices[sellerIdx] = itemIdx;
    setChoices(newChoices);
  };

  const handleReason = (sellerIdx, reason) => {
    const current = reasons[sellerIdx];
    const newReasons = [...reasons];
    if (current.includes(reason)) {
      newReasons[sellerIdx] = current.filter(r => r !== reason);
    } else {
      newReasons[sellerIdx] = [...current, reason];
    }
    setReasons(newReasons);
  };

  const handleBundleAddon = (sellerIdx, addonIdx) => {
    const newBundles = [...bundles];
    newBundles[sellerIdx].addon = addonIdx;
    setBundles(newBundles);
  };

  const handleBundlePrice = (sellerIdx, value) => {
    const newBundles = [...bundles];
    newBundles[sellerIdx].bundledPrice = value;
    setBundles(newBundles);
  };

  const handleBundlePromo = (sellerIdx, value) => {
    const newBundles = [...bundles];
    newBundles[sellerIdx].promo = value;
    setBundles(newBundles);
  };

  // Screen state
  // 1: Section A, 2: Section B, 3: Bundling Intro, 4: Bundling Benefits, 5: Bundling Example, 6: Section C
  const [screen, setScreen] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl p-8">
          {screen === 1 && (
            <>
              <h1 className="text-3xl font-bold mb-4 text-purple-800">Let’s further understand winning strategies to sell items!</h1>
              <div className="mb-8">
                <p className="text-lg text-purple-900 font-semibold mb-2">Here are some items sold by multiple sellers. Each item is priced according to season, shelf-life, and market rate. The reasons of sellers is listed alongside.</p>
              </div>
              {/* Section A: List of Items */}
              <h2 className="text-2xl font-bold mb-4 text-pink-700">A: List of Items on Sale</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {sellers.map((seller, idx) => (
                  <div key={seller.name} className="bg-pink-50 rounded-xl p-4 shadow">
                    <h3 className="text-xl font-bold text-pink-800 mb-2">{seller.name}</h3>
                    <ul className="mb-2">
                      {seller.items.map(item => (
                        <li key={item.name} className="text-pink-900">{item.name} <span className="text-pink-700">${item.price} per kg</span></li>
                      ))}
                    </ul>
                    <div className="text-sm text-pink-700">Seller’s Reason: {seller.reasons.join(", ")}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setScreen(2)}
                  className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-xl"
                >
                  Next
                </button>
              </div>
            </>
          )}
          {screen === 2 && (
            <>
              <div className="mb-8">
                <p className="text-lg text-purple-900 font-semibold mb-2">You are a customer who has to decide which item suits your needs the best. Select from drop down. Select a reason for each choice in your response. Check mark as many as applicable.</p>
              </div>
              {/* Section B: Select Item & Reasons */}
              <h2 className="text-2xl font-bold mb-4 text-purple-700">B: Select An Item From Each Seller</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {sellers.map((seller, sellerIdx) => (
                  <div key={seller.name} className="bg-purple-50 rounded-xl p-4 shadow">
                    <h3 className="text-xl font-bold text-purple-800 mb-2">{seller.name}</h3>
                    <label className="block mb-2 font-semibold">I will choose:</label>
                    <select
                      className="w-full p-2 rounded border mb-2"
                      value={choices[sellerIdx] ?? ''}
                      onChange={e => handleChoice(sellerIdx, Number(e.target.value))}
                    >
                      <option value="" disabled>Select an item</option>
                      {seller.items.map((item, itemIdx) => (
                        <option key={item.name} value={itemIdx}>{item.name} (${item.price})</option>
                      ))}
                    </select>
                    <div className="mt-2">
                      <div className="font-semibold mb-1">Buyer’s Reasons:</div>
                      {buyerReasons.map(reason => (
                        <label key={reason} className="block text-sm mb-1">
                          <input
                            type="checkbox"
                            checked={reasons[sellerIdx].includes(reason)}
                            onChange={() => handleReason(sellerIdx, reason)}
                            className="mr-2"
                          />
                          {reason}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setScreen(3)}
                  className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-xl"
                >
                  Next
                </button>
              </div>
            </>
          )}
          {screen === 3 && (
            <>
              <div className="bg-purple-100 rounded-xl p-6 text-center text-xl font-bold text-purple-800">
                Good choices! So you see how so many factors influence the way items are sold!<br /><br />
                Now here’s a strategy that sellers use to make a profit and ensure that as many items as possible get sold!<br /><br />
                <span className="text-green-700">Bundling & Promotions</span><br />
                Bundling is a great strategy to push sales of multiple items together. Buyers feel that they are getting a good deal (value for money) and pay more money upfront.<br /><br />
              </div>
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setScreen(4)}
                  className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-xl"
                >
                  Next
                </button>
              </div>
            </>
          )}
          {screen === 4 && (
            <>
              <div className="bg-purple-100 rounded-xl p-6 text-center text-xl font-bold text-purple-800">
                As a seller, when you bundle and promote your product, you:<br />
                <ul className="list-disc list-inside text-left max-w-2xl mx-auto mt-2 mb-2">
                  <li>Put multiple items together to sell at a single price</li>
                  <li>Adjust pricing without making the customers feel weary of raised prices</li>
                  <li>Sell products that you may not have usually sold without bundling with other items.</li>
                </ul>
              </div>
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setScreen(5)}
                  className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-xl"
                >
                  Next
                </button>
              </div>
            </>
          )}
          {screen === 5 && (
            <>
              <div className="bg-purple-100 rounded-xl p-6 text-center text-xl font-bold text-purple-800">
                <span className="text-pink-700 font-bold">Let’s understand the positive impact of bundling with an example:</span><br />
                A company like Chilli’s, known for its delicious meals, didn’t want to raise prices during inflation like other restaurants.<br />
                So instead, they tried bundling.<br />
                By introducing “3 for Me” meals with a starting price of $11, they put together an appetizer, a main course, and a beverage with free refills in a bundle and promoted it.<br />
                Customers bought in high numbers increasing profit over time.<br /><br />
              </div>
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setScreen(6)}
                  className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-xl"
                >
                  Next
                </button>
              </div>
            </>
          )}
          {screen === 6 && (
            <>
              {/* Section C: Bundle Items */}
              <h2 className="text-2xl font-bold mb-4 text-green-700">C: Bundle Items To Be The Best Seller</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {sellers.map((seller, sellerIdx) => {
                  const chosenIdx = choices[sellerIdx];
                  const chosenItem = chosenIdx !== null ? seller.items[chosenIdx] : null;
                  return (
                    <div key={seller.name} className="bg-green-50 rounded-xl p-4 shadow">
                      <h3 className="text-xl font-bold text-green-800 mb-2">{seller.name}</h3>
                      <div className="mb-2">
                        <span className="font-semibold">ITEM A:</span> {chosenItem ? `${chosenItem.name} ($${chosenItem.price})` : <span className="text-gray-400">Select above</span>}
                      </div>
                      <label className="block mb-2 font-semibold">ADD ONS:</label>
                      <select
                        className="w-full p-2 rounded border mb-2"
                        value={bundles[sellerIdx].addon ?? ''}
                        onChange={e => handleBundleAddon(sellerIdx, Number(e.target.value))}
                        disabled={chosenIdx === null}
                      >
                        <option value="" disabled>Select add-on</option>
                        {seller.items.map((item, itemIdx) => (
                          itemIdx !== chosenIdx && <option key={item.name} value={itemIdx}>{item.name} (${item.price})</option>
                        ))}
                      </select>
                      <div className="mb-2">
                        <span className="font-semibold">PRICE OF EACH ADD ON:</span> {bundles[sellerIdx].addon !== null && chosenIdx !== null ? `$${seller.items[bundles[sellerIdx].addon].price + chosenItem.price}` : <span className="text-gray-400">Select add-on</span>}
                      </div>
                      <label className="block mb-2 font-semibold">BUNDLED PRICE (suggest a concession):</label>
                      <input
                        type="number"
                        className="w-full p-2 rounded border mb-2"
                        value={bundles[sellerIdx].bundledPrice}
                        onChange={e => handleBundlePrice(sellerIdx, e.target.value)}
                        disabled={bundles[sellerIdx].addon === null || chosenIdx === null}
                        min={0}
                      />
                      <label className="block mb-2 font-semibold">Promote your bundle:</label>
                      <input
                        type="text"
                        className="w-full p-2 rounded border mb-2"
                        value={bundles[sellerIdx].promo}
                        onChange={e => handleBundlePromo(sellerIdx, e.target.value)}
                        disabled={bundles[sellerIdx].addon === null || chosenIdx === null}
                      />
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}