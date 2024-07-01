

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/home/Home"
import Cart from "../pages/cart/Cart"
// import PlaceOrder from '../pages/placeOrder/PlaceOrder'
import Contact from '../pages/contact-us/Contact'
import Menu from '../pages/menu/Menu'



function Routers() {
 
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>
    
    </>
  )
}

export default Routers