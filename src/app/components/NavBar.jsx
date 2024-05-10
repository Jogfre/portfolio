"use client";
import Link from 'next/link'
import React, {useState} from 'react'
import NavLink from './NavLink'
import Image from "next/image"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid" 
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {title: "Home", path: "home", offset: 0},
    {title: "About", path: "about", offset: -40},
    {title: "Projects", path: "projects", offset: -40},
    {title: "Contact", path: "contact", offset: 0},
]


const NavBar = () => {
    const [navbarOpen, setnavbarOpen] =  useState(false);

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#202020] bg-opacity-90 py-1'>
            <div className='flex items-center justify-between mx-auto px-8'>
                
                <Link href={"/"} className='text-3xl md:text-5xl'>
                    <Image 
                            src="/images/Icon.png"
                            alt="Logo image"
                            width={45}
                            height={45}
                        />
                </Link>
                <div className='larger-menu menu hidden md:block md:w-auto id="navbar'>
                    <ul className='flex p-0 md:p-0 md:flex-row md:space-x-8'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} offset={link.offset}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='mobile-menu menu block md:hidden'>
                    {navbarOpen ? (
                        <button onClick={() => setnavbarOpen(false)} className='flex items-center px-3 py-2  border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'> <XMarkIcon className='size-5'/> </button>
                    ) : (
                        <button onClick={() => setnavbarOpen(true)} className='flex items-center px-3 py-2  border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'> <Bars3Icon className='size-5'/> </button>
                    )}
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
        </nav>
    )
}

export default NavBar
