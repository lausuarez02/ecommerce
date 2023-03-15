import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
//components
import CartIcon from 'components/cart/cartIcon';
import SearchIcon from 'components/Search/searchIcon';

export const Header = ({search = "true"}:any) => {

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
              <SearchIcon/>
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
          </div>
        </div>
      </div>
    </nav>
  </header> }
      
    </div>
  )
}