export default function ArtistPage({params}: { params: {id: string}}) {
    const artistName = params.id.replaceAll("%20", " "); 
    return (
        <div>
            {artistName}
        </div>
    )
}