import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import HowICanHelp from "@/components/HowICanHelp";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Solutions />
        <Projects />
        <TechStack />
        <WhyWorkWithMe />
        <HowICanHelp />
        <Process />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
