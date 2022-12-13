import { Dispatch, SetStateAction, useState } from 'react'
import axios from 'axios'
import SongTable from './SongTable'

export default function Dashboard({ token }) {

    const [artists, setArtists] = useState()

    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: "Kanye",
                type: "artist"
            }
        })

        setArtists(data.artists.items)
    }

    const renderArtists = () => {
        return (
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {
                artists?.map(artist => (
                    <div key={artist.id}>
                        {artist.images.length ? <img width={"300rem"} height={"300rem"} className="rounded-lg" src={artist.images[0].url} alt=""/> : <div></div>}
                        {artist.name}
                    </div>
                ))}
            </div>
        )}

    return (
        <div className="p-2">
            <button className="btn btn-accent" onClick={searchArtists}>Albums</button>
            {renderArtists()}
            <SongTable />
        </div>
    )
}
