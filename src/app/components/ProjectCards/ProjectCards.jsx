import React from 'react'
import Image from "next/image"
import './ProjectCards.css'



function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const IconOverlay = ({iconName}) => {
    const name = capitalizeFirstLetter(iconName)  
    return (
        <div className='absolute top-0 left-0 w-full h-full flex text-wrap justify-center items-center text-center opacity-0 hover:opacity-100 transition-opacity duration-200'>
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-80 rounded-[2vmin] border-2 border-white'/>
            <p className='z-10 lg:text-lg md:text-base text-sm'>{name}</p>
        </div> 
    )
}


const ProjectCards = ( {projectName, iconData, isOpen} ) => {

    const iconLen = iconData.length
    
    const icon1 = iconData[0]
    const icon2 = iconData[1]
    const icon3 = iconData[2]
    const icon4 = iconData[3]

    return (
        <div className={isOpen ? "open-card-container" : "card-container"}>

            {iconLen >= 2 ? <div className="small-card card relative">
                <Image 
                        src={`/icons/${icon2}.svg`}
                        alt={`${projectName} icon 2`}
                        className='pointer-events-none p-2'
                        fill
                        style={{objectFit: "contain"}}
                />
                <IconOverlay iconName={icon2}/>
            </div> : <div/>}

            <div className="big-card card" style={{ background: `url(/projects/${projectName}/imgLarge/img4.jpg)`, backgroundSize: "cover" }} />

            {iconLen >= 4 ? <div className="small-card card relative">
                <Image 
                        src={`/icons/${icon4}.svg`}
                        alt={`${projectName} icon 4`}
                        className='pointer-events-none p-2'
                        fill
                        style={{objectFit: "contain"}}
                />
                <IconOverlay iconName={icon4}/>
            </div> : <div/>}
            
            <div className="big-card card" style={{ background: `url(/projects/${projectName}/imgLarge/img3.jpg)`, backgroundSize: "cover" }} />

            {iconLen >= 1 ? <div className="small-card card relative">
                <Image 
                        src={`/icons/${icon1}.svg`}
                        alt={`${projectName} icon 1`}
                        className='pointer-events-none p-2'
                        fill
                        style={{objectFit: "contain"}}
                />
                <IconOverlay iconName={icon1}/>
            </div> : <div/>}

            <div className="big-card card" style={{ background: `url(/projects/${projectName}/imgLarge/img2.jpg)`, backgroundSize: "cover" }} />

            
            {iconLen >= 3 ? 
            <div className="small-card card relative">
                <Image 
                        src={`/icons/${icon3}.svg`}
                        alt={`${projectName} icon 3`}
                        className='pointer-events-none p-2'
                        fill
                        style={{objectFit: "contain"}}
                />
                <IconOverlay iconName={icon3}/> 
            </div> : <div/>}

            <div className="big-card card" style={{ background: `url(/projects/${projectName}/imgLarge/img1.jpg)`, backgroundSize: "cover" }} />

        </div>
      )
    }

export default ProjectCards
