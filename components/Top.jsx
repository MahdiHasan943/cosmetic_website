'use client'
import React, { useEffect, useState } from "react";
import { FaArrowUp,FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn,slideIn,textVariant2 ,staggerContainer} from "@/utils/motion";

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
             <motion.div variants={staggerContainer}
             initial="hidden"
             whileInView="show"
             viewport={{ once: false, amount: 0.25 }}  className="Top overflow-hidden fixed  top-[90%]    transition  delay-500 z-50 right-[35px] " onClick={goToBtn}>
            <motion.div variants={slideIn('right', 'tween', 0.2, 1)}  className=" bg-gradient-to-t from-cyan-500 to-blue-500   top-btn  py-4 px-4 rounded-full ">
            <FaArrowUp className="   text-white" />

               </motion.div>
          </motion.div>
         
        )}
   </>
  );
};


  

export default Top;