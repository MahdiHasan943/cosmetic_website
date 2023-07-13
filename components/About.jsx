import React from "react";

const About = () => {
  return (
    <>
    <div className="" id="About">
      <h2 className="font-popping py-10 text-[36px] leading-[60px] text-center font-bold text-[#333333] ">
        About Us
      </h2>
      <div className="mx-auto  lg:flex items-center justify-center gap-6">
        <div className="">
          <p className="font-popping text-[#333333] text-[22px] leading-[30px]  ">
            <span className="font-bold">Iwo Cosmetic Products Safety Solutions Ltd.</span> (abbreviated to <span className="font-bold">Iwo CPSS
            Ltd.</span> ) <br className="hidden sm:block" /> is a cosmetic product,
            personal care and chemical consumer goods safety <br className='hidden sm:block'/> and regulatory
            company with a global reach.
          </p>
            <p className="font-popping text-[#333333] text-[22px] lg:text-[16px] 2xl:text-[22px] leading-[30px]  py-4">
            The company was founded in 2015 and has experiences in the field that <br className='hidden lg:block'/> 
spans decades. Based in the United Kingdom in Great Britain (UK / GB) and <br className='hidden lg:block'/> 
from wherever you are in the world, Iwo CPSS Ltd is a Responsible Person that <br className='hidden lg:block'/>  
can help you market your products in the UK / GB and in the European Union <br className='hidden lg:block'/> 
(EU). Iwo CPSS Ltd has its main speciality in the fields of cosmetic products <br className='hidden lg:block'/> 
safety and regulation. This includes producing safety assessment reports to <br className='hidden lg:block'/> 
various world regulatory regimes such as ASEAN, Canada, Gulf States, USA, <br className='hidden lg:block'/> 
etc. Hence if you are a manufacturer, an importer or a distributor of cosmetic <br className='hidden lg:block'/>  
products, looking to sell your products in the UK / GB and in the EU, or <br className='hidden lg:block'/> 
elsewhere, contact Iwo CPSS Ltd to assist you in meeting your product safety <br className='hidden lg:block'/> 
and regulatory requirements.
          </p>
          <button className="bg-[#D5D5D5] mt-4 mb-10 py-3 px-16  gm:px-20 relative rounded-full">
            <img className="absolute left-3  top-2 " src="/images/whatApp.svg" alt="" />
            <span className="font-lato text-[15px]">FREE CONSULTATION</span>
          </button>
        </div>
        <div className="flex justify-center">
          <div className="mx-auto  ">
              <div className="bg-[#eceff4] rounded-xl mb-5 md:mb-0  sm:bg-none ">
              <img
              className=" mx-auto    md:w-auto h-[321px] md:absolute  "
              src="/images/AboutFace.webp"
              alt=""
            />
            </div>
            <img className="inline h-[321px]  md:w-auto " src="/images/AboutFace2.webp" alt="" />
          </div>
        </div>
      </div>
      
      </div>
      <div className="bg-[#F6F6F6] rounded-xl px-4 mt-5 sm:px-8 py-20">

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
