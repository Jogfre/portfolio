"use client";
import Link from 'next/link'
import React, {useRef, useState, useEffect} from 'react'
import NavLink from './NavLink'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from "next/image"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid" 
import MenuOverlay from './MenuOverlay';
import FloatingNavBar from './FloatingNavBar';


const navContainer = {
  visible: {
      x: "0%",
      opacity: 1,
      transition: {
      x: { velocity: 100 },
      duration: 0.5,
      }
  },
  hidden: {
      x: "200%",
      opacity: 0,
      transition: {
      x: { velocity: 100 },
      duration: 0.5,
      }
  }
};

const NewNavBar = () => {
  const [navbarOpen, setnavbarOpen] =  useState(false);

  const targetRef = useRef(null)
  const isInView = useInView(targetRef) 

  const navLinks = [
    {title: "Home", path: "home", offset: 0},
    {title: "About", path: "about", offset: -40},
    {title: "Projects", path: "projects", offset: -40},
    {title: "Contact", path: "contact", offset: 0},
  ]
  
  
  useEffect(() => {
    console.log('isInView: ', isInView);
  }, [isInView]);

  return (
    <div>

      <div className='fixed top-[50%] right-5 my-auto'>
        <AnimatePresence>
          {!isInView && (
                <motion.div
                initial="hidden"
                animate={!isInView ? "visible" : "hidden"}
                exit="hidden"
                variants={navContainer}
              >
                <FloatingNavBar/>
              </motion.div>
          )}
        </AnimatePresence>
      </div>



      <div className='h-16 z-10 bg-[#202020] bg-opacity-90 py-1' ref={targetRef}>
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
      </div>
    </div>
  )
}

export default NewNavBar
