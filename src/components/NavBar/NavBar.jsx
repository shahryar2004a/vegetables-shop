import React,{useState,useEffect} from 'react'
import { IoMdCart } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import useDarkSide from '../Hook/useDarkSide';
import { Link } from 'react-router-dom';

import './NavBar.css'
export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

      // برای تشخیص اسکرول
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) { // مقدار دلخواه برای شروع fixed شدن
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);
  
    const toggleDarkMode = checked => {
      setTheme(colorTheme);
      setDarkSide(checked);
    };
  return (
    <>
    <nav  className={`bg-white dark:bg-zinc-700 dark:text-white w-full shadow-xl	 ${isScrolled ? 'fixed top-0 z-50' : 'relative'} px-4 py-4 md:py-6 font-YekanMedium`}>
      <div className="container mx-auto flex justify-between  items-center">
       <div className='flex '>

      
        <div className="text-3xl font-YekanHeavy cursor-pointer me-6 text-[#82ae46]">
        زیست‌کالا
        </div>
        <ul className="hidden md:flex space-x-10">
          <li><Link to="/" className="hover-menu me-10">خانه</Link></li>
          <li className="relative group">
            <button className=" hover-menu">خرید</button>
            {/* Dropdown Content */}
            <ul className="absolute hidden z-10 w-40 group-hover:block transition-all ease-in-out  bg-white dark:bg-zinc-700  text-black dark:text-white text-sm py-2 space-y-2 rounded shadow-lg">
            <li>
                <Link to="#" className="block px-4 py-2 hover-menu ">خرید</Link>
              </li>
              <li>
                <Link to="/wishlist" className="block px-4 py-2 hover-menu ">محصولات مورد علاقه</Link>
              </li>
              <li>
                <Link to="/product" className="block px-4 py-2 hover-menu">محصولات تکی</Link>
              </li>
              <li>
                <Link to="#" className="block px-4 py-2 hover-menu">اشتراک</Link>
                </li>
                <li>
                <Link to="#" className="block px-4 py-2 hover-menu">سبد خرید</Link>
              </li>
             
            </ul>
          </li>
          <li><Link to="/blogs" className="hover-menu">بلاگ</Link></li>
          <li><Link to="/aboutUs" className="hover-menu">درباره ما</Link></li>
          <li><Link to="/contactUs" className="hover-menu">تماس با ما</Link></li>
          <li className="hover-menu  mx-4"><a href="cart.html" className="flex items-center">[0]<IoMdCart/></a></li>

        </ul>

        </div>
        <DarkModeSwitch className='text-slate-400 hidden md:flex  size-[34px]' checked={darkSide} onChange={toggleDarkMode}/>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-2xl">
          <IoMdMenu/>
          </button>
          
        </div>

  
      </div>
                  {/* Mobile Menu */}
   <div className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}>
        <ul className="flex flex-col  space-y-2 p-4 ps-10">
          <li><a href="/" className="mobile-menu-item ">خانه</a></li>
          <li><a href="/about" className="mobile-menu-item ">بلاگ</a></li>
          <li><a href="/services" className="mobile-menu-item ">درباره ما</a></li>
          <li><a href="/contact" className="mobile-menu-item">تماس با ما</a></li>
          <li className="mobile-menu-item"><a href="cart.html" className="flex items-center">[0]<IoMdCart/></a></li>
          <li><DarkModeSwitch className='text-slate-400 size-[34px] ms-2 ' checked={darkSide} onChange={toggleDarkMode}/></li>

        </ul>
      </div>
    </nav>
    </>
  )
}
