"use client"
import { useState } from "react";
import AlbumCard from '../components/AlbumCard.jsx'
import data from '../data/history.json'
import NavBar from '../components/NavBar.jsx';
import "../../css/dashboard-btn.css"

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

  const albumList = 
    active === 0 ? topAlbums4Weeks :
    active === 1 ? topAlbums6Month :
    active === 2 ? topAlbums1Year :
    topAlbums;

  return (
    <div>
      <div className={({ isActive }) => isActive ? "icon active" : "icon"}><NavBar /></div>
        <div><h1 className="list-title">Top 100 Albums</h1></div>

        <div>
          {/* Grid dos botões */}
          <div className="dashboard-btn-container">
        {buttons.map((btn, idx) => (
          <button
            key={btn.label}
            onClick={() => setActive(idx)}
            className={`dashboard-btn ${active === idx ? "active" : ""}`}
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