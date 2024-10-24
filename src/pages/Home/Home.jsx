import React from 'react'
import Topper from '../../components/Topper/Topper'
import NavBar from '../../components/NavBar/NavBar'
import Slider from '../../components/Slider/Slider'
import Services from '../../components/Services/Services'
import Category from '../../components/Category/Category'
import Products from '../../components/Products/Products'
import DaySell from '../../components/DaySell/DaySell'
import CustomerSlider from '../../components/CustomerSlider/CustomerSlider'
import Partner from '../../components/Partner/Partner'
import Subscribe from '../../components/Subscribe/Subscribe'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <NavBar/>
      <Slider/>
      <Services/>
      
      <div className='container'>
        <Category/>
      <Products/>
      </div>
      <DaySell/>
      <div className='container'>
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
