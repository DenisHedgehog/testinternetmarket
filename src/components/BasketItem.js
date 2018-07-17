import React from 'react'
import './css/basket.css'

class BasketItem extends React.Component {
    render() {
        let product = this.props.product
        let count = this.props.count
        console.log(`name: ${product.name}, count: ${count}`)
        return (
            <div>
                name: {product.name}, count: {count}
            </div>
        )
    }
}

export default BasketItem