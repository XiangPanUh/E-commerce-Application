import React, {Component, SyntheticEvent} from "react";
import {ReduxState} from "../../shared/constants/constants";
import {connect} from "react-redux";
import {History} from "../../shared/models/History";
import {getHistories} from "../../action/historyAction";
import {RouteComponentProps} from "react-router-dom";



class Histories extends Component<HistoryProps, any> {
    componentDidMount() {
        this.props.getHistories();
        this.props.isHistoryLoaded&&this.props.getHistories();
    }

    redirect=(event: SyntheticEvent)=> {
        event.preventDefault();
        this.props.history.goBack();
    }
    render() {
        return (
            <div>
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Mystery Box Name</th>
                    <th>Game Name</th>
                    <th>Game Level</th>
                    <th>Image</th>
                </tr>
                </thead>
                <tbody>
                {

                    this.props.histories?.map(t => (
                            <tr key={t.historyID}>
                                <td>{t.mysteryBox.mysteryBoxName}</td>
                                <td>{t.games.gameName}</td>
                                <td>{t.games.gameLevel}</td>
                                    <img className="col-md-3" src={`${process.env.PUBLIC_URL}/${t.games.gameImage}`} alt={t.games.gameName} />
                            </tr>
                    ))
                }
                </tbody>
            </table>
                <button className="btn btn-success" onClick={this.redirect} >Go Back</button>
            </div>
        )
    }
}

function mapStateProps({histories}: ReduxState, ownProps:HistoryProps) {
    const id = +ownProps.match.params.transactionId;

    const history = histories?.filter((t) => {
        return t.transaction.transactionId === id;
    })as typeof histories;
    return{
        histories: history,
        isHistoryLoaded: !!histories
    } as HistoryProps
}

export default connect(mapStateProps,{getHistories})(Histories)

interface HistoryProps extends RouteComponentProps<{transactionId: string}>{
    histories: History[]
    isHistoryLoaded: boolean;
    getHistories: () => object
}
