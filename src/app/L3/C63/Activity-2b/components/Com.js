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

export default function Com() {
  const [connections, setConnections] = useState({});
  const [draggedItem, setDraggedItem] = useState(null);

  const customers = [
    { id: "riya", name: "Riya", description: "Riya loves art and collects colorful notebooks.", image: s1 },
    { id: "zoya", name: "Zoya", description: "Zoya runs a café that serves pastries and drinks.", image: s2 },
    { id: "kabir", name: "Kabir", description: "Kabir supplies fresh fruits, milk, and flour.", image: s3 },
    { id: "ms_kapoor", name: "Ms. Kapoor", description: "Ms. Kapoor is an investor who supports creative small businesses.", image: s4 },
    { id: "aarav", name: "Aarav (Event Squad)", description: "Aarav plans birthday parties with snacks, crafts, and games.", image: s5 },
    { id: "meena", name: "Meena (The Gift Corner)", description: "Meena sells bundles of craft supplies, notebooks, and candles.", image: s6 },
  ];

  const businessOwners = [
    { id: "aanya", name: "Aanya", description: "Aanya makes hand-painted notebooks.", image: s7 },
    { id: "dev", name: "Dev", description: "Dev creates short comic stories for kids.", image: s8 },
    { id: "leah", name: "Leah", description: "Leah runs a home bakery making cookies and muffins.", image: s9 },
    { id: "tara", name: "Tara", description: "Tara sells scented candle sets.", image: s10 },
  ];

  const correctConnections = {
    aanya: ["riya", "meena", "aarav"],
    dev: ["riya", "meena", "ms_kapoor"],
    leah: ["zoya", "kabir", "ms_kapoor"],
    tara: ["meena", "aarav", "ms_kapoor"],
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
      setConnections((prev) => ({
        ...prev,
        [draggedItem]: [...(prev[draggedItem] || []), customerId],
      }));
      setDraggedItem(null);
    }
  };

  const removeConnection = (businessOwnerId, customerId) => {
    setConnections((prev) => ({
      ...prev,
      [businessOwnerId]:
        prev[businessOwnerId]?.filter((id) => id !== customerId) || [],
    }));
  };

  const checkAnswers = () => {
    let correct = 0;
    let total = 0;

    Object.keys(correctConnections).forEach((businessOwner) => {
      const correctList = correctConnections[businessOwner];
      const userConnections = connections[businessOwner] || [];
      correctList.forEach((customerId) => {
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
        <div className="rounded-3xl p-4">
          {isComplete ? (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center py-16">
              <h1 className="text-4xl font-extrabold text-green-700 mb-6">
                Congratulations!
              </h1>
              <p className="text-xl text-gray-800 mb-4">
                You connected all the business owners and customers correctly.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Business Owners */}
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
                          <h3 className="text-lg font-bold text-green-800 text-left">
                            {businessOwner.name}
                          </h3>
                          <p className="text-gray-700 text-md text-left">
                            {businessOwner.description}
                          </p>
                          <div className="mt-2 text-left">
                            <span className="text-xs text-gray-500 text-left">
                              Connections:{" "}
                              {connections[businessOwner.id]?.length || 0}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Customers & Partners */}
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
                        <h3 className="text-lg font-bold text-blue-800 text-left">
                          {customer.name}
                        </h3>
                        <p className="text-gray-700 text-sm text-left">
                          {customer.description}
                        </p>
                        <div className="mt-2 text-left">
                          {Object.entries(connections).map(
                            ([businessOwnerId, customerIds]) =>
                              customerIds.includes(customer.id) && (
                                <span
                                  key={businessOwnerId}
                                  className="inline-block bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs mr-2 mb-1 text-left"
                                >
                                  {
                                    businessOwners.find(
                                      (bo) => bo.id === businessOwnerId
                                    )?.name
                                  }
                                  <button
                                    onClick={() =>
                                      removeConnection(businessOwnerId, customer.id)
                                    }
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
