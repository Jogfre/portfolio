import React, {memo} from 'react'
import MenuItem from './MenuItem'
import { motion } from 'framer-motion'

const MenuData = memo(({data, selectedTab}) => {
  return (
    <motion.ul
      key={selectedTab ? selectedTab : "empty"}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {
        data.map((item, i) => {
          return (
            <li key={i}>{item}</li>
          )
        })
      }
    </motion.ul>
  )
})

MenuData.displayName = "MenuData"

export default MenuData
