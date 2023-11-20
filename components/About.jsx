'use client'
import React from "react";
import { motion } from "framer-motion";
import { textVariant2 } from "@/utils/motion";

const About = () => {
  return (
    <>
    <div className="sm:px-16 bg-[#F6F6F6]  px-4 py-8" id="About">
      <motion.h2 variants={textVariant2} initial="hidden" whileInView="show" className="font-popping py-10 text-[36px] leading-[60px] text-center font-bold text-[#333333] ">
        About Us
        </motion.h2>
        <p className="font-popping text-[#333333] text-[22px] leading-[30px]  ">
            <span className="font-bold pr-2">Iwo Cosmetic Products Safety Solutions Ltd.</span> 

          
       is a consultancy business with specialism mainly in the fields of regulation and safety of cosmetics and chemical consumer products.

            </p>
            
      <div className="mx-auto lg:grid grid-cols-3  justify-center gap-6">
        <div className="col-span-2">
      
            <p className="font-popping text-[#333333] text-[16px] leading-[30px]  py-4">
          
            A necessary requirement for marketing a cosmetic product in the United Kingdom (UK) or the European Union (EU), is for a Safety Assessor / Toxicologist or other qualified person to produce a Cosmetic Product Safety Report (CPSR), Part A (Safety Information) and Part B (Safety Assessment) to comply with the UK / EU Cosmetics Regulation. Also, you will require a Responsible Person (RP) to oversee the cosmetic product safety, its 'making available' on the market and all matters concerning its safe marketing. If you are resident in the UK or EU, you can be the RP, otherwise you are obligated to designate in writing an RP who has an address in either of these places.

Since the UK left the EU on the 31st December 2020 (Brexit), the UK market now comprises England, Scotland and Wales only (UK / GB). Northern Ireland is now part of the EU but however has an “unfettered” access to the UK / GB market.
            </p>
            <p className="font-popping text-[#333333] text-[22px] leading-[30px] font-bold ">   Impact of Brexit</p>
            <p className="font-popping text-[#333333] text-[16px] leading-[30px] ">
         
            

Brexit meant that the UK now has its own independent UK Cosmetics Regulation separate from the EU. Only manufacturers, importers, distributors and Safety Assessors with an address in the UK / GB are permitted to place a cosmetic product in the UK / GB market. Thus, a non-UK / GB manufacturer / importer or distributor will be required to designate in writing an RP with an address in the UK / GB to assist in the sale / marketing of its cosmetic product in the UK.
            </p>
        
        </div>
          <div className=" w-[300px] justify-center">
            <img className="w-[270px] h-[357px]" src="images/flower.jpg" alt="" />
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
      {/* experience */}
      <div className="py-8 sm:px-16  px-4 ">
        <p className="font-popping text-[16px] font-bold">Experience</p>
        <p className="font-popping text-[15px] py-3">
        IWO Cosmetic Product Safety Solutions Ltd. (abbreviated to Iwo CPSS Ltd) has 20 year’s experience in the field of regulatory and cosmetic product safety and has helped bring to market brand name products.  Iwo CPSS Ltd also assists micro-, small and medium sized businesses.  

        </p>
        <p className="font-popping py-6 text-[15px] ">
        Contact Iwo CPSS Ltd for your:

        </p>

        <p className="font-popping">
        ➢   Designated Responsible Person

        </p>
       
        <p className="font-popping">
        ➢  Cosmetic Product Safety Reports (CPSR)

        </p>
        <p className="font-popping">
        ➢  (Cosmetic Product Safety Assessment – Part B)

        </p>
        <p className="font-popping">
        ➢  Production Information Files (PIF dossiers)

        </p>
        <p className="font-popping">
        ➢  Notification

        </p>
        <p className="font-popping">
        ➢  Labelling Review

        </p>
        <p className="font-popping">
        ➢  INCI Label Preparation

        </p>
        <p className="font-popping">
        ➢  Services to other Cosmetics Regulations, e.g. USA, Canada, Gulf States (e.g. SASO), ASEAN, etc.

        </p>
        <p className="font-popping">
        ➢  Chemical Toxicological Reviews

</p>
<p className="font-popping">
➢  Knowledge Gap Analysis

        </p>
        <p className="font-popping">
        ❖          Support Services, e.g. Microbiological Tests, Preservative Challenge Test, Stability / Packaging Compatibility Tests.

</p>
        <p className="font-popping">
        ❖          Competitive Prices.

</p>
        

      </div>
    </>
  );
};

export default About;
