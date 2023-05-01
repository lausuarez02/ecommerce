import React, {useState, useEffect} from 'react'
//components
import Products from 'components/product/product'
import CartIcon from 'components/cart/cartIcon/cartIcon';
import ArrowLeft from 'components/arrowLeft/arrowLeft'

const Product = () => {
    return(
        <div data-testid="product">
                 <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
              <ArrowLeft/>
              </div>
              {/* Flyout menus */}
              <div className="ml-auto flex items-center">
                <div className="ml-4 flow-root lg:ml-6">
                  <div >
                  <CartIcon/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>      
            <Products data-testid="products"/>
        </div>
    )
}

export default Product;