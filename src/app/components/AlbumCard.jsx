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
                <p># 1{props.position}</p>
                <h3>Primeiro Album Elizabetch e os dois papagaios{props.albumName}</h3></div>
        </div>
    )
}
export default AlbumCard;