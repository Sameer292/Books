import { Link } from "react-router-dom"
import { Rating } from "@mui/material"
import LazyLoad from 'react-lazy-load';
const BookCard = ({ book }) => {
    return (
        <LazyLoad offset={300} >
            <Link to={`book/${book.isbn}`} className="flex max-md:w-3/4  items-center hover:scale-105 transition duration-300 ease-in-out flex-col border-2 border-[#E0E0E0] rounded-2xl m-5 shadow-lg shadow-black/40 bg-[#293B3E] ">
                <div className="img  rounded-xl  mx-3 mt-3 h-[300px] w-[200px] bg-[#294d4b]  overflow-hidden  border-2 border-[#E0E0E0] drop-shadow-lg shadow-black/40 ">
                    <img src={book.cover_image} loading="lazy" alt={`${book.title} cover`} />
                </div>
                <div className="flex flex-col w-full mt-3  pb-5 "  >
                    <h2 className="font-[arvo] text-[#F5F5F5] max-md:text-sm/tight  font-bold px-4" >{book.title}</h2>
                    <p className="font-[poppins] max-md:text-sm text-[#D3D3D3] px-4" >{book.author}</p>
                    <div className="font-[roboto] flex justify-between flex-col md:flex-row w-full px-4">
                        <span>
                            <Rating name="read-only" value={book.rating} precision={1} size="small" readOnly />
                        </span>
                        <span>${book.price}</span>
                    </div>
                </div>
            </Link>
        </LazyLoad>
    )
}

export default BookCard