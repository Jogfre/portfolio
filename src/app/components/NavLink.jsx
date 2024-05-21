import { scroller } from 'react-scroll'
import { motion, MotionConfig } from 'framer-motion';





const NavLink = ( {href, title, offset, activeTitle}) => {

  const handeButtonClick = (e) => {
    scroller.scrollTo(href, {duration: 1000, smooth: true, offset: offset})
  }

  // console.log("title: ", title, ", activeTitle: ", activeTitle, "isTrue: ", title === activeTitle)
  return (  
    <MotionConfig
      transition={{duration: 0.2}}
    
    >
      <motion.div
        whileHover={{
          scale: 1.1,
          color: "#ffffff",
          textShadow: `0px 0px 8px #ffffff`,
        }}
        whileTap={{
          scale: 0.95,
        }}
        animate={{color: title === activeTitle ? "#FBC57E" : "#b0b1b1", textShadow: title === activeTitle ? "0px 0px 8px #FBC57E" : "0px 0px 0px #ffffff"}}
        onClick={(e) => handeButtonClick(e)}
        className='text-[#868686] cursor-pointer  select-none'
        > 
      {title}
      </motion.div>
    </MotionConfig> 
  );
};


export default NavLink;