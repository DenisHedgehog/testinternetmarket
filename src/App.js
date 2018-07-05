import React from 'react'
import './css/App.css'
import ProductList from "./components/ProductList"
import Header from './components/Header'
import products from './products'
import FilterList from "./components/FilterList"

class App extends React.Component {
    state = {
        filters: null
    }

    filtersCallback = (callback) => {
        console.log("from callback")
        console.log(callback)
        this.setState({filters: callback})
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <FilterList filtersCallback = {this.filtersCallback}/>
                <ProductList products = {products} filter = {this.state.filters}/>
            </div>
        )
    }
}

export default App
