
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

  const wholeRef = useRef(null)
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const [sectionRanges, setSectionRanges] = useState({});

  useEffect(() => {
    const calculatePositions = () => {
      if (heroRef.current && aboutRef.current && projectRef.current && contactRef.current) {
        const mainContainer = document.querySelector('main[name="home"]');
        const mainRect = mainContainer.getBoundingClientRect();
        const fullHeight = mainContainer.scrollHeight;

        setSectionRanges({
          hero: (heroRef.current.getBoundingClientRect().top) / fullHeight,
          about: (aboutRef.current.getBoundingClientRect().top) / fullHeight,
          project: (projectRef.current.getBoundingClientRect().top) / fullHeight,
          contact: (contactRef.current.getBoundingClientRect().top) / fullHeight,
        });
      }
    };

    calculatePositions();
    window.addEventListener('resize', calculatePositions());

    return () => {
      window.removeEventListener('resize', calculatePositions());
    };
  }, []);

  return (
    <main ref={wholeRef} name="home" className="flex min-h-screen flex-col bg-[#121212] overflow-hidden">
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
