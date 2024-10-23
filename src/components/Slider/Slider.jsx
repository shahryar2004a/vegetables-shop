import React from 'react'
import { slides } from '../../data';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/react';

import './Slider.css'
export default function Slider() {
  return (
    <div>
  <Swiper
      spaceBetween={30}
      effect="fade" // افکت محو شدن برای تغییر خودکار
      fadeEffect={{ crossFade: true }} // محو شدن نرم
      centeredSlides={true}
       scrollbar={{ draggable: true }}
      autoplay={{
        delay: 4000, // تغییر خودکار هر 5 ثانیه
        disableOnInteraction: false, // غیرفعال نشدن Autoplay هنگام تعامل کاربر
      }}
      loop={true}
      modules={[Autoplay, EffectFade, Pagination, Navigation]} // ماژول‌های مورد نیاز
      className="mySwiper h-[89vh]"
      onSlideChangeTransitionStart={() => {
        // فعال کردن انیمیشن محو شدن فقط در تغییر خودکار
        document.querySelector('.swiper-wrapper').style.transition = 'opacity 0.5s ease';
      }}
      onTouchStart={() => {
        // غیرفعال کردن محو شدن هنگام کشیدن توسط کاربر
        document.querySelector('.swiper-wrapper').style.transition = 'none';
      }}
    >

        {
            slides.map((slide)=>(
                <SwiperSlide key={slide.id}>
                <div style={{backgroundImage: `url(${slide.image})`}} 
                className="relative flex flex-col items-center justify-center h-screen w-full bg-cover bg-center bg-no-repeat text-white">
                   <div className="absolute inset-0 bg-black/10"></div>
                  <h1 className="relative font-YekanHeavy text-4xl md:text-6xl text-center mb-8 z-10">{slide.title}</h1>
                  <p className="mb-8 z-10 font-YekanMedium text-xl">{slide.description}</p>
                  <button className="bg-[#82ae46] z-10 text-white font-bold py-2 hover:bg-transparent transition-all ease-in-out border border-[#82ae46] px-4 rounded">
                  مشاهده جزئیات
                  </button>
                </div>
              </SwiperSlide>
            ))
        }

    </Swiper>
    </div>
  )
}
