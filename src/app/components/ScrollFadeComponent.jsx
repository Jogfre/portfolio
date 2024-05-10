"use client"
import { React, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'



const ScrollFadeComponent = () => {
    const taretRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: taretRef,
        offset: ["start center", "end center"],
    })
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [0, 1, 0],
    )

    return (
        <div ref={taretRef} className="flex flex-col items-center justify-center border border-blue-600 text-7xl h-screen">
                <motion.div 
                    style={{
                        opacity: opacity,
                    }}
                    className=' text-white'
                >
                    hello
                </motion.div>
        </div>
    )
}

export default ScrollFadeComponent