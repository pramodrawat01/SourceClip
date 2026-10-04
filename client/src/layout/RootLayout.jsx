import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const RootLayout = () => {
  return (
     <div className="min-h-screen bg-[#fafafa] text-black">
      <ScrollToTop/>
        <Navbar/>

        <main className='pt-[var(--navbar-height)]'>
            <Outlet/>
        </main>
        <Footer />
     </div>
  )
}

export default RootLayout