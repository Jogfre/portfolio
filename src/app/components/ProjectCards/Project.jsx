
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
    stiffness: 90,
    damping: 30,
  });

  const enterFrom = enterFromRight ? "20%" : "-20%"
  const exitTo = !enterFromRight ? "20%" : "-20%"

  const opacity = useTransform(
      smoothY,
      [0, 0.4, 0.6, 0.9],
      [0, 1, 1, 0],
  )

  const transform = useTransform(
    smoothY,
    [0, 0.4, 0.6, 0.9],
    [enterFrom, "0%", "0%", exitTo],
  )


  const isInView = useInView(taretRef, {amount: "all", margin: "0% 0% -3% 0%"}) // The margin is 3% of the bottom of the viewport

  const colors = [
    '[#2543da]',
    '[#d83e40]',
    '[#db7500]',
  ]

  const containerFormat = `${ enterFromRight ? 'flex-row-reverse' : '' } ${ isInView ? 'shadow-xl' : '' } shadow-${colors[index % 3]} grid grid-cols-1 2xl:flex 2xl:justify-around place-items-center 2xl:mt-0 mt-4 py-4 xl:py-20 bg-[#1f1f1f] 2xl:pb-24 pb-19 rounded-xl transition-shadow duration-500`
  // 'grid grid-cols-1 2xl:flex 2xl:justify-around place-items-center 2xl:mt-0 mt-4 py-4 xl:py-20 bg-[#1f1f1f] 2xl:pb-24 pb-19 rounded-xl  shadow-[#db7500]' 

  return (
    <motion.div
      ref = {taretRef}
      style={ {opacity: opacity, translateX: transform}}
      className={containerFormat}
      >
      <div className='mx-5 table-cell align-middle text-center pb-8 2xl:pb-12 mb-8 2xl:mb-0'>
          <h1 className='text-3xl mb:text-4xl'>{data.title}</h1>
          <p className='mt-4 md:max-w-xl md:min-w-xl text-lg'>{data.description}</p>
          
      </div>
      <ProjectCards projectName={projectName} iconData={data.icons} isOpen={isInView}/>
    </motion.div>
  )
}

export default Project
