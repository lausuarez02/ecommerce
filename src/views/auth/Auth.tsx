//utils
import React from "react";
//redux
import { useSelector } from "react-redux";
//router
import {Navigate} from "react-router-dom"
//components
import SingIn from "components/singIn/SingIn";

const Auth = () => {
    const user = useSelector((state:any) => state);
    const {userData: {isAuth}} = user

    if(isAuth){
        return( <Navigate to={{
            pathname: '/user'
        }}/>)
    }
    return(
        <React.Fragment>
            <SingIn/>
        </React.Fragment>
    )
}

export default Auth;