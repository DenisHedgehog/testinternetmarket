import React from 'react'
import './css/search.css'
import {searchByName} from '../actions/actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.searchRef = React.createRef()
    }

    render() {
        return (
            <input key="search" ref={this.searchRef} type="text" className="form-control mx-auto" placeholder="Поиск по названию товара"
                   onChange={() => this.props.searchByName(this.searchRef)}/>
        )
    }

}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({searchByName: searchByName}, dispatch)
}

export default connect(null, matchDispatchToProps)(Search)