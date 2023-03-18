import React, {useState, useEffect} from 'react'
//components
import Products from 'components/product'

const Product = () => {
    return(
        <div data-testid="product">
            <Products data-testid="products"/>
        </div>
    )
}

export default Product;