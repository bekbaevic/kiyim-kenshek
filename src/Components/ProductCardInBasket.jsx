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
        <div className='relative flex flex-col sm:flex-row gap-5 border-b py-5'>
            <div className='w-full sm:w-[125px] h-[250px] sm:h-[125px] p-2 border rounded-xl'>
                <img className='w-full h-full object-contain rounded-md' src={item.image} alt="product-image" />
            </div>
            <div>
                <h1 className='text-[20px] font-[700] max-w-[90%] md:max-w-full'>{item.title}</h1>
                <div className='my-3'>
                    <p className='font-[500]'>Ólshemi: <span className='text-[#555]'>Large</span></p>
                    <p className='font-[500] flex gap-2'>Reńi: <span className='text-[#555] flex gap-1 items-center'><div className='w-[20px] h-[20px] rounded-full bg-green-600 border-2 border-black'></div>Green</span></p>
                </div>
                <h2 className='text-[24px] font-[700] mt-5'>${item.price}</h2>
                <div onClick={() => dispatch(deleteProduct(item))} className='absolute top-5 right-0 text-[25px] text-red-500 cursor-pointer transition-all duration-100 active:scale-95 bg-white rounded-full p-3 sm:p-0 ' >
                    <MdDelete />
                </div>
                <div className='absolute right-0 bottom-5 bg-gray-100 flex items-center justify-center gap-5 py-2 px-4 rounded-full'>
                    <span onClick={() => (basketList.filter(i => i.id === item.id).length !== 1 ? dispatch(decrementCount(item)) : '')} className='text-[18px] font-[500] cursor-pointer '><FiMinus /></span>
                    <span>{basketList.filter(i => i.id === item.id).length}</span>
                    <span onClick={() => dispatch(setProduct(item))} className='text-[18px] font-[500] cursor-pointer '><FiPlus /></span>
                </div>
            </div>

        </div>

    )
}

export default ProductCardInBasket