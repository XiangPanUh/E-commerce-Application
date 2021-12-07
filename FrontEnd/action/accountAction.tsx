import axios from "axios";
import {appConstants} from "../shared/constants/constants";

export const getAccount =(accountId : number) => {
    const getAccountsPromise = axios.get('http://localhost:8080/accounts/' + accountId)
    console.log(getAccountsPromise);
    return {
        type: appConstants.GET_ACCOUNT,
        payload: getAccountsPromise
    }
}