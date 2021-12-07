import {appConstants} from "../shared/constants/constants";
import {Transaction} from "../shared/models/Transaction";


export const transactionReducer = (state: Transaction[] | null= null ,action: transactionAction) =>{
    switch (action.type){
        case appConstants.GET_TRANSACTION:
            return action.payload.data
        default: return state;
    }

}

interface transactionAction {
    type: string,
    payload:  {data: Transaction[]}
}