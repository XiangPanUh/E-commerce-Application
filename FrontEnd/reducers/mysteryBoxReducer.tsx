import {MysteryBox} from "../shared/models/MysteryBox";
import {appConstants} from "../shared/constants/constants";


export const mysteryBoxReducer = (state: MysteryBox[] | null= null ,action: boxAction) =>{
    switch (action.type){
        case appConstants.GET_MYSTERY_BOXES:
            return action.payload.data
        default: return state;
    }
}

interface boxAction {
    type: string,
    payload: {data: MysteryBox[]}
}