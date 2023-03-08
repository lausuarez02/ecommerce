//components
import Item from 'components/item'
import {Header} from 'components/header'
//helpers 
import useFetch from 'helpers/fetchHelper'
import routes from 'routes/routes'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
// process.env

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
  // More products...
]


function Home (){
  const [data, setData] = useState()

  // Defining the navigate function to be able to navigate
  const navigate = useNavigate()

  //getting the data from the search the user made
  const cart = useSelector((state:any) => (console.log(state, "test"), state.search.dataSearch))
  
  // Getting the last search from the array made when the user make a search
  const lastSearch = cart[cart.length -1]
  console.log(lastSearch, "testproduct")
  
  //
  const key = process.env.REACT_APP_API_KEY
  console.log(key)

  useEffect(() => {
    try{
      const response:any = fetch(routes.products.mainRoute, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers:{
          "X-RapidAPI-Key": `${key}`,
          "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
          'Content-Type': 'application/json'
        }})
        setData(response)
    }catch(e){
      console.log(e)
    }
  }, [])


  console.log(data)
// if(error)return <div>no data</div>
// if(!data)return <div>Loading</div>
// console.log(data)
  return (
    lastSearch === null ?
    <div>poronga</div> :
    <div className="home">
      <div className="home__container ">
      <Header/>
        <div className="home__row">
          <Item
          products={products}
          />
        </div>
      </div>
    </div>
  )
}

export default Home