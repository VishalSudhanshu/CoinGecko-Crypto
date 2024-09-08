import React, { useContext, useEffect, useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "react-query";
import formatNumber from "../../helper/formatNumber";
import { CurrencyContext } from "../../context/currencyContext";
import { useNavigate, useParams } from "react-router-dom";
import PageLoader from "../PageLoader/PageLoader";

function CoinTable() {

    const navigate = useNavigate();
    const {currency} = useContext(CurrencyContext)
    const [page, setPage] = useState(1);

    function handleCoinRedirect(id){
        navigate(`/details/${id}`)
    }
    const { data, isLoading, isError, error } = useQuery(['coin', page, currency], () => fetchCoinData(page, currency),
        {
            // retry: 2,
            // retryDelay: 1000,
            cacheTime: 1000 * 60 * 2,
            staleTime: 1000 * 60 * 2,
        }
    )
    if (isError) {
        return <div>Error: {error.message}</div>
    }
    return (
        <>
            <div className="flex p-2 mt-2 justify-between max-w-5xl m-auto bg-yellow-400 text-black font-semibold md:px-5 rounded-lg md:text-2xl text-lg">
                <div className="md:basis-[35%]">
                    Coin
                </div>
                <div className="md:basis-[22.5%]">
                    Last Price
                </div>
                <div className="md:basis-[20%] ">
                    24h Change
                </div>
                <div className="hidden sm:block md:basis-[22.5%]">
                    Market Cap
                </div>
            </div>

            <div className="p-2 justify-between max-w-5xl m-auto">
                {isLoading && <PageLoader/>}
                {data && data.map((coin) => {
                    return (
                        <div onClick={()=>handleCoinRedirect(coin.id)} key={coin.id} className="w-full text-white p-3 rounded-xl my-3 border-slate-400 border-2">
                            <div className="w-full flex justify-between  items-center">
                                <div className="sm:flex gap-4 md:gap-8 items-center md:basis-[35%] ">
                                    <div>
                                        <img className="md:w-[72px] md:h-[72px] w-11 h-11" src={coin.image} alt={coin.name} loading="lazy"/>
                                    </div>
                                    <div>
                                        <div className="text-base md:text-2xl font-semibold">{coin.name}</div>
                                        <div className="uppercase">{coin.symbol}</div>
                                    </div>
                                </div>
                                <div className=" md:basis-[22.5%] text-wrap">
                                    <div >{formatNumber(coin.current_price)} {currency}</div>
                                </div>
                                <div className=" md:basis-[22.5%] text-wrap">
                                    <div >{coin.price_change_percentage_24h.toFixed(2)}%</div>
                                    <div>{coin.price_change_24h.toFixed(3)} {currency}</div>
                                </div>
                                <div className=" md:basis-[20%] hidden sm:block max-w-[25%] text-wrap">
                                    <div>{formatNumber(coin.market_cap)} {currency}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
                <div className="w-full flex justify-center gap-10 ">
                    <button 
                    disabled={page === 1}
                    onClick={()=> setPage(page-1)}
                    className="btn btn-outline btn-primary px-8 "
                    >
                        Prev
                    </button>
                    <button
                    onClick={()=> setPage(page+1)} 
                    className="btn btn-outline btn-primary px-8"
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}

export default CoinTable;