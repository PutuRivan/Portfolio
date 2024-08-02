"use client";
import About from "@/components/Section/About";
import Contact from "@/components/Section/Contact";
import Footer from "@/components/Section/Footer";
import Hero from "@/components/Section/Hero";
import Projects from "@/components/Section/Projects";
import Skills from "@/components/Section/Skills";
import { useEffect, useState } from "react";
export default function Home() {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
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
