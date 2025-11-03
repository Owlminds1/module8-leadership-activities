"use client";
import Image from "next/image"; 
import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";

export default function Com() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="w-[600px] bg-white shadow-xl rounded-2xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-8 text-blue-700">Paper Plane Challenge</h1>
        <div className="space-y-8">
          <div>
            <a
              href="https://origami.guide/origami-flowers/origami-grass-flower-stem-leaf/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-green-700 mb-2 underline italic"
            >
              Grass and leaf
            </a>
            <div className="flex items-center justify-center w-full">
              <Image src={S1} alt="Leaf" className="w-[400px] mx-auto" />
            </div>
          </div>
          <div>
            <a
              href="https://origami.guide/origami-animals/origami-insects/origami-ladybug/2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-green-700 mb-2 underline italic"
            >
              Ladybug
            </a>
            <div className="flex items-center justify-center w-full">
              <Image src={S2} alt="Ladybug" className="w-[400px] mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}