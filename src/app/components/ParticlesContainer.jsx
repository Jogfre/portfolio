"use client"
import React, { useCallback } from 'react'
import { Particles } from '@tsparticles/react'
import { loadFull } from 'tsparticles';

const ParticlesContainer = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async () => {}, [])

    return (
        <Particles id='tsparticles' init={particlesInit} loaded={particlesLoaded}
            className="w-full, h-full. absolute, translate-z-0" 
            options={{
                fullscreen: {enable: false},
                background: {
                    color: {
                        value: ''
                    }
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {enable: false},
                        mode: 'push',
                    },
                    onHover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    resize: true,
                },
                mode: {
                    push: {
                        quantity: 90
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                },
                particles: {
                    color: {
                        value: '#e68e2e'
                    },
                    links: {
                        color: '#f5d393',
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce'
                        },
                        random: false,
                        speed: 1,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800
                        },
                        value: 80
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: 'circle'
                    },
                    size: {
                        value: {min: 1, max: 5}
                    }
                },
                detectRetina: true
            }}
        
        />
    )
}

export default ParticlesContainer
