"use client";
import { useState } from "react";

export default function Com() {
  const [cards] = useState([
    {
      id: 1,
      businessName: "Tech Solutions Inc.",
      phone: "+1-555-0123",
      email: "info@techsolutions.com",
      website: "www.techsolutions.com",
      socialMedia: "@techsolutions",
      qrCode: "Yes",
      material: "Paper",
      printedSides: "Both Sides",
      suggestion: "Great design, clear contact info"
    },
    {
      id: 2,
      businessName: "",
      phone: "",
      email: "",
      website: "",
      socialMedia: "",
      qrCode: "",
      material: "",
      printedSides: "",
      suggestion: ""
    },
    {
      id: 3,
      businessName: "",
      phone: "",
      email: "",
      website: "",
      socialMedia: "",
      qrCode: "",
      material: "",
      printedSides: "",
      suggestion: ""
    }
  ]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl bg-white shadow-2xl rounded-3xl p-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-indigo-800 mb-6">
            Business Card Detective
          </h1>
          <p className="text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-4">
            Your mission is to be a Business Card Detective!
          </p>
          <div className="bg-blue-50 rounded-xl p-6 mb-6 text-lg text-left max-w-3xl mx-auto">
            <span className="font-bold text-blue-700">Instructions:</span>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Gather different business or visiting cards from family, friends, or shops.</li>
              <li>Observe each card to note:</li>
              <ul className="list-disc ml-8">
                <li>Business Name</li>
                <li>Contact details (phone, email, website)</li>
                <li>Social media links</li>
                <li>QR code (Yes or No)</li>
                <li>Material (Paper, Cardboard, Plastic, etc.)</li>
                <li>Printed on a side or both sides</li>
              </ul>
              <li>Make sure to add your suggestions to improve the card design.</li>
            </ul>
          </div>
          <p className="text-xl text-gray-600 mt-2">
            Sample business card collection:
          </p>

        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Business Card Collection</h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Business Name</th>
                  <th className="px-4 py-3 text-left">Phone</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Website</th>
                  <th className="px-4 py-3 text-left">Social Media</th>
                  <th className="px-4 py-3 text-left">QR Code</th>
                  <th className="px-4 py-3 text-left">Material</th>
                  <th className="px-4 py-3 text-left">Sides</th>
                  <th className="px-4 py-3 text-left">Suggestion</th>
                </tr>
              </thead>
              <tbody>
                {cards.map((card, index) => (
                  <tr key={card.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-800">{card.businessName || '-'}</td>
                    <td className="px-4 py-3 text-gray-600">{card.phone || '-'}</td>
                    <td className="px-4 py-3 text-gray-600">{card.email || '-'}</td>
                    <td className="px-4 py-3 text-gray-600">{card.website || '-'}</td>
                    <td className="px-4 py-3 text-gray-600">{card.socialMedia || '-'}</td>
                    <td className="px-4 py-3 text-gray-600">{card.qrCode || '-'}</td>
                    <td className="px-4 py-3 text-gray-600">{card.material || '-'}</td>
                    <td className="px-4 py-3 text-gray-600">{card.printedSides || '-'}</td>
                    <td className="px-4 py-3 text-gray-600">{card.suggestion || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 max-w-3xl mx-auto bg-indigo-50 rounded-xl p-6 text-left">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">Instructions to Create Your Business Card:</h2>
          <ol className="list-decimal ml-6 space-y-2 text-lg">
            <li>Open post class activity and log in via Google.</li>
            <li>In the search bar, type <span className="font-semibold">“Business Card Template.”</span></li>
            <li>Sift through the designs and pick a design with spaces for name, description, tagline, contact info, and image.</li>
            <li>Tip: If you find this challenging, pick a simple template.<br/>It’s okay even if it doesn’t have a logo or image.</li>
            <li>Edit your card with:
              <ul className="list-disc ml-6 mt-2">
                <li>Your Name (real name or nickname)</li>
                <li>What You Do (Cookie Maker, Inventor, etc.)</li>
                <li>Contact Info (made-up phone, email, or website)</li>
                <li>Tagline (example: “Bright Ideas, Big Dreams!”)</li>
                <li>Let it be precise and clear so it&apos;s professional.</li>
              </ul>
            </li>
            <li className="mt-2">Download &amp; Store your card:<br/>
              <span className="ml-2">Select <b>Share → Download → PDF Print or PNG</b><br/>Name your file: <b>MyBusinessCard</b></span>
            </li>
          </ol>
        </div>
        <div className="mt-4 text-center">
          <a
            href="https://www.canva.com/create/business-cards/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-indigo-700 font-bold underline hover:text-indigo-900 text-lg"
          >
            Design your business card here
          </a>
        </div>



      </div>
    </div>
  );
}