import React from 'react'
import BannerImage from "../Images/BannerImage.png"
const Banner = () => {
    return (
        <div className='w-full py-20 bg-gray-100 flex items-center justify-between px-16'>
            <div className='w-[100%]'>
                <h1 className='text-[24px] md:text-[36px] lg:w-[80%] mx-auto text-center leading-[100%] font-[800] uppercase'>Siz izlegen barlıq kiyim-kensheklerdi usı jerden tabasız</h1>
                <p className='font-sans text-gray-700 mt-5 mb-10 text-center'>
                    Óz individuallıǵıńızǵa hám vkusıńızǵa mólsherlengen, puqta islep shıǵarılǵan hár qıylı kiyimlerimizni kórip shıǵıń.
                </p>
                <div className='flex md:flex-row flex-col items-center gap-10 justify-center'>
                    <div className='flex gap-10'>
                        <div>
                            <h1 className='text-[24px] lg:text-[32px] font-[700] leading-8'>200+</h1>
                            <h1 className='text-gray-700 text-[14px]'>Xalıqaralıq brendler</h1>
                        </div>
                        <div>
                            <h1 className='text-[24px] lg:text-[32px] font-[700] leading-8'>2.000+</h1>
                            <h1 className='text-gray-700 text-[14px]'>Sapalı tovarlar</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[24px] lg:text-[32px] font-[700] leading-8'>30.000+</h1>
                        <h1 className='text-gray-700 text-[14px]'>Klientler</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner