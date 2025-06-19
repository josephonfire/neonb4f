"use client"
import { Background } from "../components/Background.jsx";
import { useState } from "react";
import MusicCard from '../components/MusicCard.jsx'
import data from '../data/history.json'
import NavBar from '../components/NavBar.jsx';
import { useTopSongs } from '../hooks/hooks.jsx'

import { filterDate4Weeks, filterDate6Months, filter1Year } from '../hooks/filterDate.jsx'


export default function PageTop() {
  const topSongs = useTopSongs(data)
  const topSongs4Weeks = useTopSongs(filterDate4Weeks(data));
  const topSongs6Month = useTopSongs(filterDate6Months(data));
  const topSongs1Year = useTopSongs(filter1Year(data));

  const [active, setActive] = useState(0);


  const buttons = [
    { label: "4 weeks" },
    { label: "6 months" },
    { label: "1 year" },
    { label: "All Time" },
  ];

  return (
    <Background>
    <div>
      <div className={({ isActive }) => isActive ? "icon active" : "icon"}><NavBar /></div>
      <div><h1 className="list-title">Top 100 Músicas</h1></div>

      <div>
        {/* Grid dos botões */}
        <div className="flex flex-direction-row gap-2
        justify-items-center">
          {buttons.map((btn, idx) => (
            <button
              key={btn.label}
              onClick={() => setActive(idx)}
              className={`m-4 text-sm w-9/12 flex justify-center items-center rounded-4xl transition-all duration-300
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


        {(active === 0 ? topSongs4Weeks :
          active === 1 ? topSongs6Month :
            active === 2 ? topSongs1Year :
              topSongs
        ).map((DataMap, index) => {
          return (

            <div key={DataMap.trackName} >
              <MusicCard position={index + 1} artistName={DataMap.artistName} trackName={DataMap.trackName} msTotal={DataMap.ms_total} />
            </div>
          )
        })}
      </div>
    </div>
    </Background>
  );
}
