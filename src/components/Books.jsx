import React from 'react'
import BookCard from './BookCard'
import BookJson from '../assets/books.json'

const Books = () => {
    return (
        <div className='bg-[#1e3231] ' >
            <h1 className='text-3xl font-[pacifico]  font-bold text-center text-[#DC143C] pt-5 w-full' >Shreeya's</h1>
            <div className='text-white pt-5 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:grid-cols-4 '>
                {
                    BookJson.map((book) => {
                        return <BookCard book={book} key={book.isbn} />
                    })
                }
            </div>
        </div>
    )
}

export default Books