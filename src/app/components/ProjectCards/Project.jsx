import { React, useRef } from 'react'
import { motion, useTransform, useScroll, useSpring, useInView } from 'framer-motion'
import { CodeBracketIcon } from '@heroicons/react/24/solid'
import ProjectCards from './ProjectCards.jsx'  
import { Link } from 'react-scroll'

const Project = ({ projectName, index }) => {

  const data = require(`../../../../public/projects/${projectName}/data.json`)
  const enterFromRight = index % 2 != 0

  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start 90%", "end 10%"],
  })
  const smoothY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
  });

  const enterFrom = enterFromRight ? "20%" : "-20%"
  const exitTo = !enterFromRight ? "20%" : "-20%"

  const opacity = useTransform(
      smoothY,
      [0, 0.4, 0.6, 0.9],
      [0, 1, 1, 0],
  )

  const transform = useTransform(
    smoothY,
    [0, 0.4, 0.6, 0.9],
    [enterFrom, "0%", "0%", exitTo],
  )

  
  const isInView = useInView(targetRef, {amount: "all", margin: "0% 50% -3% 50%"}) // The margin is 3% of the bottom of the viewport

  const colors = [
    '#2543da',
    '#d83e40',
    '#db7500',
  ]
  const colorHex = colors[index % 3]
  const highlightColor = `[${colorHex}]`

  const containerFormat = `${ enterFromRight ? 'flex-row-reverse' : '' } ${ isInView ? 'shadow-xl' : '' } shadow-${highlightColor} grid grid-cols-1 2xl:flex 2xl:justify-around place-items-center 2xl:mt-0 mt-4 py-4 xl:py-20 bg-[#1f1f1f] 2xl:pb-24 pb-19 rounded-xl transition-shadow duration-500 ${isInView ? 'pointer-events-none' : ''}`
  const bracketIconFormat = `md:h-20 md:w-20 h-10 w-10 border-2 md:px-2 md:py-2 px-0 py-0 border-white rounded-full text-white transition-all duration-300 hover:text-${highlightColor} hover:border-${highlightColor} pointer-events-auto z-20`


  const codeBracketIconClick = (link) => {
    if (link != "/") {
      open(data.link, "_blank")
    }
  }
  
  return (
    <Link className='cursor-pointer' to={`project_${index}`} duration={800} smooth={true} offset={-140} style={{pointerEvents: isInView ? 'none' : 'all'}}>
      <motion.div
        name = {`project_${index}`}
        ref = {targetRef}
        style={ {opacity: opacity, translateX: transform}}
        className={containerFormat}>
          <div className='mx-5 table-cell align-middle text-center md:pb-8 :pb-12 mb-8 2xl:mb-0 items-center'>
            <h1 className='text-3xl mb:text-4xl'>{data.title}</h1>
            <p className='mt-4 md:max-w-xl md:min-w-xl md:text-lg text-md'>{data.description}</p>
            <div className='button_container flex justify-around my-2 2xl:my-12' >
                
                <motion.div
                  whileHover={{ 
                    scale: 1.15,
                    boxShadow: `0px 0px 8px ${colorHex}`,
                    transition: {duration: 0.2},
                  }}
                  transition={{ duration: 0.2 }}
                  className='rounded-full'
                >
                  <CodeBracketIcon className= {bracketIconFormat} onClick={() => {codeBracketIconClick(data.link)}}/>
                </motion.div>
            </div>
          </div>

          
          <ProjectCards projectName={projectName} iconData={data.icons} isOpen={isInView}/>


      </motion.div>
    </Link>
  )
}

export default Project
