import axiosInstance from "../helper/axiosInstance";

async function fetchCoinDetails(id){
    
    try {
        const response = await axiosInstance.get(`coins/${id}`)
        return response.data
    } catch (error) {
        console.error(error);
        return error
    }
}

export default fetchCoinDetails;