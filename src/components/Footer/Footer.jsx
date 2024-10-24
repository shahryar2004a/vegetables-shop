import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import ToUp from '../ToUp/ToUp';


import './Footer.css'
export default function Footer() {
    
  return (
    <>
    
      <footer className="footer relative px-4 sm:px-0  py-20  border-t">
  <div className="container ">
    <div className="grid lg:grid-cols-3 gap-y-8 gap-x-3">
      <div className="">
        <div className=" grid grid-cols-2 gap-x-4">
          <div className="dark:text-white">
            <h5 className="font-YekanHeavy text-xl">غذاهای گیاهی</h5>
            <p>یکی از بهترین راهها انتخاب درست مسیر زندگی هست با ما بسلامتی خود اهمیت بدین</p>
            <ul className="ftco-footer-social list-unstyled flex mt-5 ">
                <li className="ftco-animate dark:bg-gray-400 rounded-full "><a href="#" className='text-2xl'><FaTwitter/></a></li>
                <li className="ftco-animate dark:bg-gray-400 rounded-full "><a href="#" className='text-2xl'><FaFacebookF/></a></li>
                <li className="ftco-animate dark:bg-gray-400 rounded-full "><a href="#" className='text-2xl'><FaInstagram/></a></li>
            </ul>
          </div>
          <div className=" footer-menu dark:text-white ">
            <h5 className="font-YekanHeavy text-xl">منو</h5>
            <ul className="list-style ">
                <li><a href="#" className="py-2 hover-menu">خرید</a></li>
                <li><a href="#" className="py-2 hover-menu">درباره ی ما </a></li>
                <li><a href="#" className="py-2 hover-menu">کاتالوگ</a></li>
                <li><a href="#" className="py-2 hover-menu">ارتباط با ما</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="dark:text-white">
        <h5 className="font-YekanHeavy text-xl">سوالی هست؟</h5>
        <div className="">
            <ul className="list-style mr-l-5 pr-l-3 mr-4 ">
                <li><a href="#" className="py-2 d-block">اطلاعات حمل و نقل</a></li>
                <li><a href="#" className="py-2 d-block">شرایط بازگشت و تعویض</a></li>
                <li><a href="#" className="py-2 d-block">شرایط و ضوابط</a></li>
                <li><a href="#" className="py-2 d-block">سیاست حفظ حریم خصوصی</a></li>
            </ul>
      </div>
      </div>
      <div className=" flex flex-col gap-y-2 dark:text-white">
        <h5 className="font-YekanHeavy text-xl">وب روبیک</h5>
        <div className="block-23 mb-3">
            <ul className="list-style">
                <li className='flex items-center gap-x-3'><FaMapMarkerAlt/><span>ایران - شیراز - بلوار جمهوری</span>
                </li>
                <li className='flex items-center gap-x-3'><FaPhoneAlt/><span>02112345678</span></li>
                <li className='flex items-center gap-x-3'><FaEnvelope/><span>email@website.com</span>
                </li>
            </ul>
      </div>
    </div>
   
  </div>

  </div>
  <ToUp/>

</footer>





    </>
  )
}
