import { Link } from "react-router"

const BookCard = ({ book }) => {
    return (
        <Link to={`book/${book.isbn}`} className="flex items-center hover:scale-105 transition duration-300 ease-in-out flex-col border-2 border-[#E0E0E0] rounded-2xl m-5  shadow-lg shadow-black/40 bg-[#293B3E] " >
            <img className="mt-3 rounded-xl  " src={book.cover_image} alt="Cover Image" />
            <div className="flex flex-col w-full mt-3  pb-5  "  >
                <h2 className="font-[arvo] text-[#F5F5F5] font-bold px-4" >{book.title}</h2>
                <p className="font-[poppins] text-[#D3D3D3] px-4" >{book.author}</p>
                <div className="font-[roboto] flex justify-between w-full px-4">
                    <span>{book.rating}</span>
                    <span>{book.price}</span>
                </div>
            </div>
        </Link>
    )
}

export default BookCard