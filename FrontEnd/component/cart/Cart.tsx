import {useDispatch, useSelector} from "react-redux";
import {appConstants, ReduxState} from "../../shared/constants/constants";
import {addCart, checkOut, deleteCart, getCart} from "../../action/cartAction";
import React, {SyntheticEvent, useEffect, useState} from "react";
import {Link} from "react-router-dom";


const Cart = () => {
    const getC = useDispatch();
    const addC = useDispatch();
    const deleteC = useDispatch();
    let [a, setA] = useState(0);
    let carts = useSelector(({cart}: ReduxState) => cart);
    let cur = 0;
    useEffect(() => {
        getC(getCart());
    },[a])

    return (
        <div className="card">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <h4><b>Shopping Cart</b></h4>
                        </div>
                    </div>
                </div>
                {
                    carts?.map(c => (
                        <>
                        <div className="row border-top border-bottom" key={c.mysteryBox.mysteryBoxId}>
                            <div className="row main align-items-center">
                                <div className="col">
                                    <img className="img-fluid" src={`${process.env.PUBLIC_URL}/${c?.mysteryBox.mysteryBoxImage}`} alt={c.mysteryBox?.mysteryBoxName}/>
                                </div>
                                <div className="col">
                                    <div className="row-">{c.mysteryBox.mysteryBoxName}</div>
                                </div>
                                <button className="col-2" style = {{width:0}} onClick={(event: SyntheticEvent) =>{
                                    event.preventDefault();
                                    deleteC(deleteCart(c.mysteryBox));
                                    setA(a-1)
                                }}>-</button>

                                <div className="col-2" style={{width:0}}><a href="#" className="border">{c.quality}</a></div>

                                <button className="col-2" style = {{width:0}} onClick={(event: SyntheticEvent) => {
                                    event.preventDefault();
                                    addC(addCart(c.mysteryBox));
                                    setA(a + 1)
                                }}>+</button>

                                <div className="col">${cur = c.mysteryBox.mysteryBoxPrice * c.quality}</div>
                            </div>
                        </div>
                        </>
                ))
            }
            <div className="align-bottom">
                <button type="submit"className="btn btn-light">
                    <Link to={appConstants.checkOutRoute}>Check Out</Link></button>
            </div>
            </div>
        </div>
    )
}

export default Cart;
