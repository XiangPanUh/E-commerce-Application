import {appConstants} from "../shared/constants/constants";
import {History} from "../shared/models/History";

export const historyReducer = (state: History[] | null= null ,action: historyAction) =>{
    switch (action.type){
        case appConstants.GET_HISTORY:
            return action.payload.data
        default: return state;
    }

}

interface historyAction {
    type: string,
    payload:{data: History[]}
}