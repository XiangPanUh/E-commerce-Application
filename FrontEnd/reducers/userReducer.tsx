import {User} from "../shared/models/User";
import {appConstants} from "../shared/constants/constants";

export const userReducer = (state: User | null = null ,action: userAction) =>{
   switch (action.type) {
       case appConstants.GET_USER:
           return action.payload.data
       default: return state;
   }
}

interface userAction {
    type: string,
    payload: {data: User}
}