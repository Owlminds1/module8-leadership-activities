"use client";
import { useState } from "react";

const boardLabels = [
  {label:'B2C',hint:'Shop / Customer'},
  {label:'B2B',hint:'Factory → Shop'},
  {label:'Aggregator',hint:'Many sellers, one app'},
  {label:'B2C Online',hint:'Website / App'},
  {label:'B2C',hint:'Local store'},
  {label:'Aggregator',hint:'Connects sellers'},
  {label:'B2B',hint:'Sells in bulk'},
  {label:'B2C Online',hint:'Subscription'},
  {label:'B2C',hint:'Neighborhood seller'}
];

export default function Com() {
  const [markedCells, setMarkedCells] = useState(new Set());
  const [status, setStatus] = useState('Good luck!');

  const toggleCell = (index) => {
    const newMarkedCells = new Set(markedCells);
    if (newMarkedCells.has(index)) {
      newMarkedCells.delete(index);
    } else {
      newMarkedCells.add(index);
    }
    setMarkedCells(newMarkedCells);
    setStatus('Keep going');
  };

  const checkBingo = () => {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    
    let won = false;
    for (const line of lines) {
      if (line.every(i => markedCells.has(i))) {
        won = true;
        break;
      }
    }
    
    if (won) {
      setStatus('Bingo Business! You got three in a row!');
    } else {
      setStatus('No bingo yet — keep trying!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-5">
        <div className="flex gap-4 items-center mb-4">
          <div>
            <h1 className="text-xl font-bold m-0">Business Model Bingo</h1>
            <p className="text-lg text-gray-600 mt-1">Click a square to mark it.</p>
          </div>
        </div>

        <div className="mt-4">
          <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto">
            {boardLabels.map((item, index) => (
              <div
                key={index}
                onClick={() => toggleCell(index)}
                className={`bg-gradient-to-b from-white to-orange-50 rounded-xl p-4 min-h-20 flex flex-col items-center justify-center text-center font-semibold cursor-pointer border-2 transition-all duration-150 hover:-translate-y-1 hover:shadow-lg ${
                  markedCells.has(index) 
                    ? 'bg-gradient-to-b from-yellow-400 to-white border-dashed border-orange-500 shadow-inner' 
                    : 'border-transparent'
                }`}
              >
                <div className="text-base">{item.label}</div>
                <div className="text-xs text-gray-600 mt-1">{item.hint}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <div className="bg-white rounded-lg p-3 border border-orange-200">

              <div className="flex gap-2 flex-wrap mt-2">

                <button
                  onClick={checkBingo}
                  className="bg-orange-500 text-white px-3 py-2 rounded-lg border-0 cursor-pointer font-bold text-sm"
                >
                  Check Bingo
                </button>

              </div>

              <div className={`mt-2 font-bold ${status.includes('Bingo') ? 'text-green-500' : ''}`}>
                {status}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}