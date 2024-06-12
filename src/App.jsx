import React from 'react'
import Navbar from './assets/components/Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './assets/components/Footer/Footer'

const App = () => {
  return (
    <>
    {/* <Navbar/> */}
   
    <Outlet/>
    </>
  )
}

export default App