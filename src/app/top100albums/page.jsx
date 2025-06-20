"use client"
import "../globals.css"
import { useState } from "react";
import AlbumCard from '../components/AlbumCard.jsx'
import data from '../data/history.json'
import NavBar_album from '../components/NavBar_album.jsx';
import "../../css/dashboard-btn.css"
import { Background } from "../components/Background";
import { useTopAlbums } from '../hooks/hooks.jsx'
import "../../css/navbar.css"


import { filterDate4Weeks, filterDate6Months, filter1Year } from '../hooks/filterDate.jsx'


export default function PageTop() {
  const topAlbums = useTopAlbums(data)
  const topAlbums4Weeks = useTopAlbums(filterDate4Weeks(data));
  const topAlbums6Month = useTopAlbums(filterDate6Months(data));
  const topAlbums1Year = useTopAlbums(filter1Year(data));

  const [active, setActive] = useState(0);



  const buttons = [
    { label: "4 semanas" },
    { label: "6 meses" },
    { label: "1 ano" },
    { label: "Desde sempre" },
  ];

  


   
  return (
    
     <Background>
      <div>

      <NavBar_album />

      <div><h1 className="list-title">Top 100 Álbuns</h1></div>

      <div>
        {/* Grid dos botões */}
        <div className="flex flex-direction-row gap-2
        justify-items-center" >
          {buttons.map((btn, idx) => (
            <button
              key={btn.label}
              onClick={() => setActive(idx)}
              className={`m-4 p-1 w-9/12 flex justify-center items-center rounded-2xl transition-all duration-300 text-sm
              ${active === idx
                  ? "bg-white text-purple-700 shadow-lg shadow-pink-400/30 scale-100"
                  : "bg-purple-700 text-white hover:bg-purple-600 hover:scale-100"
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
    </Background>
  );
}