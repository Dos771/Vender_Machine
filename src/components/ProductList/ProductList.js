import React from 'react'
import ProductListItem from '../ProductListItem'

import './ProductList.sass'

const ProductList = () => {

  return (
    <div>
      <div className="col-lg-12 pb-2 mt-4">
        <h4>Список товаров</h4>
      </div>
      <ProductListItem />
    </div>
  )

}

export default ProductList