import {appConstants} from "../shared/constants/constants";
import axios from "axios";


export const getBoxes =() => {
    const getBoxesPromise = axios.get('http://localhost:8080/mysteryBoxes');
    return {
        type: appConstants.GET_MYSTERY_BOXES,
        payload: getBoxesPromise
    }
}

export const getBox =(id: number) => {
    const getBoxPromise = axios.get('http://localhost:8080/mysteryBoxes/id/' + id);
    return {
        type: appConstants.GET_MYSTERY_BOX,
        payload: getBoxPromise
    }
}

