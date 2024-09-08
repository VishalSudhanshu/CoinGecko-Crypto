import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../../pages/MainLayout'
import PageLoader from '../PageLoader/PageLoader'
import CustomerErrorBoundary from '../CustomeErrorBoundary/CustomerErrorBoundary'

const Home = lazy(()=> import('../../pages/Home'))
const CoinDetailsPage = lazy(()=> import('../../pages/CoinDetailsPage'))

const Routing = () => {
  return (
    <CustomerErrorBoundary>
      <Routes>
        <Route path='/' element={<MainLayout/>} >

          <Route index element={
            <Suspense fallback={<PageLoader/>}>
              <Home/>
            </Suspense>
          }/>
          
          <Route path='/details/:coinId' element={
            <Suspense fallback={<PageLoader/>}>
              <CoinDetailsPage/>
            </Suspense>
          } />
          
        </Route>

    </Routes>
    </CustomerErrorBoundary>
  )
}

export default Routing