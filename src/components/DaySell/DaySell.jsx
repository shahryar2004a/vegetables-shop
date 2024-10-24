import React,{useState,useEffect} from 'react'
import useCountdown from '../Hook/useCountdown'


import './DaySell.css'
export default function DaySell() {

    const { days, hours, minutes, seconds } = useCountdown(10);
  

  return (
    <>
   
            <section className="day-sell">
            <div className="container">
            <div className="row day-sell-content pt-10 mr-0 lg:mr-[80px] md:pt-[100px]">
                <div className="col-md-6  ">
                <span className="subheading green font-YekanMedium">بهترین قیمت</span>
                <h1 className="mb-4 mt-4 font-YekanHeavy text-4xl text-black">فروش روز</h1>
                <p className='font-YekanMedium text-xl'>سبد ارگانیک مخصوص شما</p>
                <h3><a href="#">اسفناج</a></h3>
                <span className="price text-gray font-YekanMedium text-xl"> 10 هزار تومان <a href="#" className="green">هم اکنون 5 هزارتومان</a></span>
                <div id="timer" className="flex mt-5 text-3xl md:text-5xl green gap-x-3 md:gap-x-7 ">
                    <div className="time" id="days">{days}<span className='time-text'>روز</span></div>
                    <div className="time" id="hours">{hours}<span className='time-text'>ساعت</span></div>
                    <div className="time" id="minutes">{minutes}<span className='time-text'>دقیقه</span></div>
                    <div className="time" id="seconds">{seconds}<span className='time-text'>ثانیه</span></div>
                </div>
                </div>
            </div>
            </div>
            </section>
    </>
  )
}
