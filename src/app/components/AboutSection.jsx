"use client";
import {React, useState, useTansition, useTransition, useRef, useEffect} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import {
  inView,
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform
} from "framer-motion";

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
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
  },
  {
    title: "Certifications",
    id: "certifications",
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
    transition: { type: "easeIn", duration: 0.8}
  },
  runOnce: true
}
  

const AboutSection = () => {

  const divRef = useRef(null);

  const[tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();


  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
  <section className='text-white min-h-screen ba'>
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 sm:px-16'>
      <motion.img variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{once: "runOnce"}} src={"/images/ProfilePhoto.png"} width={500} height={500} alt="about image"/>
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <motion.h2 variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{once: "runOnce"}} className='text-4xl font-bold my-4'>About Me</motion.h2>
        <motion.p variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{once: "runOnce"}}>
            

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed tempus ante, a fermentum libero. Pellentesque luctus porttitor purus at iaculis. Cras non volutpat nulla. Quisque feugiat tincidunt finibus. Nam tempor mauris id ante vehicula, vitae eleifend neque auctor. Nam vel risus malesuada, semper libero id, mattis orci. Vivamus nec est nec tortor porttitor interdum. Vestibulum finibus elementum justo, id dignissim mauris luctus a. Phasellus congue mauris sit amet diam pulvinar, et scelerisque mi finibus.

        </motion.p>
    
        <motion.div variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{once: "runOnce"}} className="flex flex-row justify-start mt-8">
          <TabButton
          selectTab={() => handleTabChange("skills")}
          active={tab === "skills"}
          >
          Skills
          </TabButton>
          <TabButton
          selectTab={() => handleTabChange("education")}
          active={tab === "education"}
          >
          Education
          </TabButton>
          <TabButton
          selectTab={() => handleTabChange("certifications")}
          active={tab === "certifications"}
          >
          Certifications
          </TabButton>
        </motion.div>
        <motion.div variants={fadeAnimationVariants} initial={"initial"} whileInView={"animate"} viewport={{once: "runOnce"}} className="mt-8 min-h-32">
          {TAB_DATA.find((t) => t.id === tab).content}
        </motion.div>
      </div>
    </div>
  </section>
  )
}

export default AboutSection
