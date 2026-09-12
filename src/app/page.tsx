import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Skills from "@/components/Skills";
import Companies from "@/components/Companies";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Expertise />
        <Skills />
        <Companies />
        <Experience />
        <Education />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
