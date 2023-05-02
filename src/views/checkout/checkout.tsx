//utils
import React, {useEffect,useState} from "react"
//components
import ArrowLeft from 'components/arrowLeft/arrowLeft'
import UserCard from "components/userCard/userCard";
import SingOut from "components/singOut/SignOut";
// redux
import { useSelector } from "react-redux";

const Checkout = () => {
  const user = useSelector((state:any) => state);
  const {userData: {userProfile:[{name, email, photoURL}]}} = user
    return(
        <React.Fragment>
            <ArrowLeft/>
            {/* partial fix */}
            <br></br>
            <div style={{position: 'absolute',left: '50%',top: '20%', transform: 'translate(-50%, -50%)', maxWidth:"50%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", borderRadius:"50px"}}>
            <UserCard email={email} name={name} photo={photoURL}/>
            <div style={{marginLeft:'50px', paddingBottom:"20px"}}>
            <SingOut/>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Checkout;