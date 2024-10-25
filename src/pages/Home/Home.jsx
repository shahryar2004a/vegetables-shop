import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Slider from '../../components/Slider/Slider'
import Services from '../../components/Services/Services'
import Category from '../../components/Category/Category'
import DaySell from '../../components/DaySell/DaySell'
import CustomerSlider from '../../components/CustomerSlider/CustomerSlider'
import Partner from '../../components/Partner/Partner'
import Subscribe from '../../components/Subscribe/Subscribe'
import Footer from '../../components/Footer/Footer'
import ProductList from '../../components/Products/ProductList'
import { products } from '../../data'
import HeaderSection from '../../components/HeaderSection/HeaderSection'

export default function Home() {

  const filteredProducts =products.filter(product => product.sell >50);

  return (
    <>
      <NavBar/>
      <Slider/>
      <Services/>
      
      <div className='container'>
        <Category/>
        <HeaderSection topHeading='انتخاب هوشمند محصولات ارگانیک' heading='سرزمین میوه' subHeading=' محصولات پر فروش'/>
      <ProductList products={filteredProducts}/>
      </div>
      <DaySell/>
      <div className='container'>
      <HeaderSection topHeading='تجربه خرید' heading='رضایت مشتری' subHeading='تجربه خرید خود را با دیگران در میان بگذارید'/>
        <CustomerSlider/>
        
      </div>
      <div className='container border-t-2 dark:border-gray-500'>
      <Partner/>
      </div>
      <Subscribe/>
      <div className='container border-t-2 dark:border-gray-500'>
      <Footer/>
        
      </div>
    </>
  )
}
