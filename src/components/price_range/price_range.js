import { useDispatch,useSelector } from "react-redux";
import { getPriceRangeList } from "../../models/price_range";
import { fetchProducts, filterProduct } from "../../redux/actions/productActions";
import priceRangeStyle from "./style.module.css";

const PriceRange = () => {
    
    const getPriceRange=getPriceRangeList();
    const getList=useSelector((state)=>state.allProducts.products);
    
    const dispatch=useDispatch();
        
    const filterProductList=(priceType)=>{
        let res=getList.filter(item=>item.productPriceRange===priceType) 
        dispatch(filterProduct(res))
    }

    const  onlyOneActiveCheckBox=(event)=> {
        var checkboxes = document.getElementsByName('checkbox')
        checkboxes.forEach((item) => {
            if(item.id !== event.target.id){item.checked = false}else{
                item.checked=true
                filterProductList(item.value)
            } 
        })
    }

    return (
        <div className={priceRangeStyle.priceRangeContainer}>
            {
                getPriceRange.map((item,index)=>{
                    return (
                        <div className={priceRangeStyle.priceRangeBox} key={index}>
                            <div className={priceRangeStyle.priceRangeCheckBox}> 
                                <input type="checkbox" 
                                    id={item.priceRangeId} 
                                    name="checkbox"
                                    value={item.priceRangeType}
                                    onChange={(e)=>onlyOneActiveCheckBox(e)}/>
                            </div>
                            <div className={priceRangeStyle.priceRangeTitle}>{item.priceRangeTitle}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default PriceRange
