import { scroller } from 'react-scroll'
import { motion } from 'framer-motion';





const NavLink = ( {href, title, offset, active}) => {

  const handeButtonClick = (e) => {
    scroller.scrollTo(href, {duration: 1000, smooth: true, offset: offset})
  }

  return (   
    <motion.div
      whileHover={{
        scale: 1.1,
        textShadow: `0px 0px 8px #ffffff`,
        transition: {duration: 0.2},
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{ duration: 0.2 }}
      onClick={(e) => handeButtonClick(e)}
      className='text-[#ADB7BE] hover:text-white cursor-pointer select-none'
      > 
    {title}
    </motion.div>
  );
};


export default NavLink;