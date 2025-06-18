"use client"
import AlbumCard from '../components/AlbumCard.jsx'
import data from '../data/history.json'

import { useTopAlbuns } from '../hooks/hooks.jsx'
import { useState } from "react";
import { filterDate4Weeks, filterDate6Months, filter1Year} from '../hooks/filterDate.jsx'


export default function PageTop() {
    const topArtists = useTopAlbuns(data)
    const topSongs4Weeks = useTopSongs(filterDate4Weeks(data));
    const topSongs6Month = useTopSongs(filterDate6Months(data));
    const topSongs1Year = useTopSongs(filter1Year(data));

   
  return (
    <div>
      <NavBar />
      <div>
        
        {topArtists.map((DataMap, index) => {
          return(

            <div key={DataMap.albumName}>
              <AlbumCard position={index + 1} artistName={DataMap.artistName} albumName={DataMap.albumName} msTotal={DataMap.ms_total}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}