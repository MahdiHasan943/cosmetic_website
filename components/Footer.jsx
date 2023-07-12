'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { footerVariants } from '@/utils/motion'

const Footer = () => {
  return (
      <motion.div variants={footerVariants} initial="hidden" whileInView="show">
          <div  className="py-12 ">
              
              <div className="text-center lg:text-start lg:flex justify-between  gap-4">
                  <div className="py-6 lg:py-0">
                      <p className='footerHeadText '>Menu</p>
                      <a href="#"><p className='font-lato '>Home</p> </a>
                      <a href="#About"><p className='font-lato py-2 '>About Us</p></a> 
                     <a href="#Services"><p className='font-lato '>Our Services</p></a> 
                      <a href="#Contact"><p className='font-lato py-2'>Contact Us</p></a> 
                  </div>
                  <div className="">
                      <p className='text-center footerHeadText'>Services</p>
                      <div className="lg:flex text-center lg:text-start items-center gap-10">
                          <div className="">
                              <p className='font-lato '>UK Responsible Person</p>
                              <p className='font-lato '>Cosmetic Product Safety <br /> Report</p> 
                              <p className='font-lato '>INCI Label Preparation <br /> Or Label Review</p>
                              <p className='font-lato '>Packaging</p>
                          </div>
                          <div className="py-6 lg:py-0">
                          <p className='font-lato '>Physical Test</p>
                              <p className='font-lato '>Knowledge Gap Analysis</p> 
                              <br />
                             
                              <p className='font-lato '>Other Safety Assessment</p>
                              <br />
                              <p className='font-lato '>Product Information File</p>
                          </div>
                          
                      </div>
                  </div>

                  <div className="">
                      <p className='footerHeadText'>Contact us</p>
                      <div className="">
                         <img className='inline' src="/images/call.svg" alt="call" /> <span className='font-lato '>00 44 (0)  7539 466 779</span>
                      </div>
                      <div className="py-5">
                      <img className='inline' src="/images/mail.svg" alt="mail" /> <span className='font-lato '>enquiries@iwocpssl.com <br /> Leicester, United Kingdom</span>

                      </div>
                      <div className="">
                      <img className='inline' src="/images/mail.svg" alt="mail" /> <span className='font-lato '>Cookie Policy</span>

                      </div>

                  </div>

                  <div className="py-6 lg:py-0">
                      <p className='footerHeadText'>Our Hours</p>
                      <p className='font-lato '>MON-SAT 08:00 – 20:00SUN  <br /> 10:00 – 17:00</p>
                      <p className='footerHeadText mt-4 '>Follow Us</p>
                      <div className="flex justify-center gap-3">
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
          <div className="py-8 fBorder ">
              <p className='font-volkhov leading-[20px] tracking-wider text-center'>©2023 - Copyright IWO Cosmetic Product Safety Solution Ltd. </p>
          </div>
    </motion.div>
  )
}

export default Footer