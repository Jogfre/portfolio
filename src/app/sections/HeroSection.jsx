import React, { useEffect, lazy } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion, useMotionTemplate, animate, useMotionValue } from 'framer-motion'
import ContactButton from '../components/HeroButtons/ContactButton';
import Image from 'next/image'
import CVButton from '../components/HeroButtons/CVButton';

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


const imageLoader = ({ src }) => {
    console.log(`https://fredrikjogell.com/${src}`)
    return `https://fredrikjogell.com/${src}`
}

const HeroSection = () => {


    const COLORS = ["#2543da", "#d83e40", "#db7500"]
    const color = useMotionValue(COLORS[0])
    const boxShadow = useMotionTemplate`0px 5px 14px ${color}`

    useEffect(() => {
        animate(color, COLORS, {
            ease: 'easeInOut',
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror"
        })
    })


    return (
        <section className='min-h-screen' >
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


                    <div className='flex  lg:flex-row flex-col gap-4 place-self-center'>
                        <ContactButton fadeAnimationVariants={fadeAnimationVariants}/>
                    </div>


                </div>
                <motion.div variants={fadeAnimationVariants} initial={"initial_avatar"} animate={"animate_entry"} viewport={{once: "runOnce"}} className='lg:order-last lg:mb-0 mb-4 order-first col-span-5 place-self-center pt-4'>
                    <motion.div className='rounded-full bg-gradient-to-b from-[#1F1F1F] to-[#080808] xl:w-[400px] xl:h-[400px] sm:w-[300px] sm:h-[300px] w-[240px] h-[240px] border-4 border-[#1f1f1f] relative overflow-hidden'
                        style={{boxShadow}}
                    >
                        <Image 
                            src={"/images/ProfilePhoto_Transparent.png"}
                            loader={imageLoader}
                            alt="hero image"
                            fill={true}
                            priority={true}
                            className='absolute select-none pointer-events-none mt-5 scale-[95%]'
                            style={{objectFit: "contain"}}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection
