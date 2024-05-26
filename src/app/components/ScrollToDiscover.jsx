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
        className='fixed lg:bottom-10 lg:right-32 bottom-5 lg:w-fit w-full flex justify-center'
        animate ={isInView ?  "active" : "inActive"}
        initial={"inActive"}
        exit= {"inActive"}
        variants={{
          active: {
            opacity: 1,
            y: "0%",
            filter: "blur(0px)",
            transition: {duration: 0.6, delay: 2.5}
          },
          inActive: {
            opacity: 0.,
            y: "50%",
            filter: "blur(8px)",
            transition: {duration: 0.6}
          },
        }}
    >
        <div className='w-fit h-10 flex justify-center items-center cursor-pointer select-none sm:text-base sm:gap-2 gap-1 text-sm' onClick={() => handeButtonClick()}>
            <p className='text-[#ADB7BE]'>
                Scroll to see more
            </p>
            
            <motion.div 
                className='sm:h-8 sm:w-8 h-5 w-5'
                animate= {{
                    y: ["10%", "-10%", "10%"]
                }}
                transition={{
                    duration: 2,
                    ease: "linear",
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
