import {combineReducers} from 'redux'
import ProductReducer from './products'
import ActiveTag from './activeTag'

const allReducers = combineReducers({
    products: ProductReducer,
    selectTag: ActiveTag

})

export default allReducers