import Bottombar from '@/components/Bottombar'
import ProfileBody from '@/components/Profile/Body'
import ProfileHeading from '@/components/Profile/Heading'
import React from 'react'

const page = () => {
    return (
        <main className="px-0 pt-24">
            <ProfileHeading />
            <ProfileBody />
            <Bottombar />
        </main>
    )
}

export default page