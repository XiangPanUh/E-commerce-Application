import {useDispatch} from "react-redux";
import {logout} from "../../action/authAction";
import {appConstants} from "../../shared/constants/constants";
import {SyntheticEvent} from "react";
import {NavLink} from "react-router-dom";

const Logout =() => {
    const dispatch = useDispatch();
    dispatch(logout());

    const submitHandler=(event:SyntheticEvent)=>{
        event.preventDefault();
        localStorage.setItem("flag", "false");
    }
        return (
            <form onSubmit={submitHandler}>
                <button type="submit" className="btn btn-dark">
                    <NavLink to={appConstants.mysteryBoxRoute}>Logout Successfully
                    </NavLink></button>
            </form>
        )
}
export default Logout;