import React from 'react'
import { FaStar } from "react-icons/fa";


const Review = () => {
    return (
        <div className='min-w-[400px] border p-8 rounded-lg'>
            <div className='flex gap-1 text-yellow-300'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <h1 className='font-[600] text-[18px] pt-4 pb-1'>Islam Bekbaevich</h1>
            <p>"Kiyim-kenshek" onlayn magazinnen alǵan kiyimlerimdiń sapası hám baxası meni tań qaldırdı. Kúndelik kiyimnen tartıp elegant kóyleklerge shekem, men satıp alǵan hár bir buyım kútgenimnen asıp ketti. "</p>
        </div>
    )
}

export default Review