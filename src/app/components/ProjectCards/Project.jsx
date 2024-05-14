import { React, useRef, useEffect } from 'react'
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
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  const enterFrom = enterFromRight ? "10%" : "-10%"
  const exitTo = !enterFromRight ? "10%" : "-10%"

  const opacity = useTransform(
      smoothY,
      [0, 0.5, 0.7, 0.9],
      [0, 1, 1, 0],
  )

  const transform = useTransform(
    smoothY,
    [0, 0.33, 0.66, 0.9],
    [enterFrom, "0%", "0%", exitTo],
  )

  const isInView = useInView(targetRef, {amount: "all", margin: "0% 0% 10% 0%"}) 
  

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

  const containerFormat = `${ enterFromRight ? 'flex-row-reverse 2xl:pl-44' : '2xl:pr-44' } ${ isInView ? 'shadow-lg' : '' } shadow-${highlightColor} max-xl:flex-col items-center justify-center 2xl:flex 2xl:justify-between place-items-center 2xl:mt-0 mt-4 py-4 2xl:py-20 bg-[#1f1f1f] 2xl:px-10 2xl:pb-24 pb-18 rounded-xl 2xl:mb-32 mb-0 transition-shadow duration-500 max-2xl:max-h-svh`
  const bracketIconFormat = `2xl:h-20 2xl:w-20 h-10 w-10 p-2 rounded-full text-white transition-all duration-200 group-hover:text-${highlightColor} pointer-events-auto`


  const codeBracketIconClick = (link) => {
    if (link != "/") {
      open(data.link, "_blank")
    }
  }
  
  return (
    <Link className='cursor-pointer' to={`project_${index}`} duration={600} smooth={true} offset={-140}>
      <motion.div
        name = {`project_${index}`}
        ref = {targetRef}
        style={ {opacity: opacity, translateX: transform}}
        className={containerFormat}>
          <div className='mx-5 flex-col md:pb-8 :pb-12 mb-8 2xl:mb-0 items-center align-middle text-center justify-center'>
            <h1 className='text-3xl mb:text-4xl'>{data.title}</h1>
            <p className='mt-4 2xl:max-w-2xl max-w-xl m-auto 2xl:text-lg text-sm'>{data.description}</p>

            <div className='button_container flex justify-around 2xl:my-12 my-4' >
                <motion.div
                  whileHover={{ 
                    scale: 1.15,
                    boxShadow: `0px 0px 8px ${colorHex}`,
                    transition: {duration: 0.2},
                  }}
                  transition={{ duration: 0.2 }}
                  className={`group rounded-full p-1 2xl:border-2 border border-white hover:border-${highlightColor} transition-colors duration-200`}
                >
                  <CodeBracketIcon className= {bracketIconFormat} onClick={() => {codeBracketIconClick(data.link)}}/>
                </motion.div>
            </div>
          </div>
          <div className= 'flex justify-center pb-8'>
            <ProjectCards projectName={projectName} iconData={data.icons} isOpen={isInView}/>
          </div>
      </motion.div>
    </Link>
  )
}

export default Project