import React,{useState,useEffect} from 'react'
import Topper from '../../components/Topper/Topper'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Table from '../../components/Table/Table'
import Subscribe from '../../components/Subscribe/Subscribe'

export default function Cart() {

  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    setCartItems(cart)
  }, [])

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    setCartItems(updatedCart)
  }

  return (
    <>
      <Topper/>
      <NavBar/>
       <Header title='سبد خرید'/>

      <Table items={cartItems} onRemove={handleRemove}/>



         <Subscribe/>
  

       <Footer />
    </>
  )
}
