import { fetchProductsAPI } from "../../api/productAPI"
import { ActionTypes } from "../constants/action_type"

export const fetchProducts=()=>async (dispatch)=>{
    let response=await fetchProductsAPI();
    dispatch({
        type:ActionTypes.FETCH_PRODUCTS,
        payload:response
    });
}

export const setPriceRangeFilter=(filterId)=>{
    return{
        type:ActionTypes.SELECTED_PRICERANGE_FILTER,
        payload:filterId
    }
}
export const setProducts=(products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}

export const selectedProduct=(product)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}

export const filterProduct=(product)=>{
    return{
        type:ActionTypes.FILTER_PRODUCT,
        payload:product
    }
}

export const removeSelectedProduct=()=>{
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}