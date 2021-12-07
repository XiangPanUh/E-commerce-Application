import {MysteryBox} from "../models/MysteryBox";
import {Account} from "../models/Account";
import {Game} from "../models/Game";
import {Transaction} from "../models/Transaction";
import {History} from "../models/History";
import {User} from "../models/User";
import {Review} from "../models/Review";
import {Payment} from "../models/Payment";
import {Cart} from "../models/Cart";

export const appConstants={
    // Routing
    home:'/',
    mysteryBoxRoute: '/mysteryBoxes',
    gameRoute: '/games',
    transactionRoute: '/transactions',
    historyRoute:'/histories',
    loginRoute:'/login',
    userRoute:'/users',
    paymentRoute:'/payments',
    cartRoute:'/cart',
    registerRoute:'/register',
    reviewRoute: '/reviews',
    accountRoute:'/accounts',
    logoutRoute:'/logout',
    addReviewRoute: '/addReview',
    boxDetailRoute: '/boxDetail',
    checkOutRoute: '/checkOut',


    addPaymentRoute: '/addPayment',
    addGameRoute: '/addGame',

    editPaymentRoute: '/editPayment',

    // Actions
    GET_MYSTERY_BOXES: '/GET_MYSTERY_BOXES',
    GET_GAME: '/GET_GAME',
    GET_USER: '/GET_USER',
    GET_TRANSACTION: '/GET_TRANSACTION',
    GET_HISTORY: '/GET_HISTORY',
    GET_REVIEW: '/ADD_REVIEW',
    GET_PAYMENT: '/GET_PAYMENT',
    GET_ACCOUNT: '/GET_ACCOUNT',
    GET_CART:'/GET_CART',
    GET_MYSTERY_BOX:'/GET_MYSTERY_BOX',
    GET_GAMES_BOX:'/GET_GAMES_BOX',
    GET_USER_ID: '/GET_USER_ID',
    GET_PAYMENTS: '/GET_PAYMENTS',

    CLEAR_CARTS: '/CLEAR_CARTS',

    ADD_PAYMENT: '/ADD_PAYMENT',
    ADD_GAME: '/ADD_GAME',
    ADD_REVIEW: '/ADD_REVIEW',
    ADD_CART: '/ADD_CART',

    DELETE_CART: '/DELETE_CART',

    EDIT_PAYMENT:'/EDIT_PAYMENT',

    CHANGE_PASS: '/CHANGE_PASS',

    LOGIN: '/LOGIN',
    REGISTER: '/REGISTER',
    LOGOUT: '/LOGOUT',
    CHECKOUT: '/CHECKOUT',



    // FIELD
    MYSTERY_BOX_FIELD: [
        {
            name: 'id',
            label: 'Box ID',
            type: 'number'
        },
        {
            name: 'name',
            label: 'Box Name',
            type: 'text'
        },
        {
            name: 'level',
            label: 'Box Level',
            type: 'text'
        },
        {
            name: 'price',
            label: 'Box Price',
            type: 'number'
        },
        {
            name: 'image',
            label: 'Box Image',
            type: 'text'
        },
    ],

    GAME_FILED: [
        {
            name:'id',
            label: 'Game ID',
            type: 'number'
        },
        {
            name:'name',
            label: 'Game Name',
            type: 'text'
        },
        {
            name:'level',
            label: 'Game Level',
            type: 'text'
        },
        {
            name:'image',
            label: 'Game Image',
            type: 'text'
        },
        {
            name:'description',
            label: 'Game Description',
            type: 'text'
        },
    ],
    USER_FIELD:[
        {
            name:'id',
            label: 'User id',
            type: 'number'
        },
        {
            name:'name',
            label: 'User Name',
            type: 'text'
        },
        {
            name:'points',
            label: 'User points',
            type: 'number'
        },
    ],
    PAYMENT_FIELD: [
        {
            name: 'cardNumber',
            label: 'Payment Number',
            type: 'text',
        },
        {
            name: 'cardName',
            label: 'Payment Name',
            type: 'text',
        },
        {
            name: 'cardDate',
            label: 'Payment ID',
            type: 'text',
        },
        {
            name: 'cardCVC',
            label: 'Payment CVC',
            type: 'number',
        },
    ],
    ACCOUNT_FIELD:[
        {
            name: 'accountEmail',
            label:'Account Email',
            type: 'text',
        },
        {
            name: 'accountPassword',
            label:'Account Password',
            type: 'text',
        },
    ],
    HISTORY_FIELD: [
        {
            name: 'historyID',
            label: 'History ID',
            type: 'number'
        },
        {
            name: 'mysteryBoxName',
            label: 'Mystery Box Name',
            type: 'text'
        },
        {
            name: 'gameName',
            label: 'Game Name',
            type: 'text'
        },
        {
            name: 'gameLevel',
            label: 'Game Level',
            type: 'text'
        },
        {
            name: 'transactionId',
            label: 'transaction ID',
            type: 'number'
        },
    ],
    REVIEW_FIELD: [
        {
            name: 'rate',
            label: 'rate',
            type: 'boolean'
        },
        {
            name: 'comments',
            label: 'comments',
            type: 'text'
        }
    ]
}

export interface ReduxState {
    mysteryBoxes: MysteryBox[],
    account:Account,
    games: Game[],
    transactions: Transaction[],
    histories: History[],
    reviews: Review[],
    payments: Payment[],
    user: User,
    history: History,
    accounts: Account[],
    box : MysteryBox,
    cart: Cart[],
}