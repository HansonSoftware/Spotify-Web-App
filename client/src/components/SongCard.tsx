import React from 'react'
import Logo from '../assets/images/logo.png'

export default function SongCard({ song }) {
    const activeSong = null;

    return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
        <div className="relative w-full h-54 group">
        {/* <Link to={`/songs/${song?.key}`}> */}
            <div className={`absolute inset-0 justify-center items-center rounded-lg bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.name ? 'flex bg-black bg-opacity-65 rounded-lg' : 'hidden'}`}>
        </div>
        {/* </Link>   */}
        <img className="rounded-lg" alt="songImg" src={song.album.images[0] ? song.album.images[0].url : Logo}/>
        </div>
        <div className="mt-4 flex flex-col">
            <p className="font-semibold text-lg text-white truncate">
            {/* <Link to={`/songs/${song?.key}`}> */}
                {song.name}
            {/* </Link> */}
            </p>
            <p className="text-sm truncate text-gray-200 mt-1">
            {/* <Link to={`/artists/${song?.artists[0].adamid}`}> */}
                {song.artists[0].name}
            {/* </Link> */}
            </p>
        </div>
    </div>
    );
}
