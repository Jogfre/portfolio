import AboutSection from "./Pages/AboutSection";
import ContactSection from "./Pages/ContactSection";
import HeroSection from "./Pages/HeroSection";
import ProjectSection from "./Pages/ProjectSection";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main name="home" className="flex min-h-screen flex-col bg-[#121212] overflow-hidden" >
      <NavBar />
      <div className="container mx-auto  mt-2 md:mt-24 pt-12"> {/* removed px-12 from css here */}
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      </div>
    </main>
  );
}
