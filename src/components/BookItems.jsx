import React from 'react'
import BookCard from './BookCard'
import BookJson from '../assets/books.json'

const BookItems = () => {
    return (

        <div className='text-white pt-5  grid max-sm:place-items-center grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 '>
            {
                BookJson.map((book) => {
                    return <BookCard book={book} key={book.isbn} />
                })
            }
        </div>

    )
}

export default BookItems