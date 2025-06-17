"use client";
import { useState } from "react";
import Card from '../components/Card'
import data from '../data/history.json'
import { useTopArtists } from '../hooks/hooks.jsx'


export default function Page() {
  const [active, setActive] = useState(0);
  const topArtists = useTopArtists(data)

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

        <div>
          
          {topArtists.map((DataMap, index) => {
            return(

              <div key={DataMap.artistName}>
                <Card position={index + 1} artistName={DataMap.artistName}/>
              </div>
            )
          })}
        </div>
      </div>
  );
}
