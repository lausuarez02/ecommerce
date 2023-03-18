import { useDispatch } from 'react-redux';
import {useState, useEffect} from 'react';
import {Link } from 'react-router-dom'
import {productData} from 'redux/reducers/productReducer';
//components
import MainSearchBar from './mainSearchBar'
import TitleMainProduct from './titleMainProduct'
import LineSeparetor from 'components/lineSeparetor/lineSeparetor'


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
function CardTypeProduct({newData}:any) {

  // const [newdata, setNewData] = useState()

  // const fetchData = async () => {
  //   try{
  //     let response = await fetch('http://127.0.0.1:4005/data')
  //     let json = await response.json();
  //     setNewData(json);
  //   }catch(e){
  //     console.log(e)
  //   }}

  //   useEffect(() => {
  //     fetchData()
  //   },[])

  return (
<div className="bg-white py-24 sm:py-20">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
  <TitleMainProduct title='Search'/>
    <MainSearchBar/>
    <LineSeparetor/>

    <div className="bg-white py-24 sm:py-32">
    <TitleMainProduct title='Type of Products'/>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {newData != undefined ? (newData['products'] as unknown as any[] ).map((item:any) => {
            return(
            <div key={item.id} className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <Link to={item.color}>
             <div className="p-8 sm:p-10 lg:flex-auto">
             <h3 className="text-2xl font-bold tracking-tight text-gray-900">{item.title}</h3>
             <p className="mt-6 text-base leading-7 text-gray-600">{item.imageAlt}</p>
           </div>
           <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                 <img src={item.image}
                 className="h-full w-full object-cover rounded-3xl object-center lg:h-full lg:w-full"
                 style={{maxWidth: "400px"}}
                 />
           </div>
           </Link>
           </div>
        )}) : 
        <div>Loading</div>}
  </div>
</div>
  </div>
</div>
  )
}

export default CardTypeProduct;
