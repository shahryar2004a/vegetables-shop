import React from 'react'
import Images from '../Images/Images'

export default function Partner() {
  return (
    <>
      <section className="partner-section py-8 md:py-16 ">
  <div className="container py-5">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4  lg:grid-cols-3 xl:grid-cols-5 gap-x-5">
      <div className="partner dark:bg-slate-400 rounded-lg p-3">
      <a href="#" className=""><img src="pics/partner-1.png" alt="" className="w-[70%] h-[70%] md:w-[80%] md:h-[80%] lg:w-[90%] lg:h-[90%] xl:w-[100%] xl:h-[100%]  mx-auto px-5"/></a>
      </div>
      <div className=" partner dark:bg-slate-400 rounded-lg p-3">
        <a href="#" className=""><img src="pics/partner-2.png" alt="" className="w-[70%] h-[70%] md:w-[80%] md:h-[80%] lg:w-[90%] lg:h-[90%] xl:w-[100%] xl:h-[100%]  mx-auto px-5"/></a>
        </div>
        <div className=" partner dark:bg-slate-400 rounded-lg p-3">
          <a href="#" className=""><img src="pics/partner-3.png" alt="" className="w-[70%] h-[70%] md:w-[80%] md:h-[80%] lg:w-[90%] lg:h-[90%] xl:w-[100%] xl:h-[100%]  mx-auto px-5"/></a>
          </div>
          <div className=" partner dark:bg-slate-400 rounded-lg p-3">
            <a href="#" className="partner"><img src="pics/partner-4.png" alt="" className="w-[70%] h-[70%] md:w-[80%] md:h-[80%] lg:w-[90%] lg:h-[90%] xl:w-[100%] xl:h-[100%] mx-auto  px-5"/></a>
            </div>
            <div className="partner dark:bg-slate-400 rounded-lg p-3">
              <a href="#" className=""><img src="pics/partner-5.png" alt="" className="w-[70%] h-[70%] md:w-[80%] md:h-[80%] lg:w-[90%] lg:h-[90%] xl:w-[100%] xl:h-[100%]  mx-auto px-5"/></a>
              </div>
    </div>
  </div>
</section>
    </>
  )
}
