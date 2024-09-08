import React, { useContext, useState } from 'react'
import CoinInfo from './CoinInfo'
import { useQuery } from 'react-query'
import { CurrencyContext } from '../../context/currencyContext'
import { fetchCoinHistory } from '../../services/fetchCoinHistory'
import PageLoader from '../PageLoader/PageLoader'
import Alert from '../Alert/Alert'

const CoinInfoContainer = ({coinId}) => {

    const {currency} = useContext(CurrencyContext)

    const [days, setDays] = useState(7)
    const [daysInterval, setDaysInterval] = useState('')

    const{data: historicData, isLoading, isError} =  useQuery(('coinHistory', coinId, days, daysInterval, currency), ()=>fetchCoinHistory(coinId, days, daysInterval, currency),{
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    })

    if(isLoading){
        return <PageLoader/>
    }

    if(isError){
        return <Alert type={"error"} message={"Error fetching data"}/>
    }
  return (
    <>
        <CoinInfo 
            historicData={historicData} 
            setDays={setDays} 
            setDaysInterval={setDaysInterval} 
            days={days}
            currency={currency}
        />
    </>
  )
}

export default CoinInfoContainer