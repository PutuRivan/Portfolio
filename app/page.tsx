"use client";
import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Projects/>
      <Skills/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  );
}
