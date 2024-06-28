"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils";
import { SparklesIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="h-screen w-full pt-20 justify-center items-center flex flex-col"
    >
      <div>
        <motion.div
          variants={slideInFromTop}
          className="flex flex-row gap-3 border border-[#fff] px-6 py-3 rounded-xl opacity-[0.9] "
        >
          <SparklesIcon className="w-6 h-6 text-blue-500 "/>
          <h1 className="text-white">Fullstack Developer</h1>
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-6 mt-6 text-3xl lg:text-6xl font-bold text-white max-w-[600px] justify-center items-center">
          <div className="flex flex-col">
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex flex-row gap-4 text-3xl lg:text-6xl  justify-center"
            >
              <h1 className="">Exploring</h1>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                Technology,
              </span>
            </motion.div>
            <motion.div
              variants={slideInFromRight(0.5)}
              className="flex flex-row gap-4 text-3xl lg:text-6xl justify-center"
            >
              <h1>Embracing</h1>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                Innovation,
              </span>
            </motion.div>
          </div>
        </div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] text-center"
        >
          I&apos;m a dedicated student with a passion for technological
          advancements and fitness. Discover my journey and projects
        </motion.p>
        <motion.a
          variants={slideInFromLeft(0.9)}
          href="#projects"
          className="btn btn-outline btn-primary z-10"
        >
          Learn More
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Hero;
