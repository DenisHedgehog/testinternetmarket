import React from 'react'
import './css/filterlist.css'
import {connect} from 'react-redux'
import Filter from "./Filter";

class FilterList extends React.Component {

    render() {
        const filtered = this.getAllTags(this.props.products)
        const filters = filtered.map(filter =>
            <Filter key={filter} filter={filter} />
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

    getAllTags = (products) => {
        const tagsArray = products.map(product => product.tags)
        const filters = []
        tagsArray.map(tags =>
            tags.map(tag => filters.push(tag))
        )
        return [...new Set(filters)]
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(FilterList)