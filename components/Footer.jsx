'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { footerVariants } from '@/utils/motion'
import Link from 'next/link'

const Footer = () => {

  return (
      <motion.div className='sm:px-16  px-4' variants={footerVariants} initial="hidden" whileInView="show">
          <div  className="py-20  ">
              
              <div className="text-center lg:text-start lg:flex items-start justify-between  gap-4">
                  <div className="py-10 lg:py-0">
                      <p className='footerHeadText mb-4 text-[28px] leading-[40px] font-popping'>Menu</p>
                      <Link href={'/'}><p className=' font-lato text-[16px]'>Home</p> </Link>
                      <Link href={"/#About"}><p className='font-lato py-4 text-[16px]'>About Us</p></Link> 
                     <Link href={'/service'}><p className='font-lato text-[16px] '>Our Services</p></Link> 
                      <a href="#Contact"><p className='font-lato py-4 text-[16px] '>Contact Us</p></a> 
                  </div>
                  <div className="">
                      <p className='text-center mb-4   footerHeadText text-[28px] leading-[40px] font-popping'>Services</p>
                      <div className="lg:flex text-center lg:text-start items-start gap-10">
                          <div className="">
                              <p className=' font-lato text-[16px] '><Link href={'/service/#uk'}> UK Responsible Person</Link></p>
                              <p className='font-lato py-4 text-[16px] '><Link href={'/service/#safty'}> Cosmetic Product Safety <br /> Report </Link></p> 
                              <p className='font-lato text-[16px] '> <Link href={'/service/#label'}> INCI Label Preparation <br /> Or Label Review</Link></p>
                              <p className='font-lato mt-4 lg:mt-0 lg:py-4 text-[16px] '><Link href={'/service/#pack'}>  Packaging </Link></p>
                          </div>
                          <div className="py-4 lg:py-0">
                          <p className='font-lato text-[16px] '><Link href={'/service/#physical'}>  Physical Test</Link></p>
                              <p className='font-lato py-4 text-[16px] '><Link href={'/service/#knowledge'}> Knowledge Gap Analysis </Link></p> 
                              
                             
                              <p className='font-lato text-[16px] '><Link href={'/service/#other'}>Product Information File </Link></p>
                              
                              <p className='font-lato py-4 text-[16px] '><Link href={'/service/#file'}>Other Safety Assessment  </Link></p>
                          </div>
                          
                      </div>
                  </div>

                  <div className="">
                      <p className='footerHeadText mb-4  text-[28px] leading-[40px] font-popping'>Contact us</p>
                      <div className="mt-2 lg:mt-0 ">
                         <img className='inline' src="/images/call.svg" alt="call" /> <span className='font-lato text-[16px] '>00 44 (0)  7539 466 779</span>
                      </div>
                      <div className="py-5">
                      <img className='inline' src="/images/mail.svg" alt="mail" /> <span className='font-lato text-[16px] '>enquiries@iwocpssl.com </span>

                      </div>
                      <p className='font-lato text-[16px]'> Leicester, United Kingdom</p>
                      <div className="py-4">
                      <img className='inline' src="/images/mail.svg" alt="mail" /> <span className='font-lato text-[16px] '>Cookie Policy</span>

                      </div>

                  </div>

                  <div className="py-10 lg:py-0">
                      <p className='footerHeadText mb-4  text-[28px] leading-[40px] font-popping'>Our Hours</p>
                      <p className='font-lato text-[16px] '>MON-SAT 08:00 – 18:00  <br /> </p>
                      <p className='footerHeadText mt-4 text-[28px] leading-[40px] font-popping'>Follow us</p>
                      <div className="flex justify-center py-4 lg:mt-0 lg:justify-start sm:ml-[-5px] gap-3">
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
              <p className='font-volkhov leading-[30px] text-[18px]  tracking-wider text-center'>©2023 - Copyright IWO Cosmetic Product Safety Solution Ltd. </p>
          </div>
    </motion.div>
  )
}

export default Footer