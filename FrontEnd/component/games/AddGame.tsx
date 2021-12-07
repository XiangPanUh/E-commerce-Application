import {Component, SyntheticEvent} from "react";
import {Game} from "../../shared/models/Game";
import {appConstants} from "../../shared/constants/constants";
import {connect} from "react-redux";
import {addGames} from "../../action/gameAction";

class AddGame extends Component<AddGameProps, AddGameState> {
    constructor(props: AddGameProps) {
        super(props);

        const constructGameField =() : Game => {
            const gameField = new Map();
            appConstants.GAME_FILED.forEach(field=> {
                gameField.set(field.name,'');
            });
            return Object.fromEntries(gameField);
        }
        this.state = {
            game: constructGameField()
        };
    }
    fieldChangeHandler=(event:SyntheticEvent) => {
        const element = event.target as HTMLInputElement;
        const field = element.name;
        const value = element.value;
        const newGame = {...this.state.game, [field]: value};
        this.setState({
            game: newGame
        });
    };

    submitHandler=(event:SyntheticEvent) => {
        event.preventDefault();
        this.props.addGame(this.state.game)
    }
    renderControlField=(field:ProductFieldConfig)=>{
        return (
            <div key={field.name}>
                <label htmlFor="field.name">{field.name}</label>
                <input
                    id={field.name}
                    name ={field.name}
                    type={field.type}
                    value={this.state.game[field.name as keyof Game]}
                    onChange={this.fieldChangeHandler}
                />
            </div>
        )
    }
    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <h2>Add Game</h2>
                {
                    appConstants.GAME_FILED.map(field=> this.renderControlField(field))
                }
            </form>
        )
    }
}

export default connect(null, {addGames})(AddGame)


interface ProductFieldConfig {
    name: string,
    type:string,
    label:string
}

interface AddGameProps {
    addGame: (game: Game) => object
}
interface AddGameState {
    game: Game
}