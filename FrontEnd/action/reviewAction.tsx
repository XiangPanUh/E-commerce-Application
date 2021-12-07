import axios from "axios";
import {appConstants} from "../shared/constants/constants";
import {Review} from "../shared/models/Review";
import qs from "qs";

export const getReviews = () => {
    const getReviewPromise = axios.get('http://localhost:8080/reviews')
    return {
        type: appConstants.GET_REVIEW,
        payload: getReviewPromise
    }
}

export const addReview = (review :Review) => {
    const addReviewPromise = axios.post('http://localhost:8080/reviews', review)
    qs.stringify(review);
    return {
        type: appConstants.ADD_REVIEW,
        payload: addReviewPromise
    }
}