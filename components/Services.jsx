"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { textVariant2 } from "@/utils/motion";
import CosmeticCard from "./CosmeticCard";

const Services = () => {
  return (
    <div id="Services" className="pb-20 sm:px-16  px-4">
      <motion.h2 variants={textVariant2} initial="hidden" whileInView="show" className="font-popping py-10 text-[36px] leading-[60px] text-center font-bold text-[#333333] ">
        Our Services
      </motion.h2>
      <CosmeticCard/>
    </div>
  );
};

export default Services;
