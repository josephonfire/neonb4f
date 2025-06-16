

export default function Card (artistName, img, position, id) {
    return (
        <div>
            <div className="w-25 h-25">
                {img}
            </div>
            <div><p>#{position}</p></div>
            <h4>{artistName}</h4>
        </div>
    )
}