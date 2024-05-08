import React from 'react'
import { motion } from 'framer-motion'
import ProjectCards from './ProjectCards.jsx'

const fadeAnimationVariants = {
    initial: {
      y:"-20%",
      opacity: 0,
      filter: "blur(4px)",
    },
    initial_L: {
      opacity: 0,
      x: "-10%",
    },
    initial_R: {
      opacity: 0,
      x: "10%",
    },
    animate: {
      opacity: 1,
      x: "0%",
      y: "0%",
      filter: "blur(0px)",
      transition: { type: 'ease-out', duration: 1.2, delay: 0.2}
    },
  }


const Project = ({ projectName, index }) => {

    const data = require(`../../../../public/projects/${projectName}/data.json`)
    const enterRight = index % 2 === 0

    return (
    <motion.div 
        variants={fadeAnimationVariants} initial={enterRight ? "initial_R" : "initial_L"} whileInView={"animate"} viewport={{once: "runOnce"}} 
        className={enterRight ? 'grid grid-cols-1 md:flex md:justify-around flex-row-reverse place-items-center mt-20 md:mt-0 py-4 md:py-20' : 'grid grid-cols-1 md:flex md:justify-around place-items-center mt-20 md:mt-0 py-4 md:py-20'} 
        >
        <div className='mx-5 table-cell align-middle text-center pb-12'>
            <h1 className='text-3xl mb:text-4xl'>{data.title}</h1>
            <p className='mt-4 md:max-w-xl md:min-w-xl text-lg'>{data.description}</p>
        </div>
        <ProjectCards />
    </motion.div>
    )
}

export default Project
