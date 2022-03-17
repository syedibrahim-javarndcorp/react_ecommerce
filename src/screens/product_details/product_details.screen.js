
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import { selectedProduct,removeSelectedProduct } from "../../redux/actions/productActions";
import NotFoundScreen from "../404";
import productScreenStyles from "./style.module.css";


const ProductDetailsScreen = () => {
    const getList=useSelector((state)=>state.allProducts.products);
    let product=useSelector((state)=>state.product);
    const {id}=useParams();
    const dispatch=useDispatch();

    const getProductDetail=()=>{
        let res=getList.filter(item=>item.productId===id)
        res=res[0];
        dispatch(selectedProduct(res))
    }

    
    useEffect(() => {
        getProductDetail();
        return ()=>{
            dispatch(removeSelectedProduct())
        }
    }, [id])
    
    
    if(!(product 
        && Object.keys(product).length === 0
        && Object.getPrototypeOf(product) === Object.prototype)){
        return (
            <div className={productScreenStyles.container}>
                <Navbar/>
                <div className={productScreenStyles.box}>
                    <div className={productScreenStyles.image}>
                        <img className={productScreenStyles.productImage} src={product.productImage} width="250" height="200" alt={product.productBrand}/>
                    </div>
                    <div className={productScreenStyles.details}>
                        <div className={productScreenStyles.brandName}>
                            <h1>{product.productBrand}</h1>
                        </div>
                        
                        <div className={productScreenStyles.footer}>
                            <div>
                                <h4>* {product.productType}</h4>
                            </div>
                            <div>
                                <h4>{product.productPrice}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }else{
        return <NotFoundScreen/>
    }
}

export default ProductDetailsScreen
