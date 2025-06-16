import '../globals.css'

export function Card (props) {

    return (
        <div className="Card2">
            <div className="Card1">
                <div className="w-25 h-25 p-2">
                    <img
                    src={props.img}
                    alt="artist"
                    className="w-20 h-20 rounded-full object-cover"
                    />
                </div>
                <div><p>#{props.position}</p></div>
                <h4>{props.artistName}</h4>
            </div>
        </div>
    )
}