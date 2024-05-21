
"use client"
import AboutSection from "./Pages/AboutSection";
import ContactSection from "./Pages/ContactSection";
import HeroSection from "./Pages/HeroSection";
import ProjectSection from "./Pages/ProjectSection";
import NavBar from "./components/NavBar";
import { useEffect, useRef, useState } from "react";



export default function Home() {  

  const [heroScale, setHeroScale] = useState(0)
  const [aboutScale, setAboutScale] = useState(0)
  const [projectScale, setProjectScale] = useState(0)
  const [contactScale, setContactScale] = useState(0)

  const [totalScale, setTotalScale] = useState(0)


  useEffect(() => {
    const sum = heroScale + aboutScale + projectScale + contactScale
    setTotalScale(sum);
  }, [heroScale, aboutScale, projectScale, contactScale])


  // Initialize the smooth scroll component from LocomotiveScroll. Has to be done on client render and not server render
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll({
            lenisOptions: {
                wrapper: window,
                content: document.documentElement,
                lerp: 0.1,
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                smoothTouch: false,
                wheelMultiplier: 1,
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
      <NavBar progressValue={totalScale}/>
        <div className="container mx-auto  mt-2 lg:mt-24 pt-12 px-3 md:px-10">
          <HeroSection scaleHook={setHeroScale}/>
          <AboutSection scaleHook={setAboutScale}/>
          <ProjectSection scaleHook={setProjectScale}/>
          <ContactSection scaleHook={setContactScale}/>
        </div>
    </main>
  );
  
}
