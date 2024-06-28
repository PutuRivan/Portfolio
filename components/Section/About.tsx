import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop, slideInFromTops } from "@/utils";
const About = () => {
  return (
    <section
      id="about"
      className="w-full h-full pt-20 mt-60 mb-10 flex flex-col gap-10"
    >
      <div className="w-full h-full items-center justify-center pt-20">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">About Me</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-10 place-items-center">
          <motion.div 
          whileInView={"visible"}
          initial={"hidden"}
          viewport={{ once: true }}
          variants={slideInFromLeft(0.5)} className="p-5 my-20 max-w-[500px] h-auto rounded-xl flex flex-col gap-3 items-center order-2 lg:order-1 bg-gray-800 z-20">
            <motion.h1
              whileInView={"visible"}
              initial={"hidden"}
              viewport={{ once: true }}
              variants={slideInFromLeft(1)}
              className="text-white text-center text-2xl"
            >
              Hello, i&apos;am Putu Rivan
            </motion.h1>
            <motion.p
              whileInView={"visible"}
              initial={"hidden"}
              viewport={{ once: true }}
              variants={slideInFromLeft(1)}
              className="text-white text-justify text-sm px-3"
            >
              a student at UPN Veteran Jakarta. I have a strong interest in
              technological advancements and am always enthusiastic about
              keeping up with the latest innovations in this field.
              Additionally, I am very passionate about sports, as I believe that
              maintaining a balance between body and mind is key to living a
              healthy and productive life.
            </motion.p>
          </motion.div>
          <motion.div
            whileInView={"visible"}
            initial={"hidden"}
            viewport={{ once: true }}
            variants={slideInFromRight(0.8)}
            className="z-10 order-1"
          >
            <img src="/Me.png" alt="Image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
