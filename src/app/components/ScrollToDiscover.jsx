import React from 'react'
import { motion } from "framer-motion"
import { ArrowDownIcon } from "@heroicons/react/16/solid"
import { scroller } from 'react-scroll'



const ScrollToDiscover = ( {isInView} ) => {
    const handeButtonClick = (e) => {
        scroller.scrollTo("about", {duration: 1000, smooth: true, offset: -40})
    }


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
        <div className='w-fit h-10 flex justify-center items-center cursor-pointer select-none sm:text-base sm:gap-2 gap-1 text-sm' onClick={() => handeButtonClick()}>
            <div className='relative'>
                <motion.div
                    //Container div that shows the "highlight" that is within the container
                    className='h-10 w-5 absolute overflow-hidden'
                    animate={{
                        x: ["-100%", "700%"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeIn",
                        repeat: Infinity,
                        repeatDelay: 2
                    }}   
                >
                    <motion.p 
                        //Second text element with a darker shade to create the "highlight" effect. Moves in the opposite direction of the container to align with the static text below.
                        className='text-[#696969] whitespace-nowrap'
                        animate={{
                            x: ["100%", "-700%"],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeIn",
                            repeat: Infinity,
                            repeatDelay: 2
                        }}  
                        
                        >
                        Scroll to see more
                    </motion.p>
                </motion.div>


                <p className='text-[#ADB7BE]'>
                    Scroll to see more
                </p>
            </div>
            
            <motion.div 
                className='sm:h-7 sm:w-7 h-5 w-5'
                animate= {{
                    y: ["-10%", "10%", "-10%"]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            >
                <ArrowDownIcon className='text-[#ADB7BE]'/>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default ScrollToDiscover
