import { useDispatch } from 'react-redux';
import {addToCart} from 'redux/reducers/cartReducer';
import {Link, useNavigate} from 'react-router-dom'
import {productData} from 'redux/reducers/productReducer';
import { useEffect, useState } from 'react';
//components
const products = [
  {
    id: 1,
    title: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '90.00',
    quantity: 1,
    image: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    title: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '32.00',
    quantity: 1,
    image: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 3,
    title: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '32.00',
    quantity: 1,
    image: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 4,
    title: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '32.00',
    quantity: 1,
    image: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  }
  // More products...
]

function Item({newData}:any) {
  const [productsData, serProductsData] = useState()

  // useEffect(()=> {
  //   serProductsData(newData['products'])
  // },[])

  useEffect(() => {

  }, [])
  console.log(newData, "testing newData")

  // console.log(productsData, 'testing produc datas')
    // const {id, image, title, price} = newData
    // const mapObject = newData.map((item: any) => {return(item.id, item.image, item.title, item.price)} )
  const dispatch = useDispatch()
  // const navigate = useNavigate();

  // const destructuringLink = (url:string) => {
  //   let newString = '1';
  //   for(let i = 0; i < url.length; i++){
  //     newString += url[i] 
  //   }
  //   return newString
  // }

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
        {newData['products'].map((product:any) => {
            return(
                <div key={product.id}>
                  <div className="group relative" >
                    <Link to={{
    pathname: "/product/" + product.title,
    search: "?",
  }} /*state={{data: product}}*/ onClick={(e) => dispatch(productData({product}))}>
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
                {/* <button 
                onClick={() => 
          dispatch(addToCart(
           { product}
           ))} className="mt-1 text-sm text-gray-500">ted</button> */}
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
