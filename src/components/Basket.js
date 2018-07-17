import React from 'react'
import './css/basket.css'
import basketIcon from '../img/basket.png'
import {connect} from "react-redux"
import BasketItem from "./BasketItem";

class Basket extends React.Component {

    render() {
        let basket = this.props.productsInBasket
        let purchases = basket.map(purchase => <BasketItem key={purchase.id} product={purchase.product} count={purchase.count} />)
        return (
            <div>
                <button type="button" className="btn btn-primary basket" ref={this.ref} onClick={console.log(this.ref)}
                        data-toggle="modal" data-target="#myModal">
                    <div className="purchases-count">{this.props.productsInBasket ? this.props.productsInBasket.length : 0}</div>
                    <img src={basketIcon} alt="Корзина" className="basket-icon"/>
                </button>
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">Корзина</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body">
                                {purchases}
                            </div>

                            <div className="modal-footer">
                                <div className="sum">
                                    Итого: {this.props.summaryBasket ? this.props.summaryBasket : 0} Руб.
                                </div>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Купить</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        productsInBasket: state.productsInBasket
    }
}

export default connect(mapStateToProps)(Basket)