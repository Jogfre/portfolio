'use client'
import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion, useScroll , useTransform } from 'framer-motion'


const StarsBackground = () => {
    
    const { scrollYProgress } = useScroll({
    })
    
    const translateY = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "-20%"]
    )

    const translateY2 = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "-25%"]
    )

    const translateY3 = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "-35%"]
    )
    const DURATION = 5;
    return (
        <div className='fixed top-0 left-0 inset-0 z-0 h-full w-full overflow-hidden'>
            <motion.div 
                className="absolute top-0 left-0 z-0 h-[200vh] w-full"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: DURATION}}
                style={{translateY: translateY}}

            >
                <Canvas><Stars radius={20} count={2500} factor={3} fade speed={1}/></Canvas>
            </motion.div>
            <motion.div 
                className="absolute top-0 left-0 z-0 h-[200vh] w-full"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: DURATION}}
                style={{translateY: translateY2}}

            >
                <Canvas><Stars radius={20} count={1000} factor={4} fade speed={1}/></Canvas>
            </motion.div>
            <motion.div 
                className="absolute top-0 left-0 z-0 h-[200vh] w-full"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: DURATION}}
                style={{translateY: translateY3}}

            >
                <Canvas><Stars radius={20} count={100} factor={5} fade speed={1}/></Canvas>
            </motion.div>
        </div>

    )
}

export default React.memo(StarsBackground)
