"use client";
import { useState } from "react";



const situations = [
  {
    text: "Local bakery shop selling bread and pastries",
    feedback: "Sells bread, cakes directly to people in town.",
    answer: "B2C"
  },
  {
    text: "Toy manufacturer selling to big stores.",
    feedback: "Sells toys to another business",
    answer: "B2B"
  },
  {
    text: "Toy store at the mall",
    feedback: "Sells toys directly to the consumer.",
    answer: "B2C"
  },
  {
    text: "Ice-cream truck outside park",
    feedback: "Sells ice-cream directly to kids in the neighborhood.",
    answer: "B2C"
  },
  {
    text: "Lego store at the airport",
    feedback: "Sells toys directly to the consumer.",
    answer: "B2C"
  },
  {
    text: "Lego website selling lego pack",
    feedback: "Sells toys directly through their website.",
    answer: "B2C Online"
  },
  {
    text: "Lego packs sold on shopping portals, such as Amazon, that provide home delivery",
    feedback: "Business users marketplace to expand reach to customers, and the marketplace provides delivery service.",
    answer: "Marketplace"
  },
  {
    text: "Movie theatres sell tickets to watch movies at the counter.",
    feedback: "Business expect customer to come to their door step to make a purchase",
    answer: "B2C"
  },
  {
    text: "Movie theatres selling tickets to customers online",
    feedback: "Business offers convenience of purchase online",
    answer: "B2C Online"
  },
  {
    text: "Streaming platforms selling subscription to watch movies online",
    feedback: "Sells subscriptions directly to viewers online.",
    answer: "B2C Online"
  },
  {
    text: "Flight tickets booked on travel websites",
    feedback: "Airlines sell flight tickets to customers who can pick from various available options.",
    answer: "Aggregator"
  },
  {
    text: "Flag down a local taxi",
    feedback: "Anyone can hop into the cab that stops for them.",
    answer: "B2C"
  },
  {
    text: "Ride hailing apps such as Uber & Lyft",
    feedback: "Business connects drivers with riders; Uber/Ola don’t own the cars.",
    answer: "Aggregator"
  },
  {
    text: "Restaurant offering fine dining experience to enjoy meal",
    feedback: "Business expects diners can walk into the restaurant ",
    answer: "B2C"
  },
  {
    text: "Restaurant accepting orders online through food delivery apps such as Door Dash",
    feedback: "Business accepts food order through aggregators ",
    answer: "Aggregator"
  },
  {
    text: "Food delivery apps supplying ingredients to restaurants",
    feedback: "Restaurants place order on delivery apps and receive ingredients to cook the meals to be served to diners",
    answer: "B2B Online"
  }
];

const modelOptions = ["B2B", "B2C", "B2B Online", "B2C Online", "Aggregator", "Marketplace"];

const businessModels = [
  { id: "b2c", name: "B2C", items: [] },
  { id: "b2c-online", name: "B2C/B2C Online", items: [] },
  { id: "aggregator", name: "Aggregator", items: [] },
  { id: "b2b", name: "B2B", items: [] }
];

const correctAnswers = {
  "b2c": ["Local bakery shop", "Toy store", "Ice cream truck", "Domino's Pizza"],
  "b2c-online": ["Lego online store", "Netflix", "Domino's Pizza"],
  "aggregator": ["Amazon marketplace", "Food app like: Swiggy / Zomato", "Cap app like: Uber / Ola"],
  "b2b": ["Stationery factory", "Farmers selling to a grocery store", "Toy manufacturer selling to big stores"]
};


export default function Com() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedModel, setSelectedModel] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentSituation = situations[currentIndex];

  const handleSelect = (model) => {
    setSelectedModel(model);
    setShowFeedback(true);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
    setSelectedModel(null);
    setShowFeedback(false);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-bold mb-6 text-blue-800 text-center">Classify the business model</h2>
          <div className="mb-8 text-2xl text-gray-800 text-center">
            {currentSituation.text}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {modelOptions.map((model) => (
              <button
                key={model}
                onClick={() => handleSelect(model)}
                disabled={showFeedback}
                className={`px-6 py-3 rounded-xl font-semibold shadow-md text-lg transition-colors duration-200
                  ${selectedModel === model ? "bg-blue-700 text-white" : "bg-blue-100 hover:bg-blue-200 text-blue-800"}
                  ${showFeedback ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                {model}
              </button>
            ))}
          </div>
          {showFeedback && (
            <div className={`mb-8 p-6 rounded-lg text-xl text-center font-semibold
              ${selectedModel === currentSituation.answer ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
            >
              <div className="mt-2">
                {selectedModel === currentSituation.answer
                  ? "Your answer is Correct!"
                  : `Your answer is Incorrect. Correct answer: ${currentSituation.answer}`}
              </div>
              <br />
              
              {currentSituation.feedback}

            </div>
          )}
          <div className="flex justify-center">
            <button
              onClick={handleNext}
              disabled={!showFeedback || currentIndex === situations.length - 1}
              className={`px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105 text-lg
                ${(!showFeedback || currentIndex === situations.length - 1) ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              Next
            </button>
          </div>
          {currentIndex === situations.length - 1 && showFeedback && (
            <div className="mt-8 text-2xl text-center text-green-700 font-bold">Great job! You completed all situations.</div>
          )}
        </div>
      </div>
    </div>
  );
}