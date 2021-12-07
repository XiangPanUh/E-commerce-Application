import {appConstants} from "../shared/constants/constants";
import {Cart} from "../shared/models/Cart";

export const cartReducer = (state: Cart[] | null= null ,action: cartAction) =>{
    switch (action.type){
        case appConstants.GET_CART:
            return action.payload.data;
        case appConstants.CLEAR_CARTS:
            return state;
        default: return state;
    }
}

interface cartAction {
    type: string,
    payload: {data: Cart[]}
}