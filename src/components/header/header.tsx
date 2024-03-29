//utils
import { signInWithGoogle, handleRedirectResult, auth} from 'firebaseReact/firebase'
import { useEffect, useState, useMemo } from 'react'
import { useSelector } from 'react-redux';
//components
import CartIcon from 'components/cart/cartIcon/cartIcon';
import SearchIcon from 'components/Search/searchIcon';
import { Link } from 'react-router-dom';
import UserIconHeader from 'components/userIconHeader/userIconHeader';
//helpers
import { AuthState } from 'helpers/authState/authState';

export const Header = ({search = "true"}:any) => {
  const dataSearch = useSelector((state:any) => state)
  const authState = useSelector((state:any) => state)

  AuthState()
  const {userData: {isAuth, userProfile}} = authState

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      {search === "true" ? 
      <header className="relative bg-white">

      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center">

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <Link to='/'>
                <span className="sr-only">Companies</span>
                Companies
                {/* <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                /> */}
              </Link>
            </div>

            {/* Flyout menus */}

            <div className="ml-auto flex items-center">
              {/* Search */}
              <SearchIcon search={dataSearch}/>
              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <div >
                  <CartIcon/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>: 
    <header className="relative bg-white">

    <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200">
        <div className="flex h-16 items-center">

          {/* Logo */}
          <div className="ml-4 flex lg:ml-0">
            <a href="#">
              <span className="sr-only">Companies</span>
              Companies
              {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              /> */}
            </a>
          </div>

          {/* Flyout menus */}

          <div className="ml-auto flex items-center">
            {/* Search */}
            {/* Cart */}
            <div className="ml-4 flow-root lg:ml-6">
              <div >
                <CartIcon/>
              </div>
            </div>
            <div className="ml-4 flow-root lg:ml-6">
             {isAuth ? (
              <Link to='/user'>
               <UserIconHeader src={userProfile[0].photoURL}/>
             </Link>
             ) 
             : 
             (       
              <Link to='/authLogin'>
                Sign In
              </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header> }
      
    </div>
  )
}