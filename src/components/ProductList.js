import React from 'react'
import 'bootstrap'
import Product from "./Product";

export default function ProductList({ products }) {
    const productElements = products.map(product =>
        <div className="col-3"><Product product = {product}/></div>
    );
    return (
        <div className="row">
            {productElements}
        </div>
    )
}