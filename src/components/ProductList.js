import React from 'react'
import 'bootstrap'
import Product from "./Product"
import './css/productlist.css'

export default class ProductList extends React.Component {
    state = {
        openProductId: null
    }

    render() {
        let products
        if (this.props.filters) {
            // products = this.props.products
            this.props.filters.forEach(filter => products = this.props.products.filter(product => product.tags.indexOf(filter) !== -1))
            products = products.map(product =>
                <Product product={product}
                         isOpen={this.state.openProductId === product.id}
                         onButtonClick={this.handleClick.bind(this, product.id)}/>
            )
            console.log(`filters ${this.props.filters}`)
            console.log(products)
        } else {
            products = this.props.products.map(product =>
                <Product product={product}
                         isOpen={this.state.openProductId === product.id}
                         onButtonClick={this.handleClick.bind(this, product.id)}/>
            )
            console.log("without filters")
            console.log(products)
        }

        return (
            <div className="card-columns mx-auto">
                {products}
            </div>
        )
    }

    handleClick = openProductId => this.setState({
        openProductId: this.state.openProductId === openProductId ? null : openProductId
    })
}