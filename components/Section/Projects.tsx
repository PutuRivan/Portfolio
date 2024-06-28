import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils";
import { Project } from "../Data/Project";
import ProjectDataProvider from "../Contents/ProjectDataProvider";
const Projects = () => {
  return (
    <section id="projects" className="w-full h-full mt-40 mb-10">
      <div className="w-full h-full flex flex-col items-center justify-center pt-20">
        <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
          Projects
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-10 place-items-center">
          {Project.map((project) => (
            <ProjectDataProvider
              id={project.id}
              name={project.name}
              link={project.link}
              img={project.img}
              key={project.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
