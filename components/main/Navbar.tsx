import Link from "next/link";
import React from "react";
import { Socials } from "../Contents/SkillsContent";

const Navbar = () => {
  return (
    <nav className="w-full h-[70px] fixed top-0 shadow-lg z-50 backdrop-blur-md">
      <div className="flex flex-row justify-between items-center h-full px-5">
        <div className="flex">
          <img src="/Logo-bg.png" alt="hnojlnh" className="w-[90px]" />
        </div>
        <div className="flex gap-10 border border-[gray] px-4 py-2 rounded-3xl hover:border-white">
          <Link href={"/"} className="Link-navbar">
            Home
          </Link>
          <Link href={"#about"} className="Link-navbar">
            About
          </Link>
          <Link href={"#projects"} className="Link-navbar">
            Project
          </Link>
          <Link href={"#skills"} className="Link-navbar">
            Skills
          </Link>
          {/* <Link href={'#contact'}>Contact</Link> */}
        </div>
        <div className="flex gap-4">
          {Socials.map((social, index) => (
            <a href={social.link} key={index} target="_blank">
              <img src={social.Logo} alt="" className="w-[30px]" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
