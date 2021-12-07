import {appConstants} from "../shared/constants/constants";
import {AxiosResponse} from "axios";


export const authReducer = (state:any = initialState, action: authReducerAction) => {
    switch (action.type) {
        case appConstants.LOGIN:
            localStorage.setItem("flag", "true");
            return action.payload.data.success ? action.payload.data.account: null;
        case appConstants.REGISTER:
            return state;
        case appConstants.LOGOUT:
            localStorage.setItem("flag", "false");
            return action.payload.data.success ? action.payload.data.account: null;
        default:
            return state;
    }
}
let initialState = {
    accountEmail:'',
    accountPassword:''
}

interface authReducerAction {
    type: string,
    payload: AxiosResponse<any>
}
