import {Game} from "./Game";

export interface MysteryBox {
    mysteryBoxId: number;
    mysteryBoxLevel: string;
    mysteryBoxPrice: number;
    mysteryBoxImage: string;
    mysteryBoxName: string;
    game: Game[];
}