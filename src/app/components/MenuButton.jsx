
"use client"
import React, { useState, useEffect } from 'react'
import NavLink from './NavLink'
import { motion } from "framer-motion";
import AnimatedHamburgerIcon from './AnimatedHamburgerIcon';

const menuAnimations = {
    initial: {
        opacity: 0,
        scale: 0.5,
        y: "-30%"
    },
    animate: {
        opacity: 1,
        scale: 1,
        y: "0%",
        transition: {
            duration: 0.15
        }
    }
}

const navTextAnimations = {
    initial: {
        opacity: 0,
        scale: 0.5,
    },
    animate: (index) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: (0.05 * index) + 0.15
        }
    })
}



const MenuButton = ( {links, activeTitle} ) => {

    const [isOpen, setIsOpen] = useState(false)
    
    const stopPropagation = (e) => {
        if(e && e.stopPropagation) e.stopPropagation(); // Prevent click from triggering any parrent onClick events.        
    }
    const handeButtonClick = (e) => {
        stopPropagation(e)
        setIsOpen(!isOpen)
    }
    
    return (
        <div 
            className='md:hidden w-screen h-screen fixed top-0 left-0'
            style={{ pointerEvents: isOpen ? "all" : "none"}}
            onClick={() => setIsOpen(false)}
        >
            <div className='fixed top-0 left-0 w-full h-full bg-black transition-opacity duration-300' style={{opacity: isOpen ? 0.5 : 0}}/>
            <motion.div className='sm:hidden h-fit w-[100px] fixed flex flex-col items-center right-0 z-50'
                initial={{
                    opacity: 0,
                    y: "-20%",
                    scale: 1,
                    filter: "blur(10px)",
                    }}
                animate = {{
                    opacity: 1,
                    scale: 1,
                    y: "0%",
                    filter: "blur(0px)",
                    transition: { type: 'ease-in', duration: 0.6}
                }}
                viewport={{once: "runOnce"}}
            
            >
                    <motion.button 
                        className='md:hidden h-10 w-10 mt-3 overflow-hidden pointer-events-auto'
                        whileTap={{ scale: 0.95}}
                        onClick={(e) => handeButtonClick(e)}>
                            <AnimatedHamburgerIcon state={isOpen}/>
                    </motion.button>
                <motion.ul
                    className='w-full h-[200px] bg-[#202020] opacity-90 flex flex-col justify-around text-center mt-2 rounded-xl border border-slate-400'
                    variants={menuAnimations}
                    initial="initial"
                    animate={isOpen ? "animate" : "initial "}
                    style={{pointerEvents: isOpen ? "all" : "none"}}
                    onClick={(e) => stopPropagation(e)}
                    >
                    {
                        links.map((link, index) => (
                            <motion.li 
                            key={index}
                            variants={navTextAnimations}
                            initial="initial"
                            animate={isOpen ? "animate" : "initial"}
                            custom={index}
                            >
                                <NavLink href={link.path} title={link.title} offset={link.offset} activeTitle={activeTitle}/>
                            </motion.li>
                        ))
                    }
                </ motion.ul>

            </motion.div>
        </div>
  )
}

export default MenuButton
