import React, {Component, SyntheticEvent} from "react";
import {Account} from "../../shared/models/Account";
import {appConstants} from "../../shared/constants/constants";
import {connect} from "react-redux";
import {registers} from "../../action/authAction";
import {RouteComponentProps} from "react-router-dom";
import * as yup from 'yup';
import {Field, FieldProps, Form, Formik} from "formik";


const registerSchema = yup.object().shape({
    accountEmail: yup.string().email('Please enter correct email').required('email is required'),
    accountPassword: yup.string().min(8).required('password is required'),
})

class Registers  extends Component<RegisterProps, RegisterState>{
    constructor(props: RegisterProps) {
        super(props);
        const constructRegisterField = (): Account => {
            const registerField = new Map();
            appConstants.ACCOUNT_FIELD.forEach(field => {
                registerField.set(field.name,'');
            });
            return Object.fromEntries(registerField);
        }
        this.state={
            register: constructRegisterField()
        };
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
                    touched[field.name] &&  <p className={"text-danger"}>{errors[field.name]}</p>
                }
            </div>
        );
    };

    render() {
        return (
            <div className = "form-group">
                <h2>Register</h2>
                {
                        <Formik
                            initialValues={{
                                accountId: 0,
                                accountEmail: '',
                                accountPassword: '',
                            }}
                            onSubmit={(values => {
                                registers(values);
                                this.props.history.push(`${appConstants.loginRoute}`);
                            })}
                            validationSchema={registerSchema}
                        >
                <Form>
                    {
                    appConstants.ACCOUNT_FIELD.map((field)=> {
                        return (
                            <>
                                <label htmlFor="field.name">{field.label}</label>
                                <Field
                                name={field.name}
                                label={field.label}
                                type={field.type}
                                component={this.renderField}/></>
                        );
                    })
                }
                <button className = "btn btn-success">Register</button>
                        </Form>
                        </Formik>
                }
            </div>
        )
    }
}

export default connect(null, {registers})(Registers)

interface RegisterProps extends RouteComponentProps{
    register: (register: Account) => object
    account: Account
}
interface RegisterState {
    register: Account
}