
import AlbumCard from '../components/AlbumCard.jsx'
import data from '../data/history.json'

import { useTopAlbuns } from '../hooks/hooks.jsx'

export default function PageTop() {
   const topArtists = useTopAlbuns(data)

   
  return (
    <div>
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