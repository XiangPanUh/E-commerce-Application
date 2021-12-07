import {Payment} from "../shared/models/Payment";
import axios from "axios";
import {appConstants} from "../shared/constants/constants";
import {Register} from "../shared/models/Register";

export const registerAction = (register: Register) => {
    const registerPromise = axios.post('http://localhost:8080/register', register);
    return {
        type: appConstants.REGISTER,
        payload:registerPromise
    };
};