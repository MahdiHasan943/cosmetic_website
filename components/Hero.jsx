"use client"
import React from "react";
import { motion } from "framer-motion";
import { textVariant2 } from "@/utils/motion";
const Hero = () => {
  return (
    <div className="sm:px-16  px-4">
  <motion.div id="#hero" variants={textVariant2} initial="hidden" whileInView="show" className="lg:flex overflow-hidden justify-between 2xl:justify-around gap-10 items-center">
      <div className="py-10">
     
          <div className="">
            
             </div>
      </div>
          <div className="">
              <div className="md:flex relative gap-5">
                  <img className="absolute star" src="/images/start.webp" alt="" />
                  <img className="mx-auto mt-auto w-[179px] h-[328px]" src="/images/heroOne.png" alt="women" />
                  <img className="mx-auto my-5 md:my-auto w-[179px] h-[328px]" src="/images/heroTwo.png" alt="women" />
                  <img className="mx-auto w-[258px] h-[504px]" src="/images/heroThree.png" alt="beauty girl" />

              </div>
      </div>
    </motion.div>

    </div>


  
  );
};

export default Hero;
