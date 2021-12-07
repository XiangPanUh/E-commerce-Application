import {combineReducers} from "redux";
import {mysteryBoxReducer} from "./mysteryBoxReducer";
import {authReducer} from "./authReducer";
import {transactionReducer} from "./transactionReducer";
import {historyReducer} from "./historyReducer";
import {userReducer} from "./userReducer";
import {reviewReducer} from "./reviewReducer";
import {gameReducer} from "./gameReducer";
import {paymentReducer} from "./paymentReducer";
import {accountReducer} from "./accountReducer";
import {cartReducer} from "./cartReducer";
import {boxReducer} from "./boxReducer";
import {cartsReducer} from "./cartsReducer";


export const rootReducer = combineReducers( {
    mysteryBoxes:mysteryBoxReducer,
    account: authReducer,
    transactions: transactionReducer,
    histories: historyReducer,
    user: userReducer,
    reviews: reviewReducer,
    games: gameReducer,
    payments: paymentReducer,
    accounts: accountReducer,
    cart: cartReducer,
    carts: cartsReducer,
    box: boxReducer,
})