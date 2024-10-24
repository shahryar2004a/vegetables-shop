import React from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';


import './Product.css'
export default function Product({product}) {
  return (
    <>

<div className=" relative group bg-white product md:h-[300px] xl:h-[400px]">
         
  <div className="conainer-pic">
    <span className="product-off px-3">{product.off}%</span> 
  <Link to={`/product/${product.id}`} className="">
    
 <img className="product-pic w-[70%] mx-auto md:w-full" src={product.img} alt=""/>
  </Link>
</div>

  <div className="product-detail xl:group-hover:hidden">
    <h5 className='font-YekanHeavy text-2xl'>{product.title}</h5>
      <p className='font-YekanMedium text-xl mt-2'>{product.price} تومان</p>   
  </div>


  <div className="product-btn mt-5 md:mt-0 flex  md:hidden xl:group-hover:flex">
    <div className="menu">
      <a href="#"><IoMenuOutline/></a>
    </div>
  <div className="cart">
    <a href="#"><FaCartArrowDown/></a>
  </div>

<div className="heart">
  <a href="#"><FaHeart/></a>
</div>
</div>

</div>
    </>
  )
}
