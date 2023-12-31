'use client'
import React from 'react'
import { motion } from "framer-motion";
import { textVariant2 } from "@/utils/motion";
const Contact = () => {
  return (
    <div className='sm:px-16  px-4 py-10' id='Contact'>
      <div className="mx-auto   contactMain w-full h-auto py-10   xl:w-[1240px]">
          <motion.p variants={textVariant2} initial="hidden" whileInView="show" className='font-popping py-10 text-[36px] leading-[60px] text-center font-bold text-[#333333] '>Contact Us</motion.p>
        <form action="">
          
          <div className="mx-auto text-center px-6 w-full justify-center md:flex gap-6 items-center">
            <input placeholder='Name' className='my-4 md:my-0 w-full sm:w-auto px-3  sm:px-20   cField' type="text" />
            <input placeholder='Email' className='cField w-full sm:w-auto px-3  sm:px-20  ' type="email" />

          </div>
          <div className="mx-auto px-6 text-center md:my-5 w-full justify-center md:flex gap-6 items-center">
            <input placeholder='Service Interest' className='my-4 w-full sm:w-auto px-3 sm:px-20  md:my-0 cField' type="text" />
            <input placeholder='Message' className=' cField w-full sm:w-auto px-3  sm:px-20  ' type="text" />

          </div>
          <div className="text-center mx-auto ">
          <input className='font-lato text-[#39425D] text-[16px] bg-[#fff] border border-white rounded-lg py-4 px-20 mt-4' type="submit" />

 </div>
          </form>
      </div>
    </div>
  )
}

export default Contact