"use client";

import { useState } from 'react';

const Com = () => {
  const initialCustomers = [
    {
      id: 1,
      name: "Rohan",
      customerId: "003",
      description: "Regular customer who orders 1 T-shirt twice a month.",
      tag: null
    },
    {
      id: 2,
      name: "Veronica",
      customerId: "013",
      description: "Veronica orders T-shirt five to six times a year.",
      tag: null
    },
    {
      id: 3,
      name: "Anika",
      customerId: "245",
      description: "Had an issue with her previous order and complained about getting the wrong size.",
      tag: null
    },
    {
      id: 4,
      name: "Nova",
      customerId: "257",
      description: "Nova complained about faded color and wants his T-shirt exchanged.",
      tag: null
    },
    {
      id: 5,
      name: "Priya",
      customerId: "649",
      description: "First-time customer who gave a 5-star review.",
      tag: null
    },
    {
      id: 6,
      name: "Dave",
      customerId: "796",
      description: "Dave is visiting the city for the first time and drops in at the shop.",
      tag: null
    },
    {
      id: 7,
      name: "Mr. Mehta",
      customerId: "432",
      description: "Placed a bulk order of 30 hoodies for a company event.",
      tag: null
    },
    {
      id: 8,
      name: "Dr. Fowler",
      customerId: "379",
      description: "Dr. Fowler ordered 300 T-shirts for her staff.",
      tag: null
    },
    {
      id: 9,
      name: "Ms. Tan",
      customerId: "215",
      description: "Placed an order of 50 caps for a school sports day.",
      tag: null
    },
    {
      id: 10,
      name: "Mr. Lewis",
      customerId: "508",
      description: "Ordered 120 tote bags for a community marathon event.",
      tag: null
    }
  ];
  const [customers, setCustomers] = useState(initialCustomers);

  const [tags, setTags] = useState([
    { id: 1, name: "Loyal Customer", color: "bg-blue-500" },
    { id: 2, name: "New Customer", color: "bg-green-500" },
    { id: 3, name: "Bulk Order Customer", color: "bg-purple-500" },
    { id: 4, name: "Feedback or Complaint", color: "bg-red-500" }
  ]);

  const [draggedTag, setDraggedTag] = useState(null);

  const handleDragStart = (e, tag) => {
    setDraggedTag(tag);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, customerId) => {
    e.preventDefault();
    if (draggedTag) {
      setCustomers(prev =>
        prev.map(customer =>
          customer.id === customerId
            ? { ...customer, tag: customer.tag && customer.tag.id === draggedTag.id ? null : draggedTag }
            : customer
        )
      );
      setDraggedTag(null);
    }
  };

  const removeTag = (customerId) => {
    setCustomers(prev => 
      prev.map(customer => 
        customer.id === customerId 
          ? { ...customer, tag: null }
          : customer
      )
    );
  };

  // Validation logic for correct answers (all must be tagged and correct)
  const correctAnswers = {
    1: "Loyal Customer", // Rohan
    2: "Loyal Customer", // Veronica
    3: "Feedback or Complaint", // Anika
    4: "Feedback or Complaint", // Nova
    5: "New Customer", // Priya
    6: "New Customer", // Dave
    7: "Bulk Order Customer", // Mr. Mehta
    8: "Bulk Order Customer", // Dr. Fowler
    9: "Bulk Order Customer", // Ms. Tan
    10: "Bulk Order Customer" // Mr. Lewis
  };

  const isCorrect = customers.every(c => {
    if (correctAnswers[c.id]) {
      return c.tag && c.tag.name === correctAnswers[c.id];
    } else {
      return c.tag === null;
    }
  });

  // All must be tagged (no nulls except for those with null answer)
  const allTagged = customers.every(c => c.tag !== null || correctAnswers[c.id] === null);

  if (isCorrect && allTagged) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-green-100 p-8">
        <div className="max-w-2xl bg-white shadow-2xl rounded-2xl p-12 text-center">
          <h1 className="text-5xl font-extrabold text-green-600 mb-6">Bravo!</h1>
          <p className="text-2xl font-semibold text-blue-700 mb-4">You tagged all customers correctly!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-2">
      <div className="max-w-8xl mx-auto flex flex-col gap-6">
        {/* Drag Tags to Customers - Top Row */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
            Drag Tags to Customers
          </h2>
          <div className="flex flex-row gap-6 justify-center">
            {tags.map((tag) => (
              <div
                key={tag.id}
                draggable
                onDragStart={(e) => handleDragStart(e, tag)}
                className={`${tag.color} text-white p-2 rounded-lg cursor-move hover:opacity-80 transition-opacity duration-200 shadow-md min-w-[160px] text-center`}
              >
                <span className="font-medium">{tag.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Details - Next Row */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Customer Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {customers.map((customer) => (
              <div
                key={customer.id}
                className={`border-2 border-dashed rounded-lg p-4 transition-all duration-200 ${
                  draggedTag ? 'border-blue-300 bg-blue-50' : 'border-gray-200'
                }`}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, customer.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {customer.name} <span className="text-xs text-gray-500 font-normal">[Customer ID - {customer.customerId}]</span>
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {customer.description}
                    </p>
                  </div>
                  {customer.tag && (
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${customer.tag.color}`}>
                        {customer.tag.name}
                      </span>
                      <button
                        onClick={() => removeTag(customer.id)}
                        className="text-red-500 hover:text-red-700 text-xl"
                      >
                        ×
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Com;