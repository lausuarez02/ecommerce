import React from "react";

interface imgSrc {
    src?: string
}

const UserIconHeader = ({src}:any) => {
    return(
        <div className="flex -space-x-2 overflow-hidden">
        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={src} alt=""/>
    </div>
    )
}

export default UserIconHeader;