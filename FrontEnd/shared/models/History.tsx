import {MysteryBox} from "./MysteryBox";
import {Game} from "./Game";
import {Transaction} from "./Transaction";

export interface History {
    historyID: number
    mysteryBox: MysteryBox
    games: Game
    transaction: Transaction
}