import AboutSection from "./Pages/AboutSection";
import HeroSection from "./Pages/HeroSection";
import ProjectPage from "./Pages/ProjectPage";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main name="home" className="flex min-h-screen flex-col bg-[#121212] overflow-hidden" >
      <NavBar />
      <div className="container mx-auto  mt-2 md:mt-24 py-12"> {/* removed px-12 from css here */}
      <HeroSection />
      <AboutSection />
      <ProjectPage />
      </div>
    </main>
  );
}
