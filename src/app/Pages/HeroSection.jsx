"use client";
import React, { useRef }from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation'
import { motion, useScroll, useMotionValueEvent, useTransform, useSpring } from 'framer-motion'
import { Link } from 'react-scroll';


const fadeAnimationVariants = {
    initial: {
      opacity: 0,
      y: "50%",
      scale: 1,
      filter: "blur(20px)",
    },
    initial_button: {
        opacity: 0,
        y: "50%",
        filter: "blur(20px)",
    },
    initial_avatar: {
        opacity: 0,
        y: "25%",
        filter: "blur(10px)",
    },
      
    
    animate_entry: {
        opacity: 1,
        scale: 1,
        y: "0%",
        filter: "blur(0px)",
        transition: { type: 'ease-in', duration: 0.6}
    },
    animate_button: {
        opacity: 1,
        scale: 1,
        y: "0%",
        filter: "blur(0px)",
        transition: { type: 'ease-in', duration: 0.6}
    }
  }

/* 
variants={fadeAnimationVariants} initial={"initial"} animate={"animate"} viewport={{once: "runOnce"}}
*/

const HeroSection = ({scaleHook}) => {

    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    })
    const scale = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 0.25],
    )

    const smoothScale = useSpring(scale, {
        stiffness: 70,
        damping: 15,
      })
    
      useMotionValueEvent(smoothScale, "change", (latest) => {
          scaleHook(latest)
      })
    
    return (
        <section className='min-h-screen' ref={targetRef}>
            <div  className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center lg:text-left'>
                    <motion.div 
                        variants={fadeAnimationVariants}
                        initial={"initial"}
                        animate={"animate_entry"}
                        viewport={{once: "runOnce"}}
                        className='text-white mb-4 text-2xl lg:text-4xl xl:text-5xl font-extrabold'
                        >
                        <span 
                            className='text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#2543da] via-[#d83e40] to-[#db7500]'
                        >
                            Hello, I am
                        </span>
                        <br/>
                        <TypeAnimation 
                            sequence={[
                                "Fredrik", 3000,
                                "a Web Developer", 1500,
                                "a Mobile Developer", 1500,
                                "a Software Developer", 1500,
                                "a UI/UX Designer", 1500,
                                "a SET-Enjoyer", 1500,
                                "a Lego Enthusiast", 1500
                            ]}
                            wrapper="span"
                            height="200px"
                            preRenderFirstString={true}
                            speed={50}
                            repeat={Infinity}
                        />
                    </motion.div>
                    <motion.p 
                        variants={fadeAnimationVariants} 
                        initial={"initial"}
                        animate={"animate_entry"}
                        viewport={{once: "runOnce"}}
                        className='text-[#ADB7BE]  text-base  mb-6  mx-4 sm:mx-0 md:text-lg xl:text-xl'
                        >
                        Welcome to my portfolio! I am Fredrik, a passionate mobile and software developer. Through this platform, I invite you to explore my journey, projects, and other creative endeavors.
                    </motion.p>
                    <div className='place-self-center'>
                        <Link to="contact" duration={2000} smooth={true}>
                            <motion.button 
                                variants={fadeAnimationVariants} initial={"initial_button"} animate={"animate_button"} viewport={{once: "runOnce"}} 
                                whileHover={{
                                    boxShadow: `0px 0px 15px #FBC57E`,
                                    transition: {duration: 0.2},
                                }}
                                whileTap={{
                                    scale: 0.9
                                }}
                                transition={{ duration: 0.2}}
                                className='px-6 py-3 w-full lg:w-fit rounded-full bg-gradient-to-br from-[#1a2766] via-[#ae1b1e] to-[#fc9f32] text-white mr-4'>
                                Get in contact
                            </motion.button>
                        </Link>
                        <motion.button variants={fadeAnimationVariants} 
                            initial={"initial_button"} animate={"animate_button"} viewport={{once: "runOnce"}}
                            whileHover={{
                                boxShadow: `0px 0px 15px #FBC57E`,
                                transition: {duration: 0.2},
                            }}
                            whileTap={{
                                scale: 0.9
                            }}
                            transition={{ duration: 0.2 }}

                            className='px-1 py-1 w-full lg:w-fit rounded-full bg-gradient-to-br from-[#1a2766] via-[#ae1b1e] to-[#fc9f32] text-white mt-4'>
                            <span className='block bg-[#121212] rounded-full px-5 py-2'>Download CV</span>
                        </motion.button>
                    </div>
                </div>
                <motion.div variants={fadeAnimationVariants} initial={"initial_avatar"} animate={"animate_entry"} viewport={{once: "runOnce"}} className='lg:order-last lg:mb-0 mb-4 order-first col-span-5 place-self-center pt-4'>
                    <div className='rounded-full shadow-lg shadow-[#1a2766] bg-gradient-to-b from-[#1F1F1F] to-[#080808] xl:w-[400px] xl:h-[400px] sm:w-[300px] sm:h-[300px] w-[240px] h-[240px] border-4 border-[#1f1f1f] relative overflow-hidden'>
                        <Image 
                            src="/images/ProfilePhoto_Transparent.png"
                            alt="hero image"
                            className='absolute transform select-none pointer-events-none mt-5'
                            fill
                            style={{objectFit: "contain"}}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection
