"use client";

export default function Com() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Business Innovation Template
        </h1>
        <ul className="list-disc ml-8 text-xl space-y-6">
          <li>
            <span className="font-semibold">What’s my business idea? What will I sell and why?</span>
          </li>
          <li>
            <span className="font-semibold">My product/service: Describe the product/service</span>
          </li>
          <li>
            <span className="font-semibold">What makes my product/service unique? Why will others buy or use it?</span>
          </li>
          <li>
            <span className="font-semibold">Who will buy it? Who are the users? Estimate how many buyers or users you will have per month</span>
          </li>
          <li>
            <span className="font-semibold">How much can I charge for this product or service? Estimate the cost incurred in creating the product or service by studying market competition</span>
          </li>
        </ul>
        {/* Example image usage (uncomment if needed)
        <div className="flex justify-center mt-8">
          <Image src={sampleImg} alt="Business Plan Example" width={200} className="rounded-xl shadow" />
        </div>
        */}
      </div>
    </div>
  );
}