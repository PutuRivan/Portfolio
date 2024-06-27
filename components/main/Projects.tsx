import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils";
const Projects = () => {
  return (
    <section id="projects" className="w-full h-full mt-40 mb-10 ">
      <div className="w-full h-full flex flex-col items-center justify-center pt-20">
        <h1 className="text-3xl">Projects</h1>
        <div className="grid grid-cols-2 gap-20 mt-10">
          <motion.div
            whileInView={"visible"}
            initial={"hidden"}
            viewport={{ once: true }}
            variants={slideInFromLeft(0.5)}
            className="w-[500px] h-[300px] rounded-xl flex flex-col"
          >
            <div className="flex  border border-blue-600 h-[250px] rounded-t-xl items-center"></div>
            <div className="flex flex-row bg-neutral h-[50px] rounded-b-xl items-center justify-end px-2">
              <a href="/" className="btn btn-outline btn-primary btn-sm ">
                See More
              </a>
            </div>
          </motion.div>
          <motion.div
            whileInView={"visible"}
            initial={"hidden"}
            viewport={{ once: true }}
            variants={slideInFromRight(0.5)}
            className="w-[500px] h-[300px] rounded-xl flex flex-col"
          >
            <div className="flex  border border-blue-600 h-[250px] rounded-t-xl items-center"></div>
            <div className="flex flex-row bg-neutral h-[50px] rounded-b-xl items-center justify-end px-2">
              <a href="/" className="btn btn-outline btn-primary btn-sm ">
                See More
              </a>
            </div>
          </motion.div>
          <motion.div
            whileInView={"visible"}
            initial={"hidden"}
            viewport={{ once: true }}
            variants={slideInFromLeft(0.5)}
            className="w-[500px] h-[300px] rounded-xl flex flex-col"
          >
            <div className="flex  border border-blue-600 h-[250px] rounded-t-xl items-center"></div>
            <div className="flex flex-row bg-neutral h-[50px] rounded-b-xl items-center justify-end px-2">
              <a href="/" className="btn btn-outline btn-primary btn-sm ">
                See More
              </a>
            </div>
          </motion.div>
          <motion.div
            whileInView={"visible"}
            initial={"hidden"}
            viewport={{ once: true }}
            variants={slideInFromRight(0.5)}
            className="w-[500px] h-[300px] rounded-xl flex flex-col"
          >
            <div className="flex  border border-blue-600 h-[250px] rounded-t-xl items-center"></div>
            <div className="flex flex-row bg-neutral h-[50px] rounded-b-xl items-center justify-end px-2">
              <a href="/" className="btn btn-outline btn-primary btn-sm ">
                See More
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
