import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar/>
      <div className="container mx-auto mt-24 py-12"> {/* removed px-12 from css here */}
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
