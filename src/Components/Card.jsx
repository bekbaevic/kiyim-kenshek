import { Button } from '@mantine/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setProduct } from '../Reducers/Basket.slice'
import { useNavigate } from 'react-router-dom'
import { setProductToProduct } from '../Reducers/Product.slice'

const Card = ({ item }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div onClick={() => (dispatch(setProductToProduct(item)), navigate("/product"))} className='shadow-md flex flex-col justify-between p-4 rounded-md min-w-full max-w-full  md:min-w-[300px] md:max-w-[300px] hover:shadow-xl transition-all duration-300 cursor-pointer'>
      <div>
        <div className='w-[240px] md:w-[280px] h-[240px] md:h-[280px] flex items-center justify-center mx-auto'>
          <img className='rounded-md h-full  object-cover' src={item.image} />
        </div>
        <h1 className='font-[600] mt-3'>{item.title.length > 50 ? `${item.title.slice(0, 50)} ...` : item.title}</h1>
      </div>
      <div className='mt-5 flex flex-col gap-2'>
        <h1 className='font-[700] text-[20px] text-gray-600'>{item.price} $</h1>
      </div>
    </div>
  )
}

export default Card