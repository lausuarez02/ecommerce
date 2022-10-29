import {useSelector} from 'react-redux'

function Total() {

  const cart = useSelector((state: any) => state.cart)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach((item:any) => {
      totalQuantity += item.quantity
      totalPrice += parseFloat(item.price) * item.quantity
      console.log(item)
    })

    return {totalPrice, totalQuantity}
  }
 
  return (
    <div className="total">
      <h2>ORDER SUMMARY</h2>
      <div>
        <p className="total__p">
          total ({getTotal().totalQuantity} items) 
          : <strong>${getTotal().totalPrice}</strong>
        </p>
      </div>
    </div>
  )
}

export default Total