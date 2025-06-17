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
                <p># 1{props.position}</p>
                <h3>Parem de me gastar o nome{props.trackName}</h3></div>
        </div>
    )
}
export default MusicCard;