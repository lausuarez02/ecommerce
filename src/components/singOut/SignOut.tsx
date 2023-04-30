import React from "react"
//helpers
import { UserSingOutGoogle } from "firebaseReact/firebase";
import { AuthState } from "helpers/authState/authState";

const SingOut = () => {
    AuthState()
    return(
        <div>
            <button className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => UserSingOutGoogle()}>Sing Out</button>
        </div>
    )
}

export default SingOut;