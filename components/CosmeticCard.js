import React from 'react'

const CosmeticCard = () => {
    const cosmeticArd = [
        {
            "id": '1',
            "title": "Cosmetic Product Safety Report (CPSR)",
            "img": "newCosmeticCardsImg.png",
            "del": "Iwo CPSS Ltd prepares CPSRs for manufacturers, importers and distributors. For large, medium and small businesses",
            "c1": "   CPSR – Part A (Safety Information)",
            "c2": "CPSR - Part B (Safety Assessment)",
            "contact": " enquiries@iwocpssl.com  "
        },

        {
            "id": '2',
            "title": "Responsible Person (RP)",
            "img": "newCosmeticCardsImg.png",
            "del": "Iwo CPSS Ltd as a Responsible Person will assist you to bring your product to the UK   and EU markets.",
            "c1": "          Want to sell in the United Kingdom (UK)?  ",
            "c2": "Want to sell in the European Union (EU)?            ",
            "yes": "yes",
            "need":"You need a Responsible Person            ",
            "contact": " enquiries@iwocpssl.com  "
        },
        {
            "id": '3',
            "title": "Product Information File (PIF)",
            "img": "newCosmeticCardsImg.png",
            "del": "Iwo CPSS Ltd prepares your  cosmetic product documentations (PIF) in readiness for compliance request by UK /  EU competent authorities.",
            "c1": " A dossier of your cosmetic products      ",
            "c2": "documentations.     ",
            "contact": " enquiries@iwocpssl.com  "
        },
        {
            "id": '4',
            "title": "Notification",
            "img": "newCosmeticCardsImg.png",
            "del": "Iwo CPSS Ltd notifies your compliant products to the relevant notification portal.",
            "c1": "               UK Submit Cosmetic Product Notification(UK SCPN)            ",
            "c2": "EU Cosmetic Product   Notification Portal  (CPNP)  ",
            "you":" You need an RP.            ",
            "contact": " enquiries@iwocpssl.com  "



        },
        {
            "id": '5',
            "title": "Labelling / Packaging",
            "img": "newCosmeticCardsImg.png",
            "del": "Iwo CPSS Ltd reviews or prepares labels for your product to comply with cosmetics regulations.",
            "c1": "    Label Preparation ",
            "c2": "Label Review             ",
            "l3":"Packaging Advise",
            "contact": " enquiries@iwocpssl.com  "
         


        },
        {
            "id": '6',
            "title": "Knowledge Gap Analysis",
            "img": "newCosmeticCardsImg.png",
            "del": "",
            "c1": "   ",
            "c2": "",
            "contact": " enquiries@iwocpssl.com  "
        },
        {
            "id": '7',
            "title": "Physical Testing",
            "img": "newCosmeticCardsImg.png",
            "del": " Support Services ",
            "eg":"E.g.            ",
            "c1": "  Microbiological Tests  Preservative Challenge Test Stability / Packaging Compatibility Tests.",
            "c2": "",
            "contact": " enquiries@iwocpssl.com  "



        },
        {
            "id": '8',
            "title": "Non-Cosmetic Chemical Consumer Products.",
            "img": "newCosmeticCardsImg.png",
            "del": "",
            "c1": "  ",
            "c2": "",
            "contact": " enquiries@iwocpssl.com  "
   },
        
]

  return (
      <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-4 px-4 ">
              {
                  cosmeticArd.map(card => (
                      <div className="shadow-summery rounded-md my-4 px-4 py-4">
                          <h2 className='text-[26px]  text-[#333] text-center font-semibold py-3'>{card.title}</h2>
                          <div className="sm:flex   gap-2">
                              <img src={`/images/${card.img}`} alt="" />
                              <div className="mt-4 sm:mt-0 ">
                                  <p className='mb-4'>{card.del}</p>
                                  <p>{card.c1}</p>
                                  <p>{card.c2}</p>
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