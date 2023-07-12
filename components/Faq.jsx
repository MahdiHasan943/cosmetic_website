"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const Faq = () => {
  return (
    <div id="FAQs" className="py-10">
      <h2 className="text-center font-popping  text-[26px] leading-[50px] text-[#333333] font-bold">
        Help/FAQ
      </h2>
      <p className="text-center font-popping text-[20px] leading-[30px] text-[#595959] font-bold">
        Your products matter - here for their safety and regulatory <br />{" "}
        requirements
      </p>

      <div className="w-full  px-4 pt-16">
        <div className="mx-auto text-center lg:w-[50%] rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-center w-full ">
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

                  <span className="sm:text-[20px] font-popping text-[#333333] font-semibold">
                    What Do I Need To Do To Sell My Cosmetic Products In the UK
                    and EU?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 text-start sm:ml-[70px] pt-4 pb-2  text-sm text-gray-500">
                  <p className="">
                    {" "}
                    The law states that before a cosmetic product can be sold in
                    the UK / EU market, it must have the <br /> following as a
                    minimum: <br />
                  </p>
                  <p>
                    1 A Responsible Person (RP) with an address in the UK / GB
                    or the EU.
                  </p>
                  <p> 2 A compliant cosmetic product safety report (CPSR).</p>
                  <p>3 A Product Information File (PIF).</p>
                  <p>
                    4 Notification of the cosmetic product on a UK / GB or EU
                    government portal.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-10">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-center  w-full ">
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
                  <span className="sm:text-[20px] font-popping text-[#333333] font-semibold">
                    As Your Responsible Person (RP) For UK / GB And EU Market
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 text-start sm:ml-[70px] pt-4 pb-2 text-sm text-gray-500">
                <p className="">
                    {" "}
                    The law states that before a cosmetic product can be sold in
                    the UK / EU market, it must have the <br /> following as a
                    minimum: <br />
                  </p>
                  <p>
                    1 A Responsible Person (RP) with an address in the UK / GB
                    or the EU.
                  </p>
                  <p> 2 A compliant cosmetic product safety report (CPSR).</p>
                  <p>3 A Product Information File (PIF).</p>
                  <p>
                    4 Notification of the cosmetic product on a UK / GB or EU
                    government portal.
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
