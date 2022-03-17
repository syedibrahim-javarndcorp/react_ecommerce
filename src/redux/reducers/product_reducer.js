import { ActionTypes } from "../constants/action_type";

const initialState={
    products:[]
}
export const productReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
        case ActionTypes.FETCH_PRODUCTS:
            return {...state,products:payload};
        default:
            return state; 
    }
}
export const filterProductReducer=(state=[],{type,payload})=>{
    switch(type){
        case ActionTypes.FILTER_PRODUCT:
            return {...state,products:payload};
        default:
            return state;
    }
}
export const selectedProductReducer=(state={},{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;; 
    }
}

/* export const selectedPriceRangeFilterReducer=(state=[],{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRICERANGE_FILTER:
            return {...state,products};
        default:
            return state;
    }
} */