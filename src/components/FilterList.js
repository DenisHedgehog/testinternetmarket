import React from 'react'
import './css/filterlist.css'
import products from "../products"

export default class FilterList extends React.Component {
    state = {
        activeFilters: []
    }

    render() {
        const filtered = this.getAllTags(products)
        // // console.log(filtered)
        // this.state.activeFilters.forEach(tag => {
        //     console.log("filtered filter")
        //     filtered.filter(filter => filter.tags.)
        //     console.log(tag)
        // })
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
        console.log(this.state.activeFilters.indexOf(filter))
        if (this.state.activeFilters.indexOf(filter) === -1) {
            console.log("not exist")
            this.state.activeFilters.push(filter)
            console.log(this.state.activeFilters)
        } else {
            console.log("exist")
            if (this.state.activeFilters.indexOf(filter) === 0) {
                this.state.activeFilters.shift()
            } else {
                this.state.activeFilters.splice(this.state.activeFilters.indexOf(filter), this.state.activeFilters.indexOf(filter))
            }
            console.log(this.state.activeFilters)
        }
        this.props.filtersCallback(this.state.activeFilters)
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