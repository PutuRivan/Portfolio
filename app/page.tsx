"use client";
import About from "@/components/Section/About";
import Contact from "@/components/Section/Contact";
import Footer from "@/components/Section/Footer";
import Hero from "@/components/Section/Hero";
import Projects from "@/components/Section/Projects";
import Skills from "@/components/Section/Skills";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      {/* <Footer/> */}
    </div>
  );
}
