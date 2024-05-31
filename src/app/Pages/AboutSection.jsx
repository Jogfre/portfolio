"use client";
import { React, useState, useTransition } from 'react'
import { motion } from 'framer-motion'
import FancyMenu from '../components/FancyMenu/FancyMenu';


const fadeAnimationVariants = {
  initial: {
    opacity: 0,
    x: "-40%",
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    x: "0%",
    filter: "blur(0px)",
    transition: { type: 'ease-in', duration: 1},
  },
  initial_picture: {
    opacity: 0,
    x: "-20%",
    filter: "blur(8px)",
  },
  animate_picture: {
    opacity: 1,
    x: "0%",
    filter: "blur(0px)",
    transition: { type: 'ease-in', duration: 1},
  },
  runOnce: true
}
  

const AboutSection = () => {

  const[tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className='text-white min-h-screen ba' name="about">
      <div className='lg:grid lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 sm:px-16'>
        
        
        {
          // About Me Image
        }
        <motion.img 
          className='rounded-xl w-2/3 lg:w-[500px] pointer-events-none'
          variants={fadeAnimationVariants}
          initial={"initial_picture"}
          whileInView={"animate_picture"}
          viewport={{once: "runOnce", amount: 0.25}}
          src={"/images/AboutMePhoto.jpg"}
          alt="about image"/>


        {
          // About Me Text
        }
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <motion.h2 variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{once: "runOnce", amount: 0.5}} className='text-4xl font-bold my-4'>
            About Me
          </motion.h2>
          <motion.p variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{once: "runOnce", amount: 0.5}}>
            
            Hi there! I am Fredrik, a striving developer passionate about programming and development.

          </motion.p>        
          <motion.p variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{once: "runOnce", amount: 0.5}} className='mt-2'>

            I thrive on solving problems, something that programming has plenty of which is why I took an interest to the field. I am constantly seeking new challenges to expand my horizons. 
            
          </motion.p>
          <motion.p variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{once: "runOnce", amount: 0.5}} className='mt-2'>

            When I am not immersed in programming, you can find me experimenting with graphical design in Photoshop, expanding my musical side by playing piano, or by researching cybersecurity and learning about hacking.

          </motion.p>
          <motion.p variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{once: "runOnce", amount: 0.5}} className='mt-2'>
            I believe in maintaining a varied selection of hobbies in order to keep your mind sharp and ready for the next problem, and I am always eager to find ways to include those around me in these interests.
          </motion.p>
          <motion.p variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{once: "runOnce", amount: 0.5}} className='mt-2'>
            
            I am excited to connect with fellow enthusiasts, collaborators, and innovators, so feel free to reach out! Whether you have a project in mind, a question to ask, or simply want to connect, I am here to help. Reach out to me today, and let&apos;s bring your ideas to life!
          
          </motion.p>


          {
          // Table Menu
          }
          <motion.div variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{once: "runOnce", amount: 0.5}}>
            <FancyMenu />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
