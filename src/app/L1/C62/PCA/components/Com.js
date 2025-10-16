"use client";

export default function Com() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-6xl bg-white shadow-xl rounded-2xl p-8 text-left">
      

        <div className="space-y-8">
          {/* What will I sell and why? */}
          <div className="border-2 border-gray-300 rounded-lg p-6 bg-blue-50">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">What will I sell and why?</h2>
            <div className="bg-white border-2 border-gray-400 rounded p-3 mb-4 h-12 flex items-center">
              <span className="text-gray-500">_________________</span>
            </div>
            <p className="text-lg text-gray-600 italic">
              <span className="font-semibold">Example:</span> I will sell sock puppets because they are fun to play with and kids can use them to tell stories.
            </p>
          </div>

          {/* My business name */}
          <div className="border-2 border-gray-300 rounded-lg p-6 bg-green-50">
            <h2 className="text-2xl font-bold text-green-600 mb-4">My business name:</h2>
            <div className="bg-white border-2 border-gray-400 rounded p-3 mb-4 h-12 flex items-center">
              <span className="text-gray-500">_______________________________</span>
            </div>
            <p className="text-lg text-gray-600 italic">
              <span className="font-semibold">Example:</span> Silly Sock Friends
            </p>
          </div>

          {/* Things required to make this product */}
          <div className="border-2 border-gray-300 rounded-lg p-6 bg-yellow-50">
            <h2 className="text-2xl font-bold text-yellow-600 mb-4">Things required to make this product</h2>
            <div className="bg-white border-2 border-gray-400 rounded p-3 mb-4 h-12 flex items-center">
              <span className="text-gray-500">_________________</span>
            </div>
            <p className="text-lg text-gray-600 italic">
              <span className="font-semibold">Example:</span> Socks, glue, buttons, wool, markers, small cloth pieces
            </p>
          </div>

          {/* Who will buy it? */}
          <div className="border-2 border-gray-300 rounded-lg p-6 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Who will buy it?</h2>
            <div className="bg-white border-2 border-gray-400 rounded p-3 mb-4 h-12 flex items-center">
              <span className="text-gray-500">_________________</span>
            </div>
            <p className="text-lg text-gray-600 italic">
              <span className="font-semibold">Example:</span> My friends, neighbors, and other kids
            </p>
          </div>

          {/* What makes my product unique? */}
          <div className="border-2 border-gray-300 rounded-lg p-6 bg-red-50">
            <h2 className="text-2xl font-bold text-red-600 mb-4">What makes my product unique?</h2>
            <div className="bg-white border-2 border-gray-400 rounded p-3 mb-4 h-12 flex items-center">
              <span className="text-gray-500">_________________</span>
            </div>
            <p className="text-lg text-gray-600 italic">
              <span className="font-semibold">Example:</span> Each sock puppet will be colorful, cute, and handmade with funny faces.
            </p>
          </div>

          {/* Why should people buy my product? */}
          <div className="border-2 border-gray-300 rounded-lg p-6 bg-indigo-50">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Why should people buy my product?</h2>
            <div className="bg-white border-2 border-gray-400 rounded p-3 mb-4 h-12 flex items-center">
              <span className="text-gray-500">_________________</span>
            </div>
            <p className="text-lg text-gray-600 italic">
              <span className="font-semibold">Example:</span> It is enjoyable, safe, and great for playing and storytelling.
            </p>
          </div>

          {/* Where will I sell? */}
          <div className="border-2 border-gray-300 rounded-lg p-6 bg-pink-50">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Where will I sell?</h2>
            <div className="bg-white border-2 border-gray-400 rounded p-3 mb-4 h-12 flex items-center">
              <span className="text-gray-500">_________________</span>
            </div>
            <p className="text-lg text-gray-600 italic">
              <span className="font-semibold">Example:</span> At the school fair or outside my home after school
            </p>
          </div>

          {/* How will I tell everyone about my product? */}
          <div className="border-2 border-gray-300 rounded-lg p-6 bg-orange-50">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">How will I tell everyone about my product?</h2>
            <div className="bg-white border-2 border-gray-400 rounded p-3 mb-4 h-12 flex items-center">
              <span className="text-gray-500">_________________</span>
            </div>
            <p className="text-lg text-gray-600 italic">
              <span className="font-semibold">Example:</span> I will make posters and tell my friends and neighbors
            </p>
          </div>

          {/* Budget Planning Section */}
          <div className="border-2 border-gray-300 rounded-lg p-6 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Below is the example to calculate money required to start the business</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-2 border-gray-300 text-lg">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border-2 border-gray-300 px-4 py-3 font-bold text-center">Item</th>
                    <th className="border-2 border-gray-300 px-4 py-3 font-bold text-center">Cost Per Item</th>
                    <th className="border-2 border-gray-300 px-4 py-3 font-bold text-center">Quantity Needed (for 20 people)</th>
                    <th className="border-2 border-gray-300 px-4 py-3 font-bold text-center">Total Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">Socks</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center bg-gray-100">__</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center bg-gray-100">___</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center bg-gray-100">___</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">Glue</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center bg-gray-100">__</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center bg-gray-100">___</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center bg-gray-100">___</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">Buttons (for eyes)</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center bg-gray-100">__</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center bg-gray-100">___</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center bg-gray-100">___</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">Wool (for hair)</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center bg-gray-100">__</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center bg-gray-100">___</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center bg-gray-100">___</td>
                  </tr>
                  <tr className="bg-yellow-100 font-bold">
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">TOTAL</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">—</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">—</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center bg-gray-100">___</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}