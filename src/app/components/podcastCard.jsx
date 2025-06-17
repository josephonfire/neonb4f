import '../../css/podcastcard.css';
/*artist card component*/
function podcastCard(props) {

    return (
        <div className="pCard1">
            <img
                src="/imgs/spoti-podcasts-icon.svg"
                alt="podcast"
                className="card-img"
            />
            <div className="card-text">
                <p># 1{props.position}</p>
                <h3>Os dois papagaios da Elizabetch e outras histórias - ep.2{props.podcastName}</h3></div>
        </div>
    )
}
export default podcastCard;