import React from 'react'
import './css/filterlist.css'
import products from "../products"

export default class FilterList extends React.Component {
    state = {
        activeFilter: null
    }

    render() {
        const filtered = this.getAllTags(products)
        const filters = filtered.map(filter =>
            <div className="btn btn-outline-info tag" onClick={() => this.clickByTag(filter)}>
                {filter}
            </div>
        )
        return (
            <div>
                <div className="filters-title">
                    Теги
                </div>
                {filters}
            </div>
        )
    }

    clickByTag(filter) {
        this.state.activeFilter === filter ? this.setState({activeFilter: null}) : this.setState({activeFilter: filter})
        this.props.filtersCallback(this.state.activeFilter)
    }

    getAllTags = (products) => {
        const tagsArray = products.map(product => product.tags)
        const filters = []
        tagsArray.map(tags =>
            tags.map(tag => filters.push(tag))
        )
        return [...new Set(filters)]
    }
}