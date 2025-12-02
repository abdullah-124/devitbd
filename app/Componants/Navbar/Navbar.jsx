'use client'
import React from 'react'
import Logo from './Logo'
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";

function Navbar() {
    const [open, setOpen] = React.useState(false);
    return (
        <nav className='sticky top-0 bg-green-400 text-white py-3 z-100'>
            <main className='relative px-5 md:px-10 max-w-[1200px] mx-auto  flex justify-between items-center'>
                <div>
                    <Logo />
                </div>
                <div>
                    <ul className='hidden md:flex gap-4'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Carrer</li>
                    </ul>
                    {/* for mobile screen */}
                    {open && <div className='absolute z-100 bg-green-300 w-full right-0 top-full p-5 '>
                        <ul className='md:hidden flex flex-col gap-2'>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Carrer</li>
                        </ul>
                    </div>}
                </div>
                <div className='block md:hidden text-3xl' onClick={() => setOpen(!open)}>
                    {
                        open ? <RiCloseFill /> : <RiMenu3Fill />
                    }
                </div>
            </main>
        </nav>
    )
}

export default Navbar