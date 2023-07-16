'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { footerVariants } from '@/utils/motion'

const Footer = () => {
  return (
      <motion.div variants={footerVariants} initial="hidden" whileInView="show">
          <div  className="py-20 ">
              
              <div className="text-center lg:text-start lg:flex justify-between  gap-4">
                  <div className="py-10 lg:py-0">
                      <p className='footerHeadText text-[28px] leading-[40px] font-popping'>Menu</p>
                      <a href="#"><p className='mt-2 lg:mt-0  font-lato text-[20px]'>Home</p> </a>
                      <a href="#About"><p className='font-lato py-2 text-[20px] '>About Us</p></a> 
                     <a href="#Services"><p className='font-lato text-[20px] '>Our Services</p></a> 
                      <a href="#Contact"><p className='font-lato py-2 text-[20px] '>Contact Us</p></a> 
                  </div>
                  <div className="">
                      <p className='text-center   footerHeadText text-[28px] leading-[40px] font-popping'>Services</p>
                      <div className="lg:flex text-center lg:text-start items-center gap-10">
                          <div className="">
                              <p className=' font-lato text-[20px] '>UK Responsible Person</p>
                              <p className='font-lato text-[20px] '>Cosmetic Product Safety <br /> Report</p> 
                              <p className='font-lato text-[20px] '>INCI Label Preparation <br /> Or Label Review</p>
                              <p className='font-lato text-[20px] '>Packaging</p>
                          </div>
                          <div className="py-10 lg:py-0">
                          <p className='font-lato text-[20px] '>Physical Test</p>
                              <p className='font-lato text-[20px] '>Knowledge Gap Analysis</p> 
                              <br />
                             
                              <p className='font-lato text-[20px] '>Other Safety Assessment</p>
                              <br />
                              <p className='font-lato text-[20px] '>Product Information File</p>
                          </div>
                          
                      </div>
                  </div>

                  <div className="">
                      <p className='footerHeadText text-[28px] leading-[40px] font-popping'>Contact us</p>
                      <div className="mt-2 lg:mt-0 ">
                         <img className='inline' src="/images/call.svg" alt="call" /> <span className='font-lato text-[20px] '>00 44 (0)  7539 466 779</span>
                      </div>
                      <div className="py-5">
                      <img className='inline' src="/images/mail.svg" alt="mail" /> <span className='font-lato text-[20px] '>enquiries@iwocpssl.com <br /> Leicester, United Kingdom</span>

                      </div>
                      <div className="">
                      <img className='inline' src="/images/mail.svg" alt="mail" /> <span className='font-lato text-[20px] '>Cookie Policy</span>

                      </div>

                  </div>

                  <div className="py-10 lg:py-0">
                      <p className='footerHeadText text-[28px] leading-[40px] font-popping'>Our Hours</p>
                      <p className='font-lato text-[20px] '>MON-SAT 08:00 – 20:00SUN  <br /> 10:00 – 17:00</p>
                      <p className='footerHeadText mt-4 text-[28px] leading-[40px] font-popping'>Follow us</p>
                      <div className="flex justify-center mt-2 lg:mt-0 lg:justify-start sm:ml-[-5px] gap-3">
                          <img className='' src="/images/fb.svg" alt="fb" />
                          <img className='' src="/images/twitter.svg" alt="twitter" />
                          <img className='' src="/images/Instagram.svg" alt="instragram" />
                          <img className='' src="/images/Pinterest.svg" alt="Pinterest" />
                          <img className='' src="/images/YouTube.svg" alt="YouTube" />

                      </div>
                  </div>

                  
              </div>
              <div className="">
                  
           </div>
          </div>
          <div className="py-10 fBorder ">
              <p className='font-volkhov leading-[30px] text-[22px]  tracking-wider text-center'>©2023 - Copyright IWO Cosmetic Product Safety Solution Ltd. </p>
          </div>
    </motion.div>
  )
}

export default Footer