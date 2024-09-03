import React from 'react'
import { topalbums } from '@/util/data'
import AlbumCard from '../cards/Album'

const TopAlbums = () => {
    return (
        <section className="album-container flex space-x-4 w-full overflow-auto whitespace-nowrap scroll-smooth">
            {/* <h2 className="font-semibold text-2xl mb-2 mt-10 ml-1">Latest music</h2> */}
            {topalbums ? topalbums.length > 0 ? topalbums.map((item, index) => <AlbumCard key={index} item={item} />) : null : null}
        </section>
    )
}

export default TopAlbums