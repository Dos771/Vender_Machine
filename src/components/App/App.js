import React from 'react'
import ProductList from '../ProductList'
import Cart from '../Cart'

import './App.sass'

const App = () => {

  return (
    <div className="container">
      <ProductList />
      <Cart />
    </div>
  )

}


export default App