import {Cart} from "../shared/models/Cart";
import {appConstants} from "../shared/constants/constants";
import {MysteryBox} from "../shared/models/MysteryBox";


export const cartsReducer = (state: MysteryBox | null= null ,action: cartsAction) =>{
    switch (action.type){
        case appConstants.ADD_CART:
            return state;
        case appConstants.DELETE_CART:
            return state;
        default: return state;
    }
}
interface cartsAction {
    type: string,
    payload: {data: MysteryBox}
}