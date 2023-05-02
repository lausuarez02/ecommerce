//utils
import React, {useEffect,useState} from "react"
//components
import ArrowLeft from 'components/arrowLeft/arrowLeft'
import DescriptionList from "components/descriptionList/descriptionList";
// redux
import { useSelector } from "react-redux";

const Checkout = () => {
  const user = useSelector((state:any) => state);
  const {userData: {userProfile:[{name, email, photoURL}]}} = user
    return(
        <React.Fragment >
            <ArrowLeft/>
            <div className="bg-white py-24 sm:py-20">
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* partial fix */}
            <DescriptionList/>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Checkout;