import React from 'react'
import Product from './Product/Product'
import { products } from '../../data'

import './Products.css'
export default function Products() {
  return (
    <>
      <section className='product-section'>
        <div className='container'>
        <div class="row product-title text-center">
            <span class="subheading font-YekanMedium mt-4 mb-4">انتخاب هوشمند محصولات ارگانیک</span>
                <h2 class="font-YekanHeavy text-5xl mt-3 dark:text-white">سرزمین میوه</h2>
                <p class="mt-4 font-YekanMedium text-xl dark:text-white">پیشنهاد ما به شما</p>
            
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20'>
              {
                products.map((product) =>(
                    <Product key={product.id} product={product}/>
                ))
              }
            </div>
        </div>
      </section>
    </>
  )
}
