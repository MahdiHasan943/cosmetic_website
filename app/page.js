// npm run export
'use client'

import About from "@/components/About";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Review from "@/components/Review";
import Services from "@/components/Services";
import Top from "@/components/Top";
import { useEffect, useState } from "react";
export default function Home() {

  const [looading, setLooading] = useState(false);
  useEffect(() => {
    setLooading(true);
    setTimeout(() => {
        setLooading(false)
    },1000)
  },[])
  return (
    <main className="">
      
      {looading ? (<div className="flex justify-center text-center h-[100vh]  w-full ">

      <img
        src='/images/loader.svg'
        
        alt='loader'
        className='w-[100px] h-[100px] mx-auto '
      />
      </div>) : (<>
      {/* <Review />
      <Services /> */}
   
      <About />
      <Faq />
     
          <Top />
        </>
        
          )}
      
    </main>
  )
}
