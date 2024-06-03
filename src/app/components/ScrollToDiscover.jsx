'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { ArrowDownIcon } from "@heroicons/react/16/solid"
import { scroller } from 'react-scroll'


const ScrollToDiscover = ( {children, isInView} ) => {
    const handeButtonClick = (e) => {
        scroller.scrollTo("about", {duration: 1000, smooth: true, offset: -40})
    }

    const [isHovered, setIsHovered] = useState(false);

    return (
    <motion.div
        className='fixed lg:bottom-10 bottom-5  w-full flex justify-center'
        animate ={isInView ?  "active" : "inActive"}
        initial={"inActive"}
        variants={{
          active: {
            opacity: 1,
            y: "0%",
            filter: "blur(0px)",
            transition: {duration: 0.6, delay: 0.5}
          },
          inActive: {
            opacity: 0,
            y: "50%",
            filter: "blur(8px)",
            transition: {duration: 0.3}
          },
        }}
        style= {{pointerEvents: isInView ? "all" : "none"}}
    >
        <motion.div 
            className='w-fit h-10 flex justify-center items-center select-none sm:text-base sm:gap-2 gap-1 text-sm' 
            >
            <div className='relative cursor-pointer' onClick={() => handeButtonClick()}>
                <AnimatedText inputText={"Scroll to see more"} duration={1.5} delay={3} setIsHovered={setIsHovered} isHovered={isHovered}/>
                <motion.div 
                    className="absolute bottom-[-2px] left-[5%] right-[5%] h-[1px] bg-[#ADB7BE]"
                    animate={{scaleX: isHovered ? "100%" : "0%"}}
                    initial={{scaleX: "0%"}}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                    }}
                    />
            </div>
            
            <motion.div 
                className='sm:h-7 sm:w-7 h-5 w-5'
                animate= {{
                    y: ["-10%", "10%", "-10%"]
                }}
                transition={{
                    duration: 1.6,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            >
                <ArrowDownIcon className='text-[#ADB7BE]'/>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

const AnimatedText = ( {inputText, duration, delay, setIsHovered, isHovered} ) => {
    
    const characters = inputText.split("");
    const amount = duration / characters.length
    
    return  (
        <motion.div 
            className='flex flex-row'
            onHoverStart={() => {setIsHovered(true)}}
            onHoverEnd={() => setIsHovered(false)}
        >
            {
                characters.map( (word, i) => {
                    const stagger = (amount * i)
                    return <Character key={i} duration={duration} delay={delay} stagger={stagger} isHovered={isHovered}>{word}</Character>
                })
            }
        </motion.div>
    )

}
const Character = ( {children, duration, delay, stagger, isHovered} ) => {
    return (
        <motion.div
            className='text-[#ADB7BE]'
            animate= {{
                y: isHovered ? ["0", "-15%", "10%", "0%", "0%"] : ["0%", "0%"],
                color: ["#ADB7BE", "#656565", "#ADB7BE"]
            }}
            transition={{
                duration: isHovered ? 0.6 : duration,
                delay: isHovered ? stagger / 2 : stagger,
                repeat: isHovered ? null : Infinity,
                repeatDelay: isHovered ? duration : delay,
            }}
            viewport={{once: "runOnce", amount: 0.5}}
        >
        {
            children == " " ? <span className='mr-1'/> : <span>{children}</span>
            }
        </motion.div>
    )
}

export default ScrollToDiscover
