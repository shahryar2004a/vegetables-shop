import React from 'react'
import { MdLocalPhone } from "react-icons/md";
import { BiLogoTelegram } from "react-icons/bi";

import './Topper.css'
export default function Topper() {
  return (
    <>
      <div className='topper bg-[#82ae46] dark:bg-green-600'>
        <div className='md:flex justify-evenly items-center space-y-2 text-white text-sm p-2 font-YekanMedium'>
           <div className='flex items-center md:gap-2 '>
            <MdLocalPhone/>
            <span>02112345678</span>
           </div>
           <div className='flex items-center md:gap-2'>
            <BiLogoTelegram/>
            <span>EMAIL@WEBSITE.COM</span>
           </div>
           <div className='flex items-center md:gap-2'>
            <span>ارسال بین 3-5 روز کاری</span>
           </div>
        </div>
      </div>
    </>
  )
}
