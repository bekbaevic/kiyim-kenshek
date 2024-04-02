import React from 'react'
import { getCategories } from '../Requests/Requests'
import { useQuery } from '@tanstack/react-query'
import Card from '../Components/Card'
import { Loader } from '@mantine/core'
import CategoryCard from '../Components/CategoryCard'
import Container from '../Components/Container'

const Categories = () => {

  const { data, isError, isLoading, isFetching, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
    refetchOnWindowFocus: false
  })

  if (isLoading && isFetching) {
    <div className='w-full h-screen flex items-center justify-center'>
      <Loader color="blue" />
    </div>
  }

  return (
    <Container>
      <h1 className='text-[20px] md:text-[32px] font-[700] my-5'>Kategoriyalar</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-10'>
        {
          data ? data.map(item => (
            <CategoryCard item={item} />
          )) :
            [0, 1, 2, 3, 4, 5].map(item => (
              <div className='flex gap-3 p-4 rounded-md bg-[#f1f1f1]'>
                <div className='rounded-md h-[80px] min-w-[80px] bg-white object-cover'></div>
                <div className='w-full flex gap-2 flex-col'>
                  <div className='bg-white h-[25px] w-full'></div>
                  <div className='bg-white h-[15px] w-full'></div>
                </div>
              </div>
            )
            )
        }
      </div>
    </Container>
  )
}

export default Categories