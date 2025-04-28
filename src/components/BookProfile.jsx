import React from 'react'
import { useParams } from 'react-router-dom';
import BooksJson from '../assets/books.json'
const BookProfile = () => {
    const isbn = (useParams().id);
    const book = BooksJson.filter((book) => book.isbn === isbn)[0]
    return (
        <div className="flex  text-white w-full h-screen flex-col   items-center text-center ">
            <nav className='w-full flex-1 ' >
                navbar
            </nav>
            <div className='flex flex-col  w-full flex-9  ' >
                <div className='flex-6 flex flex-col md:flex-row' >
                    <div className='flex-2 flex  items-center justify-center' >
                        <img src={book.cover_image} alt="Book Cover" className='border-2 rounded-xl' width={230} />
                    </div>
                    <div className=' flex-8 ' > 
                        <h1 className='text-3xl font-[arvo]  font-bold text-center text-fuchsia-50 pt-5 w-full' >{book.title}</h1>
                    </div>
                </div>
                <div className='flex-4 '> Extra stuff  </div>
            </div>
        </div>
    )
}

export default BookProfile