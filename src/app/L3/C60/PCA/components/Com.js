import { useState } from "react";

export default function Com() {
  const [subscriptions] = useState([
    {
      name: "Netflix",
      whatWeGet: "Movies & Shows",
      howLong: "2 years",
      paymentFrequency: "Monthly",
      whyStay: "Entertainment, variety",
      brandInfo: "Free trial, sends reminders",
      ifStopped: "Lose access to content"
    },
  ]);

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
        Subscription Sleuth
      </h1>

      <div className="max-w-3xl mx-auto mb-8 bg-white rounded-xl shadow p-6 text-gray-800 text-base">
        <p className="mb-2 font-semibold text-lg">A subscription means getting something regularly but making a single payment.</p>
        <p className="mb-2">Let’s do a Family Subscription Survey:</p>
        <ul className="list-disc ml-6 mb-2">
          <li>Ask your family members about the subscriptions they use at home.</li>
        </ul>
        <p className="mb-2">For each subscription, find out:</p>
        <ul className="list-disc ml-6 mb-2">
          <li>What services or items do they get?</li>
          <li>How long has your family been subscribed?</li>
          <li>How often do they pay for it (weekly, monthly, or yearly)?</li>
          <li>Why do they keep using it (what makes them stay subscribed)?</li>
          <li>About the subscription brand: Search online or ask your parents about that brand.</li>
          <li>Do they offer a free trial?</li>
          <li>Do they send reminders before payment renewals?</li>
          <li>What happens if they stop (lose access, lose progress, etc.)?</li>
        </ul>
        <p className="mb-2">Gather all the details and record them in a table.</p>
        <p className="mb-2">Summarise your learnings and record yourself presenting the table.</p>
        <p className="mb-2">Share the picture of completed table and recording with the teacher.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-xl rounded-2xl overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm uppercase">
              <th className="px-6 py-4 text-left">Subscription Name</th>
              <th className="px-6 py-4 text-left">What We Get</th>
              <th className="px-6 py-4 text-left">How Long Subscribed</th>
              <th className="px-6 py-4 text-left">Payment Frequency</th>
              <th className="px-6 py-4 text-left">Why Stay Subscribed</th>
              <th className="px-6 py-4 text-left">Brand Info (Free Trial, Reminders)</th>
              <th className="px-6 py-4 text-left">What Happens If Stopped</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {subscriptions.map((sub, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-indigo-50 transition`}
              >
                <td className="px-6 py-4 font-semibold">{sub.name}</td>
                <td className="px-6 py-4">{sub.whatWeGet}</td>
                <td className="px-6 py-4">{sub.howLong}</td>
                <td className="px-6 py-4">{sub.paymentFrequency}</td>
                <td className="px-6 py-4">{sub.whyStay}</td>
                <td className="px-6 py-4">{sub.brandInfo}</td>
                <td className="px-6 py-4">{sub.ifStopped}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
