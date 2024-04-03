import { Input } from '@mantine/core'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { IoPricetagsOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'

const OrderSummary = () => {
    const { basketList, total } = useSelector(state => state.basket)

    return (
        <div className='border rounded-[20px] p-5 shadow-lg w-full  lg:w-[40%]'>
            <h1 className='text-[20px] font-[700] text-center'>Buyırtpa nátiyjesi</h1>
            <div className='flex flex-col gap-3 py-5 mb-5 border-b'>
                <p className='font-[500] text-[#666] flex justify-between'>Tovarlar baxası <span className='font-[700] text-black'>${Math.floor(total)}</span></p>
                <p className='font-[500] text-[#666] flex justify-between'>Shegirme (-20%) <span className='font-[700] text-red-500'>${Math.floor(total * 0.15)}</span></p>
                <p className='font-[500] text-[#666] flex justify-between'>Jetkerip beriw<span className='font-[700] text-black'>$15</span></p>
            </div>
            <p className='font-[500] flex justify-between mb-5'>Jámi <span className='text-[18px] font-[700]'>${Math.floor(total - total * 0.15)}</span></p>

            <button className='flex items-center gap-3 w-full bg-black text-white py-[14px] rounded-full justify-center hover:shadow-lg transition-all duration-200 active:scale-[98%] font-[600]'>KASSA <FaArrowRight /></button>
        </div>
    )
}

export default OrderSummary