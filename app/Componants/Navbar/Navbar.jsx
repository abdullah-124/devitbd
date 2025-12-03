'use client'
import React from 'react'
import Logo from './Logo'
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import Navlink from '../NavLink/Navlink';

function Navbar() {
    const [open, setOpen] = React.useState(false);
    return (
        <nav className='sticky top-0 bg-green-400 text-white py-2 z-100'>
            <main className='relative px-5 md:px-10 max-w-[1200px] mx-auto  flex justify-between items-center'>
                <div>
                    <Logo />
                </div>
                <div>
                    <ul className='hidden md:flex gap-4'>
                        <Navlink href="/" title="Home" />
                        <Navlink href="/aboutus" title="About us" />
                        <Navlink href="/career" title="Career" />
                    </ul>
                    {/* for mobile screen */}
                    {open && <div onClick={()=>setOpen(false)} className='fadeIn absolute z-100 bg-[#00000062] w-full h-screen right-0 top-full'>
                        <ul onClick={(e)=>e.stopPropagation()} className='md:hidden flex flex-col gap-2 bg-green-300 p-5'>
                            <Navlink href="/" title="Home" />
                            <Navlink href="/aboutus" title="About us" />
                            <Navlink href="/career" title="Career" />
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