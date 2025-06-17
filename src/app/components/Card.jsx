import '../globals.css'

function Card(props) {

    return (
        <div className="Card1">
            <img
                src="/imgs/spoti-singer-icon.svg"
                alt="artist"
                className="card-img"
            />
            <div className="card-text">
                <p># 1{props.position}</p>
                <h3>Elizabetch e os dois papagaios{props.artistName}</h3></div>
        </div>
    )
}
export default Card;