import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';

const CartIcon = () => {
    const navigate = useNavigate()
    const cart = useSelector((state:any) => (console.log(state, "test"), state.cart))
    console.log("new cart",cart)
    const getTotalQuantity = () => {
        let total = 0
        if(cart.cart.length >= 0){
          cart.cart.forEach((item:any) => {
            console.log(item.quantity, "item quantity")
            total += item.quantity
          })
        }else{
          total = 0
        }
        return total
      }
    return(
                  <div className="group -m-2 flex items-center p-2" onClick={() => navigate('/cart')}>
                  <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    >
                    </ShoppingBagIcon>
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{getTotalQuantity() || 0}</span>
      </div>
    )
}

export default CartIcon;