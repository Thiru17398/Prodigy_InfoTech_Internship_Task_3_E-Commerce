import axios from "axios";


var response;

export const ProductDetails = async () => {
    
    var response = await axios.get('http://localhost:5000/data');
    const data = response.data;
    return data;
}