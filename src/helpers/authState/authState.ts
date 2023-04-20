//utils
import {useEffect} from "react";
import { handleRedirectResult, auth} from 'firebaseReact/firebase'
import { userAuth,mainUserData } from "redux/reducers/user";
import { useDispatch } from 'react-redux'

export const AuthState = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
          if(user){
            dispatch(userAuth(true))
            dispatch(mainUserData({photoURL: user.photoURL, email: user.email, name: user.displayName}))
          }else{
            dispatch(userAuth(false))
            dispatch(mainUserData(null))
            console.error('Error on auth the user')
          }
        })
        handleRedirectResult()
      }, [])
}

