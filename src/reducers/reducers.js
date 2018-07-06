import {combineReducers} from 'redux'
import ProductReducer from './products'
import ActiveTag from './activeTag'
import SearchByName from './searchByName'

const allReducers = combineReducers({
    products: ProductReducer,
    selectTag: ActiveTag,
    searchByName: SearchByName
})

export default allReducers