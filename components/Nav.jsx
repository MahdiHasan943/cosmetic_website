"use client"
import React, { useState, useEffect } from "react";

import Link from "next/link";

function Nav() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
 

  
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <nav className=" shadow-none w-[100vw] bg-[black] py-8 px-6 lg:px-12 nav">
      <div className="flex w-full shadow-none bg-[black]  justify-between md:justify-around ">
        <div className="flex overflow-hidden  items-center">
          <a
             href={"/"}
            className="lg:ml-[80px]  text-blue-500 shadow-none nav__brand PB"
          >
            PASSION BLEND BAR
          </a>
        </div>

        <ul className={`2xl:ml-[200px] ${active}`}>
        <a
             href={"/"}
            className="border border-white py-10 px-8 rounded-xl MAINLOGO text-blue-500 shadow-none nav__brand PB"
          >
            PASSION BLEND BAR
          </a>

         
        </ul>
        
      </div>

      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Nav;
