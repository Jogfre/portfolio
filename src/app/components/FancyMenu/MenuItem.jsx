import React from 'react'
import { motion } from 'framer-motion'

const variants = {
    active: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    inactive: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

const MenuItem = ({children}) => {
    return (
        <li
            className='w-10 h-10 bg-blue-500'

        >
            {children}
        </li>
    )
  }

export default MenuItem
