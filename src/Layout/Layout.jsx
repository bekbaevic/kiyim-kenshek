import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { useDisclosure } from '@mantine/hooks'
import { AspectRatio, Button, Drawer, Overlay } from '@mantine/core'
import Container from '../Components/Container'
import Logotip from '../Components/Logotip'
import { IoMdClose } from "react-icons/io";

const Layout = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <div>
            <Drawer style={opened ? { left: "0" } : { left: "-120%" }} withCloseButton={false} offset={8} className="bg-white w-[250px] p-5 fixed shadow-xl transition-all duration-500 top-0 h-full z-40" opened={opened} onClose={close}>
                <Logotip />
                <Button onClick={() => close()} className='text-[20px] absolute top-[-10px] right-[-10px] hover:bg-black p-[3px] border-2 rounded-sm border-black hover:text-white transition-all duration-300'>
                    <IoMdClose />
                </Button>
                <ul className='flex flex-col mt-10'>
                    <NavLink className="hover:bg-gray-200 rounded-sm font-[500] py-3 px-4" onClick={() => close()} to={"/"}>BAS BET</NavLink>
                    <NavLink className="hover:bg-gray-200 rounded-sm font-[500] py-3 px-4" onClick={() => close()} to={"/categories"}>KATEGORIYALAR</NavLink>
                    <NavLink className="hover:bg-gray-200 rounded-sm font-[500] py-3 px-4" onClick={() => close()} to={"/products"}>TOVARLAR</NavLink>
                    <NavLink className="hover:bg-gray-200 rounded-sm font-[500] py-3 px-4" onClick={() => close()} to={"/basket"}>SEBET</NavLink>
                    <NavLink className="hover:bg-gray-200 rounded-sm font-[500] py-3 px-4" onClick={() => close()} to={"/profile"}>PROFIL</NavLink>
                    <NavLink className="hover:bg-red-100 rounded-sm font-[500] py-3 px-4 mt-20 text-red-600" onClick={() => close()} to={"/profile"}>SHÍǴÍW</NavLink>

                </ul>
            </Drawer>
            <div style={opened ? { display: "block" } : { display: "none" }} onClick={() => close()} className='w-full h-screen bg-black opacity-50 fixed transition-all duration-500 z-30'></div>
            <Header open={open} close={close} opened={opened} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout