import { Dispatch, SetStateAction, useState } from 'react'
import axios from 'axios'
import SongTable from './SongTable'
import ArtistCard from './ArtistCard'
import SongCard from './SongCard'
import '../stylesheet.css'
import Logo from '../assets/images/logo.png'

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
                q: "The",
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
                q: "The",
                type: "track"
            }
        })
        setSongs(data.tracks.items)
    }

    const searchAlbums = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: "The",
                type: "album"
            }
        })
        setAlbums(data.albums.items)
    }

    const renderArtists = () => {
        return (
            <div>
                <h1 className="text-white text-4xl font-bold p-6">Artists</h1>
                <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                    {
                    artists?.map(artist => (
                        <div key={artist.id}>
                            {<ArtistCard artist = {artist} />}
                        </div>
                    ))}
                </div>
            </div>
    )}

    const renderSongs = () => {
        return (
            <div>
                <h1 className="text-white text-4xl font-bold p-6">Songs</h1>
                <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                    {
                    songs?.map(song => (
                        <div key={song.id}>
                            {<SongCard song = {song} />}
                        </div>
                    ))}
                </div>
            </div>
    )}

    const renderAlbums = () => {
        return (
            <div>

            </div>
        )
    }

    return (
        <div className="h-[100vh] overflow-y-scroll no-scrollbar flex xl:flex-row flex-col-reverse example p-6">
            <div className="flex-1 h-fit pb-40">
                {renderArtists()}
                {renderSongs()}
                {renderAlbums()}
                {/* <SongTable /> */}

                <button className="btn btn-outline" onClick={searchArtists}>Artists</button>
                <button className="btn btn-outline" onClick={searchSongs}>Songs</button>
                <button className="btn btn-outline" onClick={searchAlbums}>Albums</button>
            </div>
        </div>
    )
}
