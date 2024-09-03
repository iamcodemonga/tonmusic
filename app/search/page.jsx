import Bottombar from '@/components/Bottombar'
import React from 'react'

const page = () => {
    return (
        <main className="px-3 pt-20">
            <form action="" method="get">
                <div>
                    <input type="text" name="search" id="search" placeholder='search music, album and artists' className='px-4 py-4 bg-gray-800 text-gray-300 rounded-xl w-full text-sm outline-none' />
                </div>
                <div className='mt-4 space-x-3 w-full flex overflow-auto category-link-container px-1'>
                    <button type="button" className='border border-pink-600 bg-pink-600 rounded-full text-sm px-6 py-2'>All</button>
                    <button type="button" className='border border-white rounded-full text-sm px-6 py-2'>Songs</button>
                    <button type="button" className='border border-white rounded-full text-sm px-6 py-2'>Albums</button>
                    <button type="button" className='border border-white rounded-full text-sm px-6 py-2'>Artists</button>
                </div>
            </form>
            <Bottombar />
        </main>
    )
}

export default page