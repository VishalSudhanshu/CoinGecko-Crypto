import axiosInstance from "../helper/axiosInstance";

export async function fetchCoinHistory( coinId, days, daysInterval, currency ){
    try {
        const response = await axiosInstance.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}&interval=${daysInterval}`)
        console.log(response.data);
        return response.data
    } catch (error) {
        console.log(error);
        return error;
    }
}