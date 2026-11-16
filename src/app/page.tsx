import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleCursor from "@/components/ParticleCursor";
import CustomCursor from "@/components/CustomCursor";
import AmbientBackground from "@/components/AmbientBackground";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      {/* 3D Particle Cursor Trail Canvas Across Viewport */}
      <ParticleCursor />

      {/* Custom Magnetic Cursor & Spotlight Glow (Desktop) */}
      <CustomCursor />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Ambient Drifting Pastel Blobs & Micro-Particles */}
      <AmbientBackground />

      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full pt-20">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>

      {/* Clean Off-White Footer */}
      <Footer />
    </>
  );
}
