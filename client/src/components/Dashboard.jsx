import { Dispatch, SetStateAction, useState } from 'react'
import axios from 'axios'
import SongTable from './SongTable'
import ArtistCard from './ArtistCard'
import './ExtraStyles.css'

export default function Dashboard({ token }) {

    const [artists, setArtists] = useState()
    const [songs, setSongs] = useState()
    const [albums, setAlbums] = useState()

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

    const searchSongs = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: "Kanye",
                type: "track"
            }
        })
        setSongs(data.tracks.items)
    }

    const renderArtists = () => {
        return (
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {
                artists?.map(artist => (
                    <div key={artist.id}>
                        {<ArtistCard artist = {artist} />}
                    </div>
                ))}
            </div>
    )}

    const renderSongs = () => {
        return (
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {
                songs?.map(song => (
                    <div key={song.id}>
                        {song.album.images.length ? <img width={"300rem"} height={"300rem"} className="rounded-lg" src={song.album.images[0].url} alt=""/> : <div></div>}
                        {song.name}
                    </div>
                ))}
            </div>
    )}

    return (
        <div className="h-[100vh] overflow-y-scroll no-scrollbar flex xl:flex-row flex-col-reverse example p-6">
            <div className="flex-1 h-fit pb-40">
                
                {renderArtists()}
                {renderSongs()}
                {/* <SongTable /> */}

                <button className="btn btn-outline" onClick={searchArtists}>Artists</button>
                <button className="btn btn-outline" onClick={searchSongs}>Songs</button>
            </div>
        </div>
    )
}
