
import ProductListScreen from "../screens/products_list/products_list.screen";
import ProductDetailsScreen from "../screens/product_details/product_details.screen";

export default class Routes{
    static PRODUCTLISTROUTE="/products";
    static PRODUCTDETAILSROUTE="/details";
}
Object.freeze(Routes)

export const navigateToScreen={
    [Routes.PRODUCTLISTROUTE]:ProductListScreen,
    [Routes.PRODUCTDETAILSROUTE]:ProductDetailsScreen
}

Object.freeze(navigateToScreen)