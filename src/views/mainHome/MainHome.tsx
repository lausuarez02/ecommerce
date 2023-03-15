//components
import CardTypeProduct from 'components/typeOfProduct/cardTypeProduct'
import {Header} from 'components/header'
import { useCallback, useEffect, useMemo, useState } from 'react'
import {Link} from 'react-router-dom'
//routes 
import routes from 'routes/routes'
// helpers

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

function MainHome (){
    const [newdata, setNewData] = useState()

    const fetchData = async () => {
      try{
        let response = await fetch('http://127.0.0.1:4005/data')
        let json = await response.json();
        setNewData(json);
      }catch(e){
        console.log(e)
      }}

      useEffect(() => {
        fetchData()
      },[])

    // console.log(newdata, "testing newData")
    // console.log(data, "test fetch")
  return (
    <div className="home">
      <div className="home__container ">
      <Header search="false"/>
        </div>
        <div>
            <CardTypeProduct
            newData={newdata}
            />
        </div>
      </div>
  )
}

export default MainHome