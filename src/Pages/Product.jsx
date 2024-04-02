import React, { useState } from 'react'
import Container from '../Components/Container'
import { FaStar } from 'react-icons/fa'
import Review from '../Components/Review';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../Requests/Requests';
import Card from '../Components/Card';
import { TiTick } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../Reducers/Basket.slice';

const Product = () => {

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),

  })

  const { product } = useSelector(state => state.product)
  const dispatch = useDispatch()

  const [imageNumber, setImageNumber] = useState(1)
  const [color, setColor] = useState(1)
  const [size, setSize] = useState(1)

  console.log(product);


  return (
    <Container>
      <div className='flex mt-10 gap-10'>
        <div className='w-[50%] flex gap-3'>
          <div className='flex flex-col justify-center gap-3'>
            <img onClick={() => setImageNumber(1)} style={imageNumber === 1 ? { border: "2px solid black" } : { border: '2px solid transparent' }} className='hover:shadow-lg w-[150px] h-[150px] object-cover rounded-2xl cursor-pointer' src={product?.image} alt="image" />
            <img onClick={() => setImageNumber(2)} style={imageNumber === 2 ? { border: "2px solid black" } : { border: '2px solid transparent' }} className='hover:shadow-lg w-[150px] h-[150px] object-cover rounded-2xl cursor-pointer' src="https://picsum.photos/401" alt="image" />
            <img onClick={() => setImageNumber(3)} style={imageNumber === 3 ? { border: "2px solid black" } : { border: '2px solid transparent' }} className='hover:shadow-lg w-[150px] h-[150px] object-cover rounded-2xl cursor-pointer' src="https://picsum.photos/402" alt="image" />
          </div>
          <div className='flex items-center justify-center w-full'>
            <img className='rounded-xl max-h-[500px] object-contain max-w-[500px]' src={imageNumber === 1 ? product?.image : imageNumber === 2 ? "https://picsum.photos/401" : "https://picsum.photos/402"} alt="image" />
          </div>
        </div>
        <div className='w-[50%]'>
          <div>
            <h1 className='uppercase text-[36px] font-[900]'>{product.title}</h1>
            <div className='flex gap-1 text-yellow-300 text-[20px]'>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <div className='flex gap-4 my-3 items-center'>
              <p className='text-[28px] font-[700]'>${product.price - product.price * 0.2}</p>
              <p className='text-[28px] line-through font-[700] text-gray-300'>${product.price}</p>
              <div className='text-[16px] font-[500] text-red-500 bg-red-100 py-[2px] px-[10px] rounded-full'>
                <p >-20%</p>
              </div>
            </div>
            <p className='border-b pb-5 mb-5'>{product.description}</p>
          </div>
          <div className='border-b pb-5 mb-5'>
            <p className='text-[16px] mb-2'>Reńdi tańlań</p>
            <div className='flex gap-2'>
              <div onClick={() => setColor(1)} className='cursor-pointer w-[37px] h-[37px] rounded-full bg-[#31344F] flex items-center justify-center'>{color === 1 && <TiTick className='text-white text-[24px]' />}</div>
              <div onClick={() => setColor(2)} className='cursor-pointer w-[37px] h-[37px] rounded-full bg-[#314F4A] flex items-center justify-center'>{color === 2 && <TiTick className='text-white text-[24px]' />}</div>
              <div onClick={() => setColor(3)} className='cursor-pointer w-[37px] h-[37px] rounded-full bg-[#4F4631] flex items-center justify-center'>{color === 3 && <TiTick className='text-white text-[24px]' />}</div>
            </div>
          </div>
          <div className='border-b pb-5 mb-5'>
            <p className='text-[16px]'>Ólshemdi belgileń</p>
            <div className='flex gap-2'>
              <div onClick={() => setSize(1)} style={size === 1 ? { backgroundColor: "black", color: "white" } : { backgroundColor: "#F0F0F0", color: "black" }} className='text-[16px] bg-[#f0f0f0] rounded-full py-[12px] px-[24px] w-fit cursor-pointer'><p>Small</p></div>
              <div onClick={() => setSize(2)} style={size === 2 ? { backgroundColor: "black", color: "white" } : { backgroundColor: "#F0F0F0", color: "black" }} className='text-[16px] bg-[#f0f0f0] rounded-full py-[12px] px-[24px] w-fit cursor-pointer'><p>Medium</p></div>
              <div onClick={() => setSize(3)} style={size === 3 ? { backgroundColor: "black", color: "white" } : { backgroundColor: "#F0F0F0", color: "black" }} className='text-[16px] bg-[#f0f0f0] rounded-full py-[12px] px-[24px] w-fit cursor-pointer'><p>Large</p></div>
              <div onClick={() => setSize(4)} style={size === 4 ? { backgroundColor: "black", color: "white" } : { backgroundColor: "#F0F0F0", color: "black" }} className='text-[16px] bg-[#f0f0f0] rounded-full py-[12px] px-[24px] w-fit cursor-pointer'><p>X-Large</p></div>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div className='mt-5 flex flex-col gap-2 w-full'>
              <button onClick={() => dispatch(setProduct(product))} className='border-2 border-black rounded-full py-2 px-2 w-full font-[500] mb-5 transition-all duration-300 bg-black text-white'>ADD TO BASKET</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-[20px] md:text-[32px] font-[700] text-center my-10 uppercase border-t pt-10'>Klientlerimizdiń pikirleri</h1>
        <div className='grid grid-cols-2 gap-2 mt-10'>
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
        <div className='w-full justify-center flex'>
          <button className='mt-7  py-3 font-[600] px-20 border w-fit rounded-full hover:bg-black hover:text-white active:scale-95 transition-all duration-300'>Tolıq kóriw</button>
        </div>
      </div>

      <h1 className='text-[20px] md:text-[32px] font-[800] text-center my-10 pt-10 border-t'>SIZGE DE UNAWÍ MÚMKIN</h1>
      <div className='flex gap-5 overflow-x-auto cards overflow-y-hidden p-5'>
        {
          data ?
            data.slice(0, 4).map(item => (
              <Card key={item.id} item={item} />
            )) :
            [1, 2, 3, 4].map(item => (
              <div className='bg-[#f1f1f1] flex flex-col justify-between p-6 rounded-md min-w-[300px] max-w-[300px]'>
                <div>
                  <div className='w-[250px] h-[250px] flex items-center bg-white justify-center '>
                    <img className='rounded-md h-full object-cover' />
                  </div>
                  <div className='w-full h-[20px] bg-white mt-5 rounded-md'></div>
                  <div className='w-full h-[20px] bg-white mt-5 rounded-md'></div>
                </div>
                <div className='mt-5 flex flex-col gap-2'>
                  <div className='bg-white h-[25px] w-[30%] rounded-md'></div>
                  <div className='rounded-md w-full h-[40px] bg-white'></div>
                </div>
              </div>
            ))
        }
      </div>
    </Container>
  )
}

export default Product