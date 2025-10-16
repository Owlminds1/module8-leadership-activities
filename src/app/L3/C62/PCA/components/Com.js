"use client";

export default function Com() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold mb-8 text-blue-600 text-center">Company Evolution Research</h1>
        
        <div className="space-y-6">
          {/* Choose a company */}
          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-700">
              Choose a company: ______________________________
            </p>
          </div>

          {/* Find out what they originally did */}
          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-700">
              Find out what they originally did: ______________________________
            </p>
          </div>

          {/* What did the company start as */}
          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-700">
              What did the company start as in the beginning? ______________________________
            </p>
          </div>

          {/* Find what problem they faced */}
          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-700">
              Find what problem they faced ______________________________
            </p>
          </div>

          {/* Why did they need to change */}
          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-700">
              Why did they need to change? ______________________________
            </p>
          </div>

          {/* How they changed */}
          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-700">
              How they changed ______________________________
            </p>
          </div>

          {/* What new strategy or product */}
          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-700">
              What new strategy or product did they use? ______________________________
            </p>
          </div>

          {/* Explain the results */}
          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-700">
              Explain the results ______________________________
            </p>
          </div>

          {/* Did they become successful */}
          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-700">
              Did they become successful after changing? ______________________________
            </p>
          </div>
        </div>

        {/* Company suggestions */}
        <div className="mt-8 p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            If you are not able to find a company, you can use any of the following companies:
          </h3>
          <div className="space-y-2 text-lg text-gray-700">
            <p><span className="font-semibold">Apple:</span> from computers to phones + apps</p>
            <p><span className="font-semibold">Amazon:</span> books to selling everything plus cloud services</p>
            <p><span className="font-semibold">Spotify:</span> from selling downloads to music streaming</p>
            <p><span className="font-semibold">Nike:</span> shoe company to digital fitness brand</p>
          </div>
        </div>
      </div>
    </div>
  );
}