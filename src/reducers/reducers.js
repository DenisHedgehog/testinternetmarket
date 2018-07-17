import {combineReducers} from 'redux'
import ProductReducer from './products'
import ActiveTag from './activeTag'
import SearchByName from './searchByName'
import ProductsInBasket from './productsInBasket'

const allReducers = combineReducers({
    products: ProductReducer,
    selectTag: ActiveTag,
    searchByName: SearchByName,
    productsInBasket: ProductsInBasket
})

export default allReducers