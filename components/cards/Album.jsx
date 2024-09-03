import React from 'react'

const AlbumCard = ({ item }) => {
    return (
        <div className='min-w-28 aspect-[4/5]  space-y-2'>
            <a href='/album/13qefcdh' className='w-full'>
                <img src={item.art} alt="" className='w-full h-full rounded-xl object-cover' />
            </a>
            <div className='w-full space-y-1'>
                <a href='/' className='text-sm text-center block'>{item.owner}</a>
                <a href='/' className='text-xs text-gray-300 text-center block'>{item.title}</a>
            </div>
        </div>
    )
}

export default AlbumCard