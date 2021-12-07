import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {appConstants} from "./shared/constants/constants";
import App from "./App";
import {Provider} from "react-redux";
import {rootReducer} from "./reducers/rootReducer";
import MysteryBoxes from "./component/mysteryBoxs/MysteryBoxes";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import reduxPromise from 'redux-promise';
import {applyMiddleware, createStore} from "redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./component/login/Login";
import Register from "./component/login/Registers";
import AddGame from "./component/games/AddGame";
import Games from "./component/games/Games";
import Transactions from "./component/transactions/Transactions";
import Histories from "./component/histories/Histories";
import Reviews from "./component/reviews/Reviews";
import Payments from "./component/payments/Payments";
import Logout from "./component/login/Logout";
import AddPayment from "./component/payments/AddPayment";
import EditPayment from "./component/payments/EditPayment";
import Accounts from "./component/login/Accounts";
import UserInfo from "./component/users/UserInfo";
import AddReview from "./component/reviews/AddReview";
import BoxDetails from "./component/mysteryBoxs/BoxDetails";
import Cart from "./component/cart/Cart";
import CheckOut from "./component/cart/CheckOut";
const createMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createMiddleware(rootReducer)}>
        <BrowserRouter>
            <App>
            <Switch>
                <Route exact path={appConstants.home} component={MysteryBoxes}/>
                <Route path={appConstants.mysteryBoxRoute} component={MysteryBoxes}/>
                <Route path={appConstants.loginRoute} component={Login}/>
                <Route path={appConstants.logoutRoute} component={Logout}/>
                <Route path={appConstants.registerRoute}component={Register}/>
                <Route path={appConstants.addGameRoute} component={AddGame}/>
                <Route path={appConstants.gameRoute} component={Games}/>
                <Route path={`${appConstants.transactionRoute}/:userId`}component={Transactions}/>
                <Route path={`${appConstants.historyRoute}/:transactionId`} component={Histories}/>
                <Route path={appConstants.userRoute}component={UserInfo}/>
                <Route path={appConstants.reviewRoute} component={Reviews}/>
                <Route path={`${appConstants.paymentRoute}/:userId`} component={Payments}/>
                <Route path={appConstants.addPaymentRoute}component={AddPayment}/>
                <Route path={`${appConstants.editPaymentRoute}/:paymentId`} component={EditPayment}/>
                <Route path={`${appConstants.accountRoute}/:accountId`} component={Accounts}/>
                <Route path={appConstants.addReviewRoute} component={AddReview}/>
                <Route path={`${appConstants.boxDetailRoute}/:mysteryBoxId`} component={BoxDetails}/>
                <Route path={appConstants.cartRoute} component={Cart}/>
                <Route path={appConstants.checkOutRoute} component={CheckOut}/>
            </Switch>
            </App>
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root')
);
reportWebVitals();
