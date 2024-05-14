"use client";
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import Project from '../components/ProjectCards/Project.jsx';

const fadeAnimationVariants = {
  initial: {
    scale: 1.4,
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

  return (
    <section name="projects" className='text-white min-h-screen justify-center mt-10 mb-40'>
      
      <motion.h1 
        variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{ once: "runOnce", amount: 0.5 }} 
        className='text-4xl md:text-6xl align-middle text-center font-bold pb-0 md:pb-12 pt-14 md:pt-16 2xl:mb-10'>
          Projects
      </motion.h1>
      
      {projects.map((projectName, index) => (
        <div className='md:mb-20 mb-14' key={index}>
          <Project projectName={projectName} index={index} key={index}/>
        </div>
      ))}
      
    </section>
  )
}

export default ProjectPage
