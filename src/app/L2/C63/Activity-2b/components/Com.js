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
    { id: "lina", name: "Lina", description: "Lina loves reading books.", image: s1 },
    { id: "mia", name: "Mia", description: "Mia loves squishy toys that she can fiddle with.", image: s2 },
    { id: "arjun", name: "Arjun", description: "Arjun supplies groceries like flour and sugar.", image: s3 },
    { id: "aditi", name: "Aditi", description: "Adie, an investor who supports small businesses.", image: s4 },
    { id: "toy_shop", name: "Mr. Smith", description: "Mr. Smith, the Toy Shop Owner who sells comics and variety of fidget toys.", image: s5 },
    { id: "party_planner", name: "Ms. Kyle", description: "Ms. Kyle, the Party Planner, who organizes events and needs cupcakes, lemonade, as well as fun activities.", image: s6 }
  ];
  

  
  const businessOwners = [
    { id: "sofia", name: "Sofia", description: "Sofia makes handmade bookmarks that are beautiful and colorful.", image: s7 },
    { id: "kiran", name: "Kiran", description: "Kiran draws and sells comic books with inventive stories.", image: s8 },
    { id: "ella", name: "Ella", description: "Ella bakes tasty cupcakes for festive occasions.", image: s9 },
    { id: "nina", name: "Nina", description: "Nina sells glow-in-the-dark slime kits for kids to play with.", image: s10 },
    { id: "raj", name: "Raj", description: "Raj runs a lemonade stand and sells refreshing drinks.", image: s11 }
  ];

  const correctConnections = {
    sofia: ["lina", "party_planner", "toy_shop"],
    kiran: ["lina", "toy_shop", "aditi"],
    ella: ["arjun", "party_planner", "aditi"],
    nina: ["mia", "toy_shop", "party_planner"],
    raj: ["arjun"]
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
    console.log("correct", correct, "total", total, connections);
    return { correct, total };
  };

  const { correct, total } = checkAnswers();
  const isComplete = total > 0 && correct === total;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-0">
      <div className="w-full mx-auto">
        <div className="rounded-3xl p-4">
          {isComplete ? (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center py-16">
              <h1 className="text-4xl font-extrabold text-green-700 mb-6">Congratulations!</h1>
              <p className="text-xl text-gray-800 mb-4">You connected all the business owners and customers correctly.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* LHS: Business Owners */}
              <div className="space-y-6 text-left">
                <h2 className="text-xl font-bold text-green-800 mb-2 text-left">
                  Business Owners (Drag to Connect)
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {businessOwners.map((businessOwner) => (
                    <div
                      key={businessOwner.id}
                      className="bg-gradient-to-r from-green-50 to-blue-50 p-2 rounded-2xl shadow-lg border-2 border-green-300 cursor-move text-left"
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
                        <div className="text-left">
                          <h3 className="text-lg font-bold text-green-800 text-left">{businessOwner.name}</h3>
                          <p className="text-gray-700 text-md text-left">{businessOwner.description}</p>
                          <div className="mt-2 text-left">
                            <span className="text-xs text-gray-500 text-left">
                              Connections: {connections[businessOwner.id]?.length || 0}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RHS: Customers & Business Partners */}
              <div className="space-y-6 text-left">
                <h2 className="text-xl font-bold text-purple-800 mb-2 text-left">
                  Customers & Business Partners
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {customers.map((customer) => (
                    <div
                      key={customer.id}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 p-2 rounded-2xl shadow-lg border-2 border-dashed border-blue-300 min-h-[100px] flex items-center space-x-4 text-left"
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
                      <div className="text-left">
                        <h3 className="text-lg font-bold text-blue-800 text-left">{customer.name}</h3>
                        <p className="text-gray-700 text-sm text-left">{customer.description}</p>
                        <div className="mt-2 text-left">
                          {Object.entries(connections).map(([businessOwnerId, customerIds]) => 
                            customerIds.includes(customer.id) && (
                              <span
                                key={businessOwnerId}
                                className="inline-block bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs mr-2 mb-1 text-left"
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}