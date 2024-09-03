import { latestsongs } from '@/util/data'
import React from 'react'
import SongCard from '../cards/Song'

const LatestSongs = () => {
    return (
        <section>
            {latestsongs ? latestsongs.length > 0 ? latestsongs.map((item, index) => <SongCard item={item} key={index} />) : null : null}
        </section>
    )
}

export default LatestSongs