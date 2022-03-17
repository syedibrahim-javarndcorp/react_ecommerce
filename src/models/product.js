import { _isNull } from "../utils/application_utils";
/**
 * @Class Product
 * @Member_Function toJSON()
 * @Author Shekhar Shashank
 */

export default class Product{
    constructor(data){
        this.productId=_isNull(data.productId) && data.productId;
        this.productBrand=_isNull(data.productBrand) && data.productBrand;
        this.productType=_isNull(data.productType) && data.productType;
        this.productImage=_isNull(data.productImage) && data.productImage;
        this.productPrice=_isNull(data.productPrice) && data.productPrice;
        this.productPriceRange=_isNull(data.productPriceRange) && data.productPriceRange
    }

    toJSON(){
        try {
            return{
                "productId":this.productId,
                "productBrand":this.productBrand,
                "productType":this.productType,
                "productImage":this.productImage,
                "productPrice":this.productPrice,
                "productPriceRange":this.productPriceRange
            }
        } catch (error) {
            console.error(error)
        }
    }
}


/**
 * @Purpose For testing purpose
 * @Function getProductList
 * @Params null
 * @Returns list of product
 * @Author Shekhar Shashank
 */
/* 
export const getProductList=()=>{
    try {
        let productList=[
            new Product({
                productId:"P1",
                productBrand:"Levis Jeans",
                productType:"Jeans",
                productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDh0nj-s1nkLsAcQEZ5LZJerwSBKb1-G4V7w&usqp=CAU",
                productPrice:"Rs. 1775"
            }),
            new Product({
                productId:"P2",
                productBrand:"Roadster Sweatshirt",
                productType:"Sweatshirt",
                productImage:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1959405/2018/11/26/37836e78-509f-4947-9345-3c10a23f445a1543234429732-Roadster-Men-Grey-Solid-Hooded-Sweatshirt-3691543234428979-1.jpg",
                productPrice:"Rs. 875"
            }),
            new Product({
                productId:"P3",
                productBrand:"Tommy Hilfiger Shirt",
                productType:"Casual Shirt",
                productImage:"https://5.imimg.com/data5/GX/CX/UG/IOS-77803457/product-jpeg-500x500.png",
                productPrice:"Rs. 1997"
            }),
            new Product({
                productId:"P4",
                productBrand:"Adidas Shoes",
                productType:"Shoes",
                productImage:"https://i.pinimg.com/originals/f2/80/94/f280941d0279be5d422113204202b48e.jpg",
                productPrice:"Rs. 1559"
            }),
            new Product({
                productId:"P5",
                productBrand:"H&M Shirt",
                productType:"Shirt",
                productImage:"https://i.ebayimg.com/thumbs/images/g/BAAAAOSwXmRhp7w2/s-l300.jpg",
                productPrice:"Rs. 860"
            })
        ];
        return productList;
    } catch (error) {
        console.error(error)
    }
} */