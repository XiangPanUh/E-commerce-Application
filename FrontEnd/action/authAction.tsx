import {appConstants} from "../shared/constants/constants";
import axios from "axios";
import qs from "qs";
import {Account} from "../shared/models/Account";


export const login = (account:{accountEmail: string, accountPassword: string}) => {
    const loginPromise = axios.post('http://localhost:8080/login',
        qs.stringify(account),
        {withCredentials: true}
    );
    return {
        type: appConstants.LOGIN,
        payload: loginPromise,
    }

}

export const logout =() => {
    const logoutPromise = axios.get('http://localhost:8080/logout',
    {withCredentials: true}
)
    return {
        type: appConstants.LOGOUT,
        payload: logoutPromise
    };
};

export const registers =(account: Account) => {
    const registersPromise = axios.post('http://localhost:8080/accounts',account)
    return {
        type: appConstants.REGISTER,
        payload: registersPromise
    };
};