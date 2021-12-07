import {Review} from "../../shared/models/Review";
import React, {Component, SyntheticEvent, useContext} from "react";
import {appConstants, ReduxState} from "../../shared/constants/constants";
import {connect} from "react-redux";
import {addReview} from "../../action/reviewAction";
import {Field, FieldProps, Form, Formik} from "formik";
import * as yup from 'yup';
import {User} from "../../shared/models/User";

const addReviewSchema = yup.object().shape({
    rate: yup.number().min(0, 'please enter numbers between 0-5').max(5,'please enter numbers between 0-5').required(),
})

class AddReview extends Component<AddReviewProps, AddReviewState> {
    constructor(props: AddReviewProps) {
        super(props);
        const constructProductField = (): Review =>{
            const reviewField = new Map();
            appConstants.REVIEW_FIELD.forEach(field => {
                reviewField.set(field.name,'');
            });
            return Object.fromEntries(reviewField);
        }
        this.state = {
            review: constructProductField()
        };
    }

    renderField =({field,form:{errors, touched},...props}: FieldProps) => {
        return (
            <div>
                <label htmlFor={field.name}> </label>
                {/* {...props} is syntax sugar for label={props.label}, type = {props.type}*/}
                <input
                    id={field.name}
                    {...field}
                    {...props}
                />
                {
                    touched[field.name] &&  <p/* className={"text-danger"}*/>{errors[field.name]}</p>
                }
            </div>
        );
    };


    render() {
        return (
            <div className = "form-group">
                <h2 className="d-flex justify-content-center">Post New Review</h2>
                <Formik
                    initialValues={{
                        reviewId: 0,
                        comments: '',
                        rate: 5,
                        user: this.props.user
                    }}
                    onSubmit={(values => {
                        addReview(values)
                    })}
                    validationSchema={addReviewSchema}
                >

                    <Form className="d-flex justify-content-center">
                        <div>
                            <span>Rate : </span>
                            <Field
                            id='rate'
                            name ='rate'
                            type='number'
                            component={this.renderField}/>
                        </div>
                        <div>
                        <span>Comments : </span>
                            <Field
                        id='comments'
                        name ='comments'
                        type='string'
                        component={this.renderField}/>
                        </div>
                <button className = "btn btn-success btn-sm">Post</button>
                    </Form>
                </Formik>
            </div>
        )
    }
}

export default connect(mapStateToProps, {addReview})(AddReview);

function mapStateToProps(redux: ReduxState) {
    const user = redux.user
    return {user}
}

interface AddReviewProps {
    user: User
    review?: Review;
    addReview: (review: Review) => object
}

interface AddReviewState {
    review: Review
}