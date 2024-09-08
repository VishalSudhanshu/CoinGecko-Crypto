import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import CoinTable from './components/CoinTable/CoinTable'
import Home from './pages/Home'
import { CurrencyContext } from './context/currencyContext'
import Routing from './components/Routing/Routing'

function App() {
  
  return (
    <>
      <Routing/>
    </>
  )
}

export default App
