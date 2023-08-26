"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { textVariant2 } from "@/utils/motion";
const Faq = () => {
  return (
    <div id="FAQs" className="py-10">
      <motion.h2 variants={textVariant2} initial="hidden" whileInView="show" className="text-center font-popping  text-[36px] leading-[60px] text-[#333333] font-bold">
        Help/FAQ
      </motion.h2>

      <p className="text-center font-popping text-[20px] leading-[40px] text-[#595959] font-bold">
        Your products matter - here for their safety and regulatory <br />{" "}
        requirements
      </p>

      <div className="w-full  px-4 pt-16">
        <div className="mx-auto  lg:w-[50%] rounded-2xl bg-white p-2">
          <Disclosure defaultOpen>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex  w-full ">
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  )}

                  <span className="text-[20px] font-popping text-[#333333] font-bold">
                  What Do I Need To Do To Sell My Cosmetic Products In the UK and EU?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 text-start sm:ml-[70px] pt-4 pb-2    text-gray-500">
                  <p className="text-[15px]">
                    {" "}
                    The law states that before a cosmetic product can be sold in
                    the UK / EU market, it must have the <br /> following as a
                    minimum: <br />
                  </p>
                  <p className="text-[15px] py-4">
                    1. A Responsible Person (RP) with an address in the UK / GB
                    or the EU.
                  </p>
                  <p className="text-[15px] "> 2. A compliant cosmetic product safety report (CPSR).</p>
                  <p className="text-[15px] py-4">3. A Product Information File (PIF).</p>
                  <p className="text-[15px]">
                    4. Notification of the cosmetic product on a UK / GB or EU
                    government portal.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure  as="div" className="mt-10">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex   w-full ">
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  )}
                  <span className="text-[20px] font-popping text-[#333333] font-bold">
                  As Your Responsible Person (RP) For UK / GB And EU Market                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 text-start sm:ml-[70px] pt-4 pb-2  text-gray-500">
                  <p className="text-[15px] py-4">
                  Iwo Cosmetic Products Safety Solutions Ltd and EU colleagues will do the following:

                    {" "}
                    The law states that before a cosmetic product can be sold in
                    the UK / EU market, it must have the <br /> following as a
                    minimum: <br />
                  </p>
                  <p className="text-[15px] ">
                    1. Produce CPSR for your cosmetic product.

                  </p>
                  <p className="text-[15px] py-4"> 2. Prepare or review your cosmetic product label.</p>
                  <p className="text-[15px] ">3. (a) Notify your product on the UK Submit Cosmetic Notification (UK SCPN) Portal</p>
                  <p className="text-[15px] py-4">
                 4. (b) Notify your product on the Cosmetic Product Notification Portal (CPNP)
.
                  </p>
                  <p className="text-[15px] py-4">
                 5. Prepare updates for your cosmetic product – where applicable.
.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure  as="div" className="mt-10">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex   w-full ">
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  )}
                  <span className="text-[20px] font-popping text-[#333333] font-bold">
                  Labels and Packaging                 </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 text-start sm:ml-[70px] pt-4 pb-2  text-gray-500">
                  <p className="text-[15px] py-4">
                  In addition to CPSR, Iwo CPSS Ltd. prepares UK / EU compliant INCI label and other necessary information such as the cosmetic ingredient listing, instruction of use including any relevant 
precautions and warnings to be included on the product primary and if applicable, secondary packaging.
                  </p>
                
              
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default Faq;
