"use client"

import { useEffect } from 'react'

const telegram = window.Telegram.WebApp

const Telegram = ({ children }) => {

    useEffect(() => {
        telegram.ready
        console.log(telegram);
    })

    return (
        <div>{children}</div>
    )
}

export default Telegram