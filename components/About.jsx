'use client'
import React from "react";
import { motion } from "framer-motion";
import { textVariant2 } from "@/utils/motion";

const About = () => {
  return (
    <>
    <div className="" id="About">
      <motion.h2 variants={textVariant2} initial="hidden" whileInView="show" className="font-popping py-10 text-[36px] leading-[60px] text-center font-bold text-[#333333] ">
        About Us
      </motion.h2>
      <div className="mx-auto  lg:grid grid-cols-2 items-center justify-center gap-6">
        <div className="">
          <p className="font-popping text-[#333333] text-[22px] leading-[30px]  ">
            <span className="font-bold">Iwo Cosmetic Products Safety Solutions Ltd.</span> (abbreviated to <span className="font-bold">Iwo CPSS
            Ltd.</span> ) is a consultancy business with specialism mainly in the fields of cosmetics and chemical consumer products regulation and safety.

            </p>
            
            <p className="font-popping text-[#333333] text-[16px] leading-[30px]  py-4">
            A necessary requirement for marketing a cosmetic product in the 
UK or EU, is for a Safety Assessor / Toxicologist or other qualified person to produce a Cosmetic Product Safety Report (CPSR), Part A (Safety Information) and Part B (Safety Assessment) to comply with the UK / EU Cosmetics Regulation.  Since Britain left the EU (Brexit) on the 31st December 2020, the UK market comprises England, Scotland and Wales only.  Northern Ireland is now part of the EU but however has “unfettered” access to the UK / GB market. 
            </p>
            <p className="font-popping text-[#333333] text-[22px] leading-[30px] font-bold ">   Impact of Brexit</p>
            <p className="font-popping text-[#333333] text-[16px] leading-[30px] ">
         
Brexit meant that the United Kingdom now has its own independent UK Cosmetics Regulation separate from the European Union (EU). Only manufacturers, importers, distributors and Safety Assessors with an 
address in the UK / GB are permitted to place a cosmetic products directly in the UK / GB market.  Thus, a non-UK / GB manufacturers / importer or 
distributor will require to designate in writing a Responsible Person with an address in the UK / GB to assist in its sale of their cosmetic market products in 
the UK.
            </p>
          <button className="bg-[#D5D5D5] mt-4 mb-10 py-3 px-16  gm:px-20 relative rounded-full">
            <img className="absolute left-3  top-2 " src="/images/whatApp.svg" alt="" />
            <span className="font-lato text-[15px]">FREE CONSULTATION</span>
          </button>
        </div>
          <div className="flex justify-center">
            <img className="sm:h-[321px]" src="images/group.png" alt="" />
          {/* <div className="mx-auto  ">
              <div className="bg-[#eceff4] rounded-xl mb-5 md:mb-0  sm:bg-none ">
              <img
              className=" mx-auto    md:w-auto h-[321px] md:absolute  "
              src="/images/AboutFace.webp"
              alt=""
            />
            </div>
            <img className="inline h-[321px]  md:w-auto " src="/images/AboutFace2.webp" alt="" />
          </div> */}
        </div>
      </div>
      
      </div>
      <div className="bg-[#F6F6F6] rounded-xl px-4 mt-5 sm:px-8 py-20">

        <div className="xl:flex justify-center gap-20">
          <div className="my-5 xl:my-0 bg-white rounded-lg py-14 gm:px-20">
            <p className="text-center font-popping text-[26px] font-bold mb-5">Packaging Sample</p>
          <div className="sm:flex   gap-8 items-center">
          <img className="mx-auto" src="/images/PackagingSlideL.webp" alt="packging" />
          <img className="mx-auto my-5 sm:my-0" src="/images/PackagingSlideL.webp" alt="packging" />

        </div>
      </div>
        {/* 2 */}
      
        <div className="bg-white overflow-hidden rounded-lg py-14 gm:px-20">
            <p className="text-center font-popping text-[26px] font-bold mb-5">Other Assessment</p>
          <div className="sm:flex   gap-8 items-center">
          <img className="mx-auto" src="/images/packingSlideR.webp" alt="packging" />
          <img className="mx-auto my-5 sm:my-0" src="/images/packingSlideR.webp" alt="packging" />

        </div>
      </div>
          
        </div>
      </div>
    </>
  );
};

export default About;
