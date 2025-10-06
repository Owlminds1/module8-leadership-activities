"use client";
import { useState } from "react";
import jsPDF from "jspdf";

export default function Com() {
  const [answers, setAnswers] = useState({
    start: "",
    feature: "",
    special: "",
    want: "",
    excited: "",
    confidence: "",
    natural: "",
    end: ""
  });

  const handleInputChange = (key, value) => {
    setAnswers(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text("My Elevator Pitch Planner", 20, 30);
    
    let yPosition = 50;
    
    const sections = [
      {
        title: "1. Be Polite and Confident",
        question: "How will you start your pitch?",
        answer: answers.start,
        example: "Hello, my name is ______. I've created a new Miko feature called ______."
      },
      {
        title: "2. Keep It Short and Simple",
        question: "What is your new Miko feature?",
        answer: answers.feature,
        example: "It's a feature that helps kids learn bedtime stories in fun voices."
      },
      {
        title: "2. Keep It Short and Simple (continued)",
        question: "Why is it special or different from other features?",
        answer: answers.special,
        example: "It's special because Miko can tell funny stories and make kids laugh before bed."
      },
      {
        title: "2. Keep It Short and Simple (continued)",
        question: "What do you want others to do with your idea?",
        answer: answers.want,
        example: "I'd love for kids everywhere to try it and share their favorite stories with Miko!"
      },
      {
        title: "3. Use Excited, Positive Energy",
        question: "What makes you most excited about your idea?",
        answer: answers.excited,
        example: "It makes learning fun and helps kids relax!"
      },
      {
        title: "4. Make Eye Contact & Mind Your Body Language",
        question: "How will you show confidence while speaking?",
        answer: answers.confidence,
        example: "I'll smile and look straight at my audience."
      },
      {
        title: "5. Don't Memorize Like a Robot",
        question: "How will you make your pitch sound natural, like a story?",
        answer: answers.natural,
        example: "I'll pretend I'm telling my idea to a friend."
      },
      {
        title: "6. End with Gratitude",
        question: "How will you end your pitch politely?",
        answer: answers.end,
        example: "Thank you for listening! Would you like to hear one of Miko's stories?"
      }
    ];

    sections.forEach((section, index) => {
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 30;
      }
      
      if (section.answer && section.answer.trim() !== "") {
        doc.setFontSize(12);
        doc.setFont(undefined, 'normal');
        doc.text(section.answer, 20, yPosition);
        yPosition += 15;
      }
    });
    
    doc.save("my-elevator-pitch.pdf");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-6xl bg-white shadow-2xl rounded-3xl p-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-800 mb-4">
            My Elevator Pitch
          </h1>

        </div>

        <div className="space-y-10">
          <div className="bg-green-50 p-6 rounded-2xl shadow-lg">
            <div className="mb-6">
              <p className="text-lg text-gray-700 mb-4">Q: How will you start your pitch?</p>
              <input
                type="text"
                value={answers.start}
                onChange={(e) => handleInputChange('start', e.target.value)}
                className="w-full p-4 border-2 border-green-300 rounded-xl text-lg focus:border-green-500 focus:outline-none"
                placeholder="Your answer here..."
              />
              <p className="text-gray-600 mb-8 mt-4 italic">➡ Example: "Hello, my name is ______. I've created a new Miko feature called ______."</p>

            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-2xl shadow-lg">

            <div className="space-y-6">
              <div>
                <p className="text-lg text-gray-700 mb-4">Q: What is your new Miko feature?</p>
                <input
                  type="text"
                  value={answers.feature}
                  onChange={(e) => handleInputChange('feature', e.target.value)}
                  className="w-full p-4 border-2 border-orange-300 rounded-xl text-lg focus:border-orange-500 focus:outline-none"
                  placeholder="Your answer here..."
                />
                <p className="text-gray-600 mb-8 mt-4 italic">➡ Example: "It's a feature that helps kids learn bedtime stories in fun voices."</p>
              </div>

              <div>
                <p className="text-lg text-gray-700 mb-4">Q: Why is it special or different from other features?</p>
                <input
                  type="text"
                  value={answers.special}
                  onChange={(e) => handleInputChange('special', e.target.value)}
                  className="w-full p-4 border-2 border-orange-300 rounded-xl text-lg focus:border-orange-500 focus:outline-none"
                  placeholder="Your answer here..."
                />
                <p className="text-gray-600 mb-8 mt-4 italic">➡ Example: "It's special because Miko can tell funny stories and make kids laugh before bed."</p>

              </div>

              <div>
                <p className="text-lg text-gray-700 mb-4">Q: What do you want others to do with your idea?</p>
                <input
                  type="text"
                  value={answers.want}
                  onChange={(e) => handleInputChange('want', e.target.value)}
                  className="w-full p-4 border-2 border-orange-300 rounded-xl text-lg focus:border-orange-500 focus:outline-none"
                  placeholder="Your answer here..."
                />
                <p className="text-gray-600 mb-8 mt-4 italic">➡ Example: "I'd love for kids everywhere to try it and share their favorite stories with Miko!"</p>

              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-2xl shadow-lg">
            <div className="mb-6">
              <p className="text-lg text-gray-700 mb-4">Q: What makes you most excited about your idea?</p>
              <input
                type="text"
                value={answers.excited}
                onChange={(e) => handleInputChange('excited', e.target.value)}
                className="w-full p-4 border-2 border-yellow-300 rounded-xl text-lg focus:border-yellow-500 focus:outline-none"
                placeholder="Your answer here..."
              />
              <p className="text-gray-600 mb-8 mt-4 italic">➡ Example: "It makes learning fun and helps kids relax!"</p>

            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl shadow-lg">
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-4 italic">(Teacher Note: remind the student — stand tall, smile, and look into the camera while practicing.)</p>
              <p className="text-lg text-gray-700 mb-4">Q: How will you show confidence while speaking?</p>
              <input
                type="text"
                value={answers.confidence}
                onChange={(e) => handleInputChange('confidence', e.target.value)}
                className="w-full p-4 border-2 border-blue-300 rounded-xl text-lg focus:border-blue-500 focus:outline-none"
                placeholder="Your answer here..."
              />
              <p className="text-gray-600 mb-8 mt-4 italic">➡ Example: "I'll smile and look straight at my audience."</p>

            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-2xl shadow-lg">
            <div className="mb-6">
              <p className="text-lg text-gray-700 mb-4">Q: How will you make your pitch sound natural, like a story?</p>
              <input
                type="text"
                value={answers.natural}
                onChange={(e) => handleInputChange('natural', e.target.value)}
                className="w-full p-4 border-2 border-purple-300 rounded-xl text-lg focus:border-purple-500 focus:outline-none"
                placeholder="Your answer here..."
              />
              <p className="text-gray-600 mb-8 mt-4 italic">➡ Example: "I'll pretend I'm telling my idea to a friend."</p>

            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-2xl shadow-lg">
            <div className="mb-6">
              <p className="text-lg text-gray-700 mb-4">Q: How will you end your pitch politely?</p>
              <input
                type="text"
                value={answers.end}
                onChange={(e) => handleInputChange('end', e.target.value)}
                className="w-full p-4 border-2 border-red-300 rounded-xl text-lg focus:border-red-500 focus:outline-none"
                placeholder="Your answer here..."
              />
              <p className="text-gray-600 mb-8 mt-4 italic">➡ Example: "Thank you for listening! Would you like to hear one of Miko's stories?"</p>

            </div>
          </div>

          <button
            onClick={generatePDF}
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
          Generate PDF
          </button>
        </div>

      </div>
    </div>
  );
}