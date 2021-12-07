import {appConstants} from "../shared/constants/constants";
import axios from "axios";
import {Game} from "../shared/models/Game";


export const getGames =() => {
    const getGamesPromise = axios.get('http://localhost:8080/games')
    return {
        type: appConstants.GET_GAME,
        payload: getGamesPromise
    }
}

export const addGames =(game: Game) => {
    const addGamePromise = axios.post('http://localhost:8080/games', game)
    return {
        type: appConstants.ADD_GAME,
        payload: addGamePromise
    }
}
    export const getGame= (id : number) => {
        const getGamePromise = axios.get('http://localhost:8080/games/game/' + id)
        return {
            type: appConstants.GET_GAMES_BOX,
            payload: getGamePromise
        }
    }

