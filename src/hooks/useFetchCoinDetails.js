import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CurrencyContext } from "../context/currencyContext";
import { useQuery } from "react-query";
import fetchCoinDetails from "../services/fetchCoinDetails";

function useFetchcCoinDetails(coinId){
    const { currency } = useContext(CurrencyContext);
    const { data: coin, isLoading, isError } = useQuery(['coin', coinId], () => fetchCoinDetails(coinId),
        {
            // retry: 2,
            // retryDelay: 1000,
            cacheTime: 1000 * 60 * 2,
            staleTime: 1000 * 60 * 2,
        }
    )
    return{
        currency,
        coin,
        isError,
        isLoading
    }
}

export default useFetchcCoinDetails;