import React from 'react'
import 'bootstrap'
import './css/products.css'
import Filter from './Filter'
import {addProductToBasket} from "../actions/actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Product extends React.Component {

    render() {
        const {product, onButtonClick} = this.props
        const tags = product.tags.map(tag =>
            <Filter key={tag} filter={tag}/>
        )
        return (
            <div key={product.id} className="card product" onClick={onButtonClick}>

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
                            <div className="col-6 price">
                                {product.price}
                            </div>
                            <div className="col-6 btn btn-primary" onClick={() => this.props.addProductToBasket(product, 1)}>
                                В корзину
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({addProductToBasket: addProductToBasket}, dispatch)
}

export default connect(null, matchDispatchToProps) (Product)