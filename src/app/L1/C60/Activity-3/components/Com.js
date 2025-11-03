"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";

const contentData = {
    steps: [
        {
            id: 0,
            type: "equipment",
            title: "Chef Max is almost ready to sell his yummy burgers. All he needs is to get a few things to set up a shop:",
            items: [
                { name: "Safe Stove", price: "$10", image: s1 },
                { name: "Pan", price: "$5", image: s2 },
                { name: "Food truck", price: "$15", image: s3 }
            ]
        },
        {
            id: 1,
            type: "summary",
            content: "So, he needs $30! Max borrowed $30 from his friend to get started."
        },
        {
            id: 2,
            type: "summary",
            content: "This is Seed Money - the first small amount of money used to start a new business. It’s called ‘seed’ money because — just like a seed grows into a tree, this money helps a small idea grow into a big company!"
        },
        {
            id: 3,
            type: "scenario",
            title: "Scenario A:",
            content: "Max decides to sell each burger for $6. It costs him $5 to make the burger."
        },
        {
            id: 4,
            type: "question",
            content: "Is he making a profit or a loss?"
        },
        {
            id: 5,
            type: "answer",
            question: "Is he making a profit or a loss?",
            answer: "He is making a $1 profit on each burger."
        },
        {
            id: 6,
            type: "calculation",
            content: "What should he do with this $20 profit?"
        },
        {
            id: 7,
            type: "choice",
            question: "What should he do with this $20 profit?",
            options: [
                "Celebrate!",
                "Buy more items for his burger shop",
                "Return the money to his friend"
            ]
        },
        {
            id: 8,
            type: "summary",
            content: "Return the money to his friend. That way, he will earn his trust and can borrow more if required. OR\n\n Return a small amount each month so that his loan get paid and he has enough money to buy ingredients for burgers."
        },
        {
            id: 9,
            type: "scenario",
            title: "Scenario B:",
            content: "Max thought that he would keep the cost of the burger less to attract more customers. So he decided to sell each burger for $4. But it actually costs him $5 to make the burger."
        },
        {
            id: 10,
            type: "question",
            content: "Is he making a profit or loss?"
        },
        {
            id: 11,
            type: "answer",
            question: "Is he making a profit or loss?",
            answer: "He is making a $1 loss on each burger."
        },
        {
            id: 12,
            type: "calculation",
            content: "If Max sells 20 burgers per day, he makes a $20 loss per day. Instead of earning money, now he owes money! He will get more people to come to his shop but may run out of ingredients to serve them."
        }
    ]
};

// Interactive choice step with feedback shown only after Next
function ChoiceStep({ stepData, step, setStep }) {
    const [selected, setSelected] = useState("");
    const [showFeedback, setShowFeedback] = useState(false);

    const handleNext = () => {
        // NOTE: I am making an assumption here that the correct answer is "Return the money to his friend"
        // and that you want to show feedback only on this correct choice.
        // Also, the original code had an extra condition on stepData.feedback, but the contentData object doesn't have a 'feedback' property.
        // For the sake of fixing the primary error and allowing the app to continue, 
        // I will remove the logic that relies on 'feedback' and simply advance the step.
        // If you want to add feedback, you'd need to update the contentData object.

        // Simply advance to the next step
        setStep((prev) => prev + 1);
    };

    return (
        <div>
            <p className="text-xl font-semibold mb-6">{stepData.question}</p>
            <div className="space-y-3 mb-4">
                {stepData.options.map((option, index) => (
                    <label key={index} className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="choice"
                            value={option}
                            checked={selected === option}
                            onChange={() => { setSelected(option); setShowFeedback(false); }}
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>
            {!showFeedback && (
                <button
                    className="mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-xl shadow hover:bg-yellow-600"
                    disabled={!selected}
                    onClick={handleNext}
                >
                    Next
                </button>
            )}
            {/* The feedback logic is commented out/simplified as contentData lacks the 'feedback' property */}
            {/* {showFeedback && (
                <div className="mt-6 bg-green-50 p-4 rounded-lg text-left">
                    <button
                        className="mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-xl shadow hover:bg-yellow-600"
                        onClick={() => setStep((prev) => prev + 1)}
                    >
                        Next
                    </button>
                </div>
            )} */}
        </div>
    );
}
    
// The renderStep function must now accept step and setStep
const renderStep = (stepData, step, setStep) => {
    switch (stepData.type) {
        case "equipment":
            return (
                <div>
                    <p className="mb-6 text-xl">{stepData.title}</p>
                    <div className="space-y-4">
                        {stepData.items.map((item, index) => (
                            <div key={index} className="flex items-center p-4 rounded-lg">
                                <div className="flex-1">
                                    <span className="text-xl font-semibold">{item.name}</span>
                                </div>
                                <div className="mx-4">
                                    <Image src={item.image} alt={item.name} width={80} height={80} className="rounded" />
                                </div>
                                <div className="flex-1 text-right">
                                    <span className="font-bold text-green-600 text-xl">{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );

        case "summary":
            return <p className="text-xl">{stepData.content}</p>;

        case "scenario":
            return (
                <div>
                    <h2 className="text-2xl font-bold mb-4">{stepData.title}</h2>
                    <p className="text-xl">{stepData.content}</p>
                </div>
            );

        case "question":
            return <p className="text-xl font-semibold">{stepData.content}</p>;

        case "answer":
            return (
                <div>
                    <p className="text-xl font-semibold mb-6">{stepData.question}</p>
                    <p className="text-xl text-green-600 font-bold">{stepData.answer}</p>
                </div>
            );

        case "calculation":
            return <p className="text-xl">{stepData.content}</p>;

        case "choice":
            return (
                // Now passing step and setStep as props
                <ChoiceStep stepData={stepData} step={step} setStep={setStep} />
            );

        default:
            return <p className="text-xl">{stepData.content}</p>;
    }
};

export default function Com() {
    const [step, setStep] = useState(0);

    const nextStep = () => setStep((prev) => prev + 1);

    const currentStepData = contentData.steps[step];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-6 text-center">
            <div className="max-w-2xl bg-white shadow-lg rounded-2xl p-8 text-xl">
                {/* Now passing step and setStep to renderStep */}
                {renderStep(currentStepData, step, setStep)}

                {/* The main Next button should NOT render if the current step is a "choice" type 
                because the choice step has its own Next button handled by ChoiceStep component. */}
                {step < contentData.steps.length - 1 && currentStepData.type !== "choice" && (
                    <button
                        onClick={nextStep}
                        className="mt-8 px-8 py-3 bg-yellow-500 text-white font-semibold rounded-xl shadow hover:bg-yellow-600 transition-colors text-lg"
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
}