import {MysteryBox} from "./MysteryBox";
import {User} from "./User";

export interface Transaction {
    transactionId: number,
    user: User,
    mysteryBox: MysteryBox,
    transactionQuality: number,
}
