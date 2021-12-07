import React, {Component, SyntheticEvent} from "react";
import {Link, RouteComponentProps} from "react-router-dom";
import {appConstants, ReduxState} from "../../shared/constants/constants";
import {connect} from "react-redux";
import {getAccount} from "../../action/accountAction";
import {Account} from "../../shared/models/Account";

class Accounts extends Component<AccountProps, any> {
    componentDidMount() {
        this.props.getAccount(+this.props.match.params.accountId);
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
                    <th>Email</th>
                    <th>Function</th>
                </tr>
                </thead>
                <tbody>
                {

                        <tr key={this.props.account.accountId}>
                            <td>{this.props.account.accountEmail}</td>
                            <td>
                                <button type="submit" className="btn btn-light">
                                    <Link to={`${appConstants}/${(this.props.account.accountId)}`}>Change Password</Link></button></td>
                        </tr>
                }
                </tbody>
            </table>
                <button className="btn btn-success" onClick={this.redirect} >Go Back</button>
            </div>
        )
    }
}

function mapStateProps({account}: ReduxState) {
    return {account}
}

export default connect(mapStateProps,{getAccount})(Accounts);

interface AccountProps extends RouteComponentProps<{accountId: string}>{
    account: Account,
    getAccount: (accountId: number) => object
}