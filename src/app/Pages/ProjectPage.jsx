"use client";
import React from 'react'
import ProjectCards from '../components/ProjectCards/ProjectCards.jsx'
import { motion } from "framer-motion";

const fadeAnimationVariants = {
  initial: {
    opacity: 0,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: 'ease-in', duration: 0.8, delay: 0.2}
  },
}

const ProjectPage = () => {
  return (
    <section name="projects" className='text-white min-h-screen justify-center mt-10 mb-40'>
      
      <motion.h1 variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{once: "runOnce"}} className='text-4xl mb:text-6xl align-middle text-center mt-12 font-bold pb-0 md:pb-12 pt-14 md:pt-16'>
        My Projects
      </motion.h1>
      
      <motion.div variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{once: "runOnce"}} className='grid grid-cols-1 md:grid-cols-2 place-items-center mt-8 md:mt-20'>
        <div className='mx-5 table-cell align-middle text-center pb-12'>
          <h1 className='text-3xl mb:text-4xl'>Project Name</h1>
          <p className='mt-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec metus urna. Quisque elementum augue nisi, ut malesuada massa tincidunt vitae. Proin non luctus urna. Nulla facilisi. Nulla condimentum at mauris laoreet vestibulum. Maecenas vitae metus pretium, accumsan massa et. </p>
        </div>
        <ProjectCards />
      </motion.div>

      <motion.div variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{once: "runOnce"}} className='grid grid-cols-1 md:grid-cols-2 place-items-center mt-8 md:mt-20'>
        <ProjectCards />
        <div className='mx-5 table-cell align-middle text-center pb-12'>
          <h1 className='text-3xl mb:text-4xl'>Project Name</h1>
          <p className='mt-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec metus urna. Quisque elementum augue nisi, ut malesuada massa tincidunt vitae. Proin non luctus urna. Nulla facilisi. Nulla condimentum at mauris laoreet vestibulum. Maecenas vitae metus pretium, accumsan massa et. </p>
        </div>
      </motion.div>
      
      <motion.div variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{once: "runOnce"}} className='grid grid-cols-1 md:grid-cols-2 place-items-center mt-8 md:mt-20'>
        <div className='mx-5 table-cell align-middle text-center pb-12'>
          <h1 className='text-3xl mb:text-4xl'>Project Name</h1>
          <p className='mt-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec metus urna. Quisque elementum augue nisi, ut malesuada massa tincidunt vitae. Proin non luctus urna. Nulla facilisi. Nulla condimentum at mauris laoreet vestibulum. Maecenas vitae metus pretium, accumsan massa et. </p>
        </div>
        <ProjectCards />
      </motion.div>

      <motion.div variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{once: "runOnce"}} className='grid grid-cols-1 md:grid-cols-2 place-items-center mt-8 md:mt-20'>
        <ProjectCards />
        <div className='mx-5 table-cell align-middle text-center pb-12'>
          <h1 className='text-3xl mb:text-4xl'>Project Name</h1>
          <p className='mt-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec metus urna. Quisque elementum augue nisi, ut malesuada massa tincidunt vitae. Proin non luctus urna. Nulla facilisi. Nulla condimentum at mauris laoreet vestibulum. Maecenas vitae metus pretium, accumsan massa et. </p>
        </div>
      </motion.div>
      
    </section>
  )
}

export default ProjectPage
