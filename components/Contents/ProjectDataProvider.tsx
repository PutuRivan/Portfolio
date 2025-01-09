"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PinContainer } from "../ui/3d-pin";
interface props {
  id: number;
  name: string;
  link: string;
  img: string;
  description: string;
}

const ProjectDataProvider = ({ id, name, link, img, description }: props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: id / 3,
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
        <div className="w-full flex items-center justify-center"
            key={id}>
              <PinContainer
                title={link}
                href={link}
                className=""
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-white">
                    {name}
                  </h3>
                  <div className="flex flex-1 w-full rounded-lg " >
                    <img src={img} alt="" />
                  </div>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-white ">
                      {description}
                    </span>
                  </div>
                </div>
              </PinContainer>
            </div>
    </motion.div>
  );
};

export default ProjectDataProvider;
