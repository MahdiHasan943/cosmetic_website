'use client'
import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Services = () => {

  let [categories] = useState({
    Reports: [
      {
        id: 1,
        title: 'UK Responsible Person',
        titleTwo:'Cosmetic Product Safety Report',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
        imgOne: '/images/serviceImage1.webp',
        imgTwo:'/images/serviceImage2.webp',

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
        id: 1,
        title: 'UK Responsible Person',
        titleTwo:'Cosmetic Product Safety Report',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
        imgOne: '/images/serviceImage1.webp',
        imgTwo:'/images/serviceImage2.webp',

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
        id: 1,
        title: 'UK Responsible Person',
        titleTwo:'Cosmetic Product Safety Report',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
        imgOne: '/images/serviceImage1.webp',
        imgTwo:'/images/serviceImage2.webp',

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
        id: 1,
        title: 'UK Responsible Person',
        titleTwo:'Cosmetic Product Safety Report',
        date: '2d ago',
        commentCount: 9,
       shareCount: 5,
       imgOne: '/images/serviceImage1.webp',
       imgTwo:'/images/serviceImage2.webp',

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
    
  })
  return (
    <div id='Services' className=''>

<h2 className="font-popping py-10 text-[33px] leading-[54px] text-center font-bold text-[#333333] ">
       Our Services
      </h2>

      <div className="w-full mx-auto  px-2  sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 mx-auto focus:border-0 w-[50%] justify-center focus:outline-none  p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-[50%] mx-auto rounded-lg py-2.5  text-sm font-medium focus:border-0 focus:outline-none leading-5 font-lato text-[#333]',
                  '  focus:outline-none ',
                  selected
                    ? 'bg-white shadow underline decoration-[#007aff] underline-offset-8  focus:border-0 focus:outline-none '
                    : '  '
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2  w-full">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl  w-full mx-auto  p-3',
                ''
              )}
            >
              <div>
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="hidden   relative md:flex justify-center items-center rounded-md p-3 "
                  >
                 
                 <div className=" hidden md:flex  h-[600px] lg:h-[450px] xl:h-[400px] sliding-cards">
        <div className=" card   h-[453px] w-[50%] bg-opacity-[0.4] xl:w-[642px] mt-10 lg:mt-0  mx-auto py-2 px-10" style={{backgroundImage: `url(${post.imgOne})`}}>
          <h1 className="text-[#333] pb-2 text-[20px] font-bold">
           {post.title}
                        </h1>
                        <p className='text-[#333] font-semibold'> DEFINITION OF A RESPONSIBLE PERSON</p>
          <p className="text-[#333] opacity-[0.8]">
         
A Responsible Person is a legal or natural person designated with an address in the UK (Great Britain – England, Scotland and Wales) (or EU Community).
For each cosmetic product placed on the market, the Responsible Person shall ensure compliance with the relevant obligations set out in the cosmetics Regulation.
          </p>
        </div>

        <div className=" card h-[453px] w-[50%] xl:w-[642px] mt-10 lg:mt-0  mx-auto py-20 px-10" style={{backgroundImage: `url(${post.imgTwo})`}}>
          <h1 className="text-[#333] pb-10 font-bold">
          {post.titleTwo}
          </h1>
          <p className="text-white opacity-[0.8]">
          Your website is the face of your business online. Our team of 
          designers and developers can create a visually stunning, 
          user-friendly, and SEO-optimized website for your brand. We
          use the latest technology and design tools to ensure your 
          website looks great and functions seamlessly on desktop and 
          mobile devices. Plus, we optimize the site's structure, content, 
          and meta tags to help rank higher in search engine results pages.
          </p>
                      </div>
                      


                 
       
      </div>

                    
                  
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>

    </div>
  )
}

export default Services