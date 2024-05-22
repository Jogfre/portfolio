import React, { useEffect, useState } from 'react'
import { motion, MotionConfig } from 'framer-motion'

const AnimatedHamburgerIcon = ( {state} ) => {
  return (
    <MotionConfig
        transition={{
            duration: 0.3,
            ease: "easeInOut"
        }}
    >
        <motion.div 
            className='relative h-full w-full border-2 bg-[#202020] border-slate-400 rounded-xl'
            animate ={state ?  "open" : "closed"}
            >
            
            <motion.span
                style={{
                    left: "50%", top: "33%", x:"-50%", y: "-50%"
                }}
                variants={{
                    open: {
                        rotate: "45deg",
                        scale: 1.1,
                        top: "50%",
                    },
                    closed: {
                        rotate: "0deg",
                        scale: 1,
                        top: "33%",
                    }
                }}
                className='absolute h-[5%] w-[60%] bg-slate-400'/>
            
            <motion.span
                style={{
                    left: "50%", top: "50%", x:"-50%", y: "-50%"
                }}
                variants={{
                    open: {
                        scale: 0
                    },
                    closed: {
                        scale: 1
                    }
                }}
                className='absolute h-[5%] w-[60%] bg-slate-400'/>
            
            <motion.span
                style={{
                    left: "50%", top: "66%", x:"-50%", y: "-50%"
                }}
                variants={{
                    open: {
                        rotate: "-45deg",
                        scale: 1.1,
                        top: "50%",
                    },
                    closed: {
                        rotate: "0deg",
                        scale: 1,
                        top: "66%",
                    }
                }}
                className='absolute h-[5%] w-[60%] bg-slate-400'/>

        </motion.div>
    </MotionConfig>
  )
}

export default AnimatedHamburgerIcon
