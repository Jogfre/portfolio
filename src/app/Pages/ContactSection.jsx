import { React, useRef } from 'react'
import { motion, useTransform, useScroll, spring } from 'framer-motion'
import Image from "next/image";

import GitHubIcon from '../../../public/icons/github_icon.svg'
import LinkedInIcon from "../../../public/icons/linkedin_icon.svg"
import DiscordIcon from "../../../public/icons/discord_icon.svg"
import EmailCard from '../components/EmailCard';



const ContactSection = () => {

  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end end"],
  })

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.9],
    [0, 1],
  )
  const scale = useTransform(
    scrollYProgress,
    [0, 0.9],
    [0.6, 1],
  )

  const yPos = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["60%", "0%"],
  )  



  return (
    <div className='py-12 min-h-[80svh]' ref={targetRef}>
      <motion.section 
        name='contact'
        style={ {opacity: opacity, scale: scale, translateY: yPos}}
        className='grid lg:grid-cols-2 gap-4'
      >
        <div className='px-5'>
            <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect!</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>I am currently looking for new opportunities. Whether you have a question or just want to reach out, I will get back to you as soon as possible!</p>
            
            
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

        <motion.div 
          className='relative mt-4 lg:mt-0'
          whileHover={{
            filter: "grayscale(100%)"
          }}
        >
          <EmailCard />
          <div className='absolute flex flex-wrap top-0 left-0 w-full h-full opacity-0 hover:opacity-100 rounded-md transition-opacity duration-200 justify-center items-center text-center text-lg select-none'>
              <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'/>
              <p className='z-10'>This function is still being developed.<br/>Try some of the other options in the meantime!</p>
          </div>
        </motion.div>
        
        

      </motion.section>
    </div>
  )
}

export default ContactSection
