import React,{useState} from 'react'
import Topper from '../../components/Topper/Topper'
import NavBar from '../../components/NavBar/NavBar'
import CustomerSlider from '../../components/CustomerSlider/CustomerSlider'
import Services from '../../components/Services/Services'
import Footer from '../../components/Footer/Footer'
import Subscribe from '../../components/Subscribe/Subscribe'
import { IoMdClose } from "react-icons/io";

import { FaCirclePlay } from "react-icons/fa6";
import aboutImg from '../../components/Images/pics/about.jpg'

import './AboutUs.css'
import Header from '../../components/Header/Header'
export default function AboutUs() {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
     <Topper/>
     <NavBar/>
        <Header title='به سلامتی خود اهمیت بدهید'/>
                <section className="bg-slate-100 dark:bg-slate-500 px-7 py-[100px]">
                      <div className="container">
                      <div className="grid lg:grid-cols-2 gap-x-20">
                        <div className=" md:p-5 flex justify-center items-center h-[500px] lg:h-full bg-no-repeat bg-cover bg-center" 
                         style={{backgroundImage:`url(${aboutImg})`}}>
                        <div onClick={openModal}
                        className="flex justify-center items-center ">
                        <FaCirclePlay className='text-6xl lg:text-8xl text-[#4CAF50]  hover:text-[#45a049]
                         cursor-pointer transition-all'/>
                      </div>
                        </div>
                        {isOpen && (
                        <div className="modal-overlay">
                          <div className="modal-content">
                            <iframe 
                              src="https://player.vimeo.com/video/45830194" 
                              width="800"    
                              height="450"   
                              frameBorder="0" 
                              allow="autoplay; fullscreen; picture-in-picture" 
                              allowFullScreen>
                            </iframe>
                            
                            <button className="close-modal-btn" onClick={closeModal}>
                                <IoMdClose/>
                              </button>
                          </div>
                        </div>
                      )}
                        <div className="mt-10 md:mt-0">
                      <div class="about-detail">
                        <div className=" mb-4 md:mt-5 heading dark:text-white">
                          <h1 className='font-YekanHeavy text-2xl md:text-4xl'>به وب سایت فروت لند خوش آمدین</h1>
                        </div>
                        <div className="md:pb-5 dark:text-white text-justify font-Yekan text-[13px] md:text-xl">
                          <p>امروزه به دلیل افزایش روزافزون جمعیت تامین غذا یکی ازچالش برانگیز ترین مسائلی است که هم درحال حاضروهم درآینده با آن مواجه هستیم نیاز به تامل زیادی دارد به همین دلیل دراین مقاله سعی براین داشتیم که بیشتر درمورد کشاورزی که پایه و اساس تامین غذا است بحث کنیم درحال حاضر درتمام دنیا برای پیشگیری ازخطرات احتمالی ناشی ازافت زدگی و بیماری محصولات کشاورزی و دامی ازانواع کودهای شیمیایی سموم کلره و فسفره و انتی بیوتیک استفاده میشود موادغذایی الی ممکن است درمعرض بیشتر ازغذاهای معمولی به الودگی میکروبیولوژیکی باشند
                          </p>
                          <p className='mt-8'>درحالیکه این احتمال وجود دارد که موادغذایی ارگانیک رشدپایین تری داشته باشند نتایج نشان داد که ارزش غذایی مهمترین عامل گرایش مصرف کنندگان برای خریدومصرف این محصولات می باشد و اهمیت افزایش اگاهی مصرف کنندگان نسبت به ارزش غذایی محصولات ارگانیک درتغییررفتارهای مصرفی آنان و توسعه و گسترش تولید و مصرف موادغذایی سالم مورد تایید قرارگرفت
                          </p>
                          <div className='mt-10'><a href="#" className="bg-[#82ae46] text-white font-YekanMedium border-2 border-[#82ae46] px-4 py-1 rounded-md hover:bg-transparent hover:text-[#82ae46] transition-all" >خرید آنی</a></div>
                        </div>
                        
                      </div>
                        </div>
                      </div>
          
        </div>

        </section>
      
     <CustomerSlider/>
     <Services/>
     <Subscribe/>
     <Footer/>
    </>
  )
}
