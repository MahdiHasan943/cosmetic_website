import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Top from '@/components/Top'
import React from 'react'

const index = () => {
  return (
    <div>
      <Hero/>
      <Services/>     

      
      <div className="px-4 py-12 sm:px-16">

        <p className='font-lato text-[#121212] text-[18px] sm:text-[26px] font-semibold '>Other World Regulatory Cosmetic Product Safety Reports</p>
        <div className="lg:grid py-6 grid-cols-2 gap-4">
          <div className="sm:flex gap-4 items-end">
            <img className='mx-auto' src="./images/world1.png" alt="" />
            <img className='w-[171px] my-6 sm:my-0 mx-auto h-[186px]' src="./images/world2.png" alt="" />
            <img className='mx-auto w-[138px] h-[137px]' src="./images/world3.png" alt="" />

          </div>
          <div className="py-4 sm:py-0">
            <p className='font-lato text-[20px]'>
            Want to sell your cosmetic product to other WORLD REGULATORY REGIMES                                                                                   
              Such as ASEAN, CANADA, SASO / GULF STATES, USA, etc.That is,  NON-UK / GB and NON-EU REGULATED COUNTRIES
                
              <span className="block">Yes</span>
                    
              <span className='block'>    

                  Preparation of Safety Assessments, etc. are available. 
                </span>
              
            
              <span className="mt-10 block">    
                        Contact: <a className='text-[#0668E7]' href=""> enquiries@iwocpssl.com</a>

          </span>

            </p>
                         

         
          </div>
        </div>
        
      </div>
      <Top/>
    </div>
  )
}

export default index