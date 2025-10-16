"use client";

import { useState } from 'react';

const Com = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Rohan",
      description: "Regular customer who orders 1 T-shirt twice a month",
      tag: null
    },
    {
      id: 2,
      name: "Priya", 
      description: "First-time customer who gave a 5-star review",
      tag: null
    },
    {
      id: 3,
      name: "Mr. Mehta",
      description: "Placed a bulk order of 30 hoodies for a company event",
      tag: null
    },
    {
      id: 4,
      name: "Anika",
      description: "Had an issue with her previous order and complained about getting the wrong size",
      tag: null
    }
  ]);

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
            ? { ...customer, tag: draggedTag }
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

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Customer Tagging Activity
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Customer Details */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              Customer Details
            </h2>
            <div className="space-y-4">
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
                        {customer.name}
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

          {/* Right Side - Tags */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              Drag Tags to Customers
            </h2>
            <div className="space-y-4">
              {tags.map((tag) => (
                <div
                  key={tag.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, tag)}
                  className={`${tag.color} text-white p-4 rounded-lg cursor-move hover:opacity-80 transition-opacity duration-200 shadow-md`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-medium">{tag.name}</span>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Com;