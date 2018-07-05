import React from 'react'
import 'bootstrap'
import Product from "./Product"
import './css/products.css'

export default class ProductList extends React.Component {
    state = {
        openProductId: null
    }

    render() {
        let products
        this.props.filter ?
            products = this.props.products.filter(product => product.tags.indexOf(this.props.filter) !== -1)
            : products = this.props.products
        products = products.map(product =>
            <Product product={product}
                     isOpen={this.state.openProductId === product.id}
                     onButtonClick={this.handleClick.bind(this, product.id)}/>
        )

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