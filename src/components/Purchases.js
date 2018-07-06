import React from 'react'
import './css/purchases.css'

class Purchases extends React.Component {
    render() {
        return (
            <div className="purchases">
                Корзина {this.props.purchaseCount ? `(${this.props.purchaseCount})` : ''}
            </div>
        )
    }
}

export default Purchases