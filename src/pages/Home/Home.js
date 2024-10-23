import React from 'react'
import Topper from '../../components/Topper/Topper'
import NavBar from '../../components/NavBar/NavBar'
import Slider from '../../components/Slider/Slider'
import Services from '../../components/Services/Services'
import Category from '../../components/Category/Category'

export default function Home() {
  return (
    <>
      <NavBar/>
      <Slider/>
      <Services/>
      <Category/>
    </>
  )
}
