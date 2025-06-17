"use client";
import { useState } from "react";

export default function Page() {
  const [active, setActive] = useState(0);

  const buttons = [
    { label: "4 weeks" },
    { label: "6 months" },
    { label: "1 year" },
    { label: "All Time" },
  ];

  return (
    <div className="bg-purple-950 min-h-screen px-1">
      <div className="container flex justify-center"></div>
      <h1 className="font-black flex justify-center mt-30">TOP 100 Artists</h1>

      {/* Grid dos botões */}
      <div className="grid grid-cols-4 gap-4 justify-items-center mt-10 max-w-3xl mx-auto">
        {buttons.map((btn, idx) => (
          <button
            key={btn.label}
            onClick={() => setActive(idx)}
            className={`w-full max-w-xs flex justify-center items-center rounded-4xl py-2 px-8 transition-all duration-300
              ${
                active === idx
                  ? "bg-white text-purple-700 shadow-lg shadow-pink-400/30 scale-105"
                  : "bg-purple-700 text-white hover:bg-purple-600 hover:scale-105"
              }
            `}
          >
            {btn.label}
          </button>
        ))}
      </div>
      </div>


      {/* Grid dos cards */}
      {/*
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-2xl mx-auto mt-10">
        <div className="row-span-2 bg-white text-purple-700 flex justify-center items-center text-2xl font-bold rounded-2xl h-68 w-72">
          Queen
        </div>
        <div className="col-start-2 row-start-1 bg-purple-700 text-white flex justify-center items-center rounded-2xl h-32">
          Bla bla
        </div>
        <div className="col-start-2 row-start-2 bg-purple-700 text-white flex justify-center items-center rounded-2xl h-32">
          Blabla
        </div>
        <div className="grid grid-rows-4 gap-4 w-full max-w-2xl mx-auto mt-10 m-5">
          <div className="col-start-1 bg-purple-700 flex justify-center items-center mx-auto rounded-2xl w-140 p-2.5 h-28">
            Oi
          </div>
          <div className="col-start-1 bg-purple-700 flex justify-center items-center mx-auto rounded-2xl w-140 p-2.5 h-28">
            Oi
          </div>
          <div className="col-start-1 bg-purple-700 flex justify-center items-center mx-auto rounded-2xl w-140 p-2.5 h-28">
            Oi
          </div>
        </div>
      </div>
      */}
  );
}
