import React from 'react'
import { MdDelete } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { decrementCount, deleteProduct, setProduct } from "../Reducers/Basket.slice";

const ProductCardInBasket = ({ item }) => {

    const { basketList } = useSelector(state => state.basket)
    const dispatch = useDispatch()

    return (
        <div className='relative flex gap-5 border-b py-5'>
            <div className='w-[125px] h-[125px] p-2 border rounded-xl'>
                <img className='w-full h-full object-contain rounded-md' src={item.image} alt="product-image" />
            </div>
            <div>
                <h1 className='text-[20px] font-[700]'>{item.title}</h1>
                <p className='font-[500]'>Ólshemi: <span className='text-[#555]'>Large</span></p>
                <p className='font-[500]'>Reńi: <span className='text-[#555]'>White</span></p>
                <h2 className='text-[24px] font-[700] mt-5'>${item.price}</h2>
            </div>
            <div onClick={() => dispatch(deleteProduct(item))} className='absolute top-5 right-0 text-[25px] text-red-500 cursor-pointer transition-all duration-100 active:scale-95' >
                <MdDelete />
            </div>
            <div className='absolute right-0 bottom-5 bg-gray-100 flex items-center justify-center gap-5 py-2 px-4 rounded-full'>
                <span onClick={() => (basketList.filter(i => i.id === item.id).length !== 1 ? dispatch(decrementCount(item)) : '')} className='text-[18px] font-[500] cursor-pointer '><FiMinus /></span>
                <span>{basketList.filter(i => i.id === item.id).length}</span>
                <span onClick={() => dispatch(setProduct(item))} className='text-[18px] font-[500] cursor-pointer '><FiPlus /></span>
            </div>
        </div>

    )
}

export default ProductCardInBasket