import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"
//components
import LoadingSpinner from 'components/loading/Loading';

const ProtectedRoute = ({children, isLoading}:any) => {
    const user = useSelector((state:any) => state);
    const {userData: {isAuth}} = user

    // parcial use, we will use the userData to check if the user is auth.
    let booleanTest = true

    // When we first receive the data from the redux store it will be equal to null
    if(isLoading && isAuth == null){
        return <LoadingSpinner/>
    }

    //The next step will be having the value equal to true which will render the children but if the value is false it will navigate to the pathname specified.
    return(
        isAuth ? (
            children
        ): (
            <Navigate to={{
                pathname: '/authLogin'
            }}/>
        )
    )
};

export default ProtectedRoute;