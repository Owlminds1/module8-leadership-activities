"use client";

export default function Com() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-50 p-6">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Create a business innovation proposal for a smart product!
        </h1>
        <ol className="list-decimal ml-8 text-xl space-y-8">
          <li>
            <span className="font-semibold">Step 1:</span> <br />
            Observe around you and ask your parents to help you find a smart product <span className="font-bold">OR</span> pick this product:{" "}
            <a
              href="https://ecovacsindia.in/deebot-n30-pro-omni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              DEEBOT N30 Pro Omni
            </a>
            <div className="bg-blue-50 rounded-lg p-4 mt-4 mb-2">
              <span className="font-semibold">About DEEBOT N30 Pro Omni:</span>
              <ul className="list-disc ml-6 mt-2 text-lg">
                <li>It’s a robot that vacuum-cleans and mops floors.</li>
                <li>It has smart brushes that don’t get tangled.</li>
                <li>It can clean edges well.</li>
                <li>Its base station cleans itself, dries the mop, and empties dust all by itself!</li>
                <li>You can control it using an app: schedule cleaning, adjust suction or water, and let it map your home.</li>
              </ul>
              {/* <div className="flex justify-center mt-4">
                <Image src={deebotImg} alt="DEEBOT N30 Pro Omni" width={180} className="rounded-xl shadow" />
              </div> */}
            </div>
          </li>
          <li>
            <span className="font-semibold">Step 2:</span> <br />
            Think about a new feature you can add to make it even more useful.
          </li>
          <li>
            <span className="font-semibold">Step 3:</span> <br />
            Use the business innovation template:{" "}
            <a
              href="https://olq-m8.vercel.app/L1/C63/business-innovation-template"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Business Innovation Template
            </a>
            <br />
            <span className="text-gray-700">
              You can make a copy of the slides we used in the class. Add images and make your presentation colorful and fun!
            </span>
          </li>
          <li>
            <span className="font-semibold">Step 4:</span> <br />
            Share the presentation with the teacher.
          </li>
        </ol>
      </div>
    </div>
  );
}