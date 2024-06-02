import React from 'react'
import Navbar from './assets/components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './assets/components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <div>Hotel Booking</div>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App