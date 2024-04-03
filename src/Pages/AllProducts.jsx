import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getProducts } from '../Requests/Requests'
import Card from '../Components/Card'
import Container from '../Components/Container'

const AllProducts = () => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  })
  return (
    <Container>
      <h1 className='text-[20px] md:text-[32px] font-[700] my-5'>Tovarlar</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center xl:grid-cols-4 gap-3 gap-y-10'>
        {data ?
          data.map(item => (
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
          ))}
      </div>
    </Container>
  )
}

export default AllProducts