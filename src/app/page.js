
"use client"
import HeroSection from "./sections/HeroSection";
import NavBar from "./components/NavBar";
import { useEffect, useRef, useState, lazy } from "react";
import StarsBackground from "./components/SpaceBackground/StarsBackground";


// import AboutSection from "./sections/AboutSection";
// import ProjectSection from "./sections/ProjectSection";
// import ContactSection from "./sections/ContactSection";

const AboutSection = lazy(() => import("./sections/AboutSection"))
const ProjectSection = lazy(() => import("./sections/ProjectSection"))
const ContactSection = lazy(() => import("./sections/ContactSection"))


export default function Home() {  

  // Initialize the smooth scroll component from LocomotiveScroll. Has to be done on client render and not server render, hence the useEffect
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
                easing: (t) => bezier(.59,.15,.35,.77),
            },
        });
      }
    )()
  }, [])

  /*
  --- > NavBar stuff to get the relative positions of the sections on the page to scale the NavBar elements. < ---
  */
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const [sectionRanges, setSectionRanges] = useState({hero: 0, about: 25,  project: 50, contact: 75}); //Default values are here because the NavBar wouldn't re-render properly on size change without them ¯\_(ツ)_/¯

  useEffect(() => {
    const calculatePositions = () => {
      if (heroRef.current && aboutRef.current && projectRef.current && contactRef.current) {
        const mainContainer = document.querySelector('main[name="home"]');
        const fullHeight = mainContainer.scrollHeight;
  
        setSectionRanges({
          // Get the position of the {ref} relative to the viewport, then add the scrollY value to get position relative to the top of the document.
          // Then divide by the full height of the document to turn the value into a percentage which will be used as a "divider" in the navbar later.
          hero: (heroRef.current.getBoundingClientRect().top + window.scrollY) / fullHeight, 
          about: (aboutRef.current.getBoundingClientRect().top + window.scrollY) / fullHeight,
          project: (projectRef.current.getBoundingClientRect().top + window.scrollY) / fullHeight,
          contact: (contactRef.current.getBoundingClientRect().top + window.scrollY) / fullHeight,
        });
      }
    };

    calculatePositions();
    window.addEventListener('resize', calculatePositions);

    return () => {
      window.removeEventListener('resize', calculatePositions);
    };
  },[]);

  // NavBar stuff ends here.
  
  const [backgroundEnabled, setBackgroundEnabled] = useState(false)

  useEffect(() => {
    if (backgroundEnabled) {
      // Background is already enabled. No need to run the check.
      return
    }
    try {
      const mobileRegex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const firefoxRegex = /FireFox/i;
  
      const isMobile = mobileRegex.test(navigator.userAgent);
      const isFirefox = firefoxRegex.test(navigator.userAgent);
      
      if (!isMobile) {
        // Device is not mobile, so canvas renders without problems.
        setBackgroundEnabled(true)
        return
      }
      if (!isFirefox) {
        // Device is mobile, but is not using firefox so the canvas renders without problems.
        setBackgroundEnabled(true)
      }
      // Device is mobile and is using firefox where the canvas seems to be behaving buggy, therefor it is not enabled.
    } catch  (e) {
      console.log(e)
    }
    
  },[setBackgroundEnabled, backgroundEnabled])


  return (
    <main name="home" className="flex min-h-screen flex-col bg-[#121212] overflow-hidden">

        { backgroundEnabled ? <StarsBackground /> : <div /> }
        <NavBar ranges={sectionRanges} />

        <div className="container mx-auto  mt-2 lg:mt-24 lg:pt-12 pt-2 px-3 md:px-10">
          <div ref={heroRef}><HeroSection /></div>
          <div ref={aboutRef}><AboutSection /></div>
          <div ref={projectRef}><ProjectSection /></div>
          <div ref={contactRef}><ContactSection /></div>
        </div>
    </main>
  );
}
