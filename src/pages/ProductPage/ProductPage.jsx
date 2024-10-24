import React,{useState} from 'react'
import Topper from '../../components/Topper/Topper'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { IoIosStarOutline } from "react-icons/io";
import { products } from '../../data'
import Product from '../../components/Products/Product/Product'
import { useParams } from 'react-router-dom';

import './ProductPage.css'
export default function ProductPage() {


  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productToAdd = { ...product, quantity: count }; // افزودن مقدار پیش‌فرض 1
    cart.push(productToAdd);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('محصول به سبد خرید اضافه شد!');
  };




  const [count, setCount] = useState(1) 
  const { id } = useParams(); 
  const product = products.find((p) => p.id === parseInt(id));

  const filteredProducts =products.filter(productData =>productData.category === product.category);

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0)) 
  }

    const handleChange = (event) => {
      const value = event.target.value
      if (!isNaN(value) && value >= 0) {
        setCount(Number(value)) 
      }
    }
  return (
    <>
      <Topper/>
      <NavBar/>
      <Header title='محصولات تکی'/>

      <section className="single-product mt-20 mb-40">
<div className="container">
    <div className="grid lg:grid-cols-2 p-12 gap-x-4">
        <div className="">
            <a href="pics/product-1.jpg" className="image-popup"><img src={product.img} className="img-fluid" alt="Colorlib Template"/></a>
        </div>
        <div className=" flex flex-col gap-y-4 mt-5">
         <h1 className=' font-YekanHeavy text-4xl text-black dark:text-white'>{product.title}</h1>
         <div className="rating flex ">
            <p className="text-left  flex items-center text-[#82ae46]">
                <a href="#" className="me-3">5.0</a>
                <a href="#"><IoIosStarOutline/></a>
                <a href="#"><IoIosStarOutline/></a>
                <a href="#"><IoIosStarOutline/></a>
                <a href="#"><IoIosStarOutline/></a>
                <a href="#"><IoIosStarOutline/></a>
            </p>
            <p className="text-left font-YekanMedium dark:text-white mr-4">
                <a href="#" className="mr-2">{product.vote} <span>رای</span></a>
            </p>
            <p className="text-left font-YekanMedium dark:text-white">
                <a href="#" className="mr-2">{product.sell} <span>فروخته شده</span></a>
            </p>
        </div>
         <p><span className=' font-YekanMedium text-xl dark:text-white'>12.000 تومان</span></p>
         <p className="text-justify font-YekanMedium dark:text-white">
           {product.description}
         </p>
       <div className="select-size w-50  font-YekanMedium">
        <select className="px-4 py-2 border outline-none focus:outline-none mb-3 w-50">
          <option>کوچک</option>
          <option value="1">متوسط</option>
          <option value="2">بزرگ</option>
          <option value="3">خیلی بزرگ</option>
        </select>
        
       </div>
       

        <div className="my-4">
          <div className=" mb-3 rounded-0 flex flex-wrap">
            <button onClick={decrement} id="btn_reduce" className="bg-gray-300  px-4 py-2 rounded-0 " type="button">-</button>
            
            <input onChange={handleChange} type="text" className='text-center w-[100px]  px-2 py-2 border outline-none focus:outline-none' id="input_number" value={count}/>
            <button onClick={increment} id="btn_increase" className="bg-gray-300 px-4 py-2 rounded-0 " type="button">+</button>
          </div>
          </div> 
          <h5 className="font-YekanMedium text-sm dark:text-white">موجودی {product.stock} کیلوگرم</h5>
          <button onClick={handleAddToCart} type="button" className=" bg-black sm:w-[40%] rounded-2xl text-white font-YekanMedium text-xl
           hover:bg-[#82ae46] transition-all my-4 p-3 px-5 fs-6" >اضافه به سبد خرید</button>
        </div>
        </div>
       
    </div>

</section>
      <section className='customer-section mt-[100px] mb-[100px]'>
        <div className='container'>
        <div className="row customer-title text-center">
            <span className="subheading font-YekanMedium mt-4 mb-4">محصولات</span>
                <h2 className="font-YekanHeavy text-5xl mt-3 dark:text-white">محصولات مشابه</h2>
                <p className="mt-4 font-YekanMedium text-xl dark:text-white">سلامتی خود را تضمین کنید</p>
            
            </div>
             
            <div className=" grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-20">

                {
                  filteredProducts.map(product =>(
                     <Product key={product.id} product={product} />
                  ))
                }
              </div>



            </div>
            </section>
      <Footer/>
    </>
  )
}
