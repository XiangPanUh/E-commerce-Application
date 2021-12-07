import React, {Component} from "react";
import {Game} from "../../shared/models/Game";
import {ReduxState} from "../../shared/constants/constants";
import {getGames} from "../../action/gameAction";
import {connect} from "react-redux";

class Games extends Component<GameProps, any> {
    componentDidMount() {
        this.props.getGames();
    }
    render() {
        return(
            <table>
                <thead>
                <tr>
                    <th>Game ID</th>
                    <th>Game Name</th>
                    <th>Game Level</th>
                    <th>Game Description</th>
                    <th>Game Image</th>
                    <button>Add Payments</button>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.games?.map(g=>(
                        <tr key={g.gameId}>
                            <td>{g.gameId}</td>
                            <td>{g.gameName}</td>
                            <td>{g.gameLevel}</td>
                            <td>{g.gameDescription}</td>
                            <td>{g.gameImage}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        )
    }
}
function mapStateProps({games}: ReduxState) {
    return {games};
}
export default connect(mapStateProps,{getGames})(Games);

interface GameProps {
    games: Game[]
    getGames : ()=> object
}