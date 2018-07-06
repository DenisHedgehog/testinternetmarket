import React from 'react'
import './css/filterlist.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {selectTag} from "../actions/actions";

class Filter extends React.Component {
    constructor(props) {
        super(props)
        this.filterRef = React.createRef()
    }

    render() {
        const filter = this.props.filter
        return (
            <div key={filter} ref={this.filterRef} className="btn btn-outline-info tag" onClick={() => this.props.selectTag(this.filterRef)}>
                {filter}
            </div>
        )
    }

}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectTag: selectTag}, dispatch)
}

export default connect(null, matchDispatchToProps)(Filter)