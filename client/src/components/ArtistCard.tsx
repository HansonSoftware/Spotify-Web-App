import React from 'react'

export default function ArtistCard({ artist }) {
    const activeArtist = null;

    console.log(artist)

    return (
        <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
            <div className="relative w-full h-54 group">
                {/* <Link to={`/songs/${song?.key}`}> */}
                <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeArtist?.name === artist.name ? 'flex bg-black bg-opacity-65' : 'hidden'}`}>
                </div>
                {/* </Link>   */}
                <img alt= "artistImg" src={artist.images[0].url} style={{height: "230px", width: "250px"}}/>
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
