import Link from 'next/link'
import React from 'react'

const ProfileBox = () => {
  return (
      <div className='bg-[#F6F6F6] py-20 px-4 sm:px-16'>
          
          <div className="w-full sm:grid grid-cols-2 gap-4">
        <div className="w-full mx-auto">
        <div className="w-full flex items-center rounded-xl px-4 py-4 gap-6 mx-auto sm:w-[374px] sm:h-[176px] bg-white">
            <div className=""> <div className="bg-[#d9d9d9] w-[60px] h-[60px] rounded-full flex justify-center items-center"><img className='' src="/images/calender.webp" alt="" /></div> </div>
            <div className="">
              <p className='font-popping text-[18px] font-semibold '>CONTACT US</p>
              <p className='font-popping text-[16px] py-4  '>click the button and follow the instruction to contact us</p>

              <div className="w-full">
                <a href="#Contact"><img className='ml-auto h-[55px]' src="/images/clickHere.png" alt="" /></a> 
              </div>
            </div>
          </div>
          
        </div>
        <div className="w-full mx-auto">

          <div className="w-full sm:mt-[100px] flex items-center rounded-xl px-4 py-4 gap-6 mx-auto my-10 sm:my-0 sm:w-[455px] sm:h-[251px] bg-white">
          <div className=""> <div className="bg-[#d9d9d9] w-[60px] h-[60px] rounded-full flex justify-center items-center"><img className='' src="/images/icons8-service-50.png" alt="" /></div> </div>
            <div className="">
              <p className='font-popping text-[18px] font-semibold '>VIEW OUR SERVICES</p>
              <p className='font-popping text-[16px] py-4  '>click the button to view our range of services we offer to our customers and choose how we can help you.</p>

              <div className="w-full">
                <Link href={'/service'}>                <img className='ml-auto  h-[55px]' src="/images/clickHere.png" alt="" />
 </Link>
              </div>
            </div>

              </div>
</div>
          </div>
         
    </div>
  )
}

export default ProfileBox