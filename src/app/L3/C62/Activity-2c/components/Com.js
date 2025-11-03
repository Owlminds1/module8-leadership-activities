"use client";
import { useState } from "react";

export default function Com() {
  const [globalMarket, setGlobalMarket] = useState("");
  const [netflixRevenue, setNetflixRevenue] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8">
        <div className="space-y-8">
          {/* Global Total Addressable Market */}
          <div className="space-y-4">
            <label className="block text-2xl font-semibold text-gray-700">
              Global Total Addressable Market for Video streaming
            </label>
            <input
              type="text"
              value={globalMarket}
              onChange={(e) => setGlobalMarket(e.target.value)}
              className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200"
              placeholder="Enter the global market value..."
            />
          </div>

          {/* Current Netflix Revenue */}
          <div className="space-y-4">
            <label className="block text-2xl font-semibold text-gray-700">
              Current Netflix Revenue
            </label>
            <input
              type="text"
              value={netflixRevenue}
              onChange={(e) => setNetflixRevenue(e.target.value)}
              className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200"
              placeholder="Enter Netflix's current revenue..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}