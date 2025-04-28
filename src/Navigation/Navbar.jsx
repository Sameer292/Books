import React from 'react'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'


const Navbar = () => {
    return ( 
        <span className=' border-2  bg-[#0D5C63] rounded-b-2xl flex items-center justify-between p-4' >
            <div className='w-1/3'>
            <input type="text"  placeholder='Search Books' className='border-2 border-indigo-400 rounded-md py-1 pl-4' />
            </div>
            <h1 className='text-3xl w-1/3 font-[pacifico]  font-bold text-center text-[#DC143C]  text-shadow-2xs text-shadow-black-800   ' >Shreeya's</h1>
            <div className='flex w-1/3 justify-end gap-4 text-2xl'>
                <a href="#">
                    <FiHeart />
                </a>
                <a href="#">
                    <AiOutlineShoppingCart />
                </a>
                <a href="#">
                    <AiOutlineUserAdd />
                </a>
            </div>
        </span>
    )
}

export default Navbar