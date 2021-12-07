import {Game} from "../shared/models/Game";
import {appConstants} from "../shared/constants/constants";

export const gameReducer = (state: Game[]| null= null ,action: gameAction) => {
    switch (action.type) {
        case appConstants.GET_GAME:
            return action.payload.data
        case appConstants.GET_GAMES_BOX:
            return action.payload.data
        default: return state;
    }
}
interface gameAction {
    type: string,
    payload: {data:Game[]}
}