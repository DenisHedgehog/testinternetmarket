import React from 'react'
import './css/App.css'
import ProductList from './components/ProductList'
import Header from './components/Header'
import FilterList from './components/FilterList'
import Search from './components/Search'
import Purchases from './components/Purchases'

class App extends React.Component {
    state = {
        filter: null
    }

    filtersCallback = (callback) => {
        console.log("from callback")
        console.log(callback)
        this.setState({filter: callback})
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <FilterList filtersCallback = {this.filtersCallback}/>
                <Search />
                <ProductList filter = {this.state.filter}/>
                <Purchases />
            </div>
        )
    }
}

export default App
