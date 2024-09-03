import React from 'react'

const SongCard = ({ item }) => {
    return (
        <a href="https://" className='flex items-center w-full justify-between py-3'>
            <div className='flex items-center space-x-3'>
                <div>
                    <img src={item.poster} alt="" className='w-[60px] aspect-square object-cover rounded-xl' />
                </div>
                <div className='space-y-1'>
                    <h4 className='font-normal text-sm'>{item.title}</h4>
                    <p className='text-[10px] text-gray-300'>{item.artist}</p>
                </div>
            </div>
            <div>
                <div className='bg-gradient-to-tr from-pink-600 to-purple-500 rounded-full flex justify-center items-center w-12 h-12'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </a>
    )
}

export default SongCard