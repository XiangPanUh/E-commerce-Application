import axios from "axios";
import {appConstants} from "../shared/constants/constants";
import {MysteryBox} from "../shared/models/MysteryBox";

export const addCart=(box: MysteryBox)=> {
    const AddCartPromise = axios.post('http://localhost:8080/carts/add', box, {withCredentials: true});
    return {
        type: appConstants.ADD_CART,
        payload: AddCartPromise
    }
}
export const deleteCart=(box: MysteryBox)=> {
    const deleteCartPromise = axios.post('http://localhost:8080/carts/delete', box,{withCredentials: true});

    return {
        type: appConstants.DELETE_CART,
        payload: deleteCartPromise
    }
}

export const getCart=() => {
    const getCartsPromise = axios.get('http://localhost:8080/carts', {withCredentials: true});
    return {
        type: appConstants.GET_CART,
        payload: getCartsPromise
    }
}
export const checkOut=()=> {
    const checkOutPromise = axios.get('http://localhost:8080/transactions/checkout');
    return {
        type: appConstants.CHECKOUT,
        payload: checkOutPromise
    }
}

export const emptyCart=()=> {
    const emptyPromise = axios.delete('http://localhost:8080/carts', {withCredentials: true});
    return {
        type: appConstants.CLEAR_CARTS,
        payload: emptyPromise
    }
}
