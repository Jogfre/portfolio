'use client'
import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'


const hoverVariants = {
    hovered: {
        opacity: 1,
        scale: 1.02,
        filter: "blur(8px)",
        transition: { ease: "easeOut", duration: 0.3 }
    },
    normal: {
        opacity: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { ease: "easeOut", duration: 0.3 }
    }
} 

const ContactButton = ( {fadeAnimationVariants} ) => {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <Link to="contact" duration={2000} smooth={true}>
            <div className='relative w-full lg:w-fit h-fit'>
                <motion.div 
                    className='absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-[#1a2766] via-[#ae1b1e] to-[#fc9f32]'
                    variants={hoverVariants}
                    initial={"normal"}
                    animate={isHovered ? "hovered" : "normal"}
                />
                <motion.button 
                    variants={fadeAnimationVariants} initial={"initial_button"} animate={"animate_button"} viewport={{once: "runOnce"}} 
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    whileTap={{
                        scale: 0.9
                    }}
                    transition={{ duration: 0.2}}
                    className='px-6 py-3 w-full lg:w-fit rounded-full bg-gradient-to-br from-[#1a2766] via-[#ae1b1e] to-[#fc9f32] text-white'>
                    Get in contact
                </motion.button>
            </div>
        </Link>
    )
}

export default ContactButton
