'use client'
import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'


const hoverVariants = {
    hovered: {
        opacity: 1,
        scale: 1.1,
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

const handeButtonClick = (e) => {
    if(e && e.stopPropagation) e.stopPropagation(); // Prevent button from triggering potential parrent events.
    open("/FredrikJogell_CV_2024.pdf", "_blank")
  }


const CVButton = ( {fadeAnimationVariants} ) => {

    const [isHovered, setIsHovered] = useState(false)


    return (
        <motion.button
            variants={fadeAnimationVariants}
            initial={"initial_button"} animate={"animate_button"} viewport={{once: "runOnce"}}
            onClick={() => handeButtonClick()}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileTap={{
                scale: 0.9
            }}
            transition={{ duration: 0.2 }}

            className='px-1 w-full lg:w-fit rounded-full bg-gradient-to-br from-[#1a2766] via-[#ae1b1e] to-[#fc9f32] text-white content-center'
            >   
            <div className='flex relative'>
                <motion.div 
                    className='z-0 absolute top-0 left-0 h-full w-full rounded-full bg-gradient-to-br from-[#1a2766] via-[#ae1b1e] to-[#fc9f32]'
                    variants={hoverVariants}
                    animate={isHovered ? "hovered" : "normal"}
                />
                <p className='z-10 bg-[#121212] rounded-full px-6 py-2 my-1 w-full lg:w-fit'>Download CV</p>
            </div>
        </motion.button>
    )
}

export default CVButton
