'use client'
import React, { useState, useTransition, useMemo } from 'react'
import MenuData from './MenuData';
import { AnimatePresence, motion } from 'framer-motion'

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    data: [
      "Node.js",
      "React",
      "Java",
      "Git",
      "Python",
      "Photoshop"
    ],
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
    data: [
      "4 Years Employed  IT Technician at Advania",
      "3 Years at Kungliga Tekniska Högskolan"
    ],
    content: (
      <ul className='list-disc pl-2'>
        <li>4 Years Employed IT Technician at <a href='https://www.advania.se/' className='text-blue-200'>Advania</a></li>
        <li>3 Years at Kungliga Tekniska Högskolan</li>
      </ul>
    )
  },
  {
    title: "Hobbies",
    id: "hobbies",
    data: [
      "Board Games",
      "Playing Piano",
      "Building Lego",
      "Cyber Security / Hacking",
      "Computer Vision"
    ],
    content: (
      <ul className='list-disc pl-2'>
        <li>Board Games</li>
        <li>Playing Piano</li>
        <li>Building Lego</li>
        <li>Cyber Security / Hacking</li>
        <li>Computer Vision</li>
      </ul>
    )
  },    
];


const FancyMenu = () => {

    const [selectedTab, setSelectedTab] = useState(TAB_DATA[0].id);
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
      startTransition(() => {
        setSelectedTab(id)
      })
    }
  
    return (
        <div 
          className="w-fit h-fit mt-4 min-h-64 flex"
          >
            <div className="w-full h-full flex flex-col">
              <nav>
                <ul className="w-full flex-row flex">
                    {
                        TAB_DATA.map((data, i) => {
                          return (
                              <motion.li 
                                  key={i} 
                                  className="justify-center items-center h-max px-2 pt-2 cursor-pointer relative select-none"
                                  onClick={() => handleTabChange(data.id)}
                                  whileHover={{
                                    textShadow: "0px 0px 2px rgb(255, 255, 255)",
                                    color: "#fff",
                                    transition: { ease: "easeOut", duration: 0.2 },
                                  }}
                                  style={{color: data.id == selectedTab ? "#fc9f32" : "#a2a2a2"}}
                                  >
                                    {data.title}
                                    {data.id == selectedTab ? (
                                      <motion.div 
                                        className='absolute bottom-[-1px] left-[5px] right-[5px] h-[2px] bg-gradient-to-r from-[#1a2766] via-[#ae1b1e] to-[#fc9f32]' 
                                        layoutId="underline"
                                        transition={{ type: "spring", stiffness: 200, damping: 20, duration: 1 }}
                                      />
                                    ): null}
                                  
                              </motion.li>
                          )
                        })                    
                    }
                   
                </ul>
              </nav> 

              <div className="w-full h-max pt-3">
                {/* 
                */}
                <MenuData data={TAB_DATA.find((t) => t.id === selectedTab).data} selectedTab={selectedTab}/>

              </div>
            </div>
        </div>
    )
}

export default FancyMenu
