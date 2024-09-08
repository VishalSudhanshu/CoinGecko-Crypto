import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { CurrencyContext } from '../context/currencyContext'

const MainLayout = () => {
    const [currency, setCurrency] = useState('USD')

  return (
    <>
         <CurrencyContext.Provider value={{currency , setCurrency}}>
                <Navbar />
                <Outlet/>
             </CurrencyContext.Provider>
    </>
  )
}

export default MainLayout