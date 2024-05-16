import React, {useRef, useState, useEffect} from 'react'
import { motion, useTransform,  AnimatePresence } from 'framer-motion'




const navContainer = {
  visible: {
      y: "0%",
      opacity: 1,
      transition: {
      x: { velocity: 100 },
      duration: 0.5,
      }
  },
  hidden: {
      y: "-100%",
      opacity: 0,
      transition: {
      y: { velocity: 100 },
      duration: 0.5,
      }
  }
};

    
const FloatingNavBar = (isInView) => {
  

  return (
    <div className='w-20 h-96 rounded-lg bg-white z-50'>

    </div>
  );
}

export default FloatingNavBar
