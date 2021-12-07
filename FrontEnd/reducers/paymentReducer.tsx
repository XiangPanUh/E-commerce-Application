import {Payment} from "../shared/models/Payment";
import {appConstants} from "../shared/constants/constants";

export const paymentReducer = (state: Payment[] | null= null ,action: paymentAction) =>{
    switch (action.type) {
        case appConstants.GET_PAYMENT:
            return action.payload.data
        case appConstants.ADD_PAYMENT:
            return state;
        case appConstants.EDIT_PAYMENT:
            return state;
        case appConstants.GET_PAYMENTS:
            console.log(action.payload.data);
            return action.payload.data
        default:
            return state;
    }
}
interface paymentAction {
    type: string,
    payload: {data: Payment[]}
}