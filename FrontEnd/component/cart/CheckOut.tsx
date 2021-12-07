import {useDispatch, useSelector} from "react-redux";
import {appConstants, ReduxState} from "../../shared/constants/constants";
import React, {SyntheticEvent, useEffect} from "react";
import {checkOut, emptyCart} from "../../action/cartAction";
import {Link, RouteComponentProps} from "react-router-dom";
import {getBox} from "../../action/mysteryBoxAction";
import {getGame} from "../../action/gameAction";
import {getPaymentsById} from "../../action/paymentAction";

const CheckOut =(props: checkProps) => {
    const checkout = useDispatch();
    const payment = useDispatch();
    const clean = useDispatch();
    let payments = useSelector(({payments}:ReduxState) => payments);
    let cart = useSelector(({cart}: ReduxState) => cart);
    let cur = 0;
    let total = 0;
    useEffect(()=> {
        payment(getPaymentsById());
    },[])

    return (
        <div className="card">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <h4><b>Check Out</b></h4>
                        </div>
                    </div>
                </div>
            {
                cart?.map(c => (
                    <>
                    <div className="row border-top border-bottom">
                        <div className="row main align-items-center">
                            <div className="col-2">
                                <img className="img-fluid " src={`${process.env.PUBLIC_URL}/${c?.mysteryBox.mysteryBoxImage}`} alt={c.mysteryBox?.mysteryBoxName}/>
                            </div>
                            <div className="col">
                                <div className="row text-muted"></div>
                                <div className="row">{c.mysteryBox.mysteryBoxName}</div>
                            </div>
                            <div className="col"><a href="#" className="border">{c.quality}</a></div>
                            <div className="col">${cur = c.mysteryBox.mysteryBoxPrice * c.quality}</div>
                        </div>
                    </div>
                        <div hidden>
                        {total = total + cur}
                        </div>
                    </>
                ))}
                <button type="submit"className="btn btn-light">
                    <Link to={appConstants.mysteryBoxRoute}>Back to Shop</Link></button>
                <div className="col-md-4 summary">
                    <div>
                        <h5><b>Summary</b></h5>
                    </div>
                    <hr/>
                        <form>
                            <p>Payment</p><select>
                            {
                                payments?.map(p =>  {
                                    return  <option>{p.cardNumber}</option>
                                })
                            }
                        </select>
                        </form>
                        <div className="row">
                            <div className="col">TOTAL PRICE</div>
                            <div className="col text-right">$ {total}</div>
                        </div>
                        <button className="btn btn-sm btn-success" onClick={(event: SyntheticEvent) => {
                        event.preventDefault();
                        checkout(checkOut());
                        clean(emptyCart());
                        props.history.push(`${appConstants.userRoute}`)
                    }}>Check Out</button>
                </div>
            </div>
        </div>
    )
}

export default  CheckOut;

interface checkProps extends RouteComponentProps{

}