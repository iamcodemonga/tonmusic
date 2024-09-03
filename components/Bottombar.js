import Link from 'next/link'
import React from 'react'

const Bottombar = () => {
    return (
        <nav className='flex items-center space-x-6 bg-gray-800 py-3 px-5 fixed bottom-5 left-1/2 transform -translate-x-1/2 rounded-3xl'>
            <div className='max-w-16'>
                <Link href="/" className='flex flex-col justify-center tems-center w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7  text-pink-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                    </svg>
                </Link>
                {/* <a href="http://" className='flex flex-col justify-center tems-center w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 w-full mb-1 text-pink-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                    </svg>
                    <p className='text-xs text-center font-normal text-pink-600'>Music</p>
                </a> */}
            </div>
            <div className='max-w-16'>
                <Link href="/search" className='flex flex-col justify-center tems-center w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-slate-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </Link>
                {/* <a href="http://" className='flex flex-col justify-center tems-center w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 w-full mb-1 text-slate-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <p className='text-xs text-center font-normal text-slate-300'>Search</p>
                </a> */}
            </div>
            <div className='max-w-16'>
                <Link href="/codemonga" className=''>
                    <div className='w-8 h-8 flex justify-center p-[1.5px] bg-pink-600 rounded-full'>
                        <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar" className='w-full h-full object-cover rounded-full' />
                    </div>
                </Link>
                {/* <a href="http://" className='flex flex-col justify-center tems-center w-full'>
                    <div className='w-full flex justify-center'>
                        <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar" className='w-7 h-7 mb-1 object-cover rounded-full' />
                    </div>
                    <p className='text-xs text-center font-normal text-slate-300'>Profile</p>
                </a> */}
            </div>
        </nav>
    )
}

export default Bottombar