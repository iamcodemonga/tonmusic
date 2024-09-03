import React from 'react'

const AlbumHeading = () => {
    return (
        <header className='w-full h-full rounded-xl'>
            <div className='w-full flex justify-center items-center'>
                <img src="https://images.pexels.com/photos/2221879/pexels-photo-2221879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-1/4 object-cover rounded-xl' />
            </div>
            <div className='bg-gray-80 h-full w-full -mt-10 pt-14 pb-3 px-5 rounded-xl'>
                <div className=''>
                    <div className='text-center text-sm text-gray-300 font-medium mb-1 flex items-center justify-center mt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mr-1 text-pink-600">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                        </svg>500M Streams
                    </div>
                    <h1 className='text-center text-xl font-bold mb-1'>Way of the CEO</h1>
                    <p className='text-center text-xs text-gray-300 font-light mb-2'>@kemzy</p>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <div className='flex space-x-4 items-center'>
                    <div className='px-4 text-xs py-3 rounded-xl bg-gray-700 flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 mr-1">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                        </svg>Play all
                    </div>
                    <div className='px-4 text-xs py-3 rounded-xl bg-gray-700 flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 mr-1">
                            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>Add song
                    </div>
                </div>
            </div>
            {/* <div className='bg-pink-600 w-full h-full -mt-10'></div> */}
        </header>
    )
}

export default AlbumHeading