"use client"
import { React, useRef } from 'react'
import { motion, useTransform, useScroll, useSpring, useInView } from 'framer-motion'





const ContactSection = () => {

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
    [0.1, 0.4],
    [0, 1],
  )
  const scale = useTransform(
    smoothY,
    [0.1, 0.5],
    [0.6, 1],
  )

  const yPos = useTransform(
    smoothY,
    [0, 0.5],
    ["60%", "0%"],
  )



  return (
    <motion.section 
      name='contact'
      ref = {targetRef}
      style={ {opacity: opacity, scale: scale, translateY: yPos}}
      className='min-h-screen bg-slate-600 flex justify-center items-center rounded-2xl'
      >
        <div className='flex-box text-center'>
            <h1 className='md:text-6xl text-2xl'>{"<Contact Section will be here>"}</h1>
            <p className=''>eventually...</p>
        </div>
    </motion.section>
  )
}

export default ContactSection
