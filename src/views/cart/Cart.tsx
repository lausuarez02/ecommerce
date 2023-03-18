import Total from 'components/total'
import { useSelector } from 'react-redux'
//components
import CartItem from 'components/cart/cartItem'
import CartEmpty from 'components/cart/cartEmpty'

function Cart() {

  const cart = useSelector((state:any) => state.cart)
  console.log(cart, "Cart view")

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