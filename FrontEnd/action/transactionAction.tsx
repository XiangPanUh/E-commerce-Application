import axios from "axios";
import {appConstants} from "../shared/constants/constants";


export const getTransactions =() => {
    const getTransactionPromise = axios.get('http://localhost:8080/transactions')
    return {
        type: appConstants.GET_TRANSACTION,
        payload: getTransactionPromise
    }
}
