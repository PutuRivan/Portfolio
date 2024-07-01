"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
interface props {
  id: number;
  name: string;
  link: string;
  img: string;
}

const ProjectDataProvider = ({ id, name, link, img }: props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: id / 2,
        duration: 0.5,
      },
    },
  };

  const animationDelay = 0.5;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={id}
      transition={{ delay: id * animationDelay }}
      className="w-[350px] lg:w-[500px] h-[300px] rounded-xl flex flex-col z-10"
      key={id}
    >
      <img src={img} alt={name} className="w-full h-full rounded-t-xl" />
      <div className="flex flex-row bg-neutral h-[80px] rounded-b-xl items-center justify-between px-2 w-full">
        <h1 className="text-white text-xl font-bold ">{name}</h1>
        <a
          href={link}
          target="_blank"
          className="btn btn-outline btn-primary z-10"
        >
          See More
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectDataProvider;
