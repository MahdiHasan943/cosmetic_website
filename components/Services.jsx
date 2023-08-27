"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";

import { motion } from "framer-motion";
import { textVariant2 } from "@/utils/motion";
import CosmeticCard from "./CosmeticCard";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}



const Services = () => {
  let [categories] = useState({
    Reports: [
      {
        id: 1,
        title: "UK Responsible Person",


        titleTwo: "Cosmetic Product Safety Report",
        subOne: " DEFINITION OF A RESPONSIBLE PERSON",
        subTwo: "UK / GB CPSR, PIF, Label, etc",
        detailsOne: " A Responsible Person is a legal or natural persondesignated with an address in the UK (Great Britain  – England, Scotland and Wales) (or EU Community). For each cosmetic product placed on the market, the Responsible Person shall ensure compliance with the relevant obligations set out in the cosmetics Regulation.", detailsTwo: "",
        detailsTwo: "        Iwo Cosmetic Products Safety Solutions Ltd. produces                            Cosmetic Product Safety Reports (CPSR) PIF, INCI                            labels, label review, etc, to comply with the UK /                         GB market.",
        mtOne:"     UK RESPONSIBLE PERSON  ",
        mDOne: "Iwo Cosmetic Products Safety Solutions Ltd. is a Responsible Person (RP) for both the United Kingdom       (UK) / Great Britain (GB) and non-UK / GB        manufacturers, importers or distributors. As a UK       RP, Iwo Cosmetic Products Safety Solutions Ltd.        notifies cosmetic products using the UK Submit        Cosmetic Product Notification (SCPN) Portal.",
        mDTwo: " Iwo Cosmetic Products Safety Solutions Ltd.collaborates collaborates with colleagues in the EU to produce EU compliant CPSR, PIF, INCI labels, Label reviews, etc, to comply with the EU market.",
        mTTwo:"EU CPSR, PIF, Label, etc",
        lDOne: "Iwo Cosmetic Products Safety Solutions Ltd.collaborates with colleagues as Responsible Persons (RP) in Europe for notification of cosmetic products  via the Cosmetic Product Notification Portal (CPNP) for the EU market.",
        lTOne: "                            EU RESPONSIBLE PERSON        ",
        lTTwo:"                            WORLD REGULATORY COSMETIC SAFETY REPORTS        ",
        
        lDTwo:"Iwo Cosmetic Products Safety Solutions Ltd. also produces cosmetic safety assessment reports for other world regulatory regimes (e.g. ASEAN, CANADA,SASO /GULF STATES, USA, etc.).",
        
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
        imgOne: "/images/serviceImage1.webp",
        imgTwo: "/images/serviceImage2.webp",
      },
      // {
      //   id: 2,
      //   title: "So you've bought coffee... now what?",
      //   date: '2h ago',
      //   commentCount: 3,
      //   shareCount: 2,
      //   imgOne:'/images/serviceImage2.webp'
      // },
    ],
    Information_File: [
      {
        // id: 1,
        // title: "Personal Information File",
        // titleTwo: "INCI Label Preparation",
        // date: "Jan 7",
        // commentCount: 29,
        // shareCount: 16,
        // imgOne: "/images/serviceImage6.webp",
        // imgTwo: "/images/serviceImage7.webp",
        id: 1,
        title: "UK Responsible Person",


        titleTwo: "Cosmetic Product Safety Report",
        subOne: " DEFINITION OF A RESPONSIBLE PERSON",
        subTwo: "UK / GB CPSR, PIF, Label, etc",
        detailsOne: " A Responsible Person is a legal or natural persondesignated with an address in the UK (Great Britain  – England, Scotland and Wales) (or EU Community). For each cosmetic product placed on the market, the Responsible Person shall ensure compliance with the relevant obligations set out in the cosmetics Regulation.", detailsTwo: "",
        detailsTwo: "        Iwo Cosmetic Products Safety Solutions Ltd. produces                            Cosmetic Product Safety Reports (CPSR) PIF, INCI                            labels, label review, etc, to comply with the UK /                         GB market.",
        mtOne:"     UK RESPONSIBLE PERSON  ",
        mDOne: "Iwo Cosmetic Products Safety Solutions Ltd. is a Responsible Person (RP) for both the United Kingdom       (UK) / Great Britain (GB) and non-UK / GB        manufacturers, importers or distributors. As a UK       RP, Iwo Cosmetic Products Safety Solutions Ltd.        notifies cosmetic products using the UK Submit        Cosmetic Product Notification (SCPN) Portal.",
        mDTwo: " Iwo Cosmetic Products Safety Solutions Ltd.collaborates collaborates with colleagues in the EU to produce EU compliant CPSR, PIF, INCI labels, Label reviews, etc, to comply with the EU market.",
        mTTwo:"EU CPSR, PIF, Label, etc",
        lDOne: "Iwo Cosmetic Products Safety Solutions Ltd.collaborates with colleagues as Responsible Persons (RP) in Europe for notification of cosmetic products  via the Cosmetic Product Notification Portal (CPNP) for the EU market.",
        lTOne: "                            EU RESPONSIBLE PERSON        ",
        lTTwo:"                            WORLD REGULATORY COSMETIC SAFETY REPORTS        ",
        
        lDTwo:"Iwo Cosmetic Products Safety Solutions Ltd. also produces cosmetic safety assessment reports for other world regulatory regimes (e.g. ASEAN, CANADA,SASO /GULF STATES, USA, etc.).",
        
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
        imgOne: "/images/serviceImage1.webp",
        imgTwo: "/images/serviceImage2.webp",
      },
      // {
      //   id: 2,
      //   title: 'The most innovative things happening in coffee',
      //   date: 'Mar 19',
      //   commentCount: 24,
      //   shareCount: 12,
      //   imgOne:'/images/serviceImage2.webp'
      // },
    ],
    Assessment: [
      {
        // id: 1,
        // title: "Other Safety Assessment        ",
        // titleTwo: "Physical Testing",
        // date: "2d ago",
        // commentCount: 9,
        // shareCount: 5,
        // imgOne: "/images/serviceImage5.webp",
        // imgTwo: "/images/serviceImage8.webp",
        id: 1,
        title: "UK Responsible Person",


        titleTwo: "Cosmetic Product Safety Report",
        subOne: " DEFINITION OF A RESPONSIBLE PERSON",
        subTwo: "UK / GB CPSR, PIF, Label, etc",
        detailsOne: " A Responsible Person is a legal or natural persondesignated with an address in the UK (Great Britain  – England, Scotland and Wales) (or EU Community). For each cosmetic product placed on the market, the Responsible Person shall ensure compliance with the relevant obligations set out in the cosmetics Regulation.", detailsTwo: "",
        detailsTwo: "        Iwo Cosmetic Products Safety Solutions Ltd. produces                            Cosmetic Product Safety Reports (CPSR) PIF, INCI                            labels, label review, etc, to comply with the UK /                         GB market.",
        mtOne:"     UK RESPONSIBLE PERSON  ",
        mDOne: "Iwo Cosmetic Products Safety Solutions Ltd. is a Responsible Person (RP) for both the United Kingdom       (UK) / Great Britain (GB) and non-UK / GB        manufacturers, importers or distributors. As a UK       RP, Iwo Cosmetic Products Safety Solutions Ltd.        notifies cosmetic products using the UK Submit        Cosmetic Product Notification (SCPN) Portal.",
        mDTwo: " Iwo Cosmetic Products Safety Solutions Ltd.collaborates collaborates with colleagues in the EU to produce EU compliant CPSR, PIF, INCI labels, Label reviews, etc, to comply with the EU market.",
        mTTwo:"EU CPSR, PIF, Label, etc",
        lDOne: "Iwo Cosmetic Products Safety Solutions Ltd.collaborates with colleagues as Responsible Persons (RP) in Europe for notification of cosmetic products  via the Cosmetic Product Notification Portal (CPNP) for the EU market.",
        lTOne: "                            EU RESPONSIBLE PERSON        ",
        lTTwo:"                            WORLD REGULATORY COSMETIC SAFETY REPORTS        ",
        
        lDTwo:"Iwo Cosmetic Products Safety Solutions Ltd. also produces cosmetic safety assessment reports for other world regulatory regimes (e.g. ASEAN, CANADA,SASO /GULF STATES, USA, etc.).",
        
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
        imgOne: "/images/serviceImage1.webp",
        imgTwo: "/images/serviceImage2.webp",
      },
      // {
      //   id: 2,
      //   title: "The worst advice we've ever heard about coffee",
      //   date: '4d ago',
      //   commentCount: 1,
      //   shareCount: 2,
      //   imgOne:'/images/serviceImage2.webp'
      // },
    ],
    Packaging: [
      {
        // id: 1,
        // title: "Packaging",
        // titleTwo: "Knowledge Gap Analysis",
        // // date: "2d ago",
        // // commentCount: 9,
        // // shareCount: 5,
        // imgOne: "/images/serviceImage3.webp",
        // imgTwo: "/images/serviceImage4.webp",
        id: 1,
        title: "UK Responsible Person",


        titleTwo: "Cosmetic Product Safety Report",
        subOne: " DEFINITION OF A RESPONSIBLE PERSON",
        subTwo: "UK / GB CPSR, PIF, Label, etc",
        detailsOne: " A Responsible Person is a legal or natural persondesignated with an address in the UK (Great Britain  – England, Scotland and Wales) (or EU Community). For each cosmetic product placed on the market, the Responsible Person shall ensure compliance with the relevant obligations set out in the cosmetics Regulation.", detailsTwo: "",
        detailsTwo: "        Iwo Cosmetic Products Safety Solutions Ltd. produces                            Cosmetic Product Safety Reports (CPSR) PIF, INCI                            labels, label review, etc, to comply with the UK /                         GB market.",
        mtOne:"     UK RESPONSIBLE PERSON  ",
        mDOne: "Iwo Cosmetic Products Safety Solutions Ltd. is a Responsible Person (RP) for both the United Kingdom       (UK) / Great Britain (GB) and non-UK / GB        manufacturers, importers or distributors. As a UK       RP, Iwo Cosmetic Products Safety Solutions Ltd.        notifies cosmetic products using the UK Submit        Cosmetic Product Notification (SCPN) Portal.",
        mDTwo: " Iwo Cosmetic Products Safety Solutions Ltd.collaborates collaborates with colleagues in the EU to produce EU compliant CPSR, PIF, INCI labels, Label reviews, etc, to comply with the EU market.",
        mTTwo:"EU CPSR, PIF, Label, etc",
        lDOne: "Iwo Cosmetic Products Safety Solutions Ltd.collaborates with colleagues as Responsible Persons (RP) in Europe for notification of cosmetic products  via the Cosmetic Product Notification Portal (CPNP) for the EU market.",
        lTOne: "                            EU RESPONSIBLE PERSON        ",
        lTTwo:"                            WORLD REGULATORY COSMETIC SAFETY REPORTS        ",
        
        lDTwo:"Iwo Cosmetic Products Safety Solutions Ltd. also produces cosmetic safety assessment reports for other world regulatory regimes (e.g. ASEAN, CANADA,SASO /GULF STATES, USA, etc.).",
        
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
        imgOne: "/images/serviceImage1.webp",
        imgTwo: "/images/serviceImage2.webp",
      },
      // {
      //   id: 2,
      //   title: "The worst advice we've ever heard about coffee",
      //   date: '4d ago',
      //   commentCount: 1,
      //   shareCount: 2,
      //   imgOne:'/images/serviceImage2.webp'

      // },
    ],
  });

  return (
    <div id="Services" className="pb-20">
      <motion.h2 variants={textVariant2} initial="hidden" whileInView="show" className="font-popping py-10 text-[36px] leading-[60px] text-center font-bold text-[#333333] ">
        Our Services
      </motion.h2>

      <div className="w-full mx-auto   ">
        <Tab.Group>
          <Tab.List className="flex space-x-1  mx-auto focus:border-0 sm:w-[60%] md:w-[50%] justify-center focus:outline-none  sm:p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-[50%] mx-auto rounded-lg py-2.5 exsm:px-1  text-sm font-medium focus:border-0 focus:outline-none leading-5 font-lato text-[#333]",
                    "  focus:outline-none ",
                    selected
                      ? "bg-white shadow underline decoration-[#007aff] underline-offset-8  focus:border-0 focus:outline-none "
                      : "  "
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2  w-full relative">
            <img className="absolute top-[-100px] left-0" src="/images/stars.png" alt="" />
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames("rounded-xl  w-full mx-auto  sm:p-3")}
              >
                {/* <div>
                  {posts.map((post) => (
                    <>
                      <div
                      key={post.id}
                      className="hidden   relative xl:flex justify-center items-center rounded-md p-3 "
                    >
                      <div className=" hidden md:flex  h-[600px] lg:h-[500px] xl:h-[450px] sliding-cards">
                        <div
                          className=" card   h-[453px]  bg-no-repeat bg-opacity-[0.4] xl:w-[642px] mt-10 lg:mt-0  mx-auto py-2 px-10"
                          style={{ backgroundImage: `url(${post.imgOne})` }}
                        >
                          <div className="flex justify-center py-2">
                            <h1 className="text-[#333] pb-2 text-center bg-[#D9D9D9]  rounded-full py-2 px-4 text-[16px]  font-bold">
                              {post.title}
                            </h1>
                          </div>
                          <p className="text-[#333333] font-lato font-bold">
                            {post.subOne}
                            
                          </p>
                          <p className="text-[#333]  font-lato opacity-[0.8]">
                           {post.detailsOne}
                          </p>

                          <p className="text-[#333]  font-lato font-bold">
                            {post.mtOne}
                          </p>

                          <p className="text-[#333]  font-lato opacity-[0.8]">
                            {post.mDOne}
                            
                          </p>

                          <p className="text-[#333]  font-lato font-bold">
                            {post.lTOne}
                          </p>

                          <p className="text-[#333]  font-lato opacity-[0.8]">
                            {post.lDOne}
                          </p>
                        </div>

                        <div
                          className=" card h-[453px] w-[50%] xl:w-[642px] mt-10 lg:mt-0  mx-auto py-2 px-10"
                          style={{ backgroundImage: `url(${post.imgTwo})` }}
                        >
                          <div className="flex justify-center py-2">
                            <h1 className="text-[#333] pb-2 text-center bg-[#D9D9D9]  rounded-full py-2 px-4 text-[16px] font-bold">
                              {post.titleTwo}
                            </h1>
                          </div>
                          <p className="text-[#333] font-lato font-bold">
                            {post.subTwo}
                            
                          </p>
                          <p className="text-[#333]  font-lato opacity-[0.8]">
                            {post.detailsTwo}
                          </p>

                          <p className="text-[#333]  font-lato font-bold">
                            {post.mTTwo}

                            
                          </p>

                          <p className="text-[#333]  font-lato opacity-[0.8]">
                            {post.mDTwo}
                           
                          </p>

                          <p className="text-[#333]  font-lato font-bold">
                            {post.lTTwo}
                          </p>

                          <p className="text-[#333]  font-lato opacity-[0.8]">
                            {post.lDTwo}
                          </p>
                        </div>
                      </div>


                      
                    </div>
                   
                     
                      <div className=" hidden  xl:block">
                      <div className="mt-[20px] last:flex  h-[600px] xl:h-[400px] sliding-cardsOne">
        <div className=" card  h-[80%] mt-10  w-[455px] lg:mt-0  mx-auto py-20 px-10"  style={{ backgroundImage: `url('images/serviceImage3.webp')` }}>
        <h1 className="text-[#333] inline  pb-2 text-center bg-[#D9D9D9]  rounded-full py-2 px-12 text-[16px] font-bold">
        Packaging
                            </h1>
                            

          <p className="text-white opacity-[0.8]">
           
          </p>
        </div>

        <div className=" card h-[80%] mt-10 lg:mt-0  w-[545px] mx-auto py-20 px-10" style={{ backgroundImage: `url('images/serviceImage4.webp')` }}>
        <h1 className="text-[#333] inline pb-2 text-center bg-[#D9D9D9]  rounded-full py-2 px-4 text-[16px] font-bold">
        Knowledge Gap Analysis
                            </h1>
                            
          
        
        </div>

        <div className=" card h-[80%] mt-10 lg:mt-0  w-[402px] mx-auto py-20 px-10" style={{ backgroundImage: `url('images/serviceImage5.webp')` }}>
         
        <h1 className="text-[#333] pb-2   text-center bg-[#D9D9D9]  rounded-full py-2 px- text-[16px]  font-bold">
                              Other Safety Assessment

                            </h1>     
                            <p className="text-[#333]  font-lato">Non-Cosmetic Chemical Consumer Products.</p>
        </div>
      </div>

                      </div>
                      
                      
                      
                      <div className=" hidden  xl:block">
                      <div className="mt-[-60px] hidden xl:flex  h-[600px] lg:h-[450px] xl:h-[400px] sliding-cardsTwo">
        <div className=" card  h-[80%] mt-10  w-[478px] lg:mt-0  mx-auto py-20 px-10"  style={{ backgroundImage: `url('images/serviceImage6.webp')` }}>
        <div className="text-center">
                            <span className="text-[#333]  pb-2 text-center bg-[#D9D9D9]  rounded-full py-2 px-4 text-[16px] font-bold">
                            Personal Information File
                            </span>
       </div>

          <p className="text-white opacity-[0.8]">
           
          </p>
        </div>

        <div className=" card h-[80%] mt-10 lg:mt-0  w-[478px] mx-auto py-20 px-10" style={{ backgroundImage: `url('images/serviceImage7.webp')` }}>
                            <div className="text-center">
                            <span className="text-[#333]  pb-2 text-center bg-[#D9D9D9]  rounded-full py-2 px-4 text-[16px] font-bold">
                            INCI Label Preparation
                            </span>
       </div>
                            
          
        
        </div>

        <div className=" card h-[80%] mt-10 lg:mt-0  w-[447px] mx-auto py-20 px-10" style={{ backgroundImage: `url('images/serviceImage8.webp')` }}>
         
        <div className="text-center">
                            <span className="text-[#333]  pb-2 text-center bg-[#D9D9D9]  rounded-full py-2 px-4 text-[16px] font-bold">
                            Physical Testing
                            </span>
       </div> 
                            <p className="text-[#333]  font-lato">Non-Cosmetic Chemical Consumer Products.</p>
        </div>
      </div>

                      </div>                    
            
                      <div
                      key={post.id}
                      className="   relative xl:hidden rounded-md sm:p-3 "
                    >
                      <div className="   ">
                        <div
                          className="px-2 h-auto bg-cover   overflow-hidden   max-w-[642px] bg-no-repeat  w-full bg-opacity-[0.4]  mb-10 lg:mt-0  mx-auto py-2 "
                          style={{ backgroundImage: `url(${post.imgOne})` }}
                        >
                          <div className="flex justify-center py-2">
                            <h1 className="text-[#333] pb-2 text-center bg-[#D9D9D9]  rounded-full py-2 px-4 text-[20px] font-bold">
                              {post.title}
                            </h1>
                          </div>
                          <p className="text-[#333] font-lato font-bold">
                            {post.subOne}
                            
                          </p>
                          <p className="text-[#333]  font-lato opacity-[0.8]">
                           {post.detailsOne}
                          </p>

                          <p className="text-[#333]  font-lato font-bold">
                            {post.mtOne}
                           
                          </p>

                          <p className="text-[#333]  font-lato opacity-[0.8]">
                           {post.mDOne}
                          </p>

                          <p className="text-[#333]  font-lato font-bold">
                           {post.lTOne}
                          </p>

                          <p className="text-[#333]  font-lato opacity-[0.8]">
                           {post.lDOne}
                          </p>
                        </div>

                        <div
                          className=" px-2 w-full h-auto bg-cover   max-w-[642px] bg-no-repeat mt-10 lg:mt-0  mx-auto py-2 sm:px-10"
                          style={{ backgroundImage: `url(${post.imgTwo})` }}
                        >
                          <div className="flex justify-center py-2">
                            <h1 className="text-[#333] pb-2 text-center bg-[#D9D9D9]  rounded-full py-2 px-4 text-[16px] sm:text-[20px] font-bold">
                              {post.titleTwo}
                            </h1>
                          </div>
                          <p className="text-[#333] font-lato font-bold">
                           {post.subTwo}
                          </p>
                          <p className="text-[#333]  font-lato opacity-[0.8]">
                           {post.detailsTwo}
                          </p>

                          <p className="text-[#333]  font-lato font-bold">
                            {post.mTTwo}
                          </p>

                          <p className="text-[#333]  font-lato opacity-[0.8]">
                           {post.mDTwo}
                          </p>

                          <p className="text-[#333]  font-lato font-bold">
                           {post.lTTwo}
                          </p>

                          <p className="text-[#333]  font-lato opacity-[0.8]">
                            {post.lDTwo}
                          </p>
                        </div>
                      </div>


                      
                      </div>
                    
                      <div className="xl:hidden ">
                      <div className=" card  h-[80%] mt-10 max-w-[642px] bg-no-repeat bg-center  w-full lg:mt-0  mx-auto py-20 px-10"  style={{ backgroundImage: `url('images/serviceImage3.webp')` }}>
                          <div className="flex justify-center">
                          <h1 className="text-[#333]  pb-2 text-center bg-[#D9D9D9]  rounded-full py-2 px-12 text-[16px] font-bold">
        Packaging
                            </h1>
       </div>
                            

          <p className="text-white opacity-[0.8]">
           
          </p>
                        </div>
                        <div className=" max-w-[642px] bg-no-repeat bg-center   card h-[80%] mt-10 lg:mt-0  w-full mx-auto py-20 px-10" style={{ backgroundImage: `url('images/serviceImage4.webp')` }}>
                          <div className="flex justify-center">
                          <h1 className="text-[#333] inline pb-2 text-center bg-[#D9D9D9]  rounded-full py-2 px-4 text-[16px] font-bold">
        Knowledge Gap Analysis
                            </h1>
        </div>
                            
          
        
                        </div>
                        
        <div className=" card h-[80%] mt-10 lg:mt-0 max-w-[642px] bg-no-repeat bg-center    w-full mx-auto py-20 px-10" style={{ backgroundImage: `url('images/serviceImage5.webp')` }}>
         
                          <div className="flex justify-center">
                          <h1 className="text-[#333] pb-2   text-center bg-[#D9D9D9]  rounded-full py-2 px- text-[16px]  font-bold">
                               Other Safety Assessment
 
                             </h1>     
        </div>
                             <p className="text-[#333] text-center py-2 font-lato">Non-Cosmetic Chemical Consumer Products.</p>
         </div>
                        
                      </div>
                      

                     


          
                      <div className="xl:hidden">
                      <div className=" card max-w-[642px] bg-no-repeat bg-center    h-[80%] mt-10  w-full lg:mt-0  mx-auto py-20 px-10"  style={{ backgroundImage: `url('images/serviceImage6.webp')` }}>
        <div className="text-center">
                            <span className="text-[#333]  pb-2 text-center bg-[#D9D9D9]  rounded-full py-2 px-4 text-[16px] font-bold">
                            Personal Information File
                            </span>
       </div>

          <p className="text-white opacity-[0.8]">
           
          </p>
        </div>

        <div className=" card h-[80%] mt-10 lg:mt-0 max-w-[642px] bg-no-repeat bg-center    w-full mx-auto py-20 px-10" style={{ backgroundImage: `url('images/serviceImage7.webp')` }}>
                            <div className="text-center">
                            <span className="text-[#333]  pb-2 text-center bg-[#D9D9D9]  rounded-full py-2 px-4 text-[16px] font-bold">
                            INCI Label Preparation
                            </span>
       </div>
                            
          
        
        </div>

        <div className=" card h-[80%] mt-10 lg:mt-0  max-w-[642px] bg-no-repeat bg-center   w-full mx-auto py-20 px-10" style={{ backgroundImage: `url('images/serviceImage8.webp')` }}>
         
        <div className="text-center">
                            <span className="text-[#333]  pb-2 text-center bg-[#D9D9D9]  rounded-full py-2 px-4 text-[16px] font-bold">
                            Physical Testing
                            </span>
       </div> 
                            <p className="text-[#333]  text-center py-4 font-lato">Non-Cosmetic Chemical Consumer Products.</p>
        </div>

</div>

                      
                   
                    
                    </>

                    
                  ))}
                </div> */}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      <CosmeticCard/>
    </div>
  );
};

export default Services;
