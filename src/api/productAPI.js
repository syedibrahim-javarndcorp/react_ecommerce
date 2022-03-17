import axios from "axios";
import { NETWORK_API } from "../constants/network";
import Product from "../models/product";


export const fetchProductsAPI=async ()=>{
    try {
        let response=await axios.get(NETWORK_API);
        let parsedProductData=[];
        response=response.data;
        response.map((item)=>parsedProductData.push(new Product(item)))
        return parsedProductData;
    } catch (error) {
        console.error(error);
    }
}