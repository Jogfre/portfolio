"use client";
import { React, useState, useTransition } from 'react'
import TabButton from '../components/TabButton';
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Next.js</li>
        <li>React</li>
        <li>Java</li>
        <li>Git</li>
        <li>Python</li>
        <li>Photoshop</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className='list-disc pl-2'>
        <li>4 Years Employed IT Technician at <a href='https://www.advania.se/' className='text-blue-200'>Advania</a></li>
        <li>3 Years at Kungliga Tekniska Högskolan</li>
      </ul>
    )
  },
  {
    title: "hobbies",
    id: "hobbies",
    content: (
      <ul className='list-disc pl-2'>
        <li>Playing Piano</li>
        <li>Board Games</li>
        <li>Cyber Security / Hacking</li>
        <li>Computer Vision</li>
      </ul>
    )
  },
];

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
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 sm:px-16'>
      <motion.img className='rounded-xl w-2/3 md:w-[500px]' variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{once: "runOnce", amount: 0.25}} src={"/images/AboutMePhoto.jpg"} alt="about image"/>
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
    
        <motion.div variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{once: "runOnce", amount: 0.5}} className="flex flex-row justify-start mt-8">
          <TabButton
          selectTab={() => handleTabChange("skills")}
          active={tab === "skills"}
          >
          Skills
          </TabButton>
          <TabButton
          selectTab={() => handleTabChange("experience")}
          active={tab === "experience"}
          >
          Experience
          </TabButton>
          <TabButton
          selectTab={() => handleTabChange("hobbies")}
          active={tab === "hobbies"}
          >
          Hobbies
          </TabButton>
        </motion.div>
        <motion.div variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{once: "runOnce"}} className="mt-8 min-h-44">
          {TAB_DATA.find((t) => t.id === tab).content}
        </motion.div>
      </div>
    </div>
  </section>
  )
}

export default AboutSection
