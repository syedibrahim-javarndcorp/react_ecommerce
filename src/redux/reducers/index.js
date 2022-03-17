import { combineReducers } from "redux";
import { filterProductReducer, productReducer,selectedProductReducer } from "./product_reducer";

const reducers=combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
    filterProduct:filterProductReducer
})

export default reducers