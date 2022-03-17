import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productStyle from "./style.module.css";
import { fetchProducts } from "../../redux/actions/productActions";
import {Link } from "react-router-dom";
import Routes from "../../constants/routes";
import { _isNull } from "../../utils/application_utils";


/**
 * @Component ProductsComponent
 * @Params null
 * @Returns ProductUI
 * @Author Shekhar Shashank
 */

const ProductsComponent = () => {

    const getList=useSelector((state)=>state.allProducts.products);
    let filteredProduct = useSelector(state => state.filterProduct.products)
    
    const dispatch=useDispatch();
    
    let result=!_isNull(filteredProduct)?getList:filteredProduct;
    
    
    
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className={productStyle.productContainer}>
            {
                result?.map((item,index)=>{
                    return(
                        <Link to={`${Routes.PRODUCTLISTROUTE}/${item.productId}`} className={productStyle.productItem} key={index} >
                                <div className={productStyle.productHeader}>
                                    <img className={productStyle.productImage} src={item.productImage} width="250" height="200" alt={item.productBrand}/>
                                </div>
                                <div className={productStyle.productDetails}>
                                    <div className={productStyle.productBasic}>
                                        <div className={productStyle.productTitle}>{item.productBrand}</div>
                                        <div className={productStyle.productSubtitle}>{item.productType}</div>
                                    </div>
                                    <br/>
                                    <div className={productStyle.productFooter}>
                                        <div className={productStyle.productPrice}>{item.productPrice}</div>
                                    </div>
                                </div>
                        </Link>
                    );
                })
            }
        </div>
    )
}

export default ProductsComponent
