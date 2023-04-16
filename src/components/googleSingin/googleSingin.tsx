import GoogleButton from 'react-google-button'
import React from 'react'

const GoogleSignInButton = ({onClick}:any) => {
    return(
        <GoogleButton onClick={() => onClick()}/>
    )
}

export default GoogleSignInButton;