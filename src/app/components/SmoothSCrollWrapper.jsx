"use client"
import React, { useEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const SmoothScrollWraper = ({ children }) => {



    // get height information
    const contentRef =  useRef(null);
    const [contentHeight, setContentHeight] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (contentRef.current != null) {
                setContentHeight(contentRef.current.scrollHeight);
            }
            setWindowHeight((window.innerHeight))
        };   

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    },  [contentRef])

    
    // Intercept normal scroll behavior
    const  { scrollYProgress } =  useScroll();
    const smoothProgres = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 20,
        restDelta: 0.00001,
    })

    const y = useTransform(smoothProgres, (value) => {
        return value * -(contentHeight - windowHeight);
    })



    return (
        <>
            <div style={{height: contentHeight}}/>
            <motion.div className="w-screen fixed top-0 flex flex-col" ref={contentRef} style={{y: y}}>
                {children}
            </motion.div>

        </>
    )
}

export default SmoothScrollWraper
