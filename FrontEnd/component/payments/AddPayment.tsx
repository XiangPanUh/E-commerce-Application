import React, {Component, SyntheticEvent} from "react";
import {Payment} from "../../shared/models/Payment";
import {appConstants, ReduxState} from "../../shared/constants/constants";
import {connect} from "react-redux";
import {addPayment} from "../../action/paymentAction";
import * as yup from 'yup';
import {RouteComponentProps} from "react-router-dom";
import {Field, FieldProps, Form, Formik} from "formik";
import {User} from "../../shared/models/User";

const addPaymentSchema = yup.object().shape({
    cardName: yup.string().required('Name is required').label('Name on Card'),
    cardNumber: yup.string().label('Card Number').min(8, 'Your card number is too short').max(19, 'Your card number is too long').required('Card number is required'),
    cardDate: yup.string().label('Expiry Date').min(5, 'Not a valid expiration date. Example: MM/YY').max(5, 'Not a valid expiration date. Example: MM/YY').required('Expiration date is required').matches( /([0-9]{2})\/([0-9]{2})/),
    cardCVC: yup.string().label('CVC').min(3,'Your CVC is too short').max(4,'Your CVC is too long').required('CVC is required'),
})

class AddPayment extends Component<AddPaymentProps, AddPaymentState> {
    constructor(props:AddPaymentProps) {
        super(props);
        const constructProductField = (): Payment =>{
            const productField = new Map();
            appConstants.PAYMENT_FIELD.forEach(field => {
                productField.set(field.name,'');
            });
            return Object.fromEntries(productField);
        }
        this.state = {
            payment: constructProductField()
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
                <h2>Add Payments</h2>
                {
                    <Formik
                        initialValues={{
                            paymentId:0,
                            cardName:'',
                            cardNumber: '',
                            cardDate: '',
                            cardCVC: '',
                            user: this.props.user,
                        }}
                        onSubmit={(values => {
                            addPayment(values)
                            this.props.history.push(`${appConstants.mysteryBoxRoute}`)
                        })}
                        validationSchema={addPaymentSchema}
                    >
                        <Form>
                            <div>
                                <span>Card Name :</span>
                                <Field
                            id='cardName'
                            name='cardName'
                            type='text'
                            component={this.renderField}/></div>
                        <div>
                            <span>Card Number :</span>
                            <Field
                                id='cardNumber'
                                name='cardNumber'
                                type='text'
                                component={this.renderField}/>
                            </div>
                        <div>
                            <span>Card Date : </span>
                            <Field
                                id='cardDate'
                                name='cardDate'
                                type='text'
                                component={this.renderField}/></div>
                        <div>
                            <span>Card CVC :</span>
                            <Field
                                id='cardCVC'
                                name='cardCVC'
                                type='text'
                                component={this.renderField}/></div>
                        {/*<div>*/}
                        {/*    <span>User ID : {this.props.match.params.userId}</span>*/}
                        {/*</div>*/}
                        <button className="btn btn-success">Add</button>
                        </Form>
                    </Formik>
                }
            </div>
        )
    }
}

function mapStateToProps(reduxState:ReduxState){
    const user = reduxState.user
    return{user}
}
export default connect(mapStateToProps,{addPayment})(AddPayment)

interface AddPaymentProps extends RouteComponentProps<{}>{
    user:User;
    addPayment: (payment: Payment) => object
    payment: Payment
}

interface AddPaymentState {
    payment: Payment
}