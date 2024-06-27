"use client";

import React from 'react'
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils";
import { SparklesIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className="h-screen w-full pt-32 justify-center items-center flex flex-col "
  >
    <div>
      <motion.div
        variants={slideInFromTop}
        className="flex flex-row gap-2 border border-[#fff] px-8 py-3 rounded-xl opacity-[0.9] "
      >
        <SparklesIcon className="w-5 h-5" />
        <h1 className="text-white">Fullstack Developer</h1>
      </motion.div>
    </div>
    <div className="flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] justify-center items-center"
      >
        <span>
          Providing
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
            {" "}
            the best{" "}
          </span>
          project exprience
        </span>
      </motion.div>
      <motion.p
        variants={slideInFromLeft(0.8)}
        className="text-lg text-gray-400 my-5 max-w-[600px]"
      >
        I&apos;m a Full Stack Software Engineer with experience in Website,
        Mobile, and Software development. Check out my projects and skills.
      </motion.p>
      <motion.a
        variants={slideInFromLeft(0.9)}
        href="#projects"
        className="btn btn-outline btn-primary"
      >
        Learn More
      </motion.a>
    </div>
  </motion.div>
  )
}

export default Hero