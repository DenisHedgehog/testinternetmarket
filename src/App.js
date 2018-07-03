import React, { Component } from 'react'
import logo from './logo.svg'
import './css/App.css'
import ProductList from "./components/ProductList"
import products from './products'

class App extends Component {
  render() {
    return (
      <div className="App">
          <ProductList products = {products} />
      </div>
    )
  }
}

export default App
