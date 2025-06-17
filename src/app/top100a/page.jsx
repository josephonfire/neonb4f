
import {Card} from '../components/Card'
import data from '../data/history.json'

export default function PageTop() {
  return (
    <div>
      <div>
        {data.map(DataMap => {
          return(

            <div>
              <p>{DataMap.master_metadata_album_artist_name}</p>
              <Card position={1} artistName={"Olá"}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}
