"use client"
import { React, useRef } from 'react'
import { motion, useTransform, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import Image from "next/image";

import GitHubIcon from '../../../public/icons/github_icon.svg'
import LinkedInIcon from "../../../public/icons/linkedin_icon.svg"
import DiscordIcon from "../../../public/icons/discord_icon.svg"
import EmailCard from '../components/EmailCard';



const ContactSection = ({scaleHook}) => {

  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
  })
  const smoothY = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
  });

  const opacity = useTransform(
    smoothY,
    [0.1, 0.2],
    [0, 1],
  )
  const scale = useTransform(
    smoothY,
    [0.1, 0.4],
    [0.6, 1],
  )

  const yPos = useTransform(
    smoothY,
    [0, 0.4],
    ["60%", "0%"],
  )


  const scalerX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0, 0.3],
  )

  const smoothScalerX = useSpring(scalerX, {
    stiffness: 100,
    damping: 20,
  })
  
  useMotionValueEvent(smoothScalerX, "change", (latest) => {
      scaleHook(latest)
  })
  



  return (
    <div className='mt-12 py-24 min-h-[80svh]'>
      <motion.section 
        name='contact'
        ref = {targetRef}
        style={ {opacity: opacity, scale: scale, translateY: yPos}}
        className='grid md:grid-cols-2  gap-4'
      >
        <div className='px-5'>
            <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect!</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>I am currently looking for new opportunities. Wether you have a question or just want to reach out, I will try my best to get back to you!</p>
            
            
            <div className='socials flex flex-row gap-2'>

              <motion.a 
                href="https://github.com/Jogfre" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.15,
                  transition: {duration: 0.2},
                }}
                transition={{ duration: 0.2 }}
                >
                <Image src={GitHubIcon} alt="GitHub Icon" className='size-14'/>
              </motion.a>
              
              <motion.a 
                href="https://www.linkedin.com/in/fredrik-jogell-7299161b6/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.15,
                  transition: {duration: 0.2},
                }}
                transition={{ duration: 0.2 }}>
                  <Image src={LinkedInIcon} alt="LinkedIn Icon" className='size-14'/>
              </motion.a>
              
              {/*
              <motion.a 
                href="https://discordapp.com/users/168743644306735104"  
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.15,
                  transition: {duration: 0.2},
                }}
                transition={{ duration: 0.2 }}
                >
                <Image src={DiscordIcon} alt="Discord Icon" className='size-14'/>
              </motion.a>
              */}
              
            </div>
        </div>
        <EmailCard />

      </motion.section>
    </div>
  )
}

export default ContactSection
