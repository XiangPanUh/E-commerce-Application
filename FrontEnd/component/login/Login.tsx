import {SyntheticEvent, useEffect, useState} from "react";
import {ReactReduxContext, useDispatch, useSelector} from "react-redux";
import {Link, NavLink } from "react-router-dom";
import {appConstants, ReduxState} from "../../shared/constants/constants";
import {login} from "../../action/authAction";
import {RouteComponentProps} from "react-router-dom";
import {setLocale} from "yup";


const Login = (props: RouteComponentProps) => {
    const [account, SetAccount] = useState({
        accountEmail: '',
        accountPassword: ''
    });

    const dispatch = useDispatch();
    const handlerFormControl = (event: SyntheticEvent) => {
        const inputEle = event.target as HTMLInputElement;
        const accountCopy = {
            ...account,
            [inputEle.name]: inputEle.value
        }
        SetAccount(accountCopy);
    };

    const user = useSelector(({account}:ReduxState) => account);
    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        dispatch(login(account));
    }

    useEffect(() => {
            (  user !== null && user.accountEmail !== '') && props.history.push
            (`${appConstants.mysteryBoxRoute}`)},
    [user]);

        return (
            <div>
            <h3 className="text-center text-white pt-5">Login form</h3>
    <div className="container">
        <div id="login-row" className="row justify-content-center align-items-center">
            <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
            <form onSubmit={submitHandler} id="login-form" className="form" >
                <h2 className="text-center text-info">Login</h2>
                <label htmlFor="username" className="text-info"> Email: </label><input className="form-control" name="accountEmail" value={account.accountEmail}
                                           onChange={handlerFormControl} type="text"/>
                <label htmlFor="password" className="text-info">Password: </label><input className="form-control" name="accountPassword" value={account.accountPassword}
                                              onChange={handlerFormControl} type="password"/>
                <button className="btn btn-info btn-md">Login</button>
                <div/>
                <p>Don't have account? <NavLink to={appConstants.registerRoute}>Register</NavLink></p>
            </form>
                </div>
            </div>
        </div>
    </div>
            </div>
        );
    };

export default Login;