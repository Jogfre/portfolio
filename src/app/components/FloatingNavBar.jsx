import NavLink from './NavLink'
import PropTypes from "prop-types";
import { motion, useScroll,  useSpring } from 'framer-motion'




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

const FloatingNavBar = ( {navLinks} ) => {
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring((scrollYProgress), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className='flex justify-around relative items-center lg:px-12 px-8 w-fit h-12 rounded-lg mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300 pointer-events-auto bg-[#202020] border-2 border-[#1f1f1f] overflow-hidden'>
      <ul className='flex p-0 flex-row lg:space-x-12 space-x-8 lg:text-xl text-lg z-10'>
        {
          navLinks.map((link, index) => (
            <li key={index}>
                <NavLink href={link.path} title={link.title} offset={link.offset}/>
            </li>
          ))
        }
      </ul>
      <motion.div className='absolute bottom-0 w-full h-[3px] bg-gradient-to-r from-[#1a2766] via-[#ae1b1e] to-[#fc9f32] z-9' style={{ scaleX, transformOrigin: '0%' }} />
    </div>
  );
}

export default FloatingNavBar

FloatingNavBar.propTypes = {
  navHeader: PropTypes.arrayOf(
    PropTypes.shape({
      headerID: PropTypes.string,
      headerRef: PropTypes.object.isRequired,
      headerTitle: PropTypes.string.isRequired
    })
  ).isRequired
};
