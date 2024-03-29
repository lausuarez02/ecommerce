import Total from 'components/total/total'
import { useSelector } from 'react-redux'
//components
import CartItem from 'components/cart/cartItem/cartItem'
import CartEmpty from 'components/cart/cartEmpty/cartEmpty'

function Cart() {

  const cart = useSelector((state:any) => state.cart)
  return (
    <div className="cart">
        <div>
          {cart.cart.length >= 1 ?
            <CartItem
            cart={cart.cart}
            />
           : <CartEmpty/>}
        </div>
      </div>
  )
}

export default Cart