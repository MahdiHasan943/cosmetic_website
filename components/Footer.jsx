"use client";
import React from "react";
import { motion } from "framer-motion";
import { footerVariants } from "@/utils/motion";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsTelephone,
  BsEnvelopeFill,
  BsExclamationCircleFill,
  BsXLg,
} from "react-icons/bs";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const accept = () => toast.custom((t) => (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white sm:mt-[200px] shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 pt-0.5">
            <img
              className="h-10 w-10 rounded-full"
              src="./images/success.png"
              alt=""
            />
          </div>
          <div className="ml-3 flex-1">
          <p className="mt-1 text-[18px] font-lato font-semibold text-[#121212]">
            </p>
            <p className="mt-1 text-[16px] font-lato font-semibold text-[#121212]">
            You have accepted all our Privacy Policy
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
  ))
   
  const decaline = () => toast.custom((t) => (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white sm:mt-[200px] shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 pt-0.5">
            <img
              className="h-10 w-10 rounded-full"
               src="./images/error.png"
              alt=""
            />
          </div>
          <div className="ml-3 flex-1">
          <p className="mt-1 text-sm text-[#121212]">
            </p>
            <p className="mt-1 text-[16px] font-lato font-semibold text-[#121212]">
            You have declined all our Privacy Policy            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
  ))

  return (
    <motion.div
      className="sm:px-16 pt-[100px] relative  px-4"
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
    >
      <Popover.Group className="relative">
        <Popover>
          <div className="py-20  ">
            <div className="text-center lg:text-start lg:flex items-start justify-between  gap-4">
              <div className="py-10 lg:py-0">
                <p className="footerHeadText mb-4 text-[28px] leading-[40px] font-popping">
                  Menu
                </p>
                <Link href={"/"}>
                  <p className=" font-lato text-[16px]">Home</p>{" "}
                </Link>
                <Link href={"/#About"}>
                  <p className="font-lato py-4 text-[16px]">About Us</p>
                </Link>
                <Link href={"/service"}>
                  <p className="font-lato text-[16px] ">Our Services</p>
                </Link>
                <a href="#Contact">
                  <p className="font-lato py-4 text-[16px] ">Contact Us</p>
                </a>
              </div>
              <div className="">
                <p className="text-center mb-4   footerHeadText text-[28px] leading-[40px] font-popping">
                  Services
                </p>
                <div className="lg:flex text-center lg:text-start items-start gap-10">
                  <div className="">
                    <p className=" font-lato text-[16px] ">
                      <Link href={"/service/#uk"}> UK Responsible Person</Link>
                    </p>
                    <p className="font-lato py-4 text-[16px] ">
                      <Link href={"/service/#safty"}>
                        {" "}
                        Cosmetic Product Safety <br /> Report{" "}
                      </Link>
                    </p>
                    <p className="font-lato text-[16px] ">
                      {" "}
                      <Link href={"/service/#label"}>
                        {" "}
                        INCI Label Preparation <br /> Or Label Review
                      </Link>
                    </p>
                    <p className="font-lato mt-4 lg:mt-0 lg:py-4 text-[16px] ">
                      <Link href={"/service/#pack"}> Packaging </Link>
                    </p>
                  </div>
                  <div className="py-4 lg:py-0">
                    <p className="font-lato text-[16px] ">
                      <Link href={"/service/#physical"}> Physical Test</Link>
                    </p>
                    <p className="font-lato py-4 text-[16px] ">
                      <Link href={"/service/#knowledge"}>
                        {" "}
                        Knowledge Gap Analysis{" "}
                      </Link>
                    </p>

                    <p className="font-lato text-[16px] ">
                      <Link href={"/service/#file"}>
                        Product Information File{" "}
                      </Link>
                    </p>

                    <p className="font-lato py-4 text-[16px] ">
                      <Link href={"/service/#other"}>
                        Other Safety Assessment{" "}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <p className="footerHeadText mb-4  text-[28px] leading-[40px] font-popping">
                  Contact us
                </p>
                <div className="mt-2 lg:mt-0 ">
                  <img className="inline" src="/images/call.svg" alt="call" />{" "}
                  <span className="font-lato text-[16px] ">
                    00 44 (0) 7539 466 779
                  </span>
                </div>
                <div className="py-5">
                  <img className="inline" src="/images/mail.svg" alt="mail" />{" "}
                  <span className="font-lato text-[16px] ">
                    enquiries@iwocpssl.com{" "}
                  </span>
                </div>
                <p className="font-lato text-[16px]">
                  {" "}
                  Leicester, United Kingdom
                </p>
                <div className="py-4">
                  <Popover.Button className="focus:border-none btn-border-none  outline-none focus:outline-none border-none">
                    <img className="inline" src="/images/mail.svg" alt="mail" />{" "}
                    <span className="font-lato text-[16px] ">
                      Privacy Policy
                    </span>
                  </Popover.Button>
                </div>
              </div>

              <div className="py-10 lg:py-0">
                <p className="footerHeadText mb-4  text-[28px] leading-[40px] font-popping">
                  Our Hours
                </p>
                <p className="font-lato text-[16px] ">
                  MON-SAT 08:00 – 18:00 <br />{" "}
                </p>
                <p className="footerHeadText mt-4 text-[28px] leading-[40px] font-popping">
                  Follow us
                </p>
                <div className="flex justify-center py-4 lg:mt-0 lg:justify-start sm:ml-[-5px] gap-3">
                  <img className="" src="/images/fb.svg" alt="fb" />
                  <img className="" src="/images/twitter.svg" alt="twitter" />
                  <img
                    className=""
                    src="/images/Instagram.svg"
                    alt="instragram"
                  />
                  <img
                    className=""
                    src="/images/Pinterest.svg"
                    alt="Pinterest"
                  />
                  <img className="" src="/images/YouTube.svg" alt="YouTube" />
                </div>
              </div>
            </div>
            <div className=""></div>
          </div>
          <div className="h-[100px] flex justify-center items-center fBorder ">
            <p className="font-volkhov leading-[30px] text-[18px]  tracking-wider text-center">
              ©2023 - Copyright IWO Cosmetic Products Safety Solutions Ltd.{" "}
            </p>
          </div>
          {/* top-[100px]  */}
          <Popover.Panel className="absolute py-8  w-full h-full flex justify-center items-center bottom-0 sm:top-[-50px] left-0 z-10 ">
            <div className="downloadBox h-[auto]  bg-[#f6f6f6] shadow-2xl  w-[100%]  pt-4 px-2 sm:px-12 mx-auto  sm:w-[800px]  rounded-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-[black] pt-4 pb-12 flex items-center gap-10">
                  Privacy Policy
                </h3>
                <Popover.Button className="focus:border-none btn-border-none mt-[-30px] outline-none focus:outline-none border-none">
                  <BsXLg className="text-[black] text-[25px]"></BsXLg>
                </Popover.Button>
              </div>
              <p className="text-[black] font-lato text-[14px] sm:text-[16px] ">
                At Iwo Cosmetic Products Safety Solutions Ltd., we are committed
                to protecting the privacy and confidentiality of our clients and
                website visitors. This Privacy Policy outlines how we collect,
                use, and safeguard personal information and ensures compliance
                with industry standards. <br /> <br />   Information Collection: We collect
                personal information, such as names, email addresses, and
                contact details, only with the explicit consent of individuals.
                This information is voluntarily provided through contact forms,
                newsletter subscriptions, or other means.  <br /> <br /> Information Use:
                Personal information collected is used to communicate with
                clients and website visitors, deliver services, provide
                information about our products and promotions, and improve user
                experience. We do not sell, rent, or disclose personal
                information to third parties unless required by law.  <br /> <br />  Data
                Security: We implement industry-standard security measures to
                protect personal information from unauthorized access,
                alteration, or disclosure. However, no data transmission over
                the internet can be entirely secure, and we cannot guarantee
                absolute security.
              </p>

              <div className="bg-[#F8F8F8]  mt-8 px-8  py-8 text-end">
                <div className="flex justify-start sm:justify-end items-center gap-4">
                <Popover.Button className="focus:border-none btn-border-none mt-[-30px] outline-none focus:outline-none border-none">

                  <button
                    onClick={() => decaline()}
                    className="py-3 accept  text-black mt-2 sm:mt-0 bg-white px-8 rounded-lg shadow-xl"
                  >
                    DECLINE
                    </button>
                    </Popover.Button>

                    <Popover.Button className="focus:border-none btn-border-none mt-[-30px] outline-none focus:outline-none border-none">

                  <button
                    onClick={() => accept()}
                    className="py-3 accept text-white mt-2 sm:mt-0 bg-black px-8 rounded-lg shadow-xl"
                  >
                    ACCEPT
                    </button>
                    </Popover.Button>

                </div>
              </div>
            </div>
          </Popover.Panel>
        </Popover>
      </Popover.Group>
      <Toaster />
    </motion.div>
  );
};

export default Footer;
