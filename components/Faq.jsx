"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { textVariant2 } from "@/utils/motion";
const Faq = () => {
  return (
    <div id="FAQs" className="py-10 sm:px-16  px-4">
      <motion.h2 variants={textVariant2} initial="hidden" whileInView="show" className="text-center font-popping  text-[36px] leading-[60px] text-[#333333] font-bold">
        Help/FAQ
      </motion.h2>

      <p className="text-center font-popping text-[20px] leading-[40px] text-[#595959] font-bold">
        Your products matter - here for their safety and regulatory 
        requirements
      </p>

      <div className="w-full  sm:px-4 pt-16">
        <div className="mx-auto  lg:w-[50%] rounded-2xl bg-white p-2">
          <Disclosure >
            {({ open }) => (
              <>
                <Disclosure.Button className="flex object-fill w-full ">
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
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
                      className=" w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  )}

                  <span className="text-[20px] font-popping text-[#333333] font-bold">
                  Want To Sell In The United Kingdom (UK)                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 text-start sm:ml-[15px] pt-4 pb-2    text-[#595959]">
                  <p className="text-[15px]">
                  Are you a Manufacturer based outside the UK and wish to sell your product in the UK / GB market, or are you based in the UK and need assistance with the UK legislation? Iwo CPSS Ltd is a Responsible Person (RP) with an address in the UK / GB (Great Britain – England, Scotland and Wales) assists manufacturers, importers or distributors to sell their cosmetic / personal care products in the UK / GB market. Iwo CPSS Ltd as ‘a legal or natural person will work closely with you advising on compliance of your cosmetic / personal care product and other relevant obligations set out in the UK Cosmetics Regulation.  The goal is to help you 
notify your product via the UK Submit Cosmetic Product Notification (SCPN) Portal for sale in the UK market.
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
                      className="w-6 h-6"
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
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  )}
                  <span className="text-[20px] font-popping text-[#333333] font-bold">
                  Want To Sell In The European Union (EU)                </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 text-start sm:ml-[15px] pt-4 pb-2  text-[#595959]">
                  <p className="text-[15px] py-4">
                  Are you a Manufacturer based outside the EU and wish to sell your product in the EU market, Iwo CPSS Ltd. collaborates with RP colleagues in Europe who will work closely with you advising on 
compliance of your product with the relevant obligations set out in the EU Cosmetics Regulation. The goal is to help you notify your product via the EU Cosmetic Product Notification Portal (CPNP) for sale in the EU market.
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
                      className="w-6 h-6"
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
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  )}
                  <span className="text-[20px] font-popping text-[#333333] font-bold">
                  Documents Needed Before Marketing Your Product           </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 text-start sm:ml-[15px] pt-4 pb-2  text-[#595959] ">
                  <p>
                  Minimum Requirements
                  </p>
                  <p className="text-[15px] py-4">
                  ➢  Cosmetic Product Safety Report (CPSR) <br />
➢  Product Information File (PIF) <br />
➢  Notification via UK SCNP or EU CPNP <br />

Iwo Cosmetic Products Safety Solutions Ltd. will produce for you Cosmetic Product Safety Reports (CPSR) and Product Information File (PIF), prepare and conduct notification of your compliant 
cosmetic / personal care product on the UK / GB market. Colleagues will do likewise for your product entering the EU market.
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
                      className="w-6 h-6"
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
                      className="w-6 h-6"
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
                <Disclosure.Panel className="px-4 text-start sm:ml-[15px] pt-4 pb-2  text-[#595959]">
                  <p className="text-[15px] py-4">
                  In addition to CPSR, Iwo CPSS Ltd. prepares UK / EU compliant INCI label and other necessary information such as the cosmetic ingredient listing, instruction of use including any relevant 
precautions and warnings to be included on the product primary and if applicable, secondary packaging.
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
                      className="w-6 h-6"
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
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  )}
                  <span className="text-[20px] font-popping text-[#333333] font-bold">
                  Other Safety Assessments              </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 text-start sm:ml-[15px] pt-4 pb-2  text-[#595959]">
                  <p className="text-[15px] py-4">
                  WORLD REGULATORY COSMETIC SAFETY REPORTS
Iwo Cosmetic Products Safety Solutions Ltd. also produces cosmetic safety assessment reports for other world regulatory regimes (e.g. ASEAN, CANADA,SASO /GULF STATES, USA, etc.).
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
                      className="w-6 h-6"
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
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  )}
                  <span className="text-[20px] font-popping text-[#333333] font-bold">
                  Knowledge Gap Analysis            </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 text-start sm:ml-[15px] pt-4 pb-2  text-[#595959]">
                  <p className="text-[15px] py-4">
                  PHYSICAL TESTING
NON-COSMETIC CHEMICAL CONSUMER PRODUCTS
Other general safety services offered by Iwo Cosmetic Products Safety Solutions Ltd. include: <br />
➢   General Product Safety Assessment <br />
e.g. ………………… <br />
➢   Chemical Toys  <br />
➢      Chemical Household Products, etc.
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
