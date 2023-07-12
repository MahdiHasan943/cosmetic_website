import React from 'react'

const Contact = () => {
  return (
    <div className='py-10' id='Contact'>
      <div className="mx-auto  contactMain w-full h-auto py-10   xl:w-[1240px]">
          <p className='font-popping py-10 text-[33px] leading-[54px] text-center font-bold text-[#333333] '>Contact Us</p>
        <form action="">
          
          <div className="mx-auto text-center px-6 w-full justify-center md:flex gap-6 items-center">
            <input className='my-4 md:my-0 w-full sm:w-auto sm:px-20   cField' type="text" />
            <input className='cField w-full sm:w-auto sm:px-20  ' type="text" />

          </div>
          <div className="mx-auto px-6 text-center md:my-5 w-full justify-center md:flex gap-6 items-center">
            <input className='my-4 w-full sm:w-auto sm:px-20  md:my-0 cField' type="text" />
            <input className=' cField w-full sm:w-auto sm:px-20  ' type="text" />

          </div>
          <div className="text-center mx-auto ">
          <input className='font-lato text-[#39425D] text-[13px] bg-[#fff] border border-white rounded-lg py-4 px-20 mt-4' type="submit" />

 </div>
          </form>
      </div>
    </div>
  )
}

export default Contact