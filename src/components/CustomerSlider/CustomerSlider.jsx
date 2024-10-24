import React,{useState} from 'react'
import {customers} from '../../data'
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css"




import './CustomerSlider.css'
export default function CustomerSlider() {
    const [currentPage, setCurrentPage] = useState(0); 

    const handleSlideChange = (swiper) => {
      const newIndex = Math.floor(swiper.activeIndex / 3); 
      setCurrentPage(newIndex);
    };
  return (
    <>
       <section className='customer-section mt-[100px] mb-[100px]'>
        <div className='container'>
        <div className="row customer-title text-center">
            <span className="subheading font-YekanMedium mt-4 mb-4">تجربه خرید</span>
                <h2 className="font-YekanHeavy text-5xl mt-3 dark:text-white">رضایت مشتری</h2>
                <p className="mt-4 font-YekanMedium text-xl dark:text-white">تجربه خرید خود را با دیگران در میان بگذارید</p>
            
            </div>
            <div className=" mx-auto my-10">
            <Swiper
        spaceBetween={30}         
        onSlideChange={handleSlideChange} 
        breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,   
            },
            1024: {
              slidesPerView: 3, 
            },
            1280: {
              slidesPerView: 3,
            },
            1536: {
              slidesPerView: 3,
            },
          }}
      >

        {
            customers.map(customer =>(
                <SwiperSlide key={customer.id}>
                <div className="item dark:text-white">
                      <div className="testimony-wrap p-4 pb-5">
                          <div className="user-img mb-5" style={{backgroundImage:`url(${customer.img})`}}>
                  <span className="quote d-flex align-items-center justify-content-center">
                    <FaQuoteLeft/>
                  </span>
                          </div>
                          <div className="mt-6 text-center">
                              <p className="mb-5 pl-4 line font-YekanMedium  text-sm">{customer.message}</p>
                              <p className="text-2xl font-YekanHeavy">{customer.name}</p>
                              <span className="position font-YekanMedium text-sm ">{customer.position}</span>
                          </div>
                      </div>
                  </div>
          </SwiperSlide>
            ))
        
        }
      </Swiper>

      <div className="flex justify-center mt-4">
        <div className="flex space-x-2">
          {Array.from({ length: 2 }, (_, index) => (
            <span
              key={index}
              className={`rounded-full me-2 w-3 h-3 ${currentPage === index ? 'bg-[#82ae46]' : 'bg-gray-400'}`}
            ></span>
          ))}
        </div>
      </div>
        </div>
        </div>
      </section>
    </>
  )
}
