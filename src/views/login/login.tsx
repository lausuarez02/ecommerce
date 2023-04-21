//utils
import React, {useEffect,useState} from "react"
//components
import ArrowLeft from 'components/arrowLeft/arrowLeft'
import UserCard from "components/userCard/userCard";
import SingOut from "components/singOut/SignOut";
// auth
import { signInWithGoogle} from 'firebaseReact/firebase'
// redux
import { useSelector } from "react-redux";

const Login = () => {
  const user = useSelector((state:any) => state);
  const {userData: {userProfile:[{name, email, photoURL}]}} = user
    return(
        <React.Fragment>
            <ArrowLeft/>
            {/* partial fix */}
            <br></br>
            <UserCard email={email} name={name} photo={photoURL}/>
            <SingOut/>
        </React.Fragment>
    )
}

export default Login;