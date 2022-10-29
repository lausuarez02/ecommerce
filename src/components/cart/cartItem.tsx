import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { incrementQuantity, decrementQuantity, removeItem} from 'redux/reducers/cartReducer'
import { useDispatch } from 'react-redux'
import CartBottom from 'components/cart/cartBottom'

interface Cart {
  cart:{
    id: number,
    image: string,
    title: string,
    price: string
  }
}

function CartItem({cart}:Cart) {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(true)

  return (
      <div className="relative z-10">

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
                            {(cart as unknown as any[]).map((item:any) => {
                              return(
                                <li key={item.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={item.image}
                                    alt={item.image}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href="test">{item.title}</a>
                                      </h3>
                                      <p className="ml-4">{item.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500"></p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty </p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                           onClick={() => dispatch(removeItem(item.id))}
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>

                      <CartBottom 
                      button="Checkout"
                      />
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
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
  )
}



  // return (
  //   <div className="cartItem">
  //     <div className="cartItem__info">
  //       <p className="cartItem__title">{title}</p>
  //       <p className="cartItem__price">
  //         <small>$</small>
  //         <strong>{price}</strong>
  //       </p>
  //       <div className='cartItem__incrDec'>
  //         <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
  //         <p>{quantity}</p>
  //         <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
  //       </div>
  //       <button
  //         className='cartItem__removeButton' 
  //         onClick={() => dispatch(removeItem(id))}>
  //           Remove
  //       </button>
  //     </div>
  //   </div>
  // )


export default CartItem