import React from 'react'
import formatNumber from '../helper/formatNumber'
import PageLoader from '../components/PageLoader/PageLoader'
import CoinInfoContainer from '../components/CoinInfo/CoinInfoContainer'
import ExpandTextButton from '../components/ExpandTextButton/ExpandTextButton'
import useFetchcCoinDetails from '../hooks/useFetchCoinDetails'
import { useParams } from 'react-router-dom'

const CoinDetailsPage = () => {
    
    const { coinId } = useParams()
   const {coin, currency, isError, isLoading} = useFetchcCoinDetails(coinId)
    if (isLoading) {
        return <PageLoader/>
    }
    if (isError) {
        return <div>Error: Something went wrong</div>
    }


    return (
        <div className='flex flex-col md:flex-row  w-full md:px-4 sm:px-2 py-4'>
            <div
                className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 md:border-r-2 border-gray-500"
            >
                <img
                    alt={coin?.name}
                    src={coin?.image?.large}
                    className="h-52 mb-5"
                />
                <h1
                    className="text-4xl font-bold mb-5"
                >
                    {coin?.name}
                </h1>
                <p
                    className="w-full px-3 md:px-6 py-4 text-justify"
                >
                    <ExpandTextButton text={coin?.description?.en}/>
                </p>

                <div
                    className="w-full flex flex-col md:flex-row md:justify-around md:px-4 px-2 py-4"
                >
                    <div 
                        className="flex items-center mb-4 md:mb-0"
                    >
                        <h2 className="text-xl font-bold ">
                            Rank
                        </h2>
                        <span className="ml-3 text-xl ">
                            {coin?.market_cap_rank}
                        </span>
                    </div>

                    <div className="flex items-center mb-4 md:mb-0">
                        <h2 className="text-xl text-yellow-400 font-bold ">
                            Current Price
                        </h2>
                        <span className="ml-3 text-xl ">
                            {formatNumber(coin?.market_data.current_price[currency.toLowerCase()])} {currency}
                        </span>
                    </div>
                </div>
            </div>

            <div className="md:w-2/3 w-full ">
                <CoinInfoContainer coinId={coinId} />
            </div>
        </div>
    )
}

export default CoinDetailsPage