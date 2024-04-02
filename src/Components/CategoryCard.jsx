import React from 'react'
import Container from './Container'
import { useNavigate } from 'react-router-dom'

const CategoryCard = ({ item }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate("/products")} className='shadow-md flex items-center gap-3 p-4 rounded-md hover:shadow-xl transition-all duration-300 cursor-pointer'>
            <img className='rounded-md h-[80px] min-w-[80px] object-cover' src={item.image} />
            <div className='w-full flex items-center justify-center'>
                <h1 className='font-[600] mt-3'>{item.name}</h1>
            </div>
        </div>
    )
}

export default CategoryCard