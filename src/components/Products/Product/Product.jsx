import React from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";


import './Product.css'
export default function Product({product}) {
  return (
    <>
        <div class=""> 

<div class=" relative group bg-white product md:h-[400px]">
         
  <div class="conainer-pic">
    <span class="product-off px-3">{product.off}%</span> 
  <a href="#" class="">
    
 <img class="product-pic w-[70%] mx-auto md:w-full" src={product.img} alt=""/>
  </a>
</div>

  <div class="product-detail group-hover:hidden">
    <h5 className='font-YekanHeavy text-2xl'>{product.title}</h5>
      <p className='font-YekanMedium text-xl mt-2'>{product.price} تومان</p>   
  </div>


  <div class="product-btn mt-5 md:mt-0 flex  md:hidden lg:group-hover:flex">
    <div class="menu">
      <a href="#"><IoMenuOutline/></a>
    </div>
  <div class="cart">
    <a href="#"><FaCartArrowDown/></a>
  </div>

<div class="heart">
  <a href="#"><FaHeart/></a>
</div>
</div>

</div>
</div>
    </>
  )
}
