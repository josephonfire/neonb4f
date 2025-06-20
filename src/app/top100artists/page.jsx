"use client";
import { useState } from "react";
import Card from '../components/Card'
import data from '../data/history.json'
import NavBar_topartist from '../components/NavBar_topartist.jsx';
import "../../css/navbar.css"

import { useTopArtists, useTopArtists2 } from '../hooks/hooks.jsx'

import { filterDate4Weeks, filterDate6Months, filter1Year } from '../hooks/filterDate.jsx'

//este é para que o nome do artista seja linkado à respetiva página de artista
import { useRouter } from "next/navigation";
import { Background } from "../components/Background";



export default function PageTop() {
  const topArtists = useTopArtists(data);
  const topArtists4Weeks = useTopArtists(filterDate4Weeks(data));
  const topArtists6Month = useTopArtists(filterDate6Months(data));
  const topArtists1Year = useTopArtists(filter1Year(data));

  const [active, setActive] = useState(0);

  const router = useRouter();

  const buttons = [
    { label: "4 semanas" },
    { label: "6 meses" },
    { label: "1 ano" },
    { label: "Desde sempre" },
  ];

  return (
    <Background>
    <div>

      <NavBar_topartist />

      <div><h1 className="list-title">Top 100 Artistas</h1></div>

      <div>
        {/* Grid dos botões */}
        <div className="flex flex-direction-row gap-2
        justify-items-center">
          {buttons.map((btn, idx) => (
            <button
              key={btn.label}
              onClick={() => setActive(idx)}
              className={`m-4 p-1 w-9/12 flex justify-center items-center rounded-2xl transition-all duration-300 text-sm
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
    </Background>
  );
}
