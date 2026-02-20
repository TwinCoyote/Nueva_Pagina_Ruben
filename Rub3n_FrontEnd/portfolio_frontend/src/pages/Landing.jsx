import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Experiences from "../sections/Experiences";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import { Particles } from "../components/Particles";

export default function Landing() {
  return (
    <main className="w-full relative">
      <Particles
        className="fixed inset-0 z-0"
        quantity={200}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <Hero />
      <div className="max-w-7xl mx-auto relative z-10 bg-black">
        <About />
        <Projects />
        <Experiences />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}
