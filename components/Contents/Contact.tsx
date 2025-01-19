import React from "react";
import Header from "../utils/Header";
import Image from "next/image";
import Link from "next/link";
import { Socials } from "@/data/Contact";
import { CgMail } from "react-icons/cg";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-full flex flex-col gap-10 items-center justify-center z-10"
    >
      <Header title="Contact" description="Get in touch with me" />
      <div className="card bg-slate-800/50 hover:bg-slate-700/50 hover:border border-blue-500 transition-all duration-300 ease-in-out w-96 z-10">
        <figure className="px-10 pt-10 z-10">
          <Image
            src="/Me.png"
            alt="contact"
            width={500}
            height={500}
            className="rounded-full transition-all duration-300 ease-in-out shadow-sky-500 scale-100 hover:scale-110 z-50"
          />
        </figure>
        <div className="card-body items-center text-center gap-5">
          <h2 className="card-title text-white">Let&apos;s Connect</h2>
          <p className="text-white text-center">Check My Social Media</p>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center">
          {Socials.map((social) => (
            <Link
              key={social.id}
              href={social.link}
              target="_blank"
              className="z-10 hover:bg-slate-100/10 transition-all duration-300 ease-in-out p-2 rounded-full"
            >
              <Image
                src={social.Logo}
                alt={social.name}
                width={30}
                height={30}
              />
            </Link>
          ))}
        </div>
        <Button
          variant={"outline"}
          className="card-actions mx-10  items-center justify-center my-5 z-10"
        >
          <Link
            href="mailto:puturivana.d@gmail.com"
            className="flex gap-2 items-center justify-center"
          >
            <p>Mail Me!</p>
            <CgMail size={20} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
