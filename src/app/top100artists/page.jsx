"use client";
import { useState } from "react";
import Card from '../components/Card'
import data from '../data/history.json'
import NavBar from '../components/NavBar.jsx';

import { useTopArtists, useTopArtists2 } from '../hooks/hooks.jsx'

import { filterDate4Weeks, filterDate6Months, filter1Year } from '../hooks/filterDate.jsx'

//este é para que o nome do artista seja linkado à respetiva página de artista
import { useRouter } from "next/navigation";



export default function PageTop() {
  const topArtists = useTopArtists(data);
  const topArtists4Weeks = useTopArtists(filterDate4Weeks(data));
  const topArtists6Month = useTopArtists(filterDate6Months(data));
  const topArtists1Year = useTopArtists(filter1Year(data));

  const [active, setActive] = useState(0);

  const router = useRouter();

  const buttons = [
    { label: "4 weeks" },
    { label: "6 months" },
    { label: "1 year" },
    { label: "All Time" },
  ];

  return (
    <div>
      <div className={({ isActive }) => isActive ? "icon active" : "icon"}><NavBar /></div>
      <div><h1 className="list-title">Top 100 Artists</h1></div>

      <div>
        {/* Grid dos botões */}
        <div className="grid grid-cols-4 gap-4 justify-items-center mt-10 max-w-3xl mx-auto">
          {buttons.map((btn, idx) => (
            <button
              key={btn.label}
              onClick={() => setActive(idx)}
              className={`w-full max-w-xs flex justify-center items-center rounded-4xl py-2 px-8 transition-all duration-300
              ${active === idx
                  ? "bg-white text-purple-700 shadow-lg shadow-pink-400/30 scale-105"
                  : "bg-purple-700 text-white hover:bg-purple-600 hover:scale-105"
                }
            `}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {(active === 0 ? topArtists4Weeks :
          active === 1 ? topArtists6Month :
            active === 2 ? topArtists1Year :
              topArtists
        ).map((DataMap, index) => {
          return (

            <div key={DataMap.artistName} onClick={() => router.push(`/artistpage/${DataMap.artistName}`)} className="cursor-pointer">
              <Card position={index + 1} artistName={DataMap.artistName} />
            </div>
          )
        })}
      </div>
    </div>
  );
}
