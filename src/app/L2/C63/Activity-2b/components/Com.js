"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";
import s7 from "../assets/s7.png";
import s8 from "../assets/s8.png";
import s9 from "../assets/s9.png";
import s10 from "../assets/s10.png";
import s11 from "../assets/s11.png";

export default function Com() {
  const [connections, setConnections] = useState({});
  const [draggedItem, setDraggedItem] = useState(null);


  const customers = [
    { id: "lina", name: "Lina", description: "Lina loves reading and enjoys fun bookmarks to keep her place", image: s1 },
    { id: "mia", name: "Mia", description: "Mia loves toys and often loses small pieces, so she likes playful items like slime.", image: s2 },
    { id: "arjun", name: "Arjun", description: "Arjun supplies groceries like flour, sugar, and lemons for baking or cooking.", image: s3 },
    { id: "aditi", name: "Aditi", description: "Aditi is a parent investor who supports small businesses.", image: s4 },
    { id: "party_planner", name: "Party Planner", description: "The Toy Shop Owner likes bundling toys with comics or slime for kids.", image: s5 },
    { id: "toy_shop", name: "Toy Shop Owner", description: "Party Planner organizes events and needs cupcakes, lemonade, and fun activities.", image: s6 }
  ];
  

  
  const businessOwners = [
    { id: "sofia", name: "Sofia", description: "Sofia makes handmade bookmarks that are fun and colorful.", image: s7 },
    { id: "kiran", name: "Kiran", description: "Kiran draws and sells comic books with fun stories.", image: s8 },
    { id: "ella", name: "Ella", description: "Ella bakes tasty cupcakes for events or snacks.", image: s9 },
    { id: "nina", name: "Nina", description: "Nina sells glow-in-the-dark slime kits for kids to play with.", image: s10 },
    { id: "raj", name: "Raj", description: "Raj runs a lemonade stand and sells refreshing drinks.", image: s11 }
  ];

  const correctConnections = {
    sofia: ["lina", "party_planner", "toy_shop"],
    kiran: ["lina", "toy_shop", "aditi"],
    ella: ["arjun", "party_planner", "aditi"],
    nina: ["mia", "toy_shop", "party_planner"]
  };

  const handleDragStart = (e, businessOwnerId) => {
    setDraggedItem(businessOwnerId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, customerId) => {
    e.preventDefault();
    if (draggedItem) {
      setConnections(prev => ({
        ...prev,
        [draggedItem]: [...(prev[draggedItem] || []), customerId]
      }));
      setDraggedItem(null);
    }
  };

  const removeConnection = (businessOwnerId, customerId) => {
    setConnections(prev => ({
      ...prev,
      [businessOwnerId]: prev[businessOwnerId]?.filter(id => id !== customerId) || []
    }));
  };

  const checkAnswers = () => {
    let correct = 0;
    let total = 0;
    
    Object.keys(correctConnections).forEach(businessOwner => {
      const correctList = correctConnections[businessOwner];
      const userConnections = connections[businessOwner] || [];
      
      correctList.forEach(customerId => {
        total++;
        if (userConnections.includes(customerId)) {
          correct++;
        }
      });
    });

    return { correct, total };
  };

  const { correct, total } = checkAnswers();
  const isComplete = total > 0 && correct === total;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-0">
      <div className="w-full mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl p-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-purple-800 mb-2">
                Customers & Business Partners
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {customers.map((customer) => (
                  <div
                    key={customer.id}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 p-2 rounded-2xl shadow-lg border-2 border-dashed border-blue-300 min-h-[100px] flex items-center space-x-4"
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, customer.id)}
                  >
                    <Image
                      src={customer.image}
                      alt={customer.name}
                      width={80}
                      height={80}
                      className="rounded-lg flex-shrink-0"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-blue-800">{customer.name}</h3>
                      <p className="text-gray-700 text-sm">{customer.description}</p>
                      <div className="mt-2">
                        {Object.entries(connections).map(([businessOwnerId, customerIds]) => 
                          customerIds.includes(customer.id) && (
                            <span
                              key={businessOwnerId}
                              className="inline-block bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs mr-2 mb-1"
                            >
                              {businessOwners.find(bo => bo.id === businessOwnerId)?.name}
                              <button
                                onClick={() => removeConnection(businessOwnerId, customer.id)}
                                className="ml-1 text-red-600 hover:text-red-800"
                              >
                                ×
                              </button>
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold text-green-800 mb-2">
                Business Owners (Drag to Connect)
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {businessOwners.map((businessOwner) => (
                  <div
                    key={businessOwner.id}
                    className="bg-gradient-to-r from-green-50 to-blue-50 p-2 rounded-2xl shadow-lg border-2 border-green-300 cursor-move"
                    draggable
                    onDragStart={(e) => handleDragStart(e, businessOwner.id)}
                  >
                    <div className="flex items-center space-x-4">
                      <Image
                        src={businessOwner.image}
                        alt={businessOwner.name}
                        width={130}
                        className="rounded-lg flex-shrink-0"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-green-800">{businessOwner.name}</h3>
                        <p className="text-gray-700 text-md">{businessOwner.description}</p>
                        <div className="mt-2">
                          <span className="text-xs text-gray-500">
                            Connections: {connections[businessOwner.id]?.length || 0}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}