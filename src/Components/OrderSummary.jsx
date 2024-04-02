import { Input } from '@mantine/core'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { IoPricetagsOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'

const OrderSummary = () => {
    const { basketList, total } = useSelector(state => state.basket)

    console.log(total)
    return (
        <div className='border rounded-[20px] p-5 shadow-lg w-[30%]'>
            <h1 className='text-[20px] font-[700]'>Buyırtpa nátiyjesi</h1>
            <div className='flex flex-col gap-3 py-5 mb-5 border-b'>
                <p className='font-[500] text-[#666] flex justify-between'>Jámi <span className='font-[700] text-black'>${total}</span></p>
                <p className='font-[500] text-[#666] flex justify-between'>Shegirme (-20%) <span className='font-[700] text-red-500'>${total * 0.15}</span></p>
                <p className='font-[500] text-[#666] flex justify-between'>Jetkerip beriw<span className='font-[700] text-black'>$15</span></p>
            </div>
            <p className='font-[500] flex justify-between mb-5'>Total <span className='text-[18px] font-[700]'>${total - total * 0.15}</span></p>
            <div className='flex gap-2 mb-5'>
                <Input className='w-[80%] flex items-center gap-2 border py-[10px] px-[12px] rounded-full text-[14px]' placeholder='Add promo code' leftSection={<IoPricetagsOutline />} />
                <button className=' bg-black text-white py-[10px] px-[25px] text-[14px] rounded-full hover:shadow-lg transition-all duration-200 active:scale-[98%]'>Apply</button>
            </div>
            <button className='flex items-center gap-3 w-full bg-black text-white py-[14px] rounded-full justify-center hover:shadow-lg transition-all duration-200 active:scale-[98%]'>Go to Checkot <FaArrowRight /></button>
        </div>
    )
}

export default OrderSummary