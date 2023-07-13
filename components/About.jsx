import React from "react";

const About = () => {
  return (
    <>
    <div className="" id="About">
      <h2 className="font-popping py-10 text-[36px] leading-[60px] text-center font-bold text-[#333333] ">
        About Us
      </h2>
      <div className="mx-auto  lg:flex items-center justify-between gap-6">
        <div className="mx-auto">
          <p className="font-popping text-[#333333] text-[22px] leading-[30px]  ">
            <span className="font-bold">Iwo Cosmetic Products Safety Solutions Ltd.</span> (abbreviated to <span className="font-bold">Iwo CPSS
            Ltd.</span> ) <br className="hidden sm:block" /> is a cosmetic product,
            personal care and chemical consumer goods safety <br className='hidden sm:block'/> and regulatory
            company with a global reach.
          </p>
          <img className="mt-5" src="/images/aboutText.png" alt="" />
          <button className="bg-[#D5D5D5] mt-4 mb-10 py-3 px-16  gm:px-20 relative rounded-full">
            <img className="absolute left-3  top-2 " src="/images/whatApp.svg" alt="" />
            <span className="font-lato text-[15px]">FREE CONSULTATION</span>
          </button>
        </div>
        <div className="flex justify-center">
          <div className="mx-auto  ">
            <img
              className="inline w-full md:w-auto h-[280px] md:absolute  "
              src="/images/AboutFace.webp"
              alt=""
            />
            <img className="inline w-full md:w-auto " src="/images/AboutFace2.webp" alt="" />
          </div>
        </div>
      </div>
      
      </div>
      <div className="bg-[#F6F6F6] px-4 mt-5 sm:px-8 py-20">

        <div className="xl:flex justify-center gap-20">
          <div className="my-5 xl:my-0 bg-white rounded-lg py-14 gm:px-20">
            <p className="text-center font-popping text-[26px] font-bold mb-5">Packaging Sample</p>
          <div className="sm:flex   gap-8 items-center">
          <img className="mx-auto" src="/images/PackagingSlideL.webp" alt="packging" />
          <img className="mx-auto my-5 sm:my-0" src="/images/PackagingSlideL.webp" alt="packging" />

        </div>
      </div>
        {/* 2 */}
      
        <div className="bg-white overflow-hidden rounded-lg py-14 gm:px-20">
            <p className="text-center font-popping text-[26px] font-bold mb-5">Other Assessment</p>
          <div className="sm:flex   gap-8 items-center">
          <img className="mx-auto" src="/images/packingSlideR.webp" alt="packging" />
          <img className="mx-auto my-5 sm:my-0" src="/images/packingSlideR.webp" alt="packging" />

        </div>
      </div>
          
        </div>
      </div>
    </>
  );
};

export default About;
