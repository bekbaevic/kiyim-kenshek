import React from 'react'
import { useSelector } from 'react-redux'
import Container from '../Components/Container'
import ProductCardInBasket from '../Components/ProductCardInBasket';
import OrderSummary from '../Components/OrderSummary';
import { BsCart3 } from "react-icons/bs";


const Basket = () => {
  const { basketProducts, basketList } = useSelector(state => state.basket)
  console.log(basketList)
  return (
    <Container>
      <h1 className='text-[20px] md:text-[32px] font-[700] my-5'>Sizdiń sebetińiz</h1>
      <div className='flex gap-5 w-full items-start'>
        {basketProducts.length > 0 ?
          <div className='border flex flex-col rounded-[20px] px-5 shadow-lg w-[70%]'>
            {basketProducts.map(item => (
              <ProductCardInBasket key={item.id} item={item} />
            ))}
          </div>
          : <div className='w-[70%] flex items-end justify-center gap-2'>
            <BsCart3 className='text-[32px] text-gray-500' />
            <h1 className='text-[18px] text-center text-gray-500 font-[600]'>Sebet bos!</h1>
          </div>}
        <OrderSummary basketList={basketList} />
      </div>
    </Container>
  )
}

export default Basket