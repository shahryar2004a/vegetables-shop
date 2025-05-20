import React from "react";
import useCountdown from "../Hook/useCountdown";
import { Link } from "react-router-dom";

import "./DaySell.css";
export default function DaySell() {
  const { days, hours, minutes, seconds } = useCountdown(10);

  return (
    <section className="day-sell py-10 md:pt-[100px]">
      <div className="container">
        <div className="row day-sell-content mr-0 lg:mr-[80px]">
          <div className="col-md-6">
            <span className="subheading green font-YekanMedium">
              بهترین قیمت
            </span>

            <h1 className="mb-4 mt-4 text-4xl text-black font-YekanHeavy">
              فروش روز
            </h1>

            <p className="text-xl font-YekanMedium">سبد ارگانیک مخصوص شما</p>

            <h3 className="mt-4">
              <Link
                to="/shop"
                className="text-lg text-green-700 hover:underline font-YekanMedium"
              >
                اسفناج
              </Link>
            </h3>

            <span className="price text-gray-700 font-YekanMedium text-xl block mt-2">
              ۱۰ هزار تومان{" "}
              <span className="green ml-2">هم‌اکنون ۵ هزار تومان</span>
            </span>

            <div
              id="timer"
              className="flex mt-5 text-3xl md:text-5xl green gap-x-3 md:gap-x-7"
            >
              <div className="time" id="days">
                {days}
                <span className="time-text">روز</span>
              </div>
              <div className="time" id="hours">
                {hours}
                <span className="time-text">ساعت</span>
              </div>
              <div className="time" id="minutes">
                {minutes}
                <span className="time-text">دقیقه</span>
              </div>
              <div className="time" id="seconds">
                {seconds}
                <span className="time-text">ثانیه</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
