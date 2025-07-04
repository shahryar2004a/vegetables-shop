import React, { useState } from "react";
import { customers } from "../../data";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./CustomerSlider.css";

export default function CustomerSlider() {
  const [currentPage, setCurrentPage] = useState(0);

  const slidesPerPage = 3;
  const totalPages = Math.ceil(customers.length / slidesPerPage);

  const handleSlideChange = (swiper) => {
    const newIndex = Math.floor(swiper.activeIndex / slidesPerPage);
    setCurrentPage(newIndex);
  };

  return (
    <section className="customer-section mt-[100px] mb-[100px]">
      <div className="container mx-auto my-10">
        <Swiper
          spaceBetween={30}
          onSlideChange={handleSlideChange}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {customers.map((customer) => (
            <SwiperSlide key={customer.id}>
              <div className="item dark:text-white">
                <div className="testimony-wrap p-4 pb-5">
                  <div
                    className="user-img mb-5"
                    style={{ backgroundImage: `url(${customer.img})` }}
                  >
                    <span className="quote flex items-center justify-center">
                      <FaQuoteLeft />
                    </span>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="mb-5 text-sm font-YekanMedium">
                      {customer.message}
                    </p>
                    <p className="text-2xl font-YekanHeavy">{customer.name}</p>
                    <span className="text-sm font-YekanMedium">
                      {customer.position}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4">
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === index ? "bg-[#82ae46]" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
