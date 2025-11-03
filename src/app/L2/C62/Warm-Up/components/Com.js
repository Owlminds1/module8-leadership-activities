"use client";
import Image from "next/image"; 
import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";


export default function Com() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="w-[600px] bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-8 text-blue-700">Origami</h1>
        <div className="space-y-12 w-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <a
              href="https://origami.guide/furniture/origami-houses/origami-house/2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-green-700 mb-4 underline italic"
            >
              House
            </a>
            <div className="flex items-center justify-center w-full">
              <Image src={S1} alt="Origami House" className="w-[400px] mx-auto" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <a
              href="https://origami.guide/origami-animals/origami-dogs/easy-origami-dog-face/2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-green-700 mb-4 underline italic"
            >
              Dog
            </a>
            <div className="flex items-center justify-center w-full">
              <Image src={S2} alt="Origami Dog" className="w-[400px] mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}