import React from 'react'

const Booking = () => {
  return (
    <div className='bg-[#F6F6F6] rounded-xl px-4 overflow-hidden mt-5 sm:px-8 py-20'>
    
      <div className="lg:flex w-full justify-center items-center gap-5 lg:gap-20">
        {/* 1 */}
        <div className="lg:w-[60%] xl:w-[50%]">
          {/* 1 verticle */}
          <div className="sm:flex justify-end">
            <div className="my-5 gm:flex  gap-6 xl:my-0 bg-white rounded-2xl py-4 items-center px-14">
              <div className="bg-[#D9D9D9] rounded-full  w-[64px] h-[64px] mb-2 gm:mb-0 flex justify-center items-center">              <img src="/images/calender.webp" alt="calender" />    </div>
              <div className="">
                <p className='font-popping text-[26px] text-[#333333]'>BOOK NOW</p>
                <p className='font-popping my-4 gm:my-0 text-[16px] text-[#333333]'>click the button and follow the <br className='hidden gm:block' />  instruction</p>
                <div className="flex justify-end">
                  <button className='font-popping bg-[#B8E8D1] rounded-full py-2 text-[16px] px-6'>Click here</button>
                </div>
              </div>
            </div>
          </div>
          {/* 2 verticle*/}
          <div className="sm:flex my-5 w-[100%] justify-start">
            <div className="my-5 gm:flex  gap-6 xl:my-0 bg-white rounded-2xl py-4 items-center px-14">
              <div className="bg-[#D9D9D9] rounded-full  w-[64px] h-[64px] mb-2 gm:mb-0 flex justify-center items-center">              <img src="/images/whatApp.svg" alt="whatsapp" />    </div>
              <div className="">
                <p className='font-popping text-[26px] leading-[40px] text-[#333333]'>FREE CONSULTATION</p>
                <p className='font-popping my-4 gm:my-0 text-[16px] text-[#333333]'>click the button and follow the <br className='hidden gm:block' /> instruction</p>
                <div className="flex justify-end">
                  <button className='font-popping bg-[#B8E8D1] rounded-full py-2 text-[16px] px-6'>Click here</button>
                </div>
              </div>
            </div>
          </div>
          {/* 3 verticle*/}
          <div className="sm:flex justify-end">
            <div className="my-6 gm:flex  gap-6 xl:my-0 bg-white rounded-2xl py-4 items-center px-14">
              <div className="bg-[#D9D9D9] rounded-full  w-[64px] h-[64px] mb-2 gm:mb-0 flex justify-center items-center">              <img src="/images/chorm.svg" alt="chorm" />    </div>
              <div className="">
                <p className='font-popping text-[26px] leading-[40px] text-[#333333]'>BROWSE THE SITE</p>
                <p className='font-popping my-4 gm:my-0 text-[16px] text-[#333333]'>click the button and follow the <br className='hidden gm:block' />  instruction</p>
                <div className="flex justify-end">
                  <button className='font-popping bg-[#B8E8D1] rounded-full py-2 text-[16px] px-6'>Click here</button>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* 2 */}
        <div className="my-5 xl:my-0 overflow-hidden bg-white rounded-lg py-14 gm:px-20">
            <p className="text-center font-popping text-[26px]  leading-[40px] font-bold mb-5">Packaging Sample</p>
          <div className="sm:flex   gap-8 items-center">
          <img className="mx-auto" src="/images/PackagingSlideL.webp" alt="packging" />
          <img className="mx-auto my-5 sm:my-0" src="/images/PackagingSlideL.webp" alt="packging" />

        </div>
      </div>

    </div>
    </div>
  )
}

export default Booking