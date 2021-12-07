import React, {Component, SyntheticEvent} from "react";
import {RouteComponentProps} from "react-router-dom";
import {Payment} from "../../shared/models/Payment";
import * as yup from 'yup';
import {Field, FieldProps, Form, Formik} from "formik";
import {appConstants, ReduxState} from "../../shared/constants/constants";
import {connect} from "react-redux";
import {editPayment, getPayments} from "../../action/paymentAction";


const editPaymentSchema = yup.object().shape({
    cardName: yup.string().required('Name is required').label('Name on Card'),
    cardNumber: yup.string().label('Card Number').min(8, 'Your card number is too short').max(19, 'Your card number is too long').required('Card number is required'),
    cardDate: yup.string().label('Expiry Date').min(5, 'Not a valid expiration date. Example: MM/YY').max(5, 'Not a valid expiration date. Example: MM/YY').required('Expiration date is required').matches( /([0-9]{2})\/([0-9]{2})/),
    cardCVC: yup.string().label('CVC').min(3,'Your CVC is too short').max(4,'Your CVC is too long').required('CVC is required'),
})

class EditPayment extends Component<EditPaymentProps, any> {
    componentDidMount() {
        !this.props.isPaymentLoaded && this.props.getPayments();
    }

    renderField =({field,form:{errors, touched},...props}: FieldProps) => {
        return (
            <div>
                <label htmlFor={field.name}> </label>
                <input
                    id={field.name}
                    {...field}
                    {...props}
                />
                {
                    touched[field.name] &&  <p className={"text-danger"}> {errors[field.name]}</p>
                }
            </div>
        );
    };

    render() {
        return (
            <div>
                <h1>Edit Payment</h1>
                {
                    this.props.payment?
                        <Formik
                            initialValues={this.props.payment}
                            onSubmit={(values => {
                                editPayment(values)
                                this.props.history.push(`${appConstants.mysteryBoxRoute}`)
                            })}
                            validationSchema={editPaymentSchema}
                        >
                            <Form>
                                {
                                    appConstants.PAYMENT_FIELD.map((field) => {
                                        return(
                                            <Field
                                                name={field.name}
                                                label={field.label}
                                                type={field.type}
                                                compoent={this.renderField}/>
                                        )
                                    })
                                }
                                <button type="submit" className="btn btn-primary">Edit Product</button>
                            </Form>
                        </Formik>:
                        <h2>Payment cannot be found</h2>
                }
            </div>
        )
    }
}

function mapStateToProps({payments}: ReduxState, ownProps: EditPaymentProps) {
    const id = +ownProps.match.params.paymentId
    const payment = payments?.find((p) => {
        return p.paymentId === id;
    });
    return{
        payment: payment,
        isPaymentLoaded: !!payments,
    } as EditPaymentProps
}

export default connect(mapStateToProps, {getPayments})(EditPayment)

interface EditPaymentProps extends RouteComponentProps<{paymentId: string}>{
    payment: Payment;
    getPayments: ()=> any;
    isPaymentLoaded: boolean;
}