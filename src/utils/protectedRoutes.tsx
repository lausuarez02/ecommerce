import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"

const ProtectedRoute = ({children, isLoading}:any) => {
    const user = useSelector((state:any) => state.userData);

    // parcial use, we will use the userData to check if the user is auth.
    let booleanTest = false

    // When we first receive the data from the redux store it will be equal to null
    if(isLoading && booleanTest == null){
        return <div>is Loading</div>
    }

    //The next step will be having the value equal to true which will render the children but if the value is false it will navigate to the pathname specified.
    return(
        booleanTest ? (
            children
        ): (
            <Navigate to={{
                pathname: '/'
            }}/>
        )
    )
   

    // return children
   
  
};

export default ProtectedRoute;