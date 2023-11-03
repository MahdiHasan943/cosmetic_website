import React from 'react'

const CosmeticCard = () => {
    const cosmeticArd = [
        {
            "id": 'uk',
            "title": "Responsible Person (RP)",
            "img": "newCosmeticCardsImg.png",
            "del": "Iwo CPSS Ltd as a Responsible Person will assist you to bring your product to the UK and EU markets.",
            "uk":" Want to sell in the United Kingdom (UK)?",
             "ue":"Want to sell in the European Union (EU)?",
              "yes":"Yes.",


            "c1": "  You need a Responsible Person",
            "c2": " ",
            "contact": " enquiries@iwocpssl.com  "
        },

        {
            "id": 'safty',
            "title": "Cosmetic Product Safety Report (CPSR)",
            "img": "newCosmeticCardsImg2.png",
            "del": "Iwo CPSS Ltd prepares CPSRs for  manufacturers, importers and distributors. For large, medium and small businesses",
            
            
            
            "c1": "CPSR – Part A   ",
            "c2": "            (Safety  Assessment)            ",
            "ue": "            CPSR - Part B             ",
            "ue1": "            (Safety  Information )            ",

            "contact": " enquiries@iwocpssl.com  "
        },
        {
            "id": 'label',
            "title": "Labelling / Packaging",
            "img": "newCosmeticCardsImg3.png",
        



            "del": "    Iwo CPSS Ltd reviews and / or prepares labels for your product to comply with cosmetics regulations.         Label Preparation",
            "c1": " Label Review  ",
            "c2": "Packaging Advice            ",
            "contact": " enquiries@iwocpssl.com  "
        },
        {
            "id": 'file',
            "title": "Product Information File (PIF)",
            "img": "newCosmeticCardsImg4.png",
            "del": "            Iwo CPSS Ltd prepares your cosmetic product documentations (PIF) in readiness for compliance requests by UK / EU competent authorities.            ",
            "c1": "  For a dossier of your cosmetic products            ",
            "c2": "documentations  ",
            "then":" Then:            ",
            "contact": " enquiries@iwocpssl.com  "








        },
        {
            
         


        },
        {
            "id": 'knowledge',
            "title": "Knowledge Gap Analysiss",
            "img": "newCosmeticCardsImg6.png",
           






            "del": " Need chemical / ingredient toxicological review? Need interpretation of laboratory test reports?",
            "c1": "  E.g. Microbiological, Stability, Preservative Efficacy Test (PET), etc.            ",
            "c2": "",
            "then":" Then:            ",

            "contact": " enquiries@iwocpssl.com  "
        },
        {
            "id": 'other',
            "title": "Notification",
            "img": "newCosmeticCardsImg7.png",
            "del": "Iwo CPSS Ltd notifies your compliant products to the relevant notification portal. ",
            
            "c1": "       UK Submit Cosmetic Product Notification (UK SCPN)",
            "c2": "EU Cosmetic Product Notification Portal(CPNP)            ",
            "then":"You need an EU/UK RP. ",
            "contact": " enquiries@iwocpssl.com  "
       






        },
        {
            "id": 'pack',
            "title": "Non-Cosmetic Chemical Consumer Products.",
            "img": "newCosmeticCardsImg8.png",
            "del": "  Want to sell your non-cosmetic, chemical consumer products in the United Kingdom (UK / GB)? Yes.  ",
            "c1": " E.g. For General Product Safety Assessment - Chemical Toys - Chemical Household Products, e.g. Biocides, Detergents, etc.            ",
          



            "contact": " enquiries@iwocpssl.com  "
   },
        
]

  return (
      <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-4 px-4 ">
    
         
             
              


       
          
    
                      <div id="uk"   className=" rounded-md my-4 px-4 py-4">
                          <h2 className='text-[26px]  text-[#333]  font-semibold py-3'>Responsible Person (RP)</h2>
                          <div  className="sm:flex   gap-2">
                              <img className='sm:w-[272px] h-[360px]' src={`/images/newCosmeticCardsImg.png`} alt="" />
                              <div className="mt-4 pt-4 font-lato text-[15px] font-semibold sm:mt-0 ">
                                  <p className='mb-4'>Iwo CPSS Ltd as a Responsible Person will assist you to bring your product to the UK and EU markets.</p>
                                  <p className=' py-4'> Want to sell in the United Kingdom (UK)?</p>
                                  <p className=''>Want to sell in the European Union (EU)?</p>
                                  <p className='py-4'>Yes.</p>

                                  <p>You need a Responsible Person</p>
                            

                                  <p className='my-4'>Contact :  <span className='text-[#0668E7]'>enquiries@iwocpssl.com</span> </p>
                              </div>
                              
                          </div>
              </div>

              {/* 2 */}
             
        
              
              <div id="safty"   className=" rounded-md my-4 px-4 py-4">
                          <h2 className='text-[26px]  text-[#333]  font-semibold py-3'>Cosmetic Product Safety Report (CPSR)</h2>
                          <div  className="sm:flex   gap-2">
                              <img className='sm:w-[272px] h-[340px]' src={`/images/newCosmeticCardsImg2.png`} alt="" />
                              <div className="mt-4 pt-4 font-lato text-[15px] font-semibold sm:mt-0 ">
                                  <p className='mb-4'>Iwo CPSS Ltd prepares CPSRs for  manufacturers, importers and distributors. For large, medium and small businesses</p>
                                  <p className=' '> CPSR – Part A   </p>
                          <p className=''> (Safety Information  )   </p>
                          <p className='py-2'></p>
                          <p className=''> CPSR - Part B   </p>
                          <p className=''>    (Safety  Assessment )   </p>


                            

                                  <p className='my-4'>Contact :  <span className='text-[#0668E7]'>enquiries@iwocpssl.com</span> </p>
                              </div>
                              
                          </div>
              </div>
              {/* 3 */}
         
        
              
              <div id="label"   className=" rounded-md my-4 px-4 py-4">
                          <h2 className='text-[26px]  text-[#333]  font-semibold py-3'>Labelling / Packaging</h2>
                          <div  className="sm:flex   gap-2">
                              <img className='sm:w-[272px] h-[360px]' src={`/images/newCosmeticCardsImg3.png`} alt="" />
                              <div className="mt-4 pt-4 font-lato text-[15px] font-semibold sm:mt-0 ">
                                  <p className='mb-4'>Iwo CPSS Ltd reviews and / or prepares labels for your product to comply with cosmetics regulations.  </p>
                                  <p className=' py-4'>  Label Preparation</p>
        
                          <p className=''>  Label Review </p>
                                  <p className='my-4'>Packaging Advice   </p>
                            
                                  <p> Others</p>
                                  <p className='mt-4'>Contact :  <span className='text-[#0668E7]'>enquiries@iwocpssl.com</span> </p>
                              </div>
                              
                          </div>
              </div>
              {/* 4 */}
             
              <div id="file"   className=" rounded-md my-4 px-4 py-4">
                          <h2 className='text-[26px]  text-[#333]  font-semibold py-3'>Product Information File (PIF)</h2>
                          <div  className="sm:flex   gap-2">
                              <img className='sm:w-[272px] h-[360px]' src={`/images/newCosmeticCardsImg4.png`} alt="" />
                              <div className="mt-4 pt-4 font-lato text-[15px] font-semibold sm:mt-0 ">
                                  <p className='mb-4'>  Iwo CPSS Ltd prepares your cosmetic product documentations (PIF) in readiness for compliance requests by UK / EU competent authorities.  </p>
                                  <p className=' pt-4'> For a dossier of your cosmetic products  </p>
                                  <p className=''>documentations </p>

                            

                                  <p className='my-4'>Contact :  <span className='text-[#0668E7]'>enquiries@iwocpssl.com</span> </p>
                              </div>
                              
                          </div>
              </div>
              {/* 5 */}
            

              
              <div id="physical"   className=" rounded-md my-4 px-4 py-4">
                          <h2 className='text-[26px]  text-[#333]  font-semibold py-3'>Physical Testing</h2>
                          <div  className="sm:flex   gap-2">
                              <img className='' src={`/images/newCosmeticCardsImg5.png`} alt="" />
                              <div className="mt-4 pt-4 font-lato text-[15px] font-semibold sm:mt-0 ">
                                  <p className='mb-4'>  Support Services: </p>
                                  <p className='py-4'>E.g</p>

                                  <p>Microbiological Tests Preservative Challenge Test Stability / Packaging Compatibility Tests Others  </p>
                            

                                  <p className='my-4'>Contact :  <span className='text-[#0668E7]'>enquiries@iwocpssl.com</span> </p>
                              </div>
                              
                          </div>
              </div>
              {/* 6 */}
           
              <div id="knowledge"   className=" rounded-md my-4 px-4 py-4">
                          <h2 className='text-[26px]  text-[#333]  font-semibold py-3'>Knowledge Gap Analysiss</h2>
                          <div  className="sm:flex   gap-2">
                              <img className='sm:w-[272px] h-[360px]' src={`/images/newCosmeticCardsImg6.png`} alt="" />
                              <div className="mt-4 pt-4 font-lato text-[15px] font-semibold sm:mt-0 ">
                          <p className='mb-4'>Need chemical / ingredient toxicological review? </p>
                          <p className=' py-4'> Need interpretation of laboratory test reports?  </p>

                                  <p className=' py-4'> E.g. Microbiological, Stability, Preservative Efficacy Test (PET), etc.   </p>

                                  <p>Then: </p>
                            

                                  <p className='my-4'>Contact :  <span className='text-[#0668E7]'>enquiries@iwocpssl.com</span> </p>
                              </div>
                              
                          </div>
              </div>
              {/* 7 */}
          
              <div id="other"   className=" rounded-md my-4 px-4 py-4">
                          <h2 className='text-[26px]  text-[#333]  font-semibold py-3'>Notification</h2>
                          <div  className="sm:flex   gap-2">
                              <img className='sm:w-[272px] h-[360px]' src={`/images/newCosmeticCardsImg7.png`} alt="" />
                              <div className="mt-4 pt-4 font-lato text-[15px] font-semibold sm:mt-0 ">
                                  <p className='mb-4'>Iwo CPSS Ltd notifies your compliant products to the relevant notification portal. </p>
                                  <p className=' py-4'> UK Submit Cosmetic Product  Notification <br /> (UK SCPN)</p>
                                  <p className=''>EU Cosmetic Product <br /> Notification Portal <br /> (CPNP)</p>
                                  <p className='py-4'>You need an EU/UK RP.</p>

                            

                                  <p className='my-4'>Contact :  <span className='text-[#0668E7]'>enquiries@iwocpssl.com</span> </p>
                              </div>
                              
                          </div>
              </div>
              {/* 8 */}
           
          

     
<div id="pack"   className=" rounded-md my-4 px-4 py-4">
                          <h2 className='text-[26px]  text-[#333]  font-semibold py-3'>Non-Cosmetic Chemical Consumer Products.</h2>
                          <div  className="sm:flex   gap-2">
                              <img className='sm:w-[272px] h-[360px]' src={`/images/newCosmeticCardsImg8.png`} alt="" />
                              <div className="mt-4 pt-4 font-lato text-[15px] font-semibold sm:mt-0 ">
                                  <p className='mb-4'> Want to sell your non-cosmetic, chemical consumer products in the United Kingdom (UK / GB)? Yes. </p>
                            

                                  <p className='py-4'>E.g. For General Product Safety Assessment - Chemical Toys - Chemical Household Products, e.g. Biocides, Detergents, etc. </p>
                            

                                  <p className='my-4'>Contact :  <span className='text-[#0668E7]'>enquiries@iwocpssl.com</span> </p>
                              </div>
                              
                          </div>
              </div>         
              
        
              
              
          </div>
    </div>
  )
}

export default CosmeticCard