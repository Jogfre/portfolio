
import {React, useEffect, useRef, useState} from 'react'
import { motion, useTransform, useScroll, useSpring, useInView } from 'framer-motion'
import ProjectCards from './ProjectCards.jsx'  


const Project = ({ projectName, index }) => {

  const data = require(`../../../../public/projects/${projectName}/data.json`)
  const enterFromRight = index % 2 != 0

  const taretRef = useRef(null)
  const { scrollYProgress } = useScroll({
      target: taretRef,
      offset: ["start 90%", "end 10%"],
  })
  const smoothY = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 35,
  });

  const enterFrom = enterFromRight ? "20%" : "-20%"

  const opacity = useTransform(
      smoothY,
      [0, 0.38, 0.6, 0.85],
      [0, 1, 1, 0],
  )

  const transform = useTransform(
    smoothY,
    [0, 0.38],
    [enterFrom, "0%"],
  )


  const isOpen = useInView(taretRef, {amount: "all", margin: "0% 0% 0% 0%"})



  return (
  <motion.div
    ref = {taretRef}
    style={ {opacity: opacity, translateX: transform}}
    className={enterFromRight ? 
      'grid grid-cols-1 md:flex md:justify-around flex-row-reverse place-items-center md:mt-0 mt-4 py-4 md:py-20 bg-[#1f1f1f] md:pb-24 pb-19 rounded-xl' 
      : 
      'grid grid-cols-1 md:flex md:justify-around place-items-center md:mt-0 mt-4 py-4 md:py-20 bg-[#1f1f1f] md:pb-24 pb-19 rounded-xl'} 
    >
    <div className='mx-5 table-cell align-middle text-center pb-12'>
        <h1 className='text-3xl mb:text-4xl'>{data.title}</h1>
        <p className='mt-4 md:max-w-xl md:min-w-xl text-lg'>{data.description}</p>
        
    </div>
    <ProjectCards projectName={projectName} iconData={data.icons} isOpen={isOpen}/>
  </motion.div>
  )
}

export default Project
