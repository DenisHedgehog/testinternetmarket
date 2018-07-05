import React from 'react'
import 'bootstrap'
import './css/products.css'

export default class Product extends React.Component {
    state = {
        count: 1
    }

    decreaseCount = () => {
        if (this.state.count > 0) {
            this.setState({count: this.state.count - 1})
        }
    }

    increaseCount = () => {
            this.setState({count: this.state.count + 1})
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

                    <div className="container">
                        <div className="row purchase">
                            <div className="col-12 mx-auto count">Количество:</div>
                            <div className="col-2"></div>
                            <div className="col-2 btn btn-outline-info count-button" onClick={this.decreaseCount}>-</div>
                            <div className="col-4 count">{this.state.count}</div>
                            <div className="col-2 btn btn-outline-info count-button" onClick={this.increaseCount}>+</div>
                            <div className="col-2"></div>
                            <div className="col-6 price">
                                {product.price}
                            </div>
                            <div className="col-6 btn btn-primary">
                                В корзину
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}