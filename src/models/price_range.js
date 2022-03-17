import { PriceRangeType } from "../constants/application";
import { _isNull } from "../utils/application_utils";

export default class PriceRange{
    constructor(data){
        this.priceRangeId=_isNull(data.priceRangeId) && data.priceRangeId;
        this.priceRangeTitle= _isNull(data.priceRangeTitle) && data.priceRangeTitle;
        this.priceRangeIsActive=_isNull(data.priceRangeIsActive) && data.priceRangeIsActive;
        this.priceRangeType= _isNull(data.priceRangeType) && data.priceRangeType
    }
}


/**
 * @Function getPriceRangeList
 * @Params null
 * @Returns list of priceRange
 * @Author Shekhar Shashank
 */

export const getPriceRangeList=()=>{
    try {
        let priceRangeList=[
            new PriceRange({
                priceRangeId:"PR1",
                priceRangeTitle:"Rs 1 to 1000",
                priceRangeIsActive:false,
                priceRangeType:PriceRangeType.belowThousand
            }),
            new PriceRange({
                priceRangeId:"PR2",
                priceRangeTitle:"Rs 1001 and above",
                priceRangeIsActive:false,
                priceRangeType:PriceRangeType.aboveThousand
            })
        ];
        return priceRangeList;
    } catch (error) {
        console.error(error)
    }
}