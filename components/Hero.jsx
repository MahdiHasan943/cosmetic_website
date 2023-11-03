"use client"
import React from "react";
import { motion } from "framer-motion";
import { textVariant2 } from "@/utils/motion";
const Hero = () => {
  return (
    <div className="relative pb-10 sm:px-16  px-4">
  <motion.div id="#hero" variants={textVariant2} initial="hidden" whileInView="show" className="lg:flex overflow-hidden justify-between  gap-10 items-center">
      <div className="py-10">
     
          <div className="h-[500px] md:h-0">
                      <img className="absolute top-[-90px] z-[9999] md:z-[9999999999!important] left-0 lg:left-[70px]" src="/images/groupLogo1.png" alt="" />
             </div>
        </div>
        


          <div className="">
              <div className="md:flex relative gap-5">
                  <img className="absolute star" src="/images/start.webp" alt="" />
                  <img className="mx-auto mb-[50px] mt-auto  " src="/images/newoneH1.png" alt="women" />
                  <img className="mx-auto my-5 md:my-auto w-[200px!important]" src="/images/newtowH2.png" alt="women" />
                  <img className="mx-auto w-[235px] " src="/images/newThreeH.png" alt="beauty girl" />

              </div>
      </div>
    </motion.div>

      <div className="pt-6  mb-[50px] mt-[200px] w-full rounded-md border  border-[#313131] px-4 ">

             <p className="font-lato text-[24px] text-[]">IWO Cosmetic Products Safety Solutions Ltd. (Iwo CPSS Ltd.) is a consultancy business with specialism mainly in  the fields of regulation and safety for cosmetics and chemical consumer products.</p>
        <div className="text-center py-6">
        <button className="bg-[#313131] rounded-full py-3 px-8 text-white">Get in touch</button>
</div>        
      </div>
    </div>


  
  );
};

export default Hero;
