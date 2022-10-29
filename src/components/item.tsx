import { useDispatch } from 'react-redux';
import {addToCart} from 'redux/reducers/cartReducer';
import {Link} from 'react-router-dom'

function Item({products}:any) {
    const {id, image, title, price} = products
    const mapObject = products.map((item: any) => {return(item.id, item.image, item.title, item.price)} )
  const dispatch = useDispatch()

  return (
    // <div className="item">
    //   <div className="item__info">
    //     <p className="item__title">{title}</p>
    //     <p className="item__price">
    //       <small>$</small>
    //       <strong>{price}</strong>
    //     </p>
    //   </div>
    //   <img
    //     src={image}
    //     alt="item"
    //   />
    //   <button 
    //     onClick={() => 
    //       dispatch(addToCart({
    //         id, title, image, price
    //       }))
    //     }>Add to Cart
    //   </button>
    // </div>
    <div className="bg-white"> 
  <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
    <div>
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product:any) => {
            return(
                <div key={product.id}>
                  <div className="group relative" >
                    <Link to={"/product/" + product.id}>
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80 group relative">
          <img src={product.image} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Basic Tee
              </a>
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
        </Link>
        </div>
                <button 
                onClick={() => 
          dispatch(addToCart(
           { product}
           ))} className="mt-1 text-sm text-gray-500">ted</button>
                </div>
        )
        })}
</div>
</div>
  </div>
</div>
  )
}

export default Item
