//components
import CardTypeProduct from 'components/typeOfProduct/cardTypeProduct'
import {Header} from 'components/header'

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
  return (
    <div className="home">
      <div className="home__container ">
      <Header search="false"/>
        </div>
        <p>
            <CardTypeProduct
            products={products}
            />
        </p>
      </div>
  )
}

export default MainHome