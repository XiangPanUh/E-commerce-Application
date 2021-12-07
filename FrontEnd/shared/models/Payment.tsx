import {User} from "./User";

export interface Payment{
    paymentId: number,
    cardName: string,
    cardNumber: string,
    cardDate: string,
    cardCVC: string,
    user : User
}