import React from 'react'
import './css/App.css'
import ProductList from "./components/ProductList"
import Header from './components/Header'
import FilterList from './components/FilterList'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

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
                <ProductList filter = {this.state.filter}/>
            </div>
        )
    }
}

export default App
