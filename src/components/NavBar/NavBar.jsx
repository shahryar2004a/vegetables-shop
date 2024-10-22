import React,{useState} from 'react'
import { IoMdCart } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import useDarkSide from '../Hook/useDarkSide';

import './NavBar.css'
export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);
  
    const toggleDarkMode = checked => {
      setTheme(colorTheme);
      setDarkSide(checked);
    };
  return (
    <>
    <nav className="bg-white dark:bg-zinc-700 dark:text-white px-4 py-8 font-YekanMedium">
      <div className="container mx-auto flex justify-between  items-center">
       <div className='flex '>

      
        <div className="text-3xl font-YekanHeavy cursor-pointer me-6 text-[#82ae46]">
          فروت لند
        </div>
        <ul className="hidden md:flex space-x-10">
          <li><a href="/" className="hover:text-gray-900 me-10">خانه</a></li>
          <li className="relative group">
            <button className=" hover:text-gray-900">خرید</button>
            {/* Dropdown Content */}
            <ul className="absolute hidden w-40 group-hover:block  text-black text-sm py-2 space-y-2 rounded shadow-lg">
            <li>
                <a href="/services/web-design" className="block px-4 py-2 ">خرید</a>
              </li>
              <li>
                <a href="/services/web-design" className="block px-4 py-2 ">محصولات مورد علاقه</a>
              </li>
              <li>
                <a href="/services/seo" className="block px-4 py-2 ">محصولات تکی</a>
              </li>
              <li>
                <a href="/services/content" className="block px-4 py-2 ">اشتراک</a>
                <li>
                <a href="/services/content" className="block px-4 py-2 ">سبد خرید</a>
              </li>
              </li>
            </ul>
          </li>
          <li><a href="/services" className="hover:text-gray-900">بلاگ</a></li>
          <li><a href="/contact" className="hover:text-gray-900">درباره ما</a></li>
          <li><a href="/contact" className="hover:text-gray-900">تماس با ما</a></li>
          <li className="hover:text-gray-900  mx-4"><a href="cart.html" className="flex items-center">[0]<IoMdCart/></a></li>

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
          <li><a href="/" className="block hover:bg-gray-600 p-2 rounded">خانه</a></li>
          <li><a href="/about" className="block hover:bg-gray-600 p-2 rounded">بلاگ</a></li>
          <li><a href="/services" className="block hover:bg-gray-600 p-2 rounded">درباره ما</a></li>
          <li><a href="/contact" className="block hover:bg-gray-600 p-2 rounded">تماس با ما</a></li>
          <li className="hover:text-gray-900  mx-4"><a href="cart.html" className="flex items-center">[0]<IoMdCart/></a></li>
          <DarkModeSwitch className='text-slate-400 size-[34px] ms-2 ' checked={darkSide} onChange={toggleDarkMode}/>

        </ul>
      </div>
    </nav>
    sdfsdf
    </>
  )
}
