"use client";
import React from 'react'
import { motion } from "framer-motion";
import Project from '../components/ProjectCards/Project.jsx';

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

const projects = [
  "SetSolver",
  "FruitSpy",
  "Portfolio"
]

const ProjectPage = () => {


  return (
    <section name="projects" className='text-white min-h-screen justify-center mt-10 mb-40'>
      
      <motion.h1 variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{once: "runOnce"}} className='text-4xl mb:text-6xl align-middle text-center mt-12 font-bold pb-0 md:pb-12 pt-14 md:pt-16'>
        Projects
      </motion.h1>
      
      {projects.map((projectName, index) => (
        <Project projectName={projectName} index={index} key={index}/>
      ))}
      
    
    </section>
  )
}

export default ProjectPage
