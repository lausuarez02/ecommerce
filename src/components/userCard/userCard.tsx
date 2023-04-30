import React from "react";

interface userData {
  email?: string,
  name?: string,
  photo?: string
}

const UserCard = ({email='notMail', name='notName', photo}:userData) => {
    return(
<div className="relative z-10" role="dialog" aria-modal="true">
  <div ></div>
  <div >
    <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
      <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
          <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
            <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-full ring-2 ring-white bg-gray-100 sm:col-span-4 lg:col-span-5">
              <img src={photo} alt="Two each of gray, white, and black shirts arranged on table." className="object-cover object-center"/>
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{name}</h2>
              <section aria-labelledby="information-heading" className="mt-2">
                <p className="text-2xl text-gray-900">{email}</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

)
}

export default UserCard;