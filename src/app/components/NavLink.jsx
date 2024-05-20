import {Link, scroller} from 'react-scroll'
import { motion } from 'framer-motion';



// <Link to={href} duration={1000} offset={offset} smooth={true} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded hover:text-white cursor-pointer'>{title}</Link>
const NavLink = ( {href, title, offset}) => {

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
      onClick={() => {scroller.scrollTo(href, {duration: 1000, smooth: true, offset: offset})}}
      className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded hover:text-white cursor-pointer select-none'
    > 
    {title}

    </motion.div>
  );
};


export default NavLink;