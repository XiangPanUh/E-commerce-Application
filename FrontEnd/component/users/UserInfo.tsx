import {Link, RouteComponentProps} from "react-router-dom";
import {appConstants, ReduxState} from "../../shared/constants/constants";
import {connect} from "react-redux";
import {getUser} from "../../action/userAction";
import React, {Component} from "react";
import {User} from "../../shared/models/User";


class UserInfo extends Component<userProps, any> {
    componentDidMount() {
        this.props.getUser();
    }
    constructor(props: userProps) {
        super(props);
        this.state = {
            user: props.user
        }
    }
    static getDerivedStateFromProps(props:userProps, state:userState) {
        if (state.user === null) {
            return {user: props.user}
        }
        else {
            return {user: state.user}
        }
    }



    render() {
        return (
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Payment</th>
                    <th>Transaction</th>
                    <th>Account info</th>
                </tr>
                </thead>
                <tbody>
                {
                    <tr key={this.props.user?.userId}>
                        <td>{this.props.user?.userName}</td>
                        <td>
                            <button type="submit" className="btn btn-light">
                                <Link to={`${appConstants.paymentRoute}/${(this.props.user?.userId)}`}>Payment Info</Link></button></td>
                        <td>
                            <button type="submit" className="btn btn-light">
                                <Link to={`${appConstants.transactionRoute}/${(this.props.user?.userId)}`}>Transaction Info</Link></button></td>
                        <td>
                            <button type="submit" className="btn btn-light">
                                <Link to={`${appConstants.accountRoute}/${(this.props.user?.account?.accountId)}`}>Account Info</Link></button></td>
                    </tr>
                }
                </tbody>
            </table>
        )
    }
}

export default connect(mapStateProps, {getUser})(UserInfo);

function mapStateProps({user}: ReduxState){
    return {user}
}

interface userProps extends RouteComponentProps<{}>{
    user: User
    getUser: () => object
}
interface userState {
    user: User
}