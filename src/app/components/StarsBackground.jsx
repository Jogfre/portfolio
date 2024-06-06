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
        ["0%", "-30%"]
    )
        
    return (
        <div className='fixed top-0 left-0 inset-0 z-0 h-full w-full overflow-hidden'>
            <motion.div 
                className="absolute top-0 left-0 z-0 h-[200vh] w-full"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 2}}
                style={{translateY: translateY}}

            >
                <Canvas><Stars radius={50} count={3000} factor={3} fade speed={1}/></Canvas>
            </motion.div>
        </div>

    )
}

export default StarsBackground
