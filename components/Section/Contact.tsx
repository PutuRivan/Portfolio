import React from "react";
import { Socials } from "../Data/ContactContent";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils";
const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-full py-60 px-10 flex flex-col gap-10 items-center justify-center"
    >
      <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
        Contact
      </h1>
      <motion.div
        variants={slideInFromLeft(0.5)}
        whileInView={"visible"}
        initial={"hidden"}
        viewport={{ once: true }}
        className="flex flex-col gap-5 bg-gray-800 p-5 rounded-xl w-[400px]"
      >
        <div className="flex flex-col">
          <h3 className="text-lg">Let&apos;s now each other</h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <a href="" className="btn btn-outline btn-primary z-10">
            Get in touch
          </a>
          <p>Check Out My Social Media</p>
          <div className="flex flex-row gap-5 items-center justify-center">
            {Socials.map((social) => (
              <motion.a
                whileInView={"visible"}
                initial={"hidden"}
                viewport={{ once: true }}
                variants={slideInFromRight(0.8)}
                key={social.id}
                href={social.link}
                target="_blank"
                className="z-10"
              >
                <img src={social.Logo} alt="" className="w-[30px]" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
