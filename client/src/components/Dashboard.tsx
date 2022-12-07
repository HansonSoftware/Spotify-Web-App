import { useState } from 'react'
import axios from 'axios'
import App from '../App'

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
                {artist.images.length ? <img width={"100px"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
    }

    return (
        <div>
            <p>You are logged in with token: {token}</p>
            <button className="btn btn-active" onClick={searchArtists}>Albums</button>
            {renderArtists()}
        </div>
    )
}
