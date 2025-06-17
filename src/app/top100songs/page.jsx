
import MusicCard from '../components/MusicCard.jsx'
import data from '../data/history.json'

import { useTopSongs } from '../hooks/hooks.jsx'

export default function PageTop() {
   const topSongs = useTopSongs(data)

   
  return (
    <div>
      <div>
        
        {topSongs.map((DataMap, index) => {
          return(

            <div key={DataMap.trackName}>
              <MusicCard position={index + 1} artistName={DataMap.artistName} trackName={DataMap.trackName} msTotal={DataMap.ms_total}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}
