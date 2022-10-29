import { useState } from 'react'
//components
import CartBottom from 'components/cart/cartBottom'

const CartEmpty = () => {
  const BACK = '/'

    return(
        <div className="relative z-10">

        <div className="fixed inset-0 overflow-hidden">
          <div className="inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 flex">
                <div className="pointer-events-auto w-screen">
                  <div className="flex h-full flex-col bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
          <div className="flex items-start justify-between">
            <div className="text-lg font-medium text-gray-900">Shopping cart</div>
          </div>

          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                  <li className="flex py-6">
        
          

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h1>
                            <a href="test">Cart is empty</a>
                          </h1>
                        </div>
                        <p className="mt-1 text-sm text-gray-500"></p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty </p>

                        <div className="flex">
                        </div>
                      </div>
                    </div>
                  </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <CartBottom 
                      button="Go Back"
                      buttonFuncionality={BACK}
                      />
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or 
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>
      </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CartEmpty;