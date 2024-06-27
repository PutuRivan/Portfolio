import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils";
const About = () => {
  return (
    <section
      id="about"
      className="w-full h-full mt-40 mb-10 flex flex-col gap-10"
    >
      <div className="w-full h-full items-center justify-center pt-20">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl">About Me</h1>
        </div>
        <div className="grid grid-cols-2 px-10 w-full place-items-center">
          <div className="flex">
            <div className="p-5 w-[500px] h-[300px]  rounded-xl">
              <motion.h1
                whileInView={"visible"}
                initial={"hidden"}
                viewport={{ once: true }}
                variants={slideInFromLeft(0.5)}
                className="text-white text-center text-2xl"
              >
                Hello, i'am Putu Rivan
              </motion.h1>
              <motion.p whileInView={"visible"}
                initial={"hidden"}
                viewport={{ once: true }}
                variants={slideInFromLeft(0.8)} className="text-white text-justify ">
                a student Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Est, molestias. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Adipisci natus hic earum perspiciatis
                molestiae sint? At quod fugit sunt debitis. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Consequatur laboriosam
                pariatur maxime ab? Nulla sequi tempora quaerat dolore neque,
                asperiores eligendi excepturi. Fuga sit deserunt quis
                perspiciatis accusantium quo libero! Lorem ipsum dolor sit amet
                consectetur
              </motion.p>
            </div>
          </div>
          <motion.div
            whileInView={"visible"}
            initial={"hidden"}
            viewport={{ once: true }}
            variants={slideInFromRight(0.5)}
            className=""
          >
           <img src="/Me.png" alt="Image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
