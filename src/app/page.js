
"use client"
import AboutSection from "./Pages/AboutSection";
import ContactSection from "./Pages/ContactSection";
import HeroSection from "./Pages/HeroSection";
import ProjectSection from "./Pages/ProjectSection";
import NavBar from "./components/NavBar";
import { useEffect, useRef, useState } from "react";




export default function Home() {  

  // Initialize the smooth scroll component from LocomotiveScroll. Has to be done on client render and not server render
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll({
            lenisOptions: {
                wrapper: window,
                content: document.documentElement,
                lerp: 0.075,
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                smoothTouch: false,
                wheelMultiplier: 0.8,
                touchMultiplier: 2,
                normalizeWheel: true,
                easing: (t) => bezier(.59,.15,.35,.77), // https://www.desmos.com/calculator/brs54l4xou
            },
        });
      }
    )()
  }, [])

  return (
    <main name="home" className="flex min-h-screen flex-col bg-[#121212] overflow-hidden">
      <NavBar />
        <div className="container mx-auto  mt-2 lg:mt-24 lg:pt-12 pt-2 px-3 md:px-10">
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          <ContactSection />
        </div>
    </main>
  );
  
}
