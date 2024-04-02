import React, { useEffect, useState } from 'react'
import { HeaderListItems } from '../DataBases/HeaderItems'
import { NavLink } from 'react-router-dom'
import Logotip from './Logotip'
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from 'react-redux';


const Header = () => {
    const { basketProducts } = useSelector(state => state.basket)
    console.log(basketProducts.length)
    return (
        <div className='z-20 flex shadow-md items-center justify-between py-4 gap-5 sticky top-0 bg-white px-[5%]'>
            <div className='flex items-center gap-5'>
                <button>
                    <GiHamburgerMenu className='text-[24px] md:hidden cursor-pointer' />
                </button>
                <NavLink to={'/'}><Logotip /></NavLink>
            </div>
            <ul className='flex items-center gap-1 md:gap-3'>
                {HeaderListItems.map(item => (
                    <li key={item.path}>
                        <NavLink to={item.path} className="font-[500] p-3 px-6 rounded-full header-items whitespace-nowrap hidden md:block">{item.title}</NavLink>
                    </li>
                ))}
            </ul>
            <div className='flex items-center gap-3'>
                <label className='flex items-center rounded-full gap-3 lg:min-w-[300px] xl:w-[500px] lg:bg-gray-100 bg-black text-white lg:text-black p-[5px] lg:p-3'>
                    <IoSearchSharp className='lg:text-[20px]' />
                    <input type="text" placeholder='Tovardi izlew...' className='bg-gray-100 outline-none hidden lg:flex w-full text-[14px]' />
                </label>
                <div className='flex items-center gap-5'>
                    <NavLink className="relative" to={"basket"}>
                        <FaShoppingCart className='text-[24px]' />
                        <span className='absolute top-[-5px] right-[-5px] bg-indigo-600 font-[500] font-sans text-white w-[16px] h-[16px] text-[12px] rounded-full flex justify-center items-center'>{basketProducts.length}</span>
                    </NavLink>
                    <div className='cursor-pointer'>
                        <FaCircleUser className='text-[24px]' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header