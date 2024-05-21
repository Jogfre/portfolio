"use client";
import React, { useRef, useEffect, useState } from 'react'
import NavLink from './NavLink'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from "next/image"
import FloatingNavBar from './FloatingNavBar';
import MenuButton from './MenuButton';


const floatingNavBarAnimations = {
  visible: {
      y: "0%",
      opacity: 1,
      transition: {
      y: { velocity: 100 },
      duration: 0.4,
      }
  },
  hidden: {
      y: "-100%",
      opacity: 0.6,
      transition: {
      y: { velocity: 100 },
      duration: 0.4,
      }
  }
};





const NavBar = ({progressValue}) => {
  const targetRef = useRef(null)
  const isInView = useInView(targetRef) 
  const [activeTitle, setActiveTitle] = useState("Home")

  const navLinks = [
    {title: "Home", path: "home", offset: 0},
    {title: "About", path: "about", offset: -40},
    {title: "Projects", path: "projects", offset: -40},
    {title: "Contact", path: "contact", offset: 0},
  ]

  const titles = navLinks.map((navLink) => navLink.title)
  const dividers = 100 / (navLinks.length + 1)

  const getActiveTitle = (progressValue) => {
    var titleIndex = Math.round((progressValue * 100)/ dividers) - 1
    if (titleIndex < 0) {titleIndex = 0}
    if (titleIndex > navLinks.length - 1) {titleIndex = navLinks.length -1}


    return titles[titleIndex]
  }

  useEffect(() => {
    setActiveTitle(getActiveTitle(progressValue))
  }, [progressValue])

  return (
    <div 
      className='navbar_container left-0 top-0 z-20 relative' ref={targetRef}
    >
      
      <MenuButton links={navLinks} activeTitle={activeTitle}/>
      <motion.div 
        className='h-16 justify-between items-center hidden md:flex lg:px-16 px-8 bg-[#202020]'
        initial={{
          opacity: 0,
          y: "-50%",
          scale: 1,
        }}
        animate = {{
          opacity: 1,
          scale: 1,
          y: "0%",
          transition: { type: 'ease-in', duration: 0.6}
        }}
        viewport={{once: "runOnce"}}
      >
        <Image
          className='pointer-events-none'
          src="/images/Icon.png"
          alt="Logo image"
          width={45}
          height={45}
        />
        <ul className='flex p-0 flex-row lg:space-x-12 space-x-8 lg:text-xl text-lg'>
          {
            navLinks.map((link, index) => (
              <li key={index}>
                  <NavLink href={link.path} title={link.title} offset={link.offset} activeTitle={"none"}/>
              </li>
            ))
          }
        </ul>
      </motion.div>
      <div 
        className='fixed top-2 my-auto'
        style={{pointerEvents: isInView ? "all" : "none"}}
      >
        <AnimatePresence>
          {!isInView && (
                <motion.div
                initial="hidden"
                animate={!isInView ? "visible" : "hidden"}
                exit="hidden"
                variants={floatingNavBarAnimations}
                className='w-screen h-16 mx-auto hidden md:flex'
              >
                <FloatingNavBar navLinks={navLinks} progressValue={progressValue} isInView={isInView} activeTitle={activeTitle}/>
              </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default NavBar