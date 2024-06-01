import React, {memo} from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const MenuData = memo(({data, selectedTab}) => {

  const variants = {
    initial: {y: 10, opacity: 0},
    animate: {y: 0, opacity: 1},
    exit: {y: -10, opacity: 0},
  }


  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={selectedTab ? selectedTab : "empty"}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.12 }}
      >

        <ul className='list-disc pl-4'>
          {
            data.map((item, i) => {
              return (
                <li key={i}>{item}</li>
              )
            })
          }
        </ul>
      </motion.div>
    </AnimatePresence>
  )
})

MenuData.displayName = "MenuData"

export default MenuData
