'use client'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import React, { useRef } from 'react'

const FadeParagraph = ( {inputText} ) => {

    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.95', 'start 0.3']
    })
    const words = inputText.split(" ")
    
    return (
        <p  
            className='max-w-[1280px] flex flex-wrap leading-none relative'
            ref={element}
        >
            {
                words.map( (word, i) => {
                    const start = i /  words.length;
                    const end = start + (1 / words.length);
                    return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
                })
            }
        </p>
    )
}


const Word = ( {children, range, progress} ) => {
    const characters = children.split("");
    
    const amount =  range[1] - range[0]; // Amount of characters in the word
    const step = amount / children.length;
    
    return  (
        <span 
            className='mr-[4px] mt-[5px]'
        >
            {
                characters.map( (character, i) => {
                    const start = range[0] + (step * i); // Fade from the begining of the word but scaled to each character
                    const end = range[0] + (step * (i + 1));
                    return <Character key={i} range={[start, end]} progress={progress}>{character}</Character>
                })
            }
        </span>
    )

}


const Character = ( {children, range, progress} ) => {
    const opacity = useTransform(progress, range, [0.3, 1])
    return (
        <motion.span
            style={{opacity: opacity}}
        >
            {children}
        </motion.span>
    )
}

export default FadeParagraph
