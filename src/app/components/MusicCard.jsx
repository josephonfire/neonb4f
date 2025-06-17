import '../../css/musiccard.css'
/*artist card component*/
function MusicCard(props) {

    return (
        <div className="mCard1">
            <img
                src="/imgs/spoti-musics-icon.svg"
                alt="musics"
                className="card-img"
            />
            <div className="card-text">
                <p>#{props.position}</p>
                <h3>{props.trackName}</h3>
                <h5>by {props.artistName}</h5>
                <p>{Math.round((props.msTotal) / 60000)} minutes played</p>
                </div>
                
        </div>
    )
}
export default MusicCard;