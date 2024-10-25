import React from 'react'
import Header from '../../components/Header/Header'
import Topper from '../../components/Topper/Topper'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'


import './ContactUs.css'
export default function ContactUs() {
  return (
    <>
       <Topper />
       <NavBar /> 
       <Header title='تماس با ما'/>



       <section className="section-contact bg-gray-200 dark:bg-zinc-600">
<div className="container">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-4 website-info">
      <div className="item bg-white dark:text-white rounded-lg dark:bg-zinc-500">
        <div className="info">

    
        <p><span className='font-YekanMedium text-sm'>آدرس:</span> ایران - شیراز - بلوار جمهوری</p>
      </div>
    </div>
      <div className="item bg-white dark:text-white rounded-lg dark:bg-zinc-500">
        <div className="info">
        <p><span className='font-YekanMedium text-sm'>تلفن:</span> <a href="tel://1234567920">02112345678</a></p>
      </div>
    </div>
      <div className="item bg-white dark:text-white rounded-lg dark:bg-zinc-500">
        <div className="info">
        <p><span className='font-YekanMedium text-sm'>ایمیل:</span> <a href="mailto:info@yoursite.com">email@website.com</a></p>
      </div>
    </div>
      <div className="item bg-white dark:text-white rounded-lg  dark:bg-zinc-500">
        <div className="info">

     
        <p><span className='font-YekanMedium text-sm'>وب سایت</span> <a href="#">webrubik.com</a></p>
      </div>
    </div>
    </div>
</div>

<div className="grid xl:grid-cols-2 gap-y-4 gap-x-8 input-section">
<iframe className='border-0 w-[100%] h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.7218988893883!2d51.41704487525174!3d35.70846062847858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e016feb28b3bd%3A0x26075e3f5ace4c14!2sTehran%20Province%2C%20Tehran%2C%20District%206%2C%20Iranshahr%20St%2C%20Iran!5e0!3m2!1sen!2sus!4v1729772404995!5m2!1sen!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    <div>
        <form action="#" className="bg-white dark:bg-zinc-500 rounded-lg p-5 flex flex-col gap-y-4">
          
              <input className='form-input' type="text"  placeholder="نام"/>
          
              <input className='form-input' type="text"  placeholder="ایمیل"/>

              <input className='form-input' type="text"  placeholder="موضوع"/>
        
              <textarea name="" id="" cols="30" rows="7" className="outline-none focus:outline-none border-2 p-2 font-YekanMedium " placeholder="پیام"></textarea>
        
              <input className='form-btn py-3 px-5' type="submit" value="ارسال پیام"/>

          </form>
    </div>
</div>  


</section>






       <Footer/>      
    </>
  )
}
