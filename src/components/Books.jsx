import React from 'react'
import Navbar from '../Navigation/Navbar'
import BookItems from './BookItems'

const Books = () => {
    return (
        <div className='bg-[#1e3231] ' >
            <Navbar/>
            <BookItems/>
        </div>
    )
}

export default Books