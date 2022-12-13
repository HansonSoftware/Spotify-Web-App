import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'


export default function SongTable() {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th><AiOutlineClockCircle style={{height: "1.5rem", width: "1.5rem"}}/></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* <!-- row 1 --> */}
                    <tr className="hover">
                        <th>1</th>
                        <td>Song Name</td>
                        <td>Song Artist</td>
                        <td>Album Name</td>
                        <td>Length</td>
                    </tr>
                    {/* <!-- row 2 --> */}
                    <tr className="hover">
                        <th>2</th>
                        <td>Song Name</td>
                        <td>Song Artist</td>
                        <td>Album Name</td>
                        <td>Length</td>
                    </tr>
                    {/* <!-- row 3 --> */}
                    <tr className="hover">
                        <th>3</th>
                        <td>Song Name</td>
                        <td>Song Artist</td>
                        <td>Album Name</td>
                        <td>Length</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
