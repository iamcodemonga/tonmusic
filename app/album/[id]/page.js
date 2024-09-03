import AlbumHeading from '@/components/album/Heading'
import LatestSongs from '@/components/lists/LatestSongs'
import React from 'react'

const page = () => {
    return (
        <main className="px-0 pt-24">
            <AlbumHeading />
            <section className='mt-7 pt-3 rounded-tr-xl rounded-tl-xl px-4'>
                <h2 className="font-semibold text-base mb-2 ml-1">All Tracks</h2>
                <LatestSongs />
            </section>
                {/* <ProfileBody /> */}
                {/* <Bottombar /> */}
        </main>
    )
}

export default page