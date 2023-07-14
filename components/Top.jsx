'use client'
import React, { useEffect, useState } from "react";
import { FaArrowUp,FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";

const Top = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
  <>
      {isVisible && (
      //  top-[96%] 
           <motion.div variants={navVariants}  inherit="hidden" whileInView="show" className="Top fixed  top-[90%]   z-50 right-[35px] bg-gradient-to-t from-cyan-500 to-blue-500    top-btn  py-4 px-4 rounded-full " onClick={goToBtn}>
          <FaArrowUp  className="hover:rotate-[180deg]  animate-bounce transition delay-350 text-white" />
        </motion.div>
       
      )}
   </>
  );
};


  

export default Top;