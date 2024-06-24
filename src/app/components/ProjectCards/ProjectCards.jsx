import React from 'react'
import Image from "next/image"
import './ProjectCards.css'



function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const IconOverlay = ({iconName}) => {
    const name = capitalizeFirstLetter(iconName)  
    return (
        <div className='absolute top-0 left-0 w-full h-full flex text-wrap justify-center items-center text-center opacity-0 hover:opacity-100 transition-opacity duration-500'>
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-80 rounded-[2vmin] md:border-2 border border-white'/>
            <p className='z-10 lg:text-lg md:text-base text-sm text-stroke'>{name}</p>
        </div> 
    )
}

const imageLoader = ({ src }) => {
    return `https://fredrikjogell.com/${src}`
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
                        className='pointer-events-none md:p-2 p-1'
                        fill={true}
                       loading="lazy"
                        style={{objectFit: "contain"}}
                />
                <IconOverlay iconName={icon2}/>
            </div> : <div/>}

            <div className="big-card card">
                <Image 
                    src={`/projects/${projectName}/imgLarge/img4.jpg`}
                    loader={imageLoader}
                    fill={true}
                    loading="lazy"
                    className='select-none pointer-events-none'
                    alt={`${projectName}_img4`}
                    style={{objectFit: "cover"}}
                />
            </div>

            {iconLen >= 4 ? <div className="small-card card relative">
                <Image 
                        src={`/icons/${icon4}.svg`}
                        alt={`${projectName} icon 1`}
                        className='pointer-events-none md:p-2 p-1'
                        fill={true}
                        loading="lazy"
                        style={{objectFit: "contain"}}
                />
                <IconOverlay iconName={icon4}/>
            </div> : <div/>}
            
            <div className="big-card card">
                <Image 
                    src={`/projects/${projectName}/imgLarge/img3.jpg`}
                    loader={imageLoader}
                    fill={true}
                    loading="lazy"
                    className='select-none pointer-events-none'
                    alt={`${projectName}_img3`}
                    style={{objectFit: "cover"}}
                />
            </div>

            {iconLen >= 1 ? <div className="small-card card relative">
                <Image 
                        src={`/icons/${icon1}.svg`}
                        alt={`${projectName} icon 1`}
                        className='pointer-events-none md:p-2 p-1'
                        fill={true}
                    loading="lazy"
                        style={{objectFit: "contain"}}
                />
                <IconOverlay iconName={icon1}/>
            </div> : <div/>}

            <div className="big-card card">
                <Image 
                    src={`/projects/${projectName}/imgLarge/img2.jpg`}
                    loader={imageLoader}
                    fill={true}
                    loading="lazy"
                    className='select-none pointer-events-none'
                    alt={`${projectName}_img2`}
                    style={{objectFit: "cover"}}
                />
            </div>

            
            {iconLen >= 3 ? 
            <div className="small-card card relative">
                <Image 
                        src={`/icons/${icon3}.svg`}
                        alt={`${projectName} icon 3`}
                        className='pointer-events-none md:p-2 p-1'
                        fill={true}
                        loading="lazy"
                        style={{objectFit: "contain"}}
                />
                <IconOverlay iconName={icon3}/> 
            </div> : <div/>}

            <div className="big-card card">
                <Image 
                    src={`/projects/${projectName}/imgLarge/img1.jpg`}
                    loader={imageLoader}
                    fill={true}
                    loading="lazy"
                    className='select-none pointer-events-none'
                    alt={`${projectName}_img1`}
                    style={{objectFit: "cover"}}
                />
            </div>

        </div>
      )
    }

export default React.memo(ProjectCards);
