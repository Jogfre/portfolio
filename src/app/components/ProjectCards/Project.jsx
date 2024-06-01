import { React, useRef } from 'react'
import { motion, useTransform, useScroll, useSpring, useInView } from 'framer-motion'
import ProjectCards from './ProjectCards.jsx'  
import { Element, scroller } from 'react-scroll';

const Project = ({ projectName, index }) => {


  const data = require(`../../../../public/projects/${projectName}/data.json`)
  const enterFromRight = index % 2 != 0

  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start 90%", "end 10%"],
  })
  const smoothY = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 90,
    damping: 30,
    restDelta: 0.001
  });

  const enterFrom = enterFromRight ? "100%" : "-100%"
  const exitTo = !enterFromRight ? "100%" : "-100%"

  const opacity = useTransform(
      smoothY,
      [0, 0.4, 0.6, 1],
      [0, 1, 1, 0],
  )

  const transform = useTransform(
    smoothY,
    [-2, 0.3, 0.7, 3],
    [enterFrom, "0%", "0%", exitTo],
  )

  const isInView = useInView(targetRef, {amount: "all", margin: "0% 10% 10% 10%"}) 
  

  /* ---> useEffect to track the change and update the current index. Whenever isInView changes, the hook function will be updated.
  useEffect(() => { 
    hook(index)
  }, [isInView]);
  */
  

  const colors = [
    '#2543da',
    '#d83e40',
    '#db7500',
  ]
  const colorHex = colors[index % 3]
  const highlightColor = `[${colorHex}]`

  const containerFormat = `${ enterFromRight ? 'flex-row-reverse 2xl:pl-44' : '2xl:pr-44' } ${ isInView ? 'shadow-lg' : '' } shadow-${highlightColor} max-xl:flex-col max-2xl:mx-5 items-center justify-center 2xl:flex 2xl:justify-between place-items-center 2xl:mt-0 mt-4 py-4 2xl:py-20 bg-[#1f1f1f] 2xl:px-10 rounded-xl 2xl:my-22 my-0 transition-shadow duration-500 2xl:max-h-[550px] content-center`
  const bracketIconFormat = `2xl:h-20 2xl:w-20 h-10 w-10 p-2 rounded-full text-white transition-all duration-200 group-hover:text-${highlightColor} pointer-events-auto 2xl:text-lg text-sm cursor-pointer`


  const handeButtonClick = (link, e) => {
    if(e && e.stopPropagation) e.stopPropagation(); // Prevent button from triggering potential parrent events.

    if (link != "/") {
      open(data.link, "_blank")
    }
  }
  
  return (
    <motion.div
      ref = {targetRef}
      style={ {opacity: opacity, translateX: transform}}
      className={containerFormat}
      >
        <div className='mx-5 flex-col pb-8 mb-4 2xl:mb-0 items-center align-middle text-center justify-center'>
          <h1 className='text-3xl mb:text-4xl'>{data.title}</h1>
          <p className='mt-4 2xl:max-w-2xl max-w-xl m-auto 2xl:text-lg text-sm'>{data.description}</p>

          <div className='button_container flex justify-center 2xl:mt-12 mt-6 select-none align-middle items-center' >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: `0px 0px 8px ${colorHex}`,
                  transition: {duration: 0.2},
                }}
                whileTap={{
                  scale: 0.95
                }}
                transition={{ duration: 0.2 }}
                className={`group rounded-full p-1 2xl:border-2 border border-white hover:border-${highlightColor} transition-colors duration-200`}
              >
                <a className={bracketIconFormat} onClick={(e) => {handeButtonClick(data.link, e)}}>{data.button}</a>
              </motion.div>
          </div>
        </div>
        <div className= 'flex justify-center'>
          <ProjectCards projectName={projectName} iconData={data.icons} isOpen={isInView}/>
        </div>
    </motion.div>
  )
}

export default Project
