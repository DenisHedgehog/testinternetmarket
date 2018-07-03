import React from 'react'
import 'bootstrap'
import Product from "./Product"
import './css/productlist.css'

export default class ProductList extends React.Component {
    state = {
        openProductId: null
    }

    render() {
        const productElements = this.props.products.map(product =>
                <Product product={product}
                         isOpen={this.state.openProductId === product.id}
                         onButtonClick={this.handleClick.bind(this, product.id)}/>
        );
        return (
                <div className="card-columns mx-auto">
                    {productElements}
                </div>
        )
    }

    handleClick = openProductId => this.setState({
        openProductId: this.state.openProductId === openProductId ? null : openProductId
    })
}