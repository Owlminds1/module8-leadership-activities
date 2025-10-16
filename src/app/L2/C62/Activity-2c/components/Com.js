"use client";

export default function Com() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8 text-left">
        
        <div className="space-y-6">
          <p className="text-xl leading-relaxed">
            Leo also needs money for advertising, like making posters to tell people about his friendship bands, bag tags, and keychains.
          </p>

          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-xl leading-relaxed">
                Let's say the total cost for making 100 posters is <span className="font-bold text-green-600">$30</span>
              </li>
              <li className="text-xl leading-relaxed">
                So this money will be added to the total amount i.e. <span className="font-bold text-blue-600">$120 + $30 = $150</span>
              </li>
            </ol>
          </div>

          <div className="bg-green-100 p-6 rounded-xl border-2 border-green-300">
            <h3 className="text-2xl font-bold text-green-800 mb-2">Total Business Investment</h3>
            <p className="text-xl text-green-700">
              Leo needs a total of <span className="font-bold text-2xl">$150</span> to start his business at the school fair!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}