import Navbar from "../../components/navbar/navbar"
import PriceRange from "../../components/price_range/price_range"
import ProductsComponent from "../../components/products/products"


const ProductListScreen = () => {
    return (
        <div>
            <Navbar/>
            <PriceRange/>
            <div style={{width:"90%",marginLeft:"auto",marginRight:"auto"}}>
                <hr/>
            </div>
            <ProductsComponent/>
        </div>
    )
}

export default ProductListScreen
