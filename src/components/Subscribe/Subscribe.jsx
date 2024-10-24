import React from 'react'

import './Subscribe.css'
export default function Subscribe() {
  return (
    <>
     <section  className="subscribe-section dark:bg-zinc-700 dark:border-t-2 dark:border-gray-500">
  <div  className="container">
    <div  className="flex justify-between flex-wrap items-center dark:text-white  ">
      <div  className="flex flex-col gap-y-5  mx-auto">
         <h3 className='font-YekanHeavy text-[25px] sm:text-3xl mx-auto md:text-4xl'>مشترک شدن در خبرنامه ما</h3>
         <p className='font-YekanMedium text-sm'>دریافت ایمیل درباره آخرین مغازه ها و پیشنهادات ویژ</p>
      </div>
     
      
          <form dir="ltr" className='mt-10 mx-auto'>
              <div  className="flex ">
                <input type="submit"  className="subscribe-btn font-YekanHeavy text-xl w-[30%]  p-3" id="basic-addon3" value="اشتراک"/>
                <input dir="rtl" type="text"  className="subscribe-input font-YekanMedium w-[70%] p-3" id="basic-url"  placeholder="آدرس ایمیل خود را وارد کنید"/>
              </div>
          </form>
        
     
    </div>
  </div>
  <div  className="toUp"><a href="#nav" className="text-center">
    <div  className="toUp-icon">
         
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
          </svg>
        </div>
    </a> 
    

  </div>
</section> 
    </>
  )
}
