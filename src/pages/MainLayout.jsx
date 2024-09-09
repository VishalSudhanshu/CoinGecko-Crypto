import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { CurrencyContext } from '../context/currencyContext'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  const [currency, setCurrency] = useState('USD')

  return (
    <>
      <CurrencyContext.Provider value={{ currency, setCurrency }}>
        <Navbar />
        <Outlet />
        <Footer />
      </CurrencyContext.Provider>
    </>
  )
}

export default MainLayout