import React from 'react'
import './css/filterlist.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {selectTag} from "../actions/actions";

class FilterList extends React.Component {

    render() {
        const filtered = this.getAllTags(this.props.products)
        const filters = filtered.map(filter =>
            <div key={filter} className="btn btn-outline-info tag" onClick={() => this.props.selectTag(filter)}>
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

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectTag: selectTag}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(FilterList)