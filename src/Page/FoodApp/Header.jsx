import React, { useContext } from 'react'
import { FaOpencart } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom"
import { cartContext } from '../../App';

const Header = () => {

    const {cart} = useContext(cartContext)
  return (
    <div className='fixed bg-gray-50 shadow-2xl border-b-2 p-5 top-0 left-0 w-full '>
        <div className='flex items-center justify-between'>
           <div>
           <Link to="/"> <FaHome className='size-8' /></Link>
           </div>

           <div className='relative'>
           <Link to="/cart"> <FaOpencart className='size-8' /></Link>
           <div className='bg-black text-white absolute top-0 right-0 pl-1 w-4 h-4 rounded-full text-[12px]'>{cart.length}</div>
           </div>
        </div>
    </div>
  )
}

export default Header