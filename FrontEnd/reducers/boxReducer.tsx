import {MysteryBox} from "../shared/models/MysteryBox";
import {appConstants} from "../shared/constants/constants";

export const boxReducer = (state: MysteryBox | null= null ,action: boxAction) =>{
    switch (action.type){
        case appConstants.GET_MYSTERY_BOX:
            console.log(action.payload.data);
            return action.payload.data
        // case appConstants.CLEAR:
        //     return null;
        default: return state;
    }
}

interface boxAction {
    type: string,
    payload: {data: MysteryBox}
}