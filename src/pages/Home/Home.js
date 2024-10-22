import React from 'react'
import Topper from '../../components/Topper/Topper'
import NavBar from '../../components/NavBar/NavBar'

export default function Home() {
  return (
    <>
        <Topper/>
      <div className=' bg-red-500'>
      <NavBar/>
      </div>
    </>
  )
}
