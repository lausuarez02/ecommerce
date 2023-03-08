import { useDispatch } from 'react-redux';
import {Link } from 'react-router-dom'
import {productData} from 'redux/reducers/productReducer';
//components
import MainSearchBar from './mainSearchBar'
import styles from "./cardTypeProduct";


function CardTypeProduct({products}:any) {
  const dispatch = useDispatch()

  return (
<div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <MainSearchBar/>
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className=""/>
        </div>
      </article>
    </div>
  </div>
</div>
  )
}

export default CardTypeProduct;
