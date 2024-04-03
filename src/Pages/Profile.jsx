import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../Reducers/user.slice'
import { NavLink } from 'react-router-dom'
import { FaArrowLeft, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Profile = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)
    console.log(user)
    return (
        <div className='w-full h-screen flex items-center justify-center flex-col gap-10 px-10'>
            <NavLink to={"/"} className='absolute top-10 left-10 border border-black rounded-full p-2 hover:bg-black hover:text-white transition-all duration-200'><FaArrowLeft /></NavLink>
            <div className='flex gap-7'>
                <div className='min-w-[350px] sm:min-w-[600px] h-full border rounded-3xl p-5 flex flex-col justify-center gap-10'>
                    <div className='flex items-center gap-3'>
                        <img src="https://picsum.photos/300" alt="profile-img" className='w-[40px] h-[40px] rounded-md' />
                        <h1 className='flex gap-2 items-center uppercase font-[700] text-[22px] rounded-lg'>Islam Bekbaeich</h1>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-[700] text-[18px]'>Contacts</h1>
                        <div className='flex flex-col justify-center w-full gap-4'>
                            <h1 className='flex gap-2 items-center justify-center bg-gray-200 p-4 rounded-lg'><MdEmail className='text-[24px]' />islam@gmail.com</h1>
                            <h1 className='flex gap-2 items-center justify-center bg-gray-200 p-4 rounded-lg'><FaPhone className='text-[24px]' />+998907003108</h1>
                        </div>
                    </div>
                </div>
            </div>
            <NavLink to={"/"} className='bg-red-600 text-white py-2 px-10 font-[600] rounded-full' onClick={(dispatch(logoutUser()))}>Logout</NavLink>
        </div>
    )
}

export default Profile