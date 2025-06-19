"use client"
import { useState } from "react";
import AlbumCard from '../components/AlbumCard.jsx'
import data from '../data/history.json'
import NavBar from '../components/NavBar.jsx';

import { useTopAlbums } from '../hooks/hooks.jsx'

import { filterDate4Weeks, filterDate6Months, filter1Year } from '../hooks/filterDate.jsx'


export default function PageTop() {
  const topAlbums = useTopAlbums(data)
  const topAlbums4Weeks = useTopAlbums(filterDate4Weeks(data));
  const topAlbums6Month = useTopAlbums(filterDate6Months(data));
  const topAlbums1Year = useTopAlbums(filter1Year(data));

  const [active, setActive] = useState(0);


  const buttons = [
    { label: "4 weeks" },
    { label: "6 months" },
    { label: "1 year" },
    { label: "All Time" },
  ];

  return (
    <div>
      <div className={({ isActive }) => isActive ? "icon active" : "icon"}><NavBar /></div>
        <div><h1 className="list-title">Top 100 Albums</h1></div>

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

          {(active === 0 ? topAlbums4Weeks :
            active === 1 ? topAlbums6Month :
              active === 2 ? topAlbums1Year :
                topAlbums
          ).map((DataMap, index) => {
            return (

              <div key={DataMap.albumName}>
                <AlbumCard position={index + 1} artistName={DataMap.artistName} albumName={DataMap.albumName} msTotal={DataMap.ms_total} />
              </div>
            )
          })}
        </div>
      </div>
        );
}