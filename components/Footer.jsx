import React from 'react'

const Footer = () => {
  return (
      <div >
          <div className="py-4 ">
              
              <div className="text-center lg:text-start lg:flex justify-between  gap-4">
                  <div className="py-3 lg:py-0">
                      <p className='font-lato '>Menu</p>
                      <p className='font-lato '>Home</p>
                      <p className='font-lato '>About Us</p>
                      <p className='font-lato '>Our Services</p>
                      <p className='font-lato '>Contact Us</p>
                  </div>
                  <div className="">
                      <p className='text-center font-lato '>Services</p>
                      <div className="lg:flex text-center lg:text-start items-center gap-4">
                          <div className="">
                              <p className='font-lato '>UK Responsible Person</p>
                              <p className='font-lato '>Cosmetic Product Safety <br /> Report</p> 
                              <p className='font-lato '>INCI Label Preparation <br /> Or Label Review</p>
                              <p className='font-lato '>Packaging</p>
                          </div>
                          <div className="py-3 lg:py-0">
                          <p className='font-lato '>Physical Test</p>
                              <p className='font-lato '>Knowledge Gap Analysis</p> 
                             
                              <p className='font-lato '>Other Safety Assessment</p>
                              <p className='font-lato '>Product Information File</p>
                          </div>
                          
                      </div>
                  </div>

                  <div className="">
                      <p className='font-lato '>Contact us</p>
                      <div className="">
                         <img className='inline' src="" alt="" /> <span className='font-lato '>00 44 (0)  7539 466 779</span>
                      </div>
                      <div className="">
                      <img className='inline' src="" alt="" /> <span className='font-lato '>enquiries@iwocpssl.com <br /> Leicester, United Kingdom</span>

                      </div>
                      <div className="">
                      <img className='inline' src="" alt="" /> <span className='font-lato '>Cookie Policy</span>

                      </div>

                  </div>

                  <div className="py-3 lg:py-0">
                      <p className='font-lato '>Our Hours</p>
                      <p className='font-lato '>MON-SAT 08:00 – 20:00SUN  <br /> 10:00 – 17:00</p>
                      <p className='font-lato '>Follow Us</p>
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
          <div className="py-5 fBorder ">
              <p className='font-volkhov text-center'>©2023 - Copyright IWO Cosmetic Product Safety Solution Ltd. </p>
          </div>
    </div>
  )
}

export default Footer