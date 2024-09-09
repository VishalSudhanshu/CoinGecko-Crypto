import { useContext, useState } from "react"
import { fetchCoinHistory } from "../services/fetchCoinHistory"
import { CurrencyContext } from "../context/currencyContext"
import { useQuery } from "react-query"

function useFetchCoinHistory(coinId){
    const {currency} = useContext(CurrencyContext)

    const [days, setDays] = useState(1)
    const [daysInterval, setDaysInterval] = useState('')

    const {data: historicData, isLoading, isError} =  useQuery(['coinHistory', coinId, days, daysInterval, currency], () => fetchCoinHistory(coinId, days, daysInterval, currency),
    {
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    })

    return{
        historicData,
        isLoading,
        isError,
        setDaysInterval,
        setDays, 
        currency,
        days
    }
}

export default useFetchCoinHistory;