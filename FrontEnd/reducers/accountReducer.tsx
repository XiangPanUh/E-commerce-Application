import {Account} from "../shared/models/Account";
import {appConstants} from "../shared/constants/constants";

export const accountReducer = (state: Account | null =null, action: accountAction)=> {
    switch (action.type) {
        case appConstants.GET_ACCOUNT:
            return action.payload.data
        default:
            return state;
    }
}
interface accountAction {
    type: string,
    payload: {data:Account}
}