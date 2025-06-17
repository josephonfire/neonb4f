import '../../css/artistcard.css'
/*artist card component*/
function Card(props) {

    return (
        <div className="Card1">
            <img
                src="/imgs/spoti-singer-icon.svg"
                alt="artist"
                className="card-img"
            />
            <div className="card-text">
                <p>#{props.position}</p>
                <h3>{props.artistName}</h3></div>
        </div>
    )
}
export default Card;