import React, {Component, SyntheticEvent} from "react";
import {Transaction} from "../../shared/models/Transaction";
import {appConstants, ReduxState} from "../../shared/constants/constants";
import {connect} from "react-redux";
import {getTransactions} from "../../action/transactionAction";
import {Link, RouteComponentProps} from "react-router-dom";

class Transactions extends Component<TransactionProps, any> {
    componentDidMount() {
        this.props.getTransactions();
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
                    <th>User Name</th>
                    <th>Mystery Box</th>
                    <th>Quality</th>
                    <th>Details</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.transactions?.map(t =>(
                        <tr key={t.transactionId}>
                            <td>{t.user.userName}</td>
                            <td>{t.mysteryBox.mysteryBoxName}</td>
                            <td>{t.transactionQuality}</td>
                            <button type="submit" className="btn btn-light">
                                <Link to={`${appConstants.historyRoute}/${(t.transactionId)}`}>Details
                                </Link></button>
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

function mapStateProps({transactions}: ReduxState, ownProps: TransactionProps) {
    const id = +ownProps.match.params.userId;
    const transaction = transactions?.filter((t) => {
        return t.user.userId === id;
    }) as typeof transactions;
    return {
        transactions: transaction
    }
}

export default connect(mapStateProps,{getTransactions})(Transactions)

interface TransactionProps extends RouteComponentProps<{userId: string}>{
    transactions: Transaction[],
    getTransactions: () => object
}