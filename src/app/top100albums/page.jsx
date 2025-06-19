"use client"
import AlbumCard from '../components/AlbumCard.jsx'
import data from '../data/history.json'
import NavBar from '../components/NavBar.jsx';
import { useTopAlbums } from '../hooks/hooks.jsx'
import { useState } from "react";
import { filterDate4Weeks, filterDate6Months, filter1Year } from '../hooks/filterDate.jsx'


export default function PageTop() {
  const topAlbums = useTopAlbums(data)
  const topAlbums4Weeks = useTopAlbums(filterDate4Weeks(data));
  const topAlbums6Month = useTopAlbums(filterDate6Months(data));
  const topAlbums1Year = useTopAlbums(filter1Year(data));


  return (
    <div><NavBar /><div>
      <div><h1>Top 100 Albums</h1></div>

      {topAlbums.map((DataMap, index) => {
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