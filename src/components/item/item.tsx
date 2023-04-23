import { useDispatch } from 'react-redux';
import {addToCart} from 'redux/reducers/cartReducer';
import {Link, useNavigate} from 'react-router-dom'
import {productData} from 'redux/reducers/productReducer';
import { useEffect, useState } from 'react';
//components
import LoadingSpinner from 'components/loading/Loading';
import { SeparteStringWithPlus } from 'helpers/productHelper/productHelper';

function Item({newData=false}:any) {

  console.log(newData, 'testing newData value')
 
  const dispatch = useDispatch()

  if(newData === false){
    return <LoadingSpinner/>
  }
  return (
    <div className="bg-white">
  <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
    <div>
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {newData != undefined ? (newData[0]['products'] as unknown as any[]).map((product:any) => {
            return(
                <div key={product.id}>
                  <div className="group relative" >
                    <Link to={{
    pathname: "/product/" + SeparteStringWithPlus(product.title),
    search: "?",
  }} /*state={{data: product}}*/ onClick={(e) => dispatch(productData({product}))}>
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80 group relative">
          <img src={product.image} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
            
                <span aria-hidden="true" className="absolute inset-0"></span>
                Basic Tee
            
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
        }) :
        <div>no data</div>
}
</div>
</div>
  </div>
</div>
  )
}

export default Item
