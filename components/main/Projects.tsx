import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils";
const Projects = () => {
  return (
    <section id="projects" className="w-full h-full mt-40 mb-10">
      <div className="w-full h-full flex flex-col items-center justify-center pt-20">
        <h1 className="text-3xl">Projects</h1>
        <div className="grid grid-cols-2 gap-20 mt-10">
          <motion.div
            whileInView={"visible"}
            initial={"hidden"}
            viewport={{ once: true }}
            variants={slideInFromLeft(0.5)}
            className="w-[500px] h-[300px] rounded-xl flex flex-col z-10"
          >
              <img src="anime-list-1.png" alt="Anime List" className="w-full h-full rounded-t-xl" />
            <div className="flex flex-row bg-neutral h-[50px] rounded-b-xl items-center justify-end px-2">
              <a href="/" className="btn btn-outline btn-primary btn-sm z-10">
                See More
              </a>
            </div>
          </motion.div>
          <motion.div
            whileInView={"visible"}
            initial={"hidden"}
            viewport={{ once: true }}
            variants={slideInFromRight(0.5)}
            className="w-[500px] h-[300px] rounded-xl flex flex-col z-10"
          >
            <img src="manga-list-1.png" alt="Anime List" className="w-full h-full rounded-t-xl" />
            <div className="flex flex-row bg-neutral h-[50px] rounded-b-xl items-center justify-end px-2">
              <a href="/" className="btn btn-outline btn-primary btn-sm z-10">
                See More
              </a>
            </div>
          </motion.div>
          <motion.div
            whileInView={"visible"}
            initial={"hidden"}
            viewport={{ once: true }}
            variants={slideInFromLeft(0.5)}
            className="w-[500px] h-[300px] rounded-xl flex flex-col z-10"
          >
            <img src="anime-list-1.png" alt="Anime List" className="w-full h-full rounded-t-xl" />
            <div className="flex flex-row bg-neutral h-[50px] rounded-b-xl items-center justify-end px-2">
              <a href="/" className="btn btn-outline btn-primary btn-sm z-10 ">
                See More
              </a>
            </div>
          </motion.div>
          <motion.div
            whileInView={"visible"}
            initial={"hidden"}
            viewport={{ once: true }}
            variants={slideInFromRight(0.5)}
            className="w-[500px] h-[300px] rounded-xl flex flex-col z-10"
          >
            <img src="anime-list-1.png" alt="Anime List" className="w-full h-full rounded-t-xl" />
            <div className="flex flex-row bg-neutral h-[50px] rounded-b-xl items-center justify-end px-2">
              <a href="/" className="btn btn-outline btn-primary btn-sm z-10 ">
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
