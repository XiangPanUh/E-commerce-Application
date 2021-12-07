import {Payment} from "../shared/models/Payment";
import {appConstants} from "../shared/constants/constants";
import axios from "axios";

export const addPayment = (payment: Payment) => {
    const addPaymentPromise = axios.post('http://localhost:8080/users/addPayment', payment ,
        {withCredentials: true});
    return {
        type: appConstants.ADD_PAYMENT,
        payload:addPaymentPromise
    };
};

export const getPayments = () => {
    const getPaymentPromise = axios.get('http://localhost:8080/users/payments');
    return {
        type: appConstants.GET_PAYMENT,
        payload: getPaymentPromise
    }
}

export const getPaymentsById = () => {
    const getPaymentsByIdPromise = axios.get('http://localhost:8080/users/payments/userId', {withCredentials: true});
    console.log(getPaymentsByIdPromise);
    return {
        type: appConstants.GET_PAYMENTS,
        payload: getPaymentsByIdPromise
    }
}
export const editPayment =(payment: Payment) => {
    const editPaymentPromise = axios.post('http://localhost:8080/users/updatePayment', payment)
    return {
        type: appConstants.EDIT_PAYMENT,
        payload: editPaymentPromise
    }
}