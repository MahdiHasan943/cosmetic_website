import React from 'react'

const CosmeticCard = () => {
    const cosmeticArd = [
        {
            "id": '1',
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
            "id": '2',
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
            "id": '3',
            "title": "Labelling / Packaging",
            "img": "newCosmeticCardsImg3.png",
        



            "del": "    Iwo CPSS Ltd reviews and / or prepares labels for your product to comply with cosmetics regulations.         Label Preparation",
            "c1": " Label Review  ",
            "c2": "Packaging Advice            ",
            "contact": " enquiries@iwocpssl.com  "
        },
        {
            "id": '4',
            "title": "Product Information File (PIF)",
            "img": "newCosmeticCardsImg4.png",
            "del": "            Iwo CPSS Ltd prepares your cosmetic product documentations (PIF) in readiness for compliance requests by UK / EU competent authorities.            ",
            "c1": "  For a dossier of your cosmetic products            ",
            "c2": "documentations  ",
            "then":" Then:            ",
            "contact": " enquiries@iwocpssl.com  "








        },
        {
            "id": '5',
            "title": "Physical Testing",
            "img": "newCosmeticCardsImg5.png",
            "del": "            Support Services:            ",
            "c1": "   E.g.",
            "c2": "Microbiological Tests Preservative Challenge Test Stability / Packaging Compatibility Tests Others  ",

                    "contact": " enquiries@iwocpssl.com  "
         


        },
        {
            "id": '6',
            "title": "Knowledge Gap Analysiss",
            "img": "newCosmeticCardsImg6.png",
           






            "del": " Need chemical / ingredient toxicological review? Need interpretation of laboratory test reports?",
            "c1": "  E.g. Microbiological, Stability, Preservative Efficacy Test (PET), etc.            ",
            "c2": "",
            "then":" Then:            ",

            "contact": " enquiries@iwocpssl.com  "
        },
        {
            "id": '7',
            "title": "Notification",
            "img": "newCosmeticCardsImg7.png",
            "del": "Iwo CPSS Ltd notifies your compliant products to the relevant notification portal. ",
            
            "c1": "       UK Submit Cosmetic Product Notification (UK SCPN)",
            "c2": "EU Cosmetic Product Notification Portal(CPNP)            ",
            "then":"You need an EU/UK RP. ",
            "contact": " enquiries@iwocpssl.com  "
       






        },
        {
            "id": '8',
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
              {
                  cosmeticArd.map(card => (
                      <div className=" rounded-md my-4 px-4 py-4">
                          <h2 className='text-[26px]  text-[#333]  font-semibold py-3'>{card.title}</h2>
                          <div className="sm:flex   gap-2">
                              <img className='sm:w-[272px] h-[360px]' src={`/images/${card.img}`} alt="" />
                              <div className="mt-4 pt-4 font-lato text-[15px] font-semibold sm:mt-0 ">
                                  <p className='mb-4'>{card.del}</p>
                                  <p className=''>{card?.uk}</p>
                                  <p className=''>{card?.ue}</p>
                                  <p className=''>{card?.ue1}</p>

                                  <p>{card?.yes}</p>

                                  <p>{card.c1}</p>
                                  <p>{card.c2}</p>
                                  <p className='py-4'>{card?.then}</p>

                                  <p className='my-4'>Contact :  <span className='text-[#0668E7]'> {card.contact}</span> </p>
                              </div>
                              
                          </div>
                </div>
            ))
              }
              
          </div>
    </div>
  )
}

export default CosmeticCard