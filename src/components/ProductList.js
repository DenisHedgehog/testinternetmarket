import React from 'react'
import 'bootstrap'
import './css/products.css'
import Product from "./Product"
import {connect} from 'react-redux'

class ProductList extends React.Component {

    render() {
        let products = this.props.products
        // console.log(products)
        if (this.props.selectTag) {
            products = this.props.products.filter(product => product.tags.indexOf(this.props.selectTag.current.innerText) !== -1)

        }

        if (this.props.searchByName !== null) {
            products = products.filter(product => product.name.indexOf(this.props.searchByName.current.value) !== -1)
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
    return {
        products: state.products,
        selectTag: state.selectTag,
        searchByName: state.searchByName
    }
}

export default connect(mapStateToProps)(ProductList)