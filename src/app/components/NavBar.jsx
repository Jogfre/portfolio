"use client";
import React, { useRef, useEffect, useState, useMemo } from 'react'
import NavLink from './NavLink'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from "next/image"
import FloatingNavBar from './FloatingNavBar';
import MenuButton from './MenuButton';
import ScrollToDiscover from './ScrollToDiscover';


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





const NavBar = () => {
  const progressValue = 0;
  const targetRef = useRef(null)
  const isInView = useInView(targetRef) 
  const [activeTitle, setActiveTitle] = useState("Home")


  const navLinks = useMemo(() => [
    {title: "Home", path: "home", offset: 0},
    {title: "About", path: "about", offset: -40},
    {title: "Projects", path: "projects", offset: -20},
    {title: "Contact", path: "contact", offset: 0},
  ], []);

  useEffect(() => {
    const titles = navLinks.map((navLink) => navLink.title) // Get the titles and where the dividers for the sections on the navbar should be
    const dividers = 100 / (navLinks.length + 1)

    var titleIndex = Math.round((progressValue * 100)/ dividers) - 1 // compute the new activeTitle
    if (titleIndex < 0) {titleIndex = 0}
    if (titleIndex > navLinks.length - 1) {titleIndex = navLinks.length -1}

    setActiveTitle(titles[titleIndex]) // set the new activeTitle for the navbar highlight

  }, [progressValue, navLinks])

  return (
    <div 
      className='navbar_container left-0 top-0 z-20 relative' ref={targetRef}
    >
      
      <MenuButton links={navLinks} activeTitle={activeTitle}/>
      <motion.div 
        className='h-16 justify-between items-center hidden sm:flex lg:px-16 px-8 bg-[#202020]'
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
        <ul className='flex p-0 flex-row space-x-8 text-lg'>
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
                className='w-screen h-16 mx-auto hidden sm:flex'
              >
                <FloatingNavBar navLinks={navLinks} progressValue={progressValue} isInView={isInView} activeTitle={activeTitle}/>
              </motion.div>
          )}
        </AnimatePresence>
      </div>
      <ScrollToDiscover isInView={isInView}/>
    </div>
  )
}

export default NavBar