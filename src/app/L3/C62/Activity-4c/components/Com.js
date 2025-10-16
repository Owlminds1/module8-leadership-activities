"use client";

import { useState } from 'react';
import { customersData } from '../data/customersData';

const Com = () => {
  const [customers, setCustomers] = useState(customersData);

  const [filteredCustomers, setFilteredCustomers] = useState(customers);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const applyFilters = () => {
    let filtered = customers;
    
    // Apply date filter if both dates are selected
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      
      if (start > end) {
        alert("Start date must be before end date");
        return;
      }
      
      filtered = filtered.filter(c => {
        const orderDate = new Date(c.orderDate);
        const orderDateOnly = new Date(orderDate.getFullYear(), orderDate.getMonth(), orderDate.getDate());
        const startDateOnly = new Date(start.getFullYear(), start.getMonth(), start.getDate());
        const endDateOnly = new Date(end.getFullYear(), end.getMonth(), end.getDate());
        
        return orderDateOnly >= startDateOnly && orderDateOnly <= endDateOnly;
      });
    }
    
    // Apply rating filter if selected
    if (ratingFilter) {
      filtered = filtered.filter(c => c.rating == ratingFilter);
    }
    
    console.log("Applied filters - Date:", startDate, "to", endDate, "Rating:", ratingFilter);
    console.log("Filtered results:", filtered);
    setFilteredCustomers(filtered);
  };

  const filterByDateRange = () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates");
      return;
    }
    
    applyFilters();
  };

  const clearDateFilter = () => {
    setStartDate("");
    setEndDate("");
    setRatingFilter("");
    setFilteredCustomers(customers);
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen p-5 text-gray-800">
      <h1 className="text-center text-slate-700 text-3xl font-bold mb-5">
        Mini CRM Explorer
      </h1>

      <div className="flex justify-between mb-5 flex-wrap">
        <div className="flex items-center justify-between w-full flex-nowrap">
          <div className="flex items-center gap-4 flex-wrap">
            <label htmlFor="startDate" className="font-bold text-slate-700">
              Start Date:
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="px-3 py-2 border-2 border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:border-blue-500 transition-colors"
            />
            
            <label htmlFor="endDate" className="font-bold text-slate-700">
              End Date:
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="px-3 py-2 border-2 border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:border-blue-500 transition-colors"
            />
            
            <label htmlFor="ratingFilter" className="font-bold text-slate-700">
              Rating Filter:
            </label>
            <select
              id="ratingFilter"
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
              className="px-3 py-2 border-2 border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:border-blue-500 transition-colors min-w-[120px]"
            >
              <option value="">All Ratings</option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={filterByDateRange}
              className="px-4 py-3 m-1 border-none rounded-lg bg-blue-500 text-white font-bold cursor-pointer transition-all duration-300 hover:bg-blue-600 hover:-translate-y-0.5"
            >
              Apply Filters
            </button>
            <button
              onClick={clearDateFilter}
              className="px-4 py-3 m-1 border-none rounded-lg bg-blue-500 text-white font-bold cursor-pointer transition-all duration-300 hover:bg-blue-600 hover:-translate-y-0.5"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        {/* Customer Table */}
        <div className="w-full">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr>
                <th className="p-3 border-b border-gray-200 text-center bg-slate-700 text-white">
                  Name
                </th>
                <th className="p-3 border-b border-gray-200 text-center bg-slate-700 text-white">
                  Products
                </th>
                <th className="p-3 border-b border-gray-200 text-center bg-slate-700 text-white">
                  Order Date
                </th>
                <th className="p-3 border-b border-gray-200 text-center bg-slate-700 text-white">
                  Total Orders
                </th>
                <th className="p-3 border-b border-gray-200 text-center bg-slate-700 text-white">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-3 border-b border-gray-200 text-center">
                    {customer.name}
                  </td>
                  <td className="p-3 border-b border-gray-200 text-center">
                    {customer.order}
                  </td>
                  <td className="p-3 border-b border-gray-200 text-center">
                    {customer.orderDate}
                  </td>
                  <td className="p-3 border-b border-gray-200 text-center">
                    {customer.totalOrders}
                  </td>
                  <td className="p-3 border-b border-gray-200 text-center">
                    {customer.rating}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Com;