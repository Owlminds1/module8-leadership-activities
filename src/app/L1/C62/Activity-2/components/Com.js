"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";

// Content data
const contentData = {
  steps: [
    {
      id: 0,
      type: "intro",
      title: "",
      description:
        "Ron is almost ready to begin his sandwich business. He does some ground work and shares a rough draft of his business plan with Shaun. Shaun smiles and says, “This is a good start! Let’s also work out the cost of making it.” Before starting any business, we must calculate the cost i.e. how much money we will spend and estimate the number of customers. This helps in deciding the ingredients to buy.",
      image: s1,
    },
    {
      id: 1,
      type: "questions",
      content:
        "How much money will you need to buy ingredients [such as bread, peanut butter and napkins]? How much money will you spend on promotions? [example, make posters, ask friends to recommend it] How many people do you think will be interested in buying the sandwiches? Shaun draws a table and asks Ron to fill it up to record the information!",
    },
    {
      id: 2,
      type: "tableV2",
      title: "",
      tableData: {
        headers: [
          "Item",
          "Cost Per Item",
          "Quantity Needed (for ~40 people)",
          "Total Cost (auto)",
        ],
        rows: [
          {
            item: "A Loaf of Bread",
            costPerItem: "$1 per loaf",
            quantity: "_____",
            totalCost: "_____",
          },
          {
            item: "A Jar of Peanut Butter",
            costPerItem: "$12 per jar",
            quantity: "_____",
            totalCost: "_____",
          },
          {
            item: "Some Paper Plates & Napkins",
            costPerItem: "$1 per set",
            quantity: "_____",
            totalCost: "_____",
          },
          {
            item: "TOTAL",
            costPerItem: "—",
            quantity: "—",
            totalCost: "_____",
          },
        ],
      },
    },
    {
      id: 3,
      type: "table",
      tableData: {
        headers: [
          "Item",
          "Cost Per Item",
          "Quantity Needed (for ~40 people)",
          "Total Cost (auto)",
        ],
        rows: [
          {
            item: "A Loaf of Bread",
            costPerItem: "$1 per loaf",
            quantity: "45 loaves",
            totalCost: "$45",
          },
          {
            item: "A Jar of Peanut Butter",
            costPerItem: "$12 per jar",
            quantity: "3 jars",
            totalCost: "$36",
          },
          {
            item: "Some Paper Plates & Napkins",
            costPerItem: "$1 per set",
            quantity: "45 sets",
            totalCost: "$45",
          },
          {
            item: "TOTAL",
            costPerItem: "—",
            quantity: "—",
            totalCost: "$126",
          },
        ],
      },
    },
    {
      id: 4,
      type: "advertising",
      content:
        "Ron also needs money to advertise so he can make posters to tell people about his sandwiches. Let's say the total cost for making 100 posters is $50 So this money will be added to the total amount i.e. $126 + $50 = $176.",
    },
    {
      id: 5,
      type: "conclusion",
      content:
        "Now Ron knows how much money he needs to start his business. This is called budget planning. It helps businesses prepare and avoid running out of materials or money.",
    },
  ],
};

// Mini interactive parts for tableV2
const tableV2Parts = [
  {
    question: "What do you think the “Item” column represents?",
    answer:
      "It shows what Ron needs to buy to make sandwiches: bread, peanut butter, plates, and napkins.",
  },
  {
    question: "What does the “Cost Per Item” column tell us?",
    answer:
      "It tells us how much one loaf of bread, one jar of peanut butter, or one pack of napkins would cost.",
  },
  {
    question: "Why do we need the “Quantity” column?",
    answer:
      "Ron needs to know how many items to buy based on how many people would buy the sandwiches.",
  },
  {
    question: "What does the “Total Cost” column show?",
    answer:
      "It shows the total money to be spent for each item. It is important for Ron to know how many people will buy the sandwiches to correctly set the quantity. Only after that can he know the total cost to start the business.",
  },
  {
    question: "But how can he estimate the quantity?",
    answer:
      "We don’t know the exact number, so we would need to make a smart guess. Last year at the fair, 100 people came on the first day. Since Ron is starting small, let’s plan for about half the number i.e. around 40 people.",
  },
];

// Step renderer
const renderStep = (stepData, tableV2Step, setTableV2Step, nextStep, tableV2Mode, setTableV2Mode) => {
  switch (stepData.type) {
    case "intro":
      return (
        <div className="text-center">
          <p className="text-xl leading-relaxed mb-6">{stepData.description}</p>
          <div className="flex justify-center">
            <Image src={stepData.image} alt="Ron" width={400} height={400} />
          </div>
        </div>
      );

    case "questions":
      return (
        <div className="text-center text-xl leading-relaxed space-y-4">
          <p>
            How much money will you need to buy ingredients [such as bread,
            peanut butter and napkins]?
          </p>
          <p>
            How much money will you spend on promotions? For example, you can
            make posters to tell people about your business.
          </p>
          <p>
            How many people do you think will be interested in buying the
            sandwiches?
          </p>
          <p>
            Shaun draws a table and asks Ron to fill it up to record the
            information!
          </p>
        </div>
      );

    case "tableV2":
      const part = tableV2Parts[tableV2Step];
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Interactive Q&A */}
          <div className="text-xl space-y-6">
            <div className="bg-yellow-50 p-4 rounded-xl border-l-4 border-yellow-400">
              <p className="font-semibold text-yellow-800">{part.question}</p>
              {tableV2Mode === "answer" && (
                <p className="mt-2 text-gray-800 italic">{part.answer}</p>
              )}
            </div>
            <div className="flex justify-center mt-6">
              {tableV2Step < tableV2Parts.length - 1 ? (
                tableV2Mode === "question" ? (
                  <button
                    onClick={() => setTableV2Mode("answer")}
                    className="px-8 py-3 bg-blue-600 text-white rounded-xl text-lg shadow-md hover:bg-blue-700 transition"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={() => { setTableV2Step((prev) => prev + 1); setTableV2Mode("question"); }}
                    className="px-8 py-3 bg-blue-600 text-white rounded-xl text-lg shadow-md hover:bg-blue-700 transition"
                  >
                    Next
                  </button>
                )
              ) : (
                tableV2Mode === "question" ? (
                  <button
                    onClick={() => setTableV2Mode("answer")}
                    className="px-8 py-3 bg-green-600 text-white rounded-xl text-lg shadow-md hover:bg-green-700 transition"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={nextStep}
                    className="px-8 py-3 bg-green-600 text-white rounded-xl text-lg shadow-md hover:bg-green-700 transition"
                  >
                    Next
                  </button>
                )
              )}
            </div>
          </div>

          {/* Right: Table */}
          <div>
            <table className="w-full border-2 border-gray-300 text-lg">
              <thead>
                <tr className="bg-blue-100">
                  {stepData.tableData.headers.map((header, i) => (
                    <th
                      key={i}
                      className="border-2 border-gray-300 px-4 py-3 font-bold text-center"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stepData.tableData.rows.map((row, i) => (
                  <tr
                    key={i}
                    className={
                      i === stepData.tableData.rows.length - 1
                        ? "bg-yellow-100 font-bold"
                        : ""
                    }
                  >
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">
                      {row.item}
                    </td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">
                      {row.costPerItem}
                    </td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">
                      {row.quantity}
                    </td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">
                      {row.totalCost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case "table":
      return (
        <div>
          <table className="w-full border-2 border-gray-300 text-lg">
            <thead>
              <tr className="bg-blue-100">
                {stepData.tableData.headers.map((header, index) => (
                  <th
                    key={index}
                    className="border-2 border-gray-300 px-4 py-3 font-bold text-center"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stepData.tableData.rows.map((row, index) => (
                <tr
                  key={index}
                  className={
                    index === stepData.tableData.rows.length - 1
                      ? "bg-yellow-100 font-bold"
                      : ""
                  }
                >
                  <td className="border-2 border-gray-300 px-4 py-3 text-center">
                    {row.item}
                  </td>
                  <td className="border-2 border-gray-300 px-4 py-3 text-center">
                    {row.costPerItem}
                  </td>
                  <td className="border-2 border-gray-300 px-4 py-3 text-center">
                    {row.quantity}
                  </td>
                  <td className="border-2 border-gray-300 px-4 py-3 text-center">
                    {row.totalCost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "advertising":
      return (
        <div className="text-center text-xl space-y-4">
          <p>
            I have added a buffer i.e. 45 loaves for 40 people. Planning with a buffer ensures everyone gets a sandwich. It’s smart because some sandwiches may get a higher demand or some bread might not be usable. 
          </p>
          <br />
          <p>
            Ron also needs money to advertise so he can make posters to tell
            people about his sandwiches.
          </p>
          <p>
            Let&apos;s say the total cost for making 100 posters is{" "}
            <span className="font-bold text-green-600">$50</span>.
          </p>
          <p>
            So this money will be added to the total amount i.e.{" "}
            <span className="font-bold text-blue-600">$126 + $50 = $176</span>.
          </p>
        </div>
      );

    case "conclusion":
      return (
        <div className="text-center bg-green-50 p-6 rounded-xl border-2 border-green-300 text-xl">
          Now Ron knows how much money he needs to start his business. This is
          called <span className="font-bold text-green-700">budget planning</span>.
        </div>
      );

    default:
      return null;
  }
};

export default function Com() {
  const [step, setStep] = useState(0);
  const [tableV2Step, setTableV2Step] = useState(0);
  const [tableV2Mode, setTableV2Mode] = useState("question"); // "question" or "answer"
  const currentStep = contentData.steps[step];

  const nextStep = () => {
    setStep((prev) => prev + 1);
    setTableV2Step(0);
    setTableV2Mode("question");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex justify-center items-center p-6">
      <div className="max-w-8xl bg-white p-8 rounded-2xl shadow-xl w-full">
        {currentStep.type === "tableV2"
          ? renderStep(currentStep, tableV2Step, setTableV2Step, nextStep, tableV2Mode, setTableV2Mode)
          : renderStep(currentStep, tableV2Step, setTableV2Step, nextStep)}
        {currentStep.type !== "tableV2" && step < contentData.steps.length - 1 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={nextStep}
              className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
