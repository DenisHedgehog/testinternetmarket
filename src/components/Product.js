import React from 'react'
import 'bootstrap'
import './css/product.css'

export default class Product extends React.Component {
    state = {
        show: true
    }
    render() {
        const {product, onButtonClick} = this.props
        const tags = product.tags.map(tag =>
            <div className="btn btn-outline-info product-tags">{tag}</div>
        )
        return (
            <div className="card product" onClick={onButtonClick}>
                <div className="card-body">

                    <img src={product.picture} alt={product.name} className="card-img-top product-img collapsed"
                         data-toggle="collapse" data-target={"#" + product.id} aria-expanded="false"
                         aria-controls={product.id}/>

                    <p className="card-title">{product.name}</p>

                    {tags}

                    <p id={product.id} className="card-text product-description collapse" aria-labelledby="product"
                         data-parent="#accordion">
                        {product.about}
                    </p>

                </div>

            </div>
        )
    }
}