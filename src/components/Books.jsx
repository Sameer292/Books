import React from 'react'
import BookCard from './BookCard'
import BookJson from '../assets/books.json'

const Books = () => {
    return (
        <div className='bg-[#1e3231] ' >
            <h1 className='text-3xl font-[pacifico]  font-bold text-center text-[#DC143C] pt-5 w-full' >Shreeya's</h1>
            <div className='text-white pt-5  grid max-sm:place-items-center grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 '>
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