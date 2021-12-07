import axios from "axios";
import {appConstants} from "../shared/constants/constants";

export const getHistories =() => {
    const getHistoryPromise = axios.get('http://localhost:8080/histories')
    return {
        type: appConstants.GET_HISTORY,
        payload: getHistoryPromise
    }
}