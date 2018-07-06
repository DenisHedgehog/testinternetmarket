import React from 'react'
import 'bootstrap'
import './css/products.css'
import Product from "./Product"
import {connect} from 'react-redux'

class ProductList extends React.Component {

    render() {
        let products
        if (!this.props.selectTag) {
            products = this.props.products
        } else {
            console.log(`tag is ${this.props.selectTag.current.innerText}`)
            products = this.props.products.filter(product => product.tags.indexOf(this.props.selectTag.current.innerText) !== -1)
        }
        products = products.map(product =>
            <Product key={product.id} product={product}/>
        )

        return (
            <div className="card-columns mx-auto">
                {products}
            </div>
        )
    }

}

function mapStateToProps(state) {
    console.log(state.selectTag)
    return {
        products: state.products,
        selectTag: state.selectTag
    }
}

export default connect(mapStateToProps)(ProductList)