import React from "react";
import { Socials } from "../Data/Contact";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils";
import { CgMail } from "react-icons/cg";
const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-full py-60 px-10 flex flex-col gap-10 items-center justify-center "
    >
      <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
        Contact
      </h1>
      <motion.div
        whileInView={"visible"}
        initial={"hidden"}
        viewport={{ once: true }}
        variants={slideInFromLeft(0.5)}
        className="card bg-transparent border border-blue-900 shadow-md shadow-blue-900  w-96  z-10"
      >
        <motion.figure
          whileInView={"visible"}
          initial={"hidden"}
          viewport={{ once: true }}
          variants={slideInFromLeft(1)}
          className="px-10 pt-10"
        >
          <img src="/Me.png" alt="Shoes" className="rounded-xl" />
        </motion.figure>
        <div className="card-body items-center text-center gap-5">
          <motion.h2
            whileInView={"visible"}
            initial={"hidden"}
            viewport={{ once: true }}
            variants={slideInFromLeft(1)}
            className="card-title text-white"
          >
            Let&apos;s know each Other
          </motion.h2>
          <motion.p
            whileInView={"visible"}
            initial={"hidden"}
            viewport={{ once: true }}
            variants={slideInFromLeft(1)}
            className="text-white"
          >
            Check My Social Media
          </motion.p>
          <div className="flex flex-row gap-5">
            {Socials.map((social) => (
              <motion.a
                whileInView={"visible"}
                initial={"hidden"}
                viewport={{ once: true }}
                variants={slideInFromRight(1)}
                key={social.id}
                href={social.link}
                target="_blank"
                className="z-10"
              >
                <img src={social.Logo} alt="" className="w-[30px]" />
              </motion.a>
            ))}
          </div>
          <div className="card-actions">
            <motion.a whileInView={"visible"}
                initial={"hidden"}
                viewport={{ once: true }} variants={slideInFromRight(1)} href="mailto:puturivana.d@gmai.com" className="btn btn-primary">
              <p>Mail Me!</p>
              <CgMail size={20} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
