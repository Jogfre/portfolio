"use client"
import React, { useEffect, useRef, useState } from "react"
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";

const SmoothScrollWraper = ({ children }) => {


    // Make sure site has loaded.
    const [isLoading, setIsLoading] = useState(true);


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

        window.scrollTo(0, 0)
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    },  [contentRef])

    
    // Intercept normal scroll behavior
    let  { scrollYProgress } =  useScroll();
    let smoothProgres = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 20,
        restDelta: 0.00001,
    })

    const y = useTransform(smoothProgres, (value) => {
        return value * -(contentHeight - windowHeight);
    })


    // Check for changes of the smoothProgress value
    useMotionValueEvent(smoothProgres, "change", (latest) => {
        if (isLoading) {
            window.scrollTo(0, 0)
            scrollYProgress = 0;
        }

        setIsLoading(false);
    })
    


    return (
        <>
            <div style={{height: contentHeight}}/>
            <motion.div className="w-screen fixed top-0 flex flex-col" ref={contentRef} style={{y: isLoading ? 0 : y}}>
                {children}
            </motion.div>

        </>
    )
}

export default SmoothScrollWraper
