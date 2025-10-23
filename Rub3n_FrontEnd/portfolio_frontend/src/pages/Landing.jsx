import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Experiences from "../sections/Experiences";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function Landing() {
  return (
    <div className="container mx-auto max-w-7xl">
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonials />
      <Contact />
    </div>
  );
}
