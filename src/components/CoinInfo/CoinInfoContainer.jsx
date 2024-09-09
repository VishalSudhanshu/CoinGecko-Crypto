import React from 'react'
import CoinInfo from './CoinInfo'
import PageLoader from '../PageLoader/PageLoader'
import Alert from '../Alert/Alert'
import useFetchCoinHistory from '../../hooks/useFetchCoinHistory'

const CoinInfoContainer = ({coinId}) => {

    const {historicData, setDays, setDaysInterval, days, currency, isError, isLoading} = useFetchCoinHistory(coinId)

    if(isLoading){
        return <PageLoader/>
    }

    if(isError){
        return <Alert type="error" message="Error fetching data"/>
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