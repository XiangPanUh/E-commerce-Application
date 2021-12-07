import {Account} from "./Account";

export interface User {
    userId: number,
    userName: string,
    account: Account
}