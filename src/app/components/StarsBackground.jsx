import React, { useRef } from 'react'
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion, useScroll , useTransform } from 'framer-motion'


const StarsBackground = () => {
    
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "center start"],
    })
    
    const transformedOpacity = useTransform(
        scrollYProgress,
        [0, 1],
        [1, 0]
    )
    
    return (
        <motion.div 
        ref={targetRef}
        className="absolute inset-0 z-0 h-[200vh]"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}
        style={{opacity: transformedOpacity}}
        >
        <Canvas><Stars radius={100} count={5000} factor={4} fade speed={2}/></Canvas>

    </motion.div>
    )
}

export default StarsBackground
