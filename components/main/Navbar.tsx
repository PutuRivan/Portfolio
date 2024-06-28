import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-[70px] fixed top-0 z-50 backdrop-blur-md shadow-lg shadow-[#1f243c]">
      <div className="flex justify-center items-center w-full h-full">
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
          <Link href={"#contact"} className="Link-navbar">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
