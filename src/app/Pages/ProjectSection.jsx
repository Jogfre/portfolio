"use client";
import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";
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

const ProjectPage = ({scaleHook}) => {

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

  const smoothScale = useSpring(scale, {
    stiffness: 70,
    damping: 15,
  })

  useMotionValueEvent(smoothScale, "change", (latest) => {
      scaleHook(latest)
  })

  return (
    <section name="projects" className='text-white min-h-screen justify-center lg:mt-10 mt-0 mb-40' ref={targetRef}>
      
      <motion.h1 
        variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{ once: "runOnce", amount: 0.5 }} 
        className='text-4xl md:text-6xl align-middle text-center font-bold pb-8 md:pb-12 pt-14 md:pt-16 2xl:mb-10'>
          Projects
      </motion.h1>
      
      {projects.map((projectName, index) => (
        <div className='md:mb-36 sm:mb-32 min-[320px]:mb-24 mb-14' key={index}>
          <Project projectName={projectName} index={index} key={index}/>
        </div>
      ))}
      
    </section>
  )
}

export default ProjectPage
