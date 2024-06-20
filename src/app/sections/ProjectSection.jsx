import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import Project from '../components/ProjectCards/Project.jsx';

const fadeAnimationVariants = {
  initial: {
    scale: 0.8,
    opacity: 0,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: "0%",
    y: "0%",
    filter: "blur(0px)",
    transition: { type: 'ease-out', duration: 1}
  },
}

const projects = [
  "SetSolver",
  "FruitSpy",
  "Portfolio",
  "Photoshop",
]

const ProjectPage = () => {

  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
  })
  const scale = useTransform(
      scrollYProgress,
      [0, 1],
      [0, 0.20],
  )

  return (
    <section name="projects" className='text-white min-h-screen justify-center lg:mt-10 mt-0 mb-44' ref={targetRef}>
      
      <motion.h1 
        variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{ once: "runOnce", amount: 0.5 }} 
        className='text-4xl md:text-6xl align-middle text-center font-bold pt-14 md:pt-16'>
          Projects
      </motion.h1>
      
      {projects.map((projectName, index) => (
        <div className='md:my-36 sm:my-32 min-[320px]:my-24 my-24 pb-10' key={index}>
          <Project projectName={projectName} index={index} key={index}/>
        </div>
      ))}
      
    </section>
  )
}

export default ProjectPage
