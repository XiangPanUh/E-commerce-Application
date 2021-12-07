import {Link, RouteComponentProps} from "react-router-dom";
import {useSelector} from "react-redux";
import {appConstants, ReduxState} from "../constants/constants";


export const withGuard = (OldComponent: any) => {
    const HOCComponent = (props: RouteComponentProps) => {
        const account = useSelector(({account}:ReduxState) => account);
        if(account === null) {
            props.history.push(appConstants.loginRoute);
        }
        return (
            account?
                <OldComponent{...props}/>:
                <h4>Navigating...</h4>
        );
    }
    return HOCComponent;
};