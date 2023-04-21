import React from "react"
//helpers
import { UserSingOutGoogle } from "firebaseReact/firebase";
import { AuthState } from "helpers/authState/authState";

const SingOut = () => {
    AuthState()
    return(
        <div>
            <button onClick={() => UserSingOutGoogle()}>Sing Out</button>
        </div>
    )
}

export default SingOut;