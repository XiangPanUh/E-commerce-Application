import React, {Component, useEffect, useState} from "react";
import {Review} from "../../shared/models/Review";
import {connect, useDispatch, useSelector} from "react-redux";
import {getReviews} from "../../action/reviewAction";
import {RouteComponentProps} from "react-router-dom";
import AddReview from "./AddReview";
import {ReduxState} from "../../shared/constants/constants";
import {Game} from "../../shared/models/Game";

const Reviews =()=> {
    const get = useDispatch();
    let reviews = useSelector(({reviews}: ReduxState) => reviews);


    useEffect(() => {
        get(getReviews());
    }, [])

        return (
            <div className="container">

                <h2>Reviews</h2>
                {
                    reviews?.map(r =>(
                        <div key={r.reviewId}  className="d-flex justify-content-center row">
                            <div className="col">Poster : {r.user?.userName? r.user.userName: "Anonymous"}</div>
                            <div className="col">Rate :  {r.rate} Star</div>
                            <div className="col">Comment : {r.comments}</div>
                        </div>
                    ))
                }
                {localStorage.getItem("flag") === "true" && <AddReview/>}
            </div>
        )
    }
export default Reviews;

