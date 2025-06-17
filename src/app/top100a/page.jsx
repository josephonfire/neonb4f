
import {Card} from '../components/Card'
import data from '../data/history.json'

import { useTopArtists } from '../hooks/hooks.jsx'

export default function PageTop() {
   const topArtists = useTopArtists(data)
  return (
    <div>
      <div>
        
        {topArtists.map(DataMap => {
          return(

            <div key={DataMap._id}>
              <Card position={1} artistName={DataMap.artistName}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}
