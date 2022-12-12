import { Dispatch, SetStateAction, useState } from 'react'
import axios from 'axios'

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
        return artists?.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img width={"300rem"} className="rounded-lg border-2 border-primary" src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
    }

    return (
        <div className="p-2">
            <button className="btn btn-accent" onClick={searchArtists}>Albums</button>
            {renderArtists()}
        </div>
    )
}
