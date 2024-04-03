import React from 'react'
import Logotip from './Logotip'
import { FooterItems } from '../DataBases/FooterItems';
import { SocialNetworks } from '../DataBases/SocialNetworks';
import Container from './Container';


const Footer = () => {
  return (
    <div className='bg-gray-100 pb-5 p-10 mt-10'>
      <Container>
        <div className='flex flex-col md:flex-row gap-10 mb-5 pb-5 border-b border-gray-300 '>
          <div className='md:w-[30%]'>
            <Logotip />
            <p className='text-[14px] text-gray-600 py-5'>
              Bizde sizdiń usılıńızǵa uyqas hám siz kiyiwden maqtanatuǵın kiyimlerimiz bar. Áyellerden er adamlarǵa shekem.
            </p>
            <div className='flex items-center text-[24px] gap-2 '>
              {SocialNetworks.map(item => (
                <a key={item.url} target='_blank' href={item.url} className='hover:scale-[120%] transition-all duration-300 hover:text-indigo-600'>{item.icon}</a>
              ))}
            </div>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 gap-x-10'>
            {FooterItems.map(item => (
              <ul key={item.header} className=''>
                <h1 className='font-[700] mb-2'>{item.header}</h1>
                {item.body.map(item => (
                  <li key={item} className='text-[14px] mb-2 text-gray-600 hover:text-black cursor-pointer'>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div>
          <h1 className='text-[12px] text-gray-500'>Kiyim-Kenshek © 2000-2024, All Rights Reserved</h1>
        </div>
      </Container>
    </div>
  )
}

export default Footer