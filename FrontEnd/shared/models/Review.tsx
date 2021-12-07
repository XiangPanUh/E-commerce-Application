import {User} from "./User";

export interface Review{
    reviewId: number,
    comments: string,
    rate: number
    user: User
}