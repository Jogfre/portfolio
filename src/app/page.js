import AboutSection from "./Pages/AboutSection";
import HeroSection from "./Pages/HeroSection";
import ProjectPage from "./Pages/ProjectPage";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] scroll-smooth" id="home">
      <NavBar />
      <div className="container mx-auto mt-24 py-12"> {/* removed px-12 from css here */}
      <HeroSection />
      <AboutSection />
      <ProjectPage />
      </div>
    </main>
  );
}
