import React from 'react'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import ScrollToTop from './components/Hook/useScrollToTop'

import './App.css'
export default function App() {

  let router =useRoutes(routes)
  return (
    <>
    <ScrollToTop/>
     {router} 
    </>
  )
}
