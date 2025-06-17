import '../../css/albumcard.css'

function AlbumCard(props) {

    return (
        <div className="aCard1">
            <img
                src="/imgs/spoti-albums-icon.svg"
                alt="album"
                className="card-img"
            />
            <div className="card-text">
                <p>#{props.position}</p>
                <h3>{props.albumName}</h3>
                <h5>by {props.artistName}</h5>
                <p>{Math.round((props.msTotal) / 60000)} minutes played</p></div>
        </div>
    )
}
export default AlbumCard;