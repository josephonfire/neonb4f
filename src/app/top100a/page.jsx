
import {Card} from '../components/Card'
import data from '../data/history.json'

export default function PageTop() {
  return (
    <div>
      <div>
        {data.map(DataMap => {
          return(
            <div>
              <Card position={1} artistName={DataMap.master_metadata_album_artist_name}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}
