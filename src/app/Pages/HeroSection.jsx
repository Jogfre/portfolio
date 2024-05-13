"use client";
import React from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll';


const fadeAnimationVariants = {
    initial: {
      opacity: 0,
      y: "20%",
      scale: 0.7,
      filter: "blur(4px)",
    },
    initial_avatar: {
        opacity: 0,
        scale: 0.7,
        y: "10%",
        filter: "blur(4px)",
    },
    initial_button: {
        opacity: 0,
        y: "20%",
        filter: "blur(4px)",
      },
    
    welcome: {
        opacity: 1,
        scale: 1,
        y: "0%",
        filter: "blur(0px)",
        transition: { type: 'ease-in', duration: 1, delay: 0.2}
    },
    text: {
        opacity: 1,
        scale: 1,
        y: "0%",
        filter: "blur(0px)",
        transition: { type: 'ease-in', duration: 1, delay: 0.6}
    },
    avatar: {
        opacity: 1,
        scale: 1,
        y: "0%",
        filter: "blur(0px)",
        transition: { type: 'ease-in', duration: 1, delay: 1}
    },
    button_1: {
        opacity: 1,
        scale: 1,
        y: "0%",
        filter: "blur(0px)",
        transition: { type: 'ease-in', duration: 0.8, delay: 1.8}
    },
    button_2: {
        opacity: 1,
        scale: 1,
        y: "0%",
        filter: "blur(0px)",
        transition: { type: 'ease-in', duration: 0.8, delay: 2}
    },
  }

/* 
variants={fadeAnimationVariants} initial={"initial"} animate={"animate"} viewport={{once: "runOnce"}}
*/

const HeroSection = () => {
  return (
    <section className='min-h-screen'>
        <div  className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center md:text-left'>
                <motion.div variants={fadeAnimationVariants} initial={"initial"} animate={"welcome"} viewport={{once: "runOnce"}} className='text-white mb-4 text-2xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-3xl sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#2543da] via-[#d83e40] to-[#db7500]'>Hello, I am</span>
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
                <motion.p variants={fadeAnimationVariants} initial={"initial"} animate={"text"} viewport={{once: "runOnce"}} className='text-[#ADB7BE]  text-base sm:text-lg mb-6  mx-4 md:mx-0 lg:text-xl'>
                    Welcome to my portfolio! I am Fredrik, a passionate mobile and software developer. Through this platform, I invite you to explore my journey, projects, and other creative endeavors.
                </motion.p>
                <div className='place-self-center'>
                    <Link to="contact" duration={3000} smooth={true}>
                        <motion.button 
                            variants={fadeAnimationVariants} initial={"initial_button"} animate={"button_1"} viewport={{once: "runOnce"}} 
                            className='px-6 py-3 w-full md:w-fit rounded-full bg-gradient-to-br from-[#1a2766] via-[#ae1b1e] to-[#fc9f32] hover:from-[#3a436d] hover:via-[#b45254] hover:to-[#ffbd71] text-white mr-4'>
                            Get in contact
                        </motion.button>
                    </Link>
                    
                    <motion.button variants={fadeAnimationVariants} 
                        initial={"initial_button"} animate={"button_2"} viewport={{once: "runOnce"}} 
                        className='px-1 py-1 w-full md:w-fit rounded-full bg-gradient-to-br from-[#1a2766] via-[#ae1b1e] to-[#fc9f32] hover:from-[#3a436d] hover:via-[#b45254] hover:to-[#ffbd71] text-white mt-4'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                    </motion.button>
                </div>
            </div>
            <motion.div variants={fadeAnimationVariants} initial={"initial_avatar"} animate={"avatar"} viewport={{once: "runOnce"}} className='col-span-5 place-self-center pt-4 lg:mt-0'>
                <div className='rounded-full bg-gradient-to-b from-[#1F1F1F] to-[#080808] w-[340px] h-[340px] border-4 border-[#1f1f1f] relative overflow-hidden'>
                    <Image 
                        src="/images/ProfilePhoto_Transparent.png"
                        alt="hero image"
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 select-none pointer-events-none'
                        width={300}
                        height={300}
                    />
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default HeroSection
