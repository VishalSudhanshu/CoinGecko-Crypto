import axiosInstance from "../helper/axiosInstance";

export async function fetchCoinHistory( coinId, days, daysInterval, currency ){
    try {
        const response = await axiosInstance.get(`coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}&interval=${daysInterval}`)
        return response.data
    } catch (error) {
        console.log(error);
        return null;
    }
}