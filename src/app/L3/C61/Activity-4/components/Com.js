"use client";
import { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";
import S3 from "../assets/s3.png";

const screenData = [
  {
    id: 0,
    welcome: true,
    company: "Netflix",
    logo: S1,
    message:
      "Welcome to Netflix! Discover how Netflix transformed from DVD rentals to a streaming giant.",
  },
  {
    id: 1,
    question:
      "Do you know what Netflix used to do before it became the streaming giant?",
    showOriginalModel: false,
    showTransformation: false,
    originalModel: "Original Model:",
    originalContent:
      "Netflix started as a DVD rental service, where customers ordered movies online and received DVDs by mail.",
    transformation: "Transformation:",
    transformationContent:
      "As technology advanced, DVD players started becoming obsolete, and the world moved toward faster internet speeds and live streaming. Netflix adapted by switching to online streaming, allowing subscribers to watch movies and shows instantly on their devices.",
    newLogo: S1,
  },
  {
    id: 2,
    question: "What do you think was good about switching to streaming?",
    answer:
      "Customers could watch movies anytime, anywhere, no more waiting for DVDs in the mail! By embracing new technology, Netflix reached more people around the world and became a leader in digital entertainment.",
  },
  {
    id: 3,
    question:
      "What could have been the biggest challenges for Netflix when transforming into a new business model?",
    answer:
      "High cost to build streaming technology, need to buy or produce lots of movies and shows, more competition from other streaming platforms.",
  },
  {
    id: 4,
    activity: true,
    pros: [
      "Global reach: People from many countries can subscribe.",
      "Lower operational costs: No more printing, storing, or shipping DVDs.",
      "Convenience for users: Watch anytime, anywhere on different devices.",
    ],
    cons: [
      "High initial investment: Streaming platforms and servers are expensive.",
      "Competition: Needs to spend more on marketing, because of other streaming platforms like Amazon Prime.",
      "Content costs: It takes a lot of money to create original movies and shows.",
    ],
  },
  {
    id: 5,
    lesson:
      "Lesson: Adapting to technology and customer preferences is key to a company’s long-term success.",
  },
  {
    id: 6,
    welcome: true,
    company: "Amazon",
    logo: S2,
    message:
      "Welcome to Amazon! Explore Amazon's journey from an online bookstore to a global e-commerce ecosystem.",
  },
  {
    id: 7,
    question: "Do you know what Amazon used to sell before becoming a giant company?",
    showOriginalModel: false,
    showTransformation: false,
    originalModel: "Original Model:",
    originalContent:
      "Amazon started as an online bookstore, offering a vast selection of books to customers.",
    transformation: "Transformation:",
    transformationContent:
      "Then the company expanded to electronics, clothing, and a marketplace for third-party sellers.",
    newLogo: S2,
  },
  {
    id: 8,
    question: "Why did Amazon want to sell more than just books?",
    answer:
      "To earn more money, attract more customers, and not rely on just a single product.",
  },
  {
    id: 9,
    activity: true,
    pros: [
      "Diversified revenue: Money comes from many products, not just books.",
      "Global presence: Customers from all over the globe can buy from Amazon.",
      "Marketplace model: Other sellers allow more variety to customers.",
    ],
    cons: [
      "Logistics: Managing warehouses and shipping globally can be challenging.",
      "Legal challenges: Different countries have different rules about company protocol.",
      "Competition: Other e-commerce platforms like eBay, Alibaba and noon are tough competitors.",
      "Customer service: More products can mean more complaints.",
    ],
  },
  {
    id: 10,
    lesson: "Lesson: Diversifying products and innovating services help businesses grow.",
  },
  {
    id: 11,
    question: "Do you know what IKEA used to sell before?",
    showOriginalModel: false,
    showTransformation: false,
    originalModel: "Original Model:",
    originalContent:
      "IKEA used to manage its sales through large stores in cities, offering a wide range of home furnishings.",
    transformation: "Transformation:",
    transformationContent:
      "Later IKEA integrated digital technologies, launching an online store, mobile apps, and augmented reality tools to enhance the shopping experience.",
    newLogo: S3,
  },
  {
    id: 12,
    question: "How does shopping online make things easier for customers?",
    answer:
      "Customers can browse and buy from home, see products in their rooms using AR, and avoid long store visits.",
  },
  {
    id: 13,
    question: "What challenges might IKEA face in maintaining the in-store experience online?",
    answer:
      "Customers don’t get to touch or feel furniture online; delivery logistics may be tricky.",
  },
  {
    id: 14,
    question: "Now let's discuss the pros and cons of this switch",
    pros: [
      "Customer convenience: Shop anytime from home.",
      "Engagement: Apps and AR tools make shopping interesting.",
      "Reaching new customers: People who live away from physical stores can also buy.",
    ],
    cons: [
      "Not easy to replicate an in-store feel: Customers miss trying products while visiting.",
      "Competition: Other online furniture sellers can be competitive.",
      "Tech investment: Online tools and apps require money and maintenance.",
    ],
  },
  {
    id: 15,
    lesson:
      "Key Takeaway: Digital tools improve customer experience but must align with a business’s core values.",
  },
];

function DragDropActivity({ items, state, setState, onNext }) {
  const [error, setError] = useState("");
  const onDragStart = (item, from) => {
    setState({ ...state, dragging: { item, from } });
  };
  const onDrop = (to) => {
    const { item, from } = state.dragging || {};
    if (!item || !from) return;
    const newState = { ...state, dragging: null };
    newState[from] = newState[from].filter((i) => i.text !== item.text);
    newState[to] = [...newState[to], item];
    setState(newState);
  };

  const checkAnswers = () => {
    if (state.all.length > 0) {
      setError("Please sort all items before continuing.");
      return;
    }
    const prosWrong = state.pros.some((i) => i.type !== "pro");
    const consWrong = state.cons.some((i) => i.type !== "con");
    if (prosWrong || consWrong) {
      setError("Some items are misplaced. Try again!");
      return;
    }
    setError("");
    onNext();
  };

  const renderColumn = (label, key, color) => (
    <div className="w-1/3" key={key}>
      <h4 className={`text-xl font-semibold ${color} mb-2`}>{label}</h4>
      <div
        className="min-h-[120px] bg-gray-50 rounded-lg border border-gray-300 p-2"
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => onDrop(key)}
      >
        {state[key].map((item, idx) => (
          <div
            key={item.text + '-' + idx}
            draggable
            onDragStart={() => onDragStart(item, key)}
            className="mb-2 px-4 py-2 bg-white rounded-lg border shadow-sm cursor-move"
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-blue-800 mb-4">
        Drag and drop each item into the correct column
      </h3>
      <div className="flex gap-8">{["all", "pros", "cons"].map((col, i) =>
        renderColumn(
          ["All Items", "Pros", "Cons"][i],
          col,
          ["text-gray-800", "text-green-800", "text-red-800"][i]
        )
      )}</div>
      {error && <div className="mt-4 text-red-600 font-semibold">{error}</div>}
      <div className="mt-6 text-center">
        <button
          onClick={checkAnswers}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition transform hover:scale-105 text-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showOriginalModel, setShowOriginalModel] = useState(false);
  const [showTransformation, setShowTransformation] = useState(false);
  const [dragDropState, setDragDropState] = useState({});

  const nextScreen = () => {
    const data = screenData[currentScreen];

    if (data.welcome) {
      setCurrentScreen(currentScreen + 1);
      return;
    }

    // Show original & transformation step by step
    if ([1, 7, 11].includes(currentScreen)) {
      if (!showOriginalModel) {
        setShowOriginalModel(true);
        return;
      }
      if (!showTransformation) {
        setShowTransformation(true);
        return;
      }
    }

    // Show answer first
    if (data.question && data.answer && !showAnswer) {
      setShowAnswer(true);
      return;
    }

    // Go to next
    if (currentScreen < screenData.length - 1) {
      setCurrentScreen(currentScreen + 1);
      setShowAnswer(false);
      setShowOriginalModel(false);
      setShowTransformation(false);
    }
  };

  const currentData = screenData[currentScreen];
  const isDragDrop = !!currentData.activity;

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        {/* Welcome */}
        {currentData.welcome && (
          <div className="flex flex-col items-center gap-8 mb-8">
            <Image src={currentData.logo} alt="" width={400} height={400} />
            <h1 className="text-3xl font-bold text-blue-800">
              {currentData.company}
            </h1>
            <p className="text-lg text-blue-700 text-center max-w-xl">
              {currentData.message}
            </p>
            <button
              onClick={nextScreen}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 text-lg"
            >
              Next
            </button>
          </div>
        )}

        {/* Header */}
        {!currentData.welcome && (
          (currentScreen < 6 && (
            <Header img={S1} title="Netflix: From DVD Rentals to Streaming Giant" />
          )) ||
          (currentScreen >= 6 && currentScreen <= 10 && (
            <Header img={S2} title="Amazon: From Online Bookstore to E-commerce Ecosystem" />
          )) ||
          (currentScreen > 10 && (
            <Header img={S3} title="IKEA: Embracing Digital Transformation" />
          ))
        )}

        {/* Question */}
        {currentData.question && (
          <div className="bg-blue-100 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">
              Question:
            </h2>
            <p className="text-lg text-blue-700">{currentData.question}</p>
          </div>
        )}

        {/* Show original model / transformation */}
        {[1, 7, 11].includes(currentScreen) && showOriginalModel && (
          <Section title={currentData.originalModel} content={currentData.originalContent} />
        )}
        {[1, 7, 11].includes(currentScreen) && showTransformation && (
          <Section title={currentData.transformation} content={currentData.transformationContent} />
        )}

        {/* Show answer */}
        {showAnswer && currentData.answer && (
          <div className="bg-green-100 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Answer:</h3>
            <p className="text-lg text-green-700">{currentData.answer}</p>
          </div>
        )}

        {/* Drag drop */}
        {isDragDrop && (
          <DragDropActivity
            items={[
              ...currentData.pros.map((t) => ({ text: t, type: "pro" })),
              ...currentData.cons.map((t) => ({ text: t, type: "con" })),
            ]}
            state={
              dragDropState[currentScreen] || {
                all: [
                  ...currentData.pros.map((t) => ({ text: t, type: "pro" })),
                  ...currentData.cons.map((t) => ({ text: t, type: "con" })),
                ],
                pros: [],
                cons: [],
              }
            }
            setState={(ns) =>
              setDragDropState((p) => ({ ...p, [currentScreen]: ns }))
            }
            onNext={nextScreen}
          />
        )}

        {/* Pros/Cons simple */}
        {!isDragDrop && currentData.pros && (
          <List title="Pros" items={currentData.pros} color="green" />
        )}
        {!isDragDrop && currentData.cons && (
          <List title="Cons" items={currentData.cons} color="red" />
        )}

        {/* Lesson */}
        {currentData.lesson && (
          <div className="bg-yellow-100 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Key Takeaway:
            </h3>
            <p className="text-lg text-yellow-700">{currentData.lesson}</p>
          </div>
        )}

        {/* Next button */}
        {currentScreen < screenData.length - 1 &&
          !currentData.activity &&
          !currentData.welcome && (
            <div className="flex justify-center">
              <button
                onClick={nextScreen}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 text-lg"
              >
                Next
              </button>
            </div>
          )}
      </div>
    </div>
  );
}

function Header({ img, title }) {
  return (
    <div className="flex items-center justify-center gap-8 mb-8">
      <Image src={img} alt="" width={120} height={120} />
      <h1 className="text-2xl font-bold text-blue-800">{title}</h1>
    </div>
  );
}

function Section({ title, content }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-lg text-gray-700">{content}</p>
    </div>
  );
}

function List({ title, items, color }) {
  const colorMap = {
    green: "text-green-700",
    red: "text-red-700",
  };
  return (
    <div className="mb-6">
      <h3
        className={`text-xl font-semibold ${
          color === "green" ? "text-green-800" : "text-red-800"
        } mb-3`}
      >
        {title}:
      </h3>
      <ul className="list-disc list-inside space-y-2">
        {items.map((t, i) => (
          <li key={i} className={`text-lg ${colorMap[color]}`}>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
