import axios from "axios";



const BASE_URL = 'http://localhost:5000';

export const Fetch = async (params) => {
    
    var response = await axios.get(BASE_URL + params);
    const data = response.data;
    return data;
}