"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Review = () => {
  return (
    <>
      <div className="py-[20px] ">
        <p className="py-10 font-popping text-[#333] text-center text-[33px] font-bold">
          Customer Reviews
        </p>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper 2xl:w-[80%] mx-auto"
        >
          <SwiperSlide>
            <div className="exsm:w-[353px] py-6 px-5  h-[215px] slidecard">
              <div className="flex items-center justify-center gap-4">
                <img className="inline" src="/images/ellip.webp" alt="" />
                <p className="text-[#313131] font-lato font-semibold">
                  J.James
                </p>
                <div className="flex  items-center gap-2">
                  <img src="/images/starts.svg" alt="" />
                  <img src="/images/starts.svg" alt="" />
                  <img src="/images/starts.svg" alt="" />
                  <img src="/images/starts.svg" alt="" />
                  <img src="/images/starts.svg" alt="" />
                </div>
              </div>
              <div className="flex py-2 gap-4 pr-4 justify-end items-center">
                <p className="text-[#313131] font-lato">On</p>
                <img src="/images/fb2.webp" alt="" />
                <img src="/images/goggl2.webp" alt="" />
                <img src="/images/fresh.webp" alt="" />
              </div>
              <p className="text-[#06040A] py-4 font-lato text-center leading-[22px] text-[13px]">
                Lorem ipsum dolor sit amet elit, consectetur adipiscing <br /> elit
                cursus imperdiet ementum Quam <br /> aliquam. Quam vel aliquam sit
                vulputate.
              </p>
            </div>
                  </SwiperSlide>
                  {/* 2 */}
          <SwiperSlide>
            <div className="exsm:w-[353px] py-6 px-5  h-[215px] slidecard">
              <div className="flex items-center justify-center gap-4">
                <img className="inline" src="/images/Ellipse2.webp" alt="" />
                <p className="text-[#313131] font-lato font-semibold">
                  J.James
                </p>
                <div className="flex  items-center gap-2">
                  <img src="/images/starts.svg" alt="" />
                  <img src="/images/starts.svg" alt="" />
                  <img src="/images/starts.svg" alt="" />
                  <img src="/images/starts.svg" alt="" />
                  <img src="/images/starts.svg" alt="" />
                </div>
              </div>
              <div className="flex py-2 gap-4 pr-4 justify-end items-center">
                <p className="text-[#313131] font-lato">On</p>
                <img src="/images/fb2.webp" alt="" />
                <img src="/images/goggl2.webp" alt="" />
                <img src="/images/fresh.webp" alt="" />
              </div>
              <p className="text-[#06040A] py-4 font-lato text-center leading-[22px] text-[13px]">
                Lorem ipsum dolor sit amet elit, consectetur adipiscing <br /> elit
                cursus imperdiet ementum Quam <br /> aliquam. Quam vel aliquam sit
                vulputate.
              </p>
            </div>
                  </SwiperSlide>
                  {/* 3 */}
                  <SwiperSlide>
            <div className="exsm:w-[353px] py-6 px-5  h-[215px] slidecard">
              <div className="flex items-center justify-center gap-4">
                <img className="inline" src="/images/Ellipse3.webp" alt="" />
                <p className="text-[#313131] font-lato font-semibold">
                  J.James
                </p>
                <div className="flex  items-center gap-2">
                  <img src="/images/starts.svg" alt="" />
                  <img src="/images/starts.svg" alt="" />
                  <img src="/images/starts.svg" alt="" />
                  <img src="/images/starts.svg" alt="" />
                  <img src="/images/starts.svg" alt="" />
                </div>
              </div>
              <div className="flex py-2 gap-4 pr-4 justify-end items-center">
                <p className="text-[#313131] font-lato">On</p>
                <img src="/images/fb2.webp" alt="" />
                <img src="/images/goggl2.webp" alt="" />
                <img src="/images/fresh.webp" alt="" />
              </div>
              <p className="text-[#06040A] py-4 font-lato text-center leading-[22px] text-[13px]">
                Lorem ipsum dolor sit amet elit, consectetur adipiscing <br /> elit
                cursus imperdiet ementum Quam <br /> aliquam. Quam vel aliquam sit
                vulputate.
              </p>
            </div>
          </SwiperSlide>
                  {/* 4 */}
                  <SwiperSlide>
            <div className="exsm:w-[353px] py-6 px-5  h-[215px] slidecard">
              <div className="flex items-center justify-center gap-4">
                <img className="inline" src="/images/ellip.webp" alt="" />
                <p className="text-[#313131] font-lato font-semibold">
                  J.James
                </p>
                <div className="flex  items-center gap-2">
                  <img src="/images/starts.svg" alt="" />
                  <img src="/images/starts.svg" alt="" />
                  <img src="/images/starts.svg" alt="" />
                  <img src="/images/starts.svg" alt="" />
                  <img src="/images/starts.svg" alt="" />
                </div>
              </div>
              <div className="flex py-2 gap-4 pr-4 justify-end items-center">
                <p className="text-[#313131] font-lato">On</p>
                <img src="/images/fb2.webp" alt="" />
                <img src="/images/goggl2.webp" alt="" />
                <img src="/images/fresh.webp" alt="" />
              </div>
              <p className="text-[#06040A] py-4 font-lato text-center leading-[22px] text-[13px]">
                Lorem ipsum dolor sit amet elit, consectetur adipiscing <br /> elit
                cursus imperdiet ementum Quam <br /> aliquam. Quam vel aliquam sit
                vulputate.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Review;
