"use"
import NavLink from './NavLink'
import PropTypes from "prop-types";
import { motion } from 'framer-motion'


const FloatingNavBar = ( {navLinks, scaleFactor, isInView} ) => {
  
  return (
    <div className='z-50 flex justify-around relative items-center px-1 w-fit h-12 rounded-full mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300 pointer-events-auto bg-[#1f1f1f] overflow-hidden'>
      <ul className='flex p-0 flex-row lg:space-x-12 space-x-8 lg:text-xl text-lg z-10 bg-[#202020] lg:px-12 px-8 rounded-full py-2'>
        {
          navLinks.map((link, index) => (
            <li key={index}>
                <NavLink href={link.path} title={link.title} offset={link.offset}/>
            </li>
          ))
        }
      </ul>
      <motion.div 
        className='progress_bar absolute bottom-0 w-full h-full bg-gradient-to-r from-[#1a2766] via-[#ae1b1e] to-[#fc9f32] z-9'
        animate ={!isInView ?  "active" : "inActive"}
        initial={"inActive"}
        exit= {"inActive"}
        variants={{
          active: {
            opacity: 1,
            x: "0%",
            transition: {duration: 0.6}
          },
          inActive: {
            opacity: 0.,
            x: "-30%",
            transition: {duration: 0.6}
          },
      }}
        style={{ scaleX: scaleFactor * 100 +"%", transformOrigin: '0%' }} 
        />
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
