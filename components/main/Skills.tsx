import React from "react";
import {
  Skill_data,
} from "../Contents/SkillsContent";
import SkillDataProvider from "../Skill/SkillDataProviders";

const Skills = () => {
  return (
    <section id="skills" className="w-full h-full mt-40 px-10 pt-20">
      <div className="w-full h-full flex flex-col items-center justify-center gap-20">
        <h1 className="text-3xl">Skills</h1>
        <div className="w-full h-[500px]">
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-20 items-center">
            {Skill_data.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;