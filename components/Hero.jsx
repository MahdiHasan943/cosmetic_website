"use client"
import React from "react";
import { motion } from "framer-motion";
import { textVariant2 } from "@/utils/motion";
const Hero = () => {
  return (
    <div className="sm:px-16  px-4">
  <motion.div id="#hero" variants={textVariant2} initial="hidden" whileInView="show" className="lg:flex overflow-hidden justify-between 2xl:justify-around gap-10 items-center">
      <div className="py-10">
        <motion.h1 variants={textVariant2} initial="hidden" whileInView="show" className="heroTitle font-volkhov">
          IWO <br className="hidden sm:block" /> Cosmetic <br className="hidden sm:block" />  Product <br className="hidden sm:block" /> Safety <br className="hidden sm:block" />Ltd
        </motion.h1>
          <motion.p variants={textVariant2} initial="hidden" whileInView="show" className="font-lato pt-3 herosubT">

          is a consultancy business with specialism mainly{" "}
          <br className="hidden sm:block" /> in the fields of regulation and safety for cosmetics <br className="hidden sm:block" />
          and chemical consumer
          products regulation and  <br className="hidden sm:block" /> safety.
              </motion.p>
              <div className="py-6  relative">
                  <button className="absolute font-lato bg-[#313131] text-white rounded-full py-3 px-8">Get in touch</button>
                  <div className="ml-10 gm:flex   items-center justify-end gap-4">
                  <img src="/images/icon-park.webp" alt="" />

                      <img src="/images/sizar.webp" alt="sizar" />
                 </div>
              </div>
      </div>
          <div className="">
              <div className="md:flex relative gap-5">
                  <img className="absolute star" src="/images/start.webp" alt="" />
                  <img className="mx-auto mt-auto w-[179px] h-[328px]" src="/images/heroOne.webp" alt="women" />
                  <img className="mx-auto my-5 md:my-auto w-[179px] h-[328px]" src="/images/heroTwo.webp" alt="women" />
                  <img className="mx-auto w-[258px] h-[504px]" src="/images/heroThree.webp" alt="beauty girl" />

              </div>
      </div>
    </motion.div>

    </div>


  
  );
};

export default Hero;
