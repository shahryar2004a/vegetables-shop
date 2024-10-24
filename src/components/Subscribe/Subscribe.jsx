import React from 'react'
import ToUp from '../ToUp/ToUp'

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
     
      
          <form dir='rtl' className='mt-10 flex flex-col md:flex-row mx-auto w-[500px] md:w-[400px]'>
            
                <input dir="rtl" type="text"  className="subscribe-input font-YekanMedium w-[100%] md:w-[80%] p-3" id="basic-url"  placeholder="آدرس ایمیل خود را وارد کنید"/>
                <input type="submit"  className="subscribe-btn font-YekanHeavy text-xl w-[100%] md:w-[20%]  p-3" id="basic-addon3" value="اشتراک"/>
          </form>
        
     
    </div>
  </div>

</section> 
    </>
  )
}
