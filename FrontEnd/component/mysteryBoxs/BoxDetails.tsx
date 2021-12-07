import {useDispatch, useSelector} from "react-redux";
import {RouteComponentProps} from "react-router-dom";
import {getBox} from "../../action/mysteryBoxAction";
import {getGame} from "../../action/gameAction";
import {ReduxState} from "../../shared/constants/constants";
import React, {SyntheticEvent, useEffect, useState} from "react";
import {addCart} from "../../action/cartAction";

const BoxDetails =(props : boxProps) => {
    const getbox = useDispatch();
    const getgames = useDispatch();
    const addcart = useDispatch();
    let box = useSelector(({box}: ReduxState) => box);
    let games = useSelector(({games}: ReduxState) => games);

    useEffect(()=> {
        getbox(getBox(+props.match.params.mysteryBoxId))
        getgames(getGame(+props.match.params.mysteryBoxId))
    },[])

    const submitHandler =(event: SyntheticEvent) => {
        event.preventDefault();
        addcart(addCart(box))
    }
    const redirect=(event: SyntheticEvent)=> {
        event.preventDefault();
        props.history.goBack();
    }


    return (
        <form onSubmit={submitHandler}>
            <h1 className="d-flex justify-content-center">Box Info</h1>
            <div className="d-flex justify-content-center">
            <div key={box?.mysteryBoxId}>
                <div><img className="img-fluid col-md-5 row" src={`${process.env.PUBLIC_URL}/${box?.mysteryBoxImage}`} alt={box?.mysteryBoxName} /></div>
                <div>Name: {box?.mysteryBoxName}</div>
                <div>Level: {box?.mysteryBoxLevel}</div>
                <div>Price: {box?.mysteryBoxPrice}</div>
                <button className="btn btn-sm btn-success ">ADD</button>
            </div>
            </div>
            <h3 className="d-flex justify-content-center">Games included</h3>
            <div  className="container">
            <div className="row">
            {
                games?.map(game => (
                    <div key={game?.gameId} className="col">
                        <div><img className="img-fluid col-md row" src={`${process.env.PUBLIC_URL}/${game?.gameImage}`} alt={game?.gameName} /></div>
                        <div>Game Name : {game?.gameName}</div>
                        <div>Game Level : {game?.gameLevel}</div>
                        <div>Game Description: {game?.gameDescription}</div>
                    </div>
                ))
            }
            </div>
            </div>
            <button className="btn btn-success" onClick={redirect} >Go Back</button>
        </form>
    )
}

export default BoxDetails;
interface boxProps extends RouteComponentProps<{mysteryBoxId: string}>{
}