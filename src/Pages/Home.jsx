import React from 'react'
import Banner from '../Components/Banner'
import Card from '../Components/Card'
import Container from '../Components/Container'
import { getProducts } from '../Requests/Requests'
import { useQuery } from '@tanstack/react-query'
import Review from '../Components/Review'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  })

  return (
    <div>
      <Banner />
      <Container>
        {/* NEW PRODUCTS */}
        <div className='flex flex-col'>
          <h1 className='text-[20px] md:text-[32px] font-[700] text-center my-10'>JAŃA TOVARLAR</h1>
          <div className='flex gap-5 overflow-x-auto cards overflow-y-hidden p-5'>
            {
              data ?
                data.slice(0, 6).map(item => (
                  <Card key={item.id} item={item} />
                )) :
                [1, 2, 3, 4].map(item => (
                  <div key={item} className='bg-[#f1f1f1] flex flex-col justify-between p-6 rounded-md min-w-[300px] max-w-[300px]'>
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
          <div className='w-full justify-center flex'>
            <NavLink to={"products"} className='mt-5  py-3 font-[600] px-20 border w-fit rounded-full hover:bg-black hover:text-white active:scale-95 transition-all duration-300'>Tolıq kóriw</NavLink>
          </div>
        </div>

        {/* TOP PRODUCTS */}
        <div className='flex flex-col'>
          <h1 className='text-[20px] md:text-[32px] font-[700] text-center my-10 pt-10 border-t'>TOP TOVARLAR</h1>
          <div className='flex gap-5 overflow-x-auto cards overflow-y-hidden p-5'>
            {
              data ?
                data.filter(item => item.rating['rate'] > 4).map(item => (
                  <Card key={item.id} item={item} />
                )) :
                [1, 2, 3, 4].map(item => (
                  <div key={item} className='bg-[#f1f1f1] flex flex-col justify-between p-6 rounded-md min-w-[300px] max-w-[300px]'>
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
          <div className='w-full justify-center flex'>
            <NavLink to={"products"} className='mt-5  py-3 font-[600] px-20 border w-fit rounded-full hover:bg-black hover:text-white active:scale-95 transition-all duration-300'>Tolıq kóriw</NavLink>
          </div>
        </div>

        {/* Reviews */}
        <div>
          <h1 className='text-[20px] md:text-[32px] font-[700] text-center my-10 uppercase border-t pt-10'>Klientlerimizdiń pikirleri</h1>
          <div className='flex gap-5 overflow-x-auto cards overflow-y-hidden p-5'>
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home