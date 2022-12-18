import React from 'react'
import Logo from '../assets/images/logo.png'

export default function ArtistCard({ artist }) {
    const activeArtist = null;

    return (
        <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-3xl cursor-pointer">
            <div className="relative w-full h-54 group">
                {/* <Link to={`/songs/${song?.key}`}> */}
                <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex rounded-full ${activeArtist?.name === artist.name ? 'flex bg-black bg-opacity-65 rounded-full' : 'hidden'}`}>
                </div>
                {/* </Link>   */}
                <img className="rounded-full" alt="artistImg" src={artist.images[0]? artist.images[0].url : Logo} style={{height: "230px", width: "250px"}}/>
            </div>
            <div className="mt-4 flex flex-col">
                <p className="font-semibold text-lg text-white truncate">
                    {/* <Link to={`/songs/${song?.key}`}> */}
                    {artist.name}
                    {/* </Link> */}
                </p>
                <p className="text-sm truncate text-gray-200 mt-1 uppercase">
                    {/* <Link to={`/artists/${song?.artists[0].adamid}`}> */}
                    {artist.genres[0]? artist.genres[0] : "who?"}
                    {/* </Link> */}
                </p>
            </div>
        </div>
    )
}
