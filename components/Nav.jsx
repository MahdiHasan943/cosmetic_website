"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
function Nav() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
 
  const [color,setColor] =useState(false)

  
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  const menu = (
    <React.Fragment>
      <li className=" group  transition-all duration-300 ease-in-out nav__item item">
        <Link 
          href="/"
          onClick={() => {
            navToggle();
            setColor(true);
          }}
          className={`${
            color === true
              ? "text-cyan-500  group  transition-all duration-300 ease-in-out      "
              : "text-white md:text-[#313131]"
          } nav__link`}
        >
          Home
          <div className="bg-left-bottom bg-gradient-to-t from-cyan-500 to-blue-500    pb-3  md:pb-2      bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] duration-500 ease-out"></div>

        </Link>
      </li>

      <li className="group  transition-all duration-300 ease-in-out  item nav__item">
        <Link href={'/service'}
        
          onClick={() => {
            navToggle();
            setColor("p");
          }}
          className={`${
            color === "p"
            ? "text-cyan-500  group  transition-all duration-300 ease-in-out      "
            : "text-white md:text-[#313131]"
          } nav__link`}
        >
          Our Services
          <div className="bg-left-bottom bg-gradient-to-t from-cyan-500 to-blue-500    pb-3  md:pb-2      bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] duration-500 ease-out"></div>

        </Link>
      </li>
      <li className="group  transition-all duration-300 ease-in-out  nav__item">
        <Link
          href={"/#About"}
          onClick={() => {
            navToggle();
            setColor("c");
          }}
          className={`${
            color === "c"
            ? "text-cyan-500  group  transition-all duration-300 ease-in-out      "
            : "text-white md:text-[#313131]"
          } nav__link`}
        >
          About Us
          <div className="bg-left-bottom bg-gradient-to-t from-cyan-500 to-blue-500    pb-3  md:pb-2      bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] duration-500 ease-out"></div>

        </Link>
      </li>
      <li className="group  transition-all duration-300 ease-in-out nav__item item">
        <Link
          href={"/#FAQs"}
          onClick={() => {
            navToggle();
            setColor("m");
          }}
          className={`${
            color === "m"
            ? "text-cyan-500  group  transition-all duration-300 ease-in-out      "
            : "text-white md:text-[#313131]"
          } nav__link`}
        >
          FAQs
          <div className="bg-left-bottom bg-gradient-to-t from-cyan-500 to-blue-500    pb-3  md:pb-2      bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] duration-500 ease-out"></div>

        </Link>
      </li>
      <li className="group  transition-all duration-300 ease-in-out nav__item item">
        <a
          href="#Contact"
          onClick={() => {
            navToggle();
            setColor("people");
          }}
          className={`${
            color === "people"
            ? "text-cyan-500  group  transition-all duration-300 ease-in-out      "
            : "text-white md:text-[#313131]"
          } nav__link`}
        >
          Contact Us
          <div className="bg-left-bottom bg-gradient-to-t from-cyan-500 to-blue-500    pb-3  md:pb-2      bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] duration-500 ease-out"></div>

        </a>
      </li>
      <div className="px-2 flex gap-4 items-center justify-between">
          <button className="hidden lg:block font-lato  bg-[#313131] rounded-lg text-white px-3 py-2 text-[13px]">
          Get in Contact
          </button>
          <a href="#" className="hidden nm:block">
          <span className="font-lato">00 44 (0)  7539 466 779</span>
          </a>

        </div>
    </React.Fragment>
  );

  return (
    <motion.nav variants={navVariants} initial="hidden" whileInView='show'
    
    className={
      icon === "nav__toggler" ? `  sm:px-16 px-6 py-5 sm:py-10 shadow-none w-[100vw] z-[99999]  md:z-[999] nav` : ` sm:px-16 px-6 py-5 sm:py-10 shadow-none w-[100vw] z-[999999999999!important] md:z-[999] nav`
    }
      >
      <div className={`flex w-full items-center  md:justify-end`}>
        <div className="flex overflow-hidden  items-center">
          <a
             
            className=" shadow-none nav__brand PB"
          >
          </a>
        </div>
        <div className="">       


        </div>

        <ul className={` ${active}`}>
        <Link
            href={'/'}
            onClick={()=> navToggle()}
            className="menu_img shadow-none nav__brand PB"
          >
           <img className="w-[83px] h-[102px]" src='/images/logo.webp' alt="logo" />
          </Link>
          {menu}

         
        </ul>
        
     
      </div>

      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </motion.nav>
  );
}

export default Nav;
