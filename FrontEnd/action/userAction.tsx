import axios from "axios";
import {appConstants} from "../shared/constants/constants";

export const getUser = () => {
    const getUserPromise = axios.get('http://localhost:8080/users/name/',
        {withCredentials: true})
    return {
        type: appConstants.GET_USER,
        payload: getUserPromise
    }
}

