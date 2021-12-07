import {MysteryBox} from "../../shared/models/MysteryBox";
import {getBoxes} from "../../action/mysteryBoxAction";
import {connect} from "react-redux";
import React, {Component, SyntheticEvent} from "react";
import {Link} from "react-router-dom";
import {appConstants} from "../../shared/constants/constants";

class MysteryBoxes extends Component<MysteryBoxesProps, MysteryBoxState> {
    componentDidMount() {
        this.props.getBoxes();
    }

    constructor(props: MysteryBoxesProps) {
        super(props);
        this.state = {
            mysteryBoxes: props.mysteryBoxes
        }
    }

    static getDerivedStateFromProps(props:MysteryBoxesProps, state:MysteryBoxState) {
        if (state.mysteryBoxes === null) {
            return {mysteryBoxes: props.mysteryBoxes}
        }
        else {
            return {mysteryBoxes: state.mysteryBoxes}
        }
    }
        submitHandler=(event:SyntheticEvent) => {
        event.preventDefault();
    }

    render() {
        return (
                 <form onSubmit = {this.submitHandler}>
                     <div className="container">
                     <div className="row d-flex justify-content-center">
                     {
                    this.state.mysteryBoxes?.map(box =>(
                        <div key={box.mysteryBoxId} className="col">
                            <img className="img-fluid col-md-8 row" src={`${process.env.PUBLIC_URL}/${box?.mysteryBoxImage}`} alt={box.mysteryBoxName} />
                            <div>Name: {box.mysteryBoxName}</div>
                            <div>Level: {box.mysteryBoxLevel}</div>
                            <div>Price: {box.mysteryBoxPrice}</div>
                            <button type="submit"className="btn btn-dark">
                                <Link to={`${appConstants.boxDetailRoute}/${box.mysteryBoxId}`}>
                                    Box Details</Link></button>
                        </div>
                    ))
                }
                     </div>
                     </div>
            </form>
        )
    }
}

const mapStateToProps = (state: MysteryBoxState)=>{
    return {
        mysteryBoxes: state.mysteryBoxes,
    }
}

export default connect(mapStateToProps, {getBoxes})(MysteryBoxes);

interface MysteryBoxesProps {
    mysteryBoxes: MysteryBox[],
    getBoxes: () => object,
}

interface MysteryBoxState {
    mysteryBoxes : MysteryBox[],
}

