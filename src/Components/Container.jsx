import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='max-w-[1440px] w-[90%] mx-auto'>
            {children}
        </div>
    )
}

export default Container