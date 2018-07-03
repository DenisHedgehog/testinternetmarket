import React from 'react'
import 'bootstrap'
import './css/product.css'

class Product extends React.Component {
    render() {
        const {product} = this.props
        const tags = product.tags.map(tag =>
            <div className="col-auto btn btn-outline-info product-tags">{tag}</div>
        )
        return (
            <div className="row card product">
                <div className="col-12">
                    <img src={product.picture} alt={product.name} className="card-img-top product-img"/>
                </div>
                <div className="col-12">
                    {tags}
                </div>
                <div className="col-12">

                </div>

            </div>
        )
    }
}

export default Product