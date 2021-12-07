import {Review} from "../shared/models/Review";
import {appConstants} from "../shared/constants/constants";

export const reviewReducer = (state: Review | null= null ,action: reviewAction) =>{
    switch(action.type) {
        case appConstants.GET_REVIEW:
            return action.payload.data
        case appConstants.ADD_REVIEW:
            return state;
        default: return state;
    }
}
interface reviewAction {
    type: string,
    payload: {data: Review[]}
}