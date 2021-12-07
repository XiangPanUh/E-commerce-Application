import React, {Component, SyntheticEvent} from "react";
import {Payment} from "../../shared/models/Payment";
import {appConstants, ReduxState} from "../../shared/constants/constants";
import {connect} from "react-redux";
import {getPayments} from "../../action/paymentAction";
import {Link, RouteComponentProps} from "react-router-dom";

class Payments extends Component<PaymentProps, any> {
    componentDidMount() {
        this.props.getPayments();
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
                        <th>Card Name</th>
                        <th>Card Number</th>
                        <th>Date</th>
                        <th>CVC</th>
                        <th>User ID</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.props.payments?.map(p=>(
                        <tr key={p.paymentId}>
                            <td>{p.cardName}</td>
                            <td>{p.cardNumber}</td>
                            <td>{p.cardDate}</td>
                            <td>{p.cardCVC}</td>
                            <td>{p.user.userId}</td>
                            <td>
                            <button type="submit"className="btn btn-light">
                                <Link to={`${appConstants.editPaymentRoute}/${p.paymentId}`}>
                                Edit Payment</Link></button>
                                {/*<button type="submit"className="btn btn-light">*/}
                                {/*    <Link to={`${appConstants.addPaymentRoute}/${p.user.userId}`}>*/}
                                {/*        Add Payment</Link></button>*/}
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
                <button type="submit"className="btn btn-light">
                    <Link to={appConstants.addPaymentRoute}>
                        Add Payment</Link></button>
                <button className="btn btn-success" onClick={this.redirect} >Go Back</button>
            </div>

        )
    }
}

function mapStateProps({payments}: ReduxState, ownProps: PaymentProps) {
    const id = +ownProps.match.params.userId
    const payment = payments?.filter((p) => {
        if (p.user.userId !== null){
        return p.user.userId === id;
            }
    })as typeof payments;
    return {
        payments: payment,
    } as PaymentProps
}

export default connect(mapStateProps, {getPayments})(Payments);

interface PaymentProps extends RouteComponentProps<{userId: string}>{
    payments: Payment[],
    getPayments: () => object
}