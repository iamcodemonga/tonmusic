import React from 'react'
import AlbumCard from '../cards/Album'
import SongCard from '../cards/Song'
import TopAlbums from '../lists/TopAlbums'
import LatestSongs from '../lists/LatestSongs'

const ProfileBody = () => {
    return (
        <section className='mt-10 bg-gray-950 pt-3 rounded-tr-xl rounded-tl-xl px-4'>
            <h1  className="font-semibold text-base mb-4 mt-5 ml-1">Albums</h1>
            <TopAlbums />
            <h2 className="font-semibold text-base mb-2 mt-10 ml-1">All songs</h2>
            <LatestSongs />
        </section>
    )
}

export default ProfileBody