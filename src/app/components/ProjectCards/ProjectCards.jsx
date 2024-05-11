import React from 'react'
import Image from "next/image"
import './ProjectCards.css'



const ProjectCards = ( {projectName, iconData, isOpen} ) => {

    const iconLen = iconData.length
    
    const icon1 = iconData[0]
    const icon2 = iconData[1]
    const icon3 = iconData[2]
    const icon4 = iconData[3]

    return (
        <div className={isOpen ? "open-card-container" : "card-container"}>

            <div className="small-card card" style={iconLen >= 3 ? {opacity: 1} : {opacity: 0}} >
                <Image 
                        src={`/icons/${icon3}.svg`}
                        alt={`${projectName} icon 3`}
                        className='pointer-events-none '
                        fill
                />   
            </div>
            <div className="big-card card">
                <Image 
                        src={`/projects/${projectName}/imgLarge/img4.jpg`}
                        alt={`${projectName} image 4`}
                        className='pointer-events-none'
                        fill
                        style={{objectFit:"cover"}}
                />   
            </div>

            <div className="small-card card" style={iconLen >= 4 ? {opacity: 1} : {opacity: 0}} >
                <Image 
                        src={`/icons/${icon4}.svg`}
                        alt={`${projectName} icon 4`}
                        className='pointer-events-none'
                        fill
                />   
            </div>
            <div className="big-card card">
                <Image 
                        src={`/projects/${projectName}/imgLarge/img3.jpg`}
                        alt={`${projectName} image 3`}
                        className='pointer-events-none'
                        fill
                        style={{objectFit:"cover"}}
                />                
            </div>

            <div className="small-card card" style={iconLen >= 1 ? {opacity: 1} : {opacity: 0}} >
                <Image 
                        src={`/icons/${icon1}.svg`}
                        alt={`${projectName} icon 1`}
                        className='pointer-events-none'
                        fill
                />   
            </div>
            <div className="big-card card">
                <Image 
                        src={`/projects/${projectName}/imgLarge/img2.jpg`}
                        alt={`${projectName} image 2`}
                        className='pointer-events-none'
                        fill
                        style={{objectFit:"cover"}}
                />
            </div>

            <div className="small-card card" style={iconLen >= 2 ? {opacity: 1} : {opacity: 0}} >
                <Image 
                        src={`/icons/${icon2}.svg`}
                        alt={`${projectName} icon  2`}
                        className='pointer-events-none'
                        fill
                />   
            </div>
            <div className="big-card card">
                <Image 
                        src={`/projects/${projectName}/imgLarge/img1.jpg`}
                        alt={`${projectName} image 1`}
                        className='pointer-events-none'
                        fill
                        style={{objectFit:"cover"}}
                />
            </div>

        </div>
      )
    }

export default ProjectCards
